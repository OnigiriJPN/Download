let ut = navigator.userAgent;
let DldBtn = document.getElementById("DldBtn");

if(ut.indexOf('iPhone') > 0 || ut.indexOf('iPod') > 0 || ut.indexOf('Android') > 0 && ut.indexOf('Mobile') > 0){
	DldBtn.disabled = true;
	alert("モバイルでは、ダウンロード出来ません。");
}else if(ut.indexOf('iPad') > 0 || ut.indexOf('Android') > 0){
	DldBtn.disabled = true;
	alert("モバイルでは、ダウンロード出来ません。");
}else{
	DldBtn.disabled = false;
}
