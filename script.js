// 1 SLIDER



//let img = document.getElementsByClassName('img');
//let arrImg = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
//let leftBtn = document.createElement('button');
//let rightBtn = document.createElement('button');
//leftBtn.innerHTML = '⮘';
//rightBtn.innerHTML = '⮚';
//leftBtn.className = 'btn';
//rightBtn.className = 'btn';
//document.body.appendChild(leftBtn);
//document.body.appendChild(rightBtn);
//leftBtn.setAttribute('style', 'position:absolute; z-index: 1000; top:50%; left:0;  cursor: pointer; font-size: 40px; border-radius: 20px; font-weight: 900; background: black; color: white; padding: 20px; ');
//rightBtn.setAttribute('style', 'position:absolute; z-index: 1000; top:50%; right:0;  cursor: pointer; font-size: 40px; border-radius: 20px; font-weight: 900; background:black; color: white; padding: 20px;');
//
//function changePic(){
//    for(let i = 0; i < arrImg.length; i++){
//        img[i].src = arrImg[i];
//    }
//}
//
//addEventListener - avelacnuma event iradardzutyun
//
//leftBtn.addEventListener('click', () => {
//    let a = arrImg.pop();
//    arrImg.unshift(a);
//    changePic();
//    
//})
//
//rightBtn.addEventListener('click', () => {
//    let b = arrImg.shift();
//    arrImg.push(b);
//    changePic();
//   
//})



//2 SlIDER



let container = document.querySelector('.container');
let offset = 0;

window.addEventListener('keyup',(e) =>{
    if(e.which === 37) {
        offset-=100;
        if(offset < 0) {
            offset = 400;
        }
        container.style.left = -offset + '%';
    }
})

window.addEventListener('keyup',(e) =>{
    if(e.which === 39) {
        offset+=100;
        if(offset > 400) {
            offset = 0;
        }
        container.style.left = -offset + '%';
    }
})

//leftBtn.addEventListener('click', ()=>{
//    offset-=100;
//    if(offset < 0){
//        offset = 400
//    }
//    container.style.left = -offset + '%'
//})
//
//rightBtn.addEventListener('click', ()=>{
//    offset+=100;
//    if(offset > 400){
//        offset = 0
//    }
//    container.style.left = -offset + '%'
//    
//})
//let inter = 0;
//
//setInterval(() =>{
//    inter -= 100;
//    if(inter == -500) {
//        inter = 0;
//    }
//    
//    container.style.left = inter + '%';
//},2000)
//let leftBtn = document.getElementById('leftBtn')
//let rightBtn = document.getElementById('leftBtn')
