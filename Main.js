// クリック関数
async function onSubmit(token) {
    window.reportError = function(errorMessage, errorObj = null) {
        // ユーザー向けアラート
        alert("エラーが発生しました: " + errorMessage);
        
        // デバッグ用コンソール出力
        console.error(errorMessage, errorObj);
    }
    try{
        if(!token) throw new Error("CAPTCHA認証に失敗");
        const response = await fetch("/.netlify/functions/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token })
        });

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
        window.reportError(err.message, err);
    }
    
}
