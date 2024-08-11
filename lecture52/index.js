/* manipulation css using javascript */

/*
external CSS
internal CSS
inline CSS
 */

/*
    method 1 --> use .style  ->isse ek inline css property ek bar me change hota hai

    let secondElement = document.getElementByI("div");
    undefined
    secondElement;
    null
    let secondElement = document.getElementByI("sdiv");
    undefined
    secondElement
    <div id=​"sdiv" style=​"background-color:​pink;​padding:​2rem">​…​</div>​
    secondElement.style;
    CSSStyleDeclaration {0: 'background-color',1: 'padding-top', 2: 'padding-right', 3:'padding-bottom', 4: 'padding-left',accentColor: '', additiveSymbols: '',alignContent: '', alignItems: '',alignSelf: '', …}
    secondElement.style.backgroundColor ="yellow";
    'yellow'


    method 2 --> use .cssText --> isse ek bar me multiple inline css ke property ko get or set kar sakte hai

    secondElement.style.cssText = "background-color:black ; color: white; padding:0.5rem";
    'background-color:black ; color: white; padding:0.5rem'


    method 3 --> set id and class we use .setAttribute() ye purani value ko hata deta hai fir se updatae karta hai

    > let firstElement = document.querySelector("#fdiv");
    <>` undefined
    > firstElement
    <
    <div id="fdiv" style="background-color: skyblue; padding:2rem"> </div>
    > firstElement.setAttribute('class', 'divClass');
    <> undefined
    > firstElement
    <div id="fdiv" style="background-color: skyblue; padding:2rem" class="divClass"> </div>
    > firstElement
    <div id="fdiv" style="background-color: skyblue; padding:2rem" class="divClass"> </div>
    > firstElement.setAttribute("style","padding:0.9rem") ;
    <> undefined
    > firstElement
    <
    <div id="fdiv" style="padding:0.9rem" class="div Class"> </div>
    >`


    method 4 --> .className ->get className or insert className or mutiple className

    let fpara = $0
    undefined
    fpara
    <p id="fpara" style="background-color: green;pad ding:2rem"> first para </p>
    fpara.ClassName = "first second";
    'first second'
    fpara
    <p id="fpara" style="background-color: green;pad ding:2rem"> first para </p>
    fpara.className = "first second";
    'first second'
    fpara;
    <p id="fpara" style="background-color: green;pad ding:2rem" class="first second"> first para </p>
    fpara.className = "fpara1 spara2";
    'fpara1 spara2'
    fpara;
    <p id="fpara" style="background-color: green; pad ding:2rem" class="fpara1 spara2"> first para </p>

    method 5 --> .classList -> we can get class in form of array

    we can perform task :-> add class,remove class ,toggle class,contains check;
    
*/