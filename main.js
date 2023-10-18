
let password =document.getElementById('password')


function generatepassword(){
let all="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&*()_-+=<>/?№[]{}:~0123456789";
var passwords='';
var passwordlength=+prompt('Zəhmət olmasa uzunlugu qeyd edin')
for(let i=0;i<passwordlength;i++){
    let randomIndex=Math.floor(Math.random()* all.length);
    passwords +=all.substring(randomIndex, randomIndex +1);
}
document.getElementById('password').value=passwords;
   
}










// let array=['AB','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
// 'v','w','x','y','z',"@","!","#","$","%","^","&","*","(",")","_","-","+","=","<",">","/","?","№","[","]","{","}",":","~",'0','1','2','3','4','5','6','7','8','9',
// ];