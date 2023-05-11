
// =================== show and hide password =====================

// var password = document.getElementById("password")
// var btn = document.getElementById("btn")

// btn.onclick = function () { 
//     if(password.type == "text"){
//         password.type = "password"
//         btn.innerText = "show"
//     }else{
//         password.type  = "text"
//         btn.innerText = "hide"
//     }
  
// }


// =================== text area with validation ================

// var text = document.querySelector("#text")
// var res = document.querySelector("#res")

// text.onkeyup = function(){
//     var count = text.value.length
//     res.innerText = "count is :"+count
//     if(count>=20){

//         text.style.cssText = "outline:1px solid red;border:1px solid red"
//     }else{
//         text.style.cssText = "outline:1px soild black;border:1px solid black"
//     }
// }





// ============================== background ===================
// *********************************** old
// var imgbackground  = document.querySelector("#img")
// function background (img){
//     imgbackground.src = img
//     console.log(img)
// }

// ***************************** new
// var imgbackground  = document.querySelector("#img")
// var imgs = document.querySelector(".imgs")

// imgs.onclick = function(e){
//     if(e.target.src){
//         imgbackground.src = e.target.src
//         for(var i =0;i<imgs.children.length;i++){
//             imgs.children[i].style.cssText = "none" 
//             if(e.target.src == imgs.children[i].src){
//                 e.target.style.cssText = "border:4px solid green"
//             }
//         }
//     }
// }


// ============================ background next , prev ===================


// var imgs  = [
//     "assets/imgs/1.webp",
//     "assets/imgs/2.webp",
//     "assets/imgs/3.webp",
// ]

// var img = document.querySelector("#img")
// var next = document.querySelector("#next")
// var prev = document.querySelector("#prev")

// img.src = imgs[0]
// var i = 0
// next.onclick = function(){
//     i++
//     img.src = imgs[i % imgs.length]
// }

// prev.onclick = function(){
//     if(i == 0 ){
//         i = 3
//     }
//     i--

//     console.log(i)
//     img.src = imgs[i]
// }