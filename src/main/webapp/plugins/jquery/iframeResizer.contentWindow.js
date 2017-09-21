/*
 * File: iframeResizer.contentWindow.js
 * Desc: Include this file in any page being loaded into an iframe
 *       to force the iframe to resize to the content size.
 * Requires: iframeResizer.js on host page.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Ian Caunce - ian@hallnet.co.uk
 */

;(function(window) {
	'use strict';

	var
		autoResize            = true,
		base                  = 10,
		bodyBackground        = '',
		bodyMargin            = 0,
		bodyMarginStr         = '',
		bodyPadding           = '',
		calculateWidth        = false,
		doubleEventList       = {'resize':1,'click':1},
		eventCancelTimer      = 128,
		firstRun              = true,
		height                = 1,
		heightCalcModeDefault = 'bodyOffset',
		heightCalcMode        = heightCalcModeDefault,
		initLock              = true,
		initMsg               = '',
		inPageLinks           = {},
		interval              = 32,
		logging               = false,
		msgID                 = '[iFrameSizer]',  //Must match host page msg ID
		msgIdLen              = msgID.length,
		myID                  = '',
		//publicMethods         = true,
		resetRequiredMethods  = {max:1,min:1,bodyScroll:1,documentElementScroll:1},
		resizeFrom            = 'child',
		targetOriginDefault   = '*',
		target                = window.parent,
		tolerance             = 0,
		triggerLocked         = false,
		triggerLockedTimer    = null,
		width                 = 1,
		widthCalcModeDefault  = 'max',
		widthCalcMode         = widthCalcModeDefault,
		messageCallback       = function(){warn('MessageCallback function not defined');};


	function addEventListener(el,evt,func){
		if ('addEventListener' in window){
			el.addEventListener(evt,func, false);
		} else if ('attachEvent' in window){ //IE
			el.attachEvent('on'+evt,func);
		}
	}

	function formatLogMsg(msg){
		return msgID + '[' + myID + ']' + ' ' + msg;
	}

	function log(msg){
		if (logging && ('object' === typeof window.console)){
			console.log(formatLogMsg(msg));
		}
	}

	function warn(msg){
		if ('object' === typeof window.console){
			console.warn(formatLogMsg(msg));
		}
	}


	function init(){
		readDataFromParent();
		log('Initialising iFrame ('+location.href+')');
		readDataFromPage();
		setMargin();
		setBodyStyle('background',bodyBackground);
		setBodyStyle('padding',bodyPadding);
		injectClearFixIntoBodyElement();
		checkHeightMode();
		checkWidthMode();
		stopInfiniteResizingOfIFrame();
		setupPublicMethods();
		startEventListeners();
		inPageLinks = setupInPageLinks();
		sendSize('init','Init message from host page');
	}

	function readDataFromParent(){

		function strBool(str){
			return 'true' === str ? true : false;
		}

		var data = initMsg.substr(msgIdLen).split(':');

		myID               = data[0];
		bodyMargin         = (undefined !== data[1]) ? Number(data[1])   : bodyMargin; //For V1 compatibility
		calculateWidth     = (undefined !== data[2]) ? strBool(data[2])  : calculateWidth;
		logging            = (undefined !== data[3]) ? strBool(data[3])  : logging;
		interval           = (undefined !== data[4]) ? Number(data[4])   : interval;
		//publicMethods      = (undefined !== data[5]) ? strBool(data[5])  : publicMethods;
		autoResize         = (undefined !== data[6]) ? strBool(data[6])  : autoResize;
		bodyMarginStr      = data[7];
		heightCalcMode     = (undefined !== data[8]) ? data[8]           : heightCalcMode;
		bodyBackground     = data[9];
		bodyPadding        = data[10];
		tolerance          = (undefined !== data[11]) ? Number(data[11]) : tolerance;
		inPageLinks.enable = (undefined !== data[12]) ? strBool(data[12]): false;
		resizeFrom         = (undefined !== data[13]) ? data[13]         : resizeFrom;
		widthCalcMode      = (undefined !== data[14]) ? data[14]         : widthCalcMode;
	}

	function readDataFromPage(){
		function readData(){
			var data = window.iFrameResizer;

			log('Reading data from page: ' + JSON.stringify(data));

			messageCallback     = (undefined !== data.messageCallback ) ? data.messageCallback : messageCallback;
			targetOriginDefault = (undefined !== data.targetOrigin ) ? data.targetOrigin : targetOriginDefault;
			heightCalcMode      = (undefined !== data.heightCalculationMethod ) ? data.heightCalculationMethod : heightCalcMode;
			widthCalcMode       = (undefined !== data.widthCalculationMethod )  ? data.widthCalculationMethod  : widthCalcMode;
		}

		if(('iFrameResizer' in window) && (Object === window.iFrameResizer.constructor)) {
			readData();
		}
	}


	function chkCSS(attr,value){
		if (-1 !== value.indexOf('-')){
			warn('Negative CSS value ignored for '+attr);
			value='';
		}
		return value;
	}

	function setBodyStyle(attr,value){
		if ((undefined !== value) && ('' !== value) && ('null' !== value)){
			document.body.style[attr] = value;
			log('Body '+attr+' set to "'+value+'"');
		}
	}

	function setMargin(){
		//If called via V1 script, convert bodyMargin from int to str
		if (undefined === bodyMarginStr){
			bodyMarginStr = bodyMargin+'px';
		}
		chkCSS('margin',bodyMarginStr);
		setBodyStyle('margin',bodyMarginStr);
	}

	function stopInfiniteResizingOfIFrame(){
		document.documentElement.style.height = '';
		document.body.style.height = '';
		log('HTML & body height set to "auto"');
	}


	function addTriggerEvent(options){
		function addListener(eventName){
			function handleEvent(){
				sendSize(options.eventName,options.eventType);
			}

			addEventListener(window,eventName,handleEvent);
		}

		if(options.eventNames && Array.prototype.map){
			options.eventName = options.eventNames[0];
			options.eventNames.map(addListener);
		} else {
			addListener(options.eventName);
		}

		log('Added event listener: ' + options.eventType);
	}

	function initEventListeners(){
		addTriggerEvent({ eventType: 'Animation Start',           eventNames: ['animationstart','webkitAnimationStart'] });
		addTriggerEvent({ eventType: 'Animation Iteration',       eventNames: ['animationiteration','webkitAnimationIteration'] });
		addTriggerEvent({ eventType: 'Animation End',             eventNames: ['animationend','webkitAnimationEnd'] });
		addTriggerEvent({ eventType: 'Orientation Change',        eventName:  'orientationchange' });
		addTriggerEvent({ eventType: 'Input',                     eventName:  'input' });
		//addTriggerEvent({ eventType: 'Drag',                      eventName:  'drag' });
		addTriggerEvent({ eventType: 'Print',                     eventName:  ['afterprint', 'beforeprint'] });
		addTriggerEvent({ eventType: 'Transition End',            eventNames: ['transitionend','webkitTransitionEnd','MSTransitionEnd','oTransitionEnd','otransitionend'] });
		//addTriggerEvent({ eventType: 'Window Clicked',            eventName:  'click' });
		addTriggerEvent({ eventType: 'Mouse Up',                  eventName:  'mouseup' });
		if('child' === resizeFrom){
			addTriggerEvent({ eventType: 'IFrame Resized',        eventName:  'resize' });
		}
	}

	function checkCalcMode(calcMode,calcModeDefault,modes,type){
		if (calcModeDefault !== calcMode){
			if (!(calcMode in modes)){
				warn(calcMode + ' is not a valid option for '+type+'CalculationMethod.');
				calcMode=calcModeDefault;
			}
			log(type+' calculation method set to "'+calcMode+'"');
		}
	}

	function checkHeightMode(){
		checkCalcMode(heightCalcMode,heightCalcModeDefault,getHeight,'height');
	}

	function checkWidthMode(){
		checkCalcMode(widthCalcMode,widthCalcModeDefault,getWidth,'width');
	}

	function startEventListeners(){
		if ( true === autoResize ) {
			initEventListeners();
			setupMutationObserver();
		}
		else {
			log('Auto Resize disabled');
		}
	}

	function injectClearFixIntoBodyElement(){
		var clearFix = document.createElement('div');
		clearFix.style.clear   = 'both';
		clearFix.style.display = 'block'; //Guard against this having been globally redefined in CSS.
		document.body.appendChild(clearFix);
	}

	function setupInPageLinks(){

		function getPagePosition (){
			return {
				x: (window.pageXOffset !== undefined) ? window.pageXOffset : document.documentElement.scrollLeft,
				y: (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop
			};
		}

		function getElementPosition(el){
			var
				elPosition   = el.getBoundingClientRect(),
				pagePosition = getPagePosition();

			return {
				x: parseInt(elPosition.left,10) + parseInt(pagePosition.x,10),
				y: parseInt(elPosition.top,10)  + parseInt(pagePosition.y,10)
			};
		}

		function findTarget(location){
			function jumpToTarget(target){
				var jumpPosition = getElementPosition(target);

				log('Moving to in page link (#'+hash+') at x: '+jumpPosition.x+' y: '+jumpPosition.y);
				sendMsg(jumpPosition.y, jumpPosition.x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
			}

			var
				hash     = location.split('#')[1] || location, //Remove # if present
				hashData = decodeURIComponent(hash),
				target   = document.getElementById(hashData) || document.getElementsByName(hashData)[0];

			if (target){
				jumpToTarget(target);
			} else {
				log('In page link (#' + hash + ') not found in iFrame, so sending to parent');
				sendMsg(0,0,'inPageLink','#'+hash);
			}
		}

		function checkLocationHash(){
			if ('' !== location.hash && '#' !== location.hash){
				findTarget(location.href);
			}
		}

		function bindAnchors(){
			function setupLink(el){
				function linkClicked(e){
					e.preventDefault();

					/*jshint validthis:true */
					findTarget(this.getAttribute('href'));
				}

				if ('#' !== el.getAttribute('href')){
					addEventListener(el,'click',linkClicked);
				}
			}

			Array.prototype.forEach.call( document.querySelectorAll( 'a[href^="#"]' ), setupLink );
		}

		function bindLocationHash(){
			addEventListener(window,'hashchange',checkLocationHash);
		}

		function initCheck(){ //check if page loaded with location hash after init resize
			setTimeout(checkLocationHash,eventCancelTimer);
		}

		function enableInPageLinks(){
			if(Array.prototype.forEach && document.querySelectorAll){
				log('Setting up location.hash handlers');
				bindAnchors();
				bindLocationHash();
				initCheck();
			} else {
				warn('In page linking not fully supported in this browser! (See README.md for IE8 workaround)');
			}
		}

		if(inPageLinks.enable){
			enableInPageLinks();
		} else {
			log('In page linking not enabled');
		}

		return {
			findTarget:findTarget
		};
	}

	function setupPublicMethods(){
		//if (publicMethods) {
			log('Enable public methods');

			window.parentIFrame = {
				close: function closeF(){
					sendMsg(0,0,'close');
				},

				getId: function getIdF(){
					return myID;
				},

				moveToAnchor: function moveToAnchorF(hash){
					inPageLinks.findTarget(hash);
				},

				reset: function resetF(){
					resetIFrame('parentIFrame.reset');
				},

				scrollTo: function scrollToF(x,y){
					sendMsg(y,x,'scrollTo'); // X&Y reversed at sendMsg uses height/width
				},

				scrollToOffset: function scrollToF(x,y){
					sendMsg(y,x,'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
				},

				sendMessage: function sendMessageF(msg,targetOrigin){
					sendMsg(0,0,'message',JSON.stringify(msg),targetOrigin);
				},

				setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod){
					heightCalcMode = heightCalculationMethod;
					checkHeightMode();
				},

				setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod){
					widthCalcMode = widthCalculationMethod;
					checkWidthMode();
				},

				setTargetOrigin: function setTargetOriginF(targetOrigin){
					log('Set targetOrigin: '+targetOrigin);
					targetOriginDefault = targetOrigin;
				},

				size: function sizeF(customHeight, customWidth){
					var valString = ''+(customHeight?customHeight:'')+(customWidth?','+customWidth:'');
					lockTrigger();
					sendSize('size','parentIFrame.size('+valString+')', customHeight, customWidth);
				}
			};
		//}
	}

	function initInterval(){
		if ( 0 !== interval ){
			log('setInterval: '+interval+'ms');
			setInterval(function(){
				sendSize('interval','setInterval: '+interval);
			},Math.abs(interval));
		}
	}

	function isNotSet(item){
		return undefined === item || 0 === item;
	}

	function setupMutationObserver(){
		function addImageLoadListners(mutation) {
			function addImageLoadListener(element){
				var imageLoaded = sendSize.bind(null,'imageLoad','Image loaded',undefined,undefined);

				if (isNotSet(element.height) || isNotSet(element.width)) {
					log('Attach listerner to ' + element.src);
					element.addEventListener('load', imageLoaded, false);
				}
			}

			if (mutation.type === 'attributes' && mutation.attributeName === 'src'){
				addImageLoadListener(mutation.target);
			} else if (mutation.type === 'childList'){
				Array.prototype.forEach.call(
					mutation.target.querySelectorAll('img'), 
					addImageLoadListener
				);
			}
		}

		function mutationObserved(mutations) {
			sendSize('mutationObserver','mutationObserver: ' + mutations[0].target + ' ' + mutations[0].type);

			//Deal with WebKit asyncing image loading when tags are injected into the page
			addImageLoadListners(mutations[0]);
		}

		function createMutationObserver(){
			var
				target = document.querySelector('body'),

				config = {
					attributes            : true,
					attributeOldValue     : false,
					characterData         : true,
					characterDataOldValue : false,
					childList             : true,
					subtree               : true
				},

				observer = new MutationObserver(mutationObserved);

			log('Enable MutationObserver');
			observer.observe(target, config);
		}

		var
			forceIntervalTimer = 0 > interval,
			MutationObserver   = window.MutationObserver || window.WebKitMutationObserver;

		if (MutationObserver){
			if (forceIntervalTimer) {
				initInterval();
			} else {
				createMutationObserver();
			}
		}
		else {
			warn('MutationObserver not supported in this browser!');
			initInterval();
		}
	}


	// document.documentElement.offsetHeight is not reliable, so
	// we have to jump through hoops to get a better value.
	function getComputedBodyStyle(prop) {
		function convertUnitsToPxForIE8(value) {
			var PIXEL = /^\d+(px)?$/i;

			if (PIXEL.test(value)) {
				return parseInt(value,base);
			}

			var
				style = el.style.left,
				runtimeStyle = el.runtimeStyle.left;

			el.runtimeStyle.left = el.currentStyle.left;
			el.style.left = value || 0;
			value = el.style.pixelLeft;
			el.style.left = style;
			el.runtimeStyle.left = runtimeStyle;

			return value;
		}

		var
			el = document.body,
			retVal = 0;

		if (('defaultView' in document) && ('getComputedStyle' in document.defaultView)) {
			retVal = document.defaultView.getComputedStyle(el, null);
			retVal = (null !== retVal) ? retVal[prop] : 0;
		} else {//IE8
			retVal =  convertUnitsToPxForIE8(el.currentStyle[prop]);
		}

		return parseInt(retVal,base);
	}

	//Idea from https://github.com/guardian/iframe-messenger
	function getMaxElement(side,elements) {
		var
			elementsLength = elements.length,
			maxVal         = 0,
			timer          = new Date().getTime();

		for (var i = 0; i < elementsLength; i++) {
			if (elements[i].getBoundingClientRect()[side] > maxVal) {
				maxVal = elements[i].getBoundingClientRect()[side];
			}
		}

		timer = new Date().getTime() - timer;

		log('Parsed '+elementsLength+' HTML elements');
		log('Element position calculated in ' + timer + 'ms');

		return maxVal;
	}

	function getAllMeasurements(dimention){
		return [
			dimention.bodyOffset(),
			dimention.bodyScroll(),
			dimention.documentElementOffset(),
			dimention.documentElementScroll()
		];
	}

	function getTaggedElements(side,tag){
		function noTaggedElementsFound(){
			warn('No tagged elements ('+tag+') found on page');
			return height; //current height
		}

		var elements = document.querySelectorAll('['+tag+']');

		return 0 === elements.length ?  noTaggedElementsFound() : getMaxElement(side,elements);
	}

	function getAllElements(){
		return document.querySelectorAll('body *');
	}

	var
		getHeight = {
			bodyOffset: function getBodyOffsetHeight(){
				return  document.body.offsetHeight + getComputedBodyStyle('marginTop') + getComputedBodyStyle('marginBottom');
			},

			offset: function(){
				return getHeight.bodyOffset(); //Backwards compatability
			},

			bodyScroll: function getBodyScrollHeight(){
				return document.body.scrollHeight;
			},

			documentElementOffset: function getDEOffsetHeight(){
				return document.documentElement.offsetHeight;
			},

			documentElementScroll: function getDEScrollHeight(){
				return document.documentElement.scrollHeight;
			},

			max: function getMaxHeight(){
				return Math.max.apply(null,getAllMeasurements(getHeight));
			},

			min: function getMinHeight(){
				return Math.min.apply(null,getAllMeasurements(getHeight));
			},

			grow: function growHeight(){
				return getHeight.max(); //Run max without the forced downsizing
			},

			lowestElement: function getBestHeight(){
				return Math.max(getHeight.bodyOffset(), getMaxElement('bottom',getAllElements()));
			},

			taggedElement: function getTaggedElementsHeight(){
				return getTaggedElements('bottom','data-iframe-height');
			}
		},

		getWidth = {
			bodyScroll: function getBodyScrollWidth(){
				return document.body.scrollWidth;
			},

			bodyOffset: function getBodyOffsetWidth(){
				return document.body.offsetWidth;
			},

			documentElementScroll: function getDEScrollWidth(){
				return document.documentElement.scrollWidth;
			},

			documentElementOffset: function getDEOffsetWidth(){
				return document.documentElement.offsetWidth;
			},

			scroll: function getMaxWidth(){
				return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
			},

			max: function getMaxWidth(){
				return Math.max.apply(null,getAllMeasurements(getWidth));
			},

			min: function getMinWidth(){
				return Math.min.apply(null,getAllMeasurements(getWidth));
			},

			leftMostElement: function getLeftMostElement(){
				return getMaxElement('left', getAllElements());
			},

			taggedElement: function getTaggedElementsWidth(){
				return getTaggedElements('left', 'data-iframe-width');
			}
		};


	function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth){

		function recordTrigger(){
			if (!(triggerEvent in {'reset':1,'resetPage':1,'init':1})){
				log( 'Trigger event: ' + triggerEventDesc );
			}
		}

		function resizeIFrame(){
			height = currentHeight;
			width  = currentWidth;

			sendMsg(height,width,triggerEvent);
		}

		function isDoubleFiredEvent(){
			return  triggerLocked && (triggerEvent in doubleEventList);
		}

		function isSizeChangeDetected(){
			function checkTolarance(a,b){
				var retVal = Math.abs(a-b) <= tolerance;
				return !retVal;
			}

			currentHeight = (undefined !== customHeight)  ? customHeight : getHeight[heightCalcMode]();
			currentWidth  = (undefined !== customWidth )  ? customWidth  : getWidth[widthCalcMode]();

			return	checkTolarance(height,currentHeight) || (calculateWidth && checkTolarance(width,currentWidth));
		}

		function isForceResizableEvent(){
			return !(triggerEvent in {'init':1,'interval':1,'size':1});
		}

		function isForceResizableCalcMode(){
			return (heightCalcMode in resetRequiredMethods) || (calculateWidth && widthCalcMode in resetRequiredMethods);
		}

		function logIgnored(){
			log('No change in size detected');
		}

		function checkDownSizing(){
			if (isForceResizableEvent() && isForceResizableCalcMode()){
				resetIFrame(triggerEventDesc);
			} else if (!(triggerEvent in {'interval':1})){
				recordTrigger();
				logIgnored();
			}
		}

		var	currentHeight,currentWidth;

		if (!isDoubleFiredEvent()){
			if (isSizeChangeDetected() || 'init' === triggerEvent){
				recordTrigger();
				lockTrigger();
				resizeIFrame();
			} else {
				checkDownSizing();
			}
		} else {
			log('Trigger event cancelled: '+triggerEvent);
		}
	}

	function lockTrigger(){
		if (!triggerLocked){
			triggerLocked = true;
			log('Trigger event lock on');
		}
		clearTimeout(triggerLockedTimer);
		triggerLockedTimer = setTimeout(function(){
			triggerLocked = false;
			log('Trigger event lock off');
			log('--');
		},eventCancelTimer);
	}

	function triggerReset(triggerEvent){
		height = getHeight[heightCalcMode]();
		width  = getWidth[widthCalcMode]();

		sendMsg(height,width,triggerEvent);
	}

	function resetIFrame(triggerEventDesc){
		var hcm = heightCalcMode;
		heightCalcMode = heightCalcModeDefault;

		log('Reset trigger event: ' + triggerEventDesc);
		lockTrigger();
		triggerReset('reset');

		heightCalcMode = hcm;
	}

	function sendMsg(height,width,triggerEvent,msg,targetOrigin){
		function setTargetOrigin(){
			if (undefined === targetOrigin){
				targetOrigin = targetOriginDefault;
			} else {
				log('Message targetOrigin: '+targetOrigin);
			}
		}

		function sendToParent(){
			var
				size  = height + ':' + width,
				message = myID + ':' +  size + ':' + triggerEvent + (undefined !== msg ? ':' + msg : '');

			log('Sending message to host page (' + message + ')');
			target.postMessage( msgID + message, targetOrigin);
		}

		setTargetOrigin();
		sendToParent();
	}

	function receiver(event) {
		function isMessageForUs(){
			return msgID === (''+event.data).substr(0,msgIdLen); //''+ Protects against non-string messages
		}

		function initFromParent(){
			initMsg = event.data;
			target  = event.source;

			init();
			firstRun = false;
			setTimeout(function(){ initLock = false;},eventCancelTimer);
		}

		function resetFromParent(){
			if (!initLock){
				log('Page size reset by host page');
				triggerReset('resetPage');
			} else {
				log('Page reset ignored by init');
			}
		}

		function resizeFromParent(){
			sendSize('resizeParent','Parent window requested size check');
		}

		function moveToAnchor(){
			var anchor = getData();
			inPageLinks.findTarget(anchor);
		}

		function getMessageType(){
			return event.data.split(']')[1].split(':')[0];
		}

		function getData(){
			return event.data.split(':')[1];
		}

		function isMiddleTier(){
			return ('iFrameResize' in window);
		}

		function messageFromParent(){
			var msgBody = getData();

			log('MessageCallback called from parent: ' + msgBody );
			messageCallback(JSON.parse(msgBody));
			log(' --');
		}

		function isInitMsg(){
			//Test if this message is from a child below us. This is an ugly test, however, updating
			//the message format would break backwards compatibity.
			return event.data.split(':')[2] in {'true':1,'false':1};
		}

		function callFromParent(){
			switch (getMessageType()){
			case 'reset':
				resetFromParent();
				break;
			case 'resize':
				resizeFromParent();
				break;
			case 'moveToAnchor':
				moveToAnchor();
				break;
			case 'message':
				messageFromParent();
				break;
			default:
				if (!isMiddleTier() && !isInitMsg()){
					warn('Unexpected message ('+event.data+')');
				}
			}
		}

		function processMessage(){
			if (false === firstRun) {
				callFromParent();
			} else if (isInitMsg()) {
				initFromParent();
			} else {
				log('Ignored message of type "' + getMessageType() + '". Received before initialization.');
			}
		}

		if (isMessageForUs()){
			processMessage();
		}
	}

	addEventListener(window, 'message', receiver);

})(window || {});