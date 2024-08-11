// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Shivam";
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changeText); 

// here in changeText in both add and remove refer to same object so it works if we made function inside the add or remove then it will not work as they refer to two differnt object

// fpara.removeEventListener('click',changeText);


// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Shivam";
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changeText); 

// let anchorElemetn = document.getElementById('fanchor');

// anchorElemetn.addEventListener("click",function(event){
//     event.preventDefault();
//     anchorElemetn.textContent = "click done bhai";
// });