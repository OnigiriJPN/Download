let ut = navigator.userAgent;

if(ut.indexOf('iPhone') > 0 || ut.indexOf('iPod') > 0 || ut.indexOf('Android') > 0 && ut.indexOf('Mobile') > 0){
	msg = "SmartPhon";
}else if(ut.indexOf('iPad') > 0 || ut.indexOf('Android') > 0){
	msg ="Tablet";
}else{
	msg = "Personal Computer";
}
