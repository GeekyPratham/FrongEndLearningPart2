
 function alertPara(event){

    if(event.target.nodeName == 'SPAN'){
        alert("you have click on para : " + event.target.textContent );
    }
    
}

// let paras = document.querySelectorAll('p');

// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     // para.addEventListener('click',function(){
//     //     alert("you have click on para:" +(i+1) );
//     // })// it is not a good practice of making 4 listner if it is of same type
//     para.addEventListener('click',alertPara);
// }


let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertPara);