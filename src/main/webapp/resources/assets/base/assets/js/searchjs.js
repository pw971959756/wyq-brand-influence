// JavaScript Document
function glb_searchTextOnfocus(obj) {
	if (obj.value == '请输入关键词')
		obj.value = '';
	obj.style.color = '#aaaaaa';
}
function glb_searchTextOnBlur(obj) {
	if (obj.value == '') {
		obj.value = '请输入关键词';
		obj.style.color = '#aaaaaa';
	} else {
		obj.style.color = '#aaaaaa';
	}
}

//搜索热门关键字代码
function fbbox(fbboxID,ObjID){
	$(fbboxID).click(function(){
		$(ObjID).show();
	});
	$(ObjID).hover('',function(){
		$(ObjID).hide();
	});
	$(fbboxID).keydown(function(){
		$(ObjID).hide();
	});
	$(ObjID).find('a').click(function(){
		var text = $(this).text();
		$(fbboxID).val(text);
		$(ObjID).hide();
	});
}
fbbox('#search-keyword','#hotwords');

//搜索框检测代码
function checkinput(){
	var search = $('#search-keyword');
	var isNull = /^[\s' ']*$/;
	if(search.val() == '输入关键词，回车搜索全国设计素材资源' || search.val().length <= 0 || isNull.test(search.val())){
		search.focus();
		window.alert("请输入关键词，搜索关键词不能为空");
		return false;
	}
}
