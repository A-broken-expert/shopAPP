window.onload=function(){
    let loginValue=document.querySelectorAll("main .center .form input");
    let loginButton=document.querySelector("main .center .button");
    loginButton.onclick=function(){
        if(loginValue[0].value === "admin"  && loginValue[1].value === "111111"){
            alert("登录成功");
            window.open("parcel app.html");
        }else{
            alert("登录失败");
        }
}
};