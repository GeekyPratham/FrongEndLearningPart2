/* JS DOM manipulation */

// window object -> it is a global object-> it is created by browser 
// isi ke ander sara js ka function defined rheta hai

// window.open();
//window.close();

// window.console.log("pratham")


// DOM=> document object model ->it is tree like structure

/*
  ek html ka code hai usko aap convert kar dia javascript ka object ka ander aur wah javascript object document khelata hai  and overall document object model khelata hai
*/
// agar console me document likha ge toh sara html ka code dikhega terminal me


/*
    <___></___> isme jo bhi character bharte hai jaise ki (html,body) ye tag khelata hai 

    aur ek tokeniser hota hai jo tag ko token me convert kar deta hai jo ki node khelata hai

    bahut sare node mil kar ke DOM ka formatin karte hai


    <html>
        <head> ----- </head>
        <body> -----
            -------
            -----
            
        </body>
    </html>

    // dom of above html -> tree like structure

        html
        /   \
    body    head
*/

/* BOM -(borwser object model) */



/* app jab java script likha rahe hai to appko html me change karne ki jarurat par gai toh kaise karege ye sikhe ge hamlog
 */

                // Access


/* how to access tags of html */
// we can access by using their ID , className , tagName

/*
// inspect me console me iske madad se access kar sakte hai id ka use kia hai.
document.getElementById("fpara");
*/

/*
    // document.getElementByClassName("fpara");
*/

/*
    // document.getElementByTagName("fpara");
*/

/*
    "#" ->id
    "."-> class
    p -> para

    we use universal -> document.querySelector(" ")
*/

/* multiple taga ka same class name or same id ya tag ho sakta hai                 ishliye jab ham log getElement ka use kare ga sara print show karega magar jab hamlog querySelector ka use kare ge toh first wala show karega only or baki ko ignore kar dega

    <h1 id="firstpara" class="Heading"> first heading</h1>

    <h2 id="secondpara" class="Heading">second second</h2>
    

    <h3 id="thirdpara" class="Heading"> third heading</h3>
   
    
    <h4 id="fourthpara" class="Heading"> fourth heading</h4>

    same className

    toh sare ko show karne ka lia hamlog ko    
    ##   querySelectorAll() 
    ka use karna hoga

    " we can use $0 jo show karna hai inspect me jakar whaha cursor lejakr select kar do  aur console me $0 likh do "
*/


        /* update */


/*

inner HTML    --> kisi bhi tag ke ander ham get ya set kar sakte hai 

let button = $0;

button.innerHTML iska use karke button ke ander wala tag ko use karsakte hai.
button.innerHTML = '<p>Hello Brother</p>';
 */


// outer HTML   --> 



/*
    Key Differences Between outerHTML and innerHTML
innerHTML: Refers to the HTML content inside an element, excluding the element itself.
outerHTML: Includes the element itself and its HTML content
*/


// text content -> jo jo text html file me likha hoga wah wah print karega .
// yah enter of tab space ko bhi show karta hai .



// inner Text -> inner text jo browser me text render hoga wahi print karega.
// yeh tab space ko show nahi karta hai.

/*-
    let element  =  $0;
    element.innerText;
     inner text jo browser me text render hoga wahi print karega.
    
    element.textContent;
     jo jo text html file me likha hoga wah wah print karega .


*/


            /* Append */
/*
        add element -> create element
                   |
                    -> append element

> let fHeading = document.createElement('h1');

> fHeading
<
<h1></h1>
fHeading.textContent = "My name is Pratham Raj";
'My name is Pratham Raj'
fHeading
<
<h1>My name is Pratham Raj</h1>
> let bodyTag = document.querySelector('body');

> bodyTag
<body></body>
bodyTag.appendChild(fHeading);
<h1>My name is Pratham Raj</h1>
>

    hamesa child end me add hota hai jo bhi tag me dal rahe hai. ish process se

// insert at a specific point or tag or position

by using insertAdjacentElement()--->position --->before begin
                            |           | --->agter begin
                            |           | --->before end
                            |           | --->after end
                            |           
                            |--->HTML content
    
*/

// let mydiv = document.querySelector("#mydiv");
// let newElement = document.createElement('span');
// newElement.textContent = "shivam raj";
// mydiv.insertAdjacentElement('beforeend',newElement);

        /* removal child
                |-> opposite of append
                |->parent
                |->child

                parent.removeChild(child);
 
 
*/

// let mydiv = document.querySelector('mydiv');

// let parent = child.parentNode;
// //  let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#fpara');


// parent.removeChild(child);
