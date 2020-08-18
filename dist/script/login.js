var user=document.querySelector('.ipt');
var pass=document.querySelector('.pass');
var auto=document.querySelector('.auto');
var btn=document.querySelector('.btn');
if (getCookie('username')){
    user.value = getCookie('username');
    pass.value = getCookie('password');
    auto.checked = true;
}
btn.onclick=function(){
    
    if(!user.value||!pass.value){
        alert('输入不能为空');
        return false;
    }
    if (auto.checked) {
        setCookie({
            key: 'username',
            val: user.value,
        });
        setCookie({
            key: 'password',
            val: pass.value,
        });
    } else {
        removeCookie('username');
        removeCookie('password');
    }
   
   window.open('./index.html');
 
}