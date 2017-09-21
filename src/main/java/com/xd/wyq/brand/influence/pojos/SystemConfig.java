package com.xd.wyq.brand.influence.pojos;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "system_config")
public class SystemConfig implements Serializable {
	private static final long serialVersionUID = 8560819294985505580L;

	private Integer id;
	private String name;
	private String value;
	private Integer status;

	@Id
	@GeneratedValue
	@Column(name = "id")
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "value")
	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Column(name = "status")
	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
}
