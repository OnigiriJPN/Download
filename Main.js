// クリック関数
async function onSubmit(token) {
    try{
        if(!token) throw new Error("CAPTCHA認証に失敗");

        if (!response.ok) throw new Error("CAPTCHA検証に失敗しました");

        const data = await response.json();
        
        const fileUrl = "https://onigiriapps1.netlify.app/Assets/ApplicationFiles.zip"; // リポジトリに置いたファイル
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = "Setup.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }catch(err){
        console.log(err);
    }
    
}
