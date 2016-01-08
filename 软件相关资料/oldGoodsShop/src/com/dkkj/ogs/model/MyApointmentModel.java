package com.dkkj.ogs.model;

import com.dkkj.absct.Model;

public class MyApointmentModel extends Model {
String	apt_id;
public String getApt_id() {
	return apt_id;
}
public void setApt_id(String apt_id) {
	this.apt_id = apt_id;
}
public String getGoods_id() {
	return goods_id;
}
public void setGoods_id(String goods_id) {
	this.goods_id = goods_id;
}
public String getApt_place() {
	return apt_place;
}
public void setApt_place(String apt_place) {
	this.apt_place = apt_place;
}
public String getApt_timeS() {
	return apt_timeS;
}
public void setApt_timeS(String apt_timeS) {
	this.apt_timeS = apt_timeS;
}
public String getHost_id() {
	return host_id;
}
public void setHost_id(String host_id) {
	this.host_id = host_id;
}
public String getCustomer_id() {
	return customer_id;
}
public void setCustomer_id(String customer_id) {
	this.customer_id = customer_id;
}
public String getApt_price() {
	return apt_price;
}
public void setApt_price(String apt_price) {
	this.apt_price = apt_price;
}
public String getIs_ok() {
	return is_ok;
}
public void setIs_ok(String is_ok) {
	this.is_ok = is_ok;
}
public String getIsHostOk() {
	return isHostOk;
}
public void setIsHostOk(String isHostOk) {
	this.isHostOk = isHostOk;
}
public String getIsCustomerOk() {
	return isCustomerOk;
}
public void setIsCustomerOk(String isCustomerOk) {
	this.isCustomerOk = isCustomerOk;
}
public String getApt_time() {
	return apt_time;
}
public void setApt_time(String apt_time) {
	this.apt_time = apt_time;
}
public String getCustomerMsg() {
	return CustomerMsg;
}
public void setCustomerMsg(String customerMsg) {
	CustomerMsg = customerMsg;
}
public String getHostMsg() {
	return HostMsg;
}
public void setHostMsg(String hostMsg) {
	HostMsg = hostMsg;
}
String	goods_id;
public MyApointmentModel(String apt_id, String goods_id, String apt_place,
		String apt_timeS, String host_id, String customer_id, String apt_price,
		String is_ok, String isHostOk, String isCustomerOk, String apt_time,
		String customerMsg, String hostMsg) {
	super();
	this.apt_id = apt_id;
	this.goods_id = goods_id;
	this.apt_place = apt_place;
	this.apt_timeS = apt_timeS;
	this.host_id = host_id;
	this.customer_id = customer_id;
	this.apt_price = apt_price;
	this.is_ok = is_ok;
	this.isHostOk = isHostOk;
	this.isCustomerOk = isCustomerOk;
	this.apt_time = apt_time;
	CustomerMsg = customerMsg;
	HostMsg = hostMsg;
}
String	apt_place;
String	apt_timeS;
String	host_id;
String	customer_id;
String	apt_price;
String	is_ok;
String isHostOk;
String	isCustomerOk;
String	apt_time;
String	CustomerMsg;
String	HostMsg;


}
