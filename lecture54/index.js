/* Performance Improvement */

// magar ye kaise pata kre ga ki performance aacha hai ki nahi

// how to write efficient code which is good prctice for increase the fastness/ performance of code from other


// java script ka ander ek standard way hai pata lagane ka ki mera code kitna time le raha hai

    /*

    performance.now(); method -> it gives timestan
     
    */

// CODE 1


const t1 = performance.now();
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "this is Para " + i;
    document.body.appendChild(para);
}
const t2 = performance.now();

console.log("total time taken by code 1: " + (t2-t1));

// CODE 2
const t3 = performance.now();
let mydiv  = document.createElement('div');

for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is my second Para: " + i;

    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("total time taken by code 2: " + (t4-t2)); 

/*

// kyo second code ka time kam aaya ie code1 ->0.5 and code 2 -> 0.3.

// concept of ->(1) reflow  and  (2) repaint 

// reflow :-> it is the process of calculating position and finding dimension of element that you wnat to render on your webpage . it is very computational intesive task . it is slower.

// repaint :-> it is the process fo displaying contetn / element pixel by pixel . it is faster

*/

// hamko kab UI pe dikhana padega jab hamko document me dalna padega  
//islia code1 me hamlog har iteration me document me dal rahe tha toh har bar reflow and repaint ho raha tha. islia 100 bar reflow and repaint.
// lekin code 2 me 100 bar ham bas div me dale hai last me jab loop ka bahar aa gaye toh hamlog div ko document ka ander dale hai toh 1 time reflow laga and 1 bar repaint laga ishliye code 2 fast hai


/* Document Fragment */ 

// it is a light weight document object isme koi bhi addition / append karte hai toh ye na toh reflow karta hai na toh repaint karta hai so it is fast


let fragment = document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is my second =: " + i;

    // no reflow  and no repaint for the below line
    fragment.appendChild(para);
}

// below line take 1 reflow and 1 repaint

document.body.appendChild(fragment);