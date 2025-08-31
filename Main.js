// クリック関数
function onSubmit(token) {
    try{
        if(!token) throw new Error("CAPTCHA認証に失敗");
        const fileUrl = "https://onigiriapps1.netlify.app/Assets/ApplicationFiles.zip"; // リポジトリに置いたファイル
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = "Setup.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }catch(error){
        alert("認証エラー:"+error);
        throw new Error(error);
    }
}
