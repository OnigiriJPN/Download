// クリック関数
function Download(){
  // 利用規約
  const Term = confirm("利用規約を同意してください。");
  // エレメントIDを取得
  const Recap = document.getElementById("Recap");
  // 「利用規約に同意」に、「はい」が押された時
  if(Term === true){
    // ダイアログを開く
    Recap.open = true;
    // それ以外
  }else{
    // reCAPTCHA チェック
    const response = grecaptcha.getResponse();
    if(!response){
      alert("チェックがありません。チェックしてください。");
      return;
    }
    
  }
}
