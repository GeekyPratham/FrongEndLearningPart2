// console.log("pratham")

/*
syncronous:->execution in the sequence of line of code 

 */
/*
    asyncronous:-> execution goes parrallel if time delay;
*/
// setTimeout function in js

// function greeting(){
//     console.log("hello Pratham Raj!");
// }

// setTimeout(greeting,4000);

// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// },5000);
// console.log("three");
// console.log("four")
// console.log("five")

// output

// one
// two
// three
// four
// five
// hello

/** callbacks :-> it is an argument to another function */


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2,sum); // this sum is a function and it is passed as a argument to the calculator function is called callback function


// calculator (1,2,(a,b)=>{
//     console.log(a+b);
// });

// function getData(dataId){
//     setTimeout( ()=>{
//         console.log("data",dataId);
//     },1000);
// }

// getData(233);
// getData(232);
// getData(213);
// getData(222);
// getData(237);
// getData(229);

// callbacks

/* important */
// function getData(dataId,getNextData){
//     //2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){ // if exists then call
//             getNextData();
//         }
        
//     },2000);
// }

// nested callback == it is also called callback hell nested callback stacked below to one another forming  a pyramid structure
// console.log("getting data 1....")
// getData(23,()=>{
//     console.log("getting data 2....")
//     getData(234,()=>{
//         console.log("getting data 3....")
//         getData(345);
//     })
// });

// to solve call back hell in js there is a concept of "promises" in java script;

        //>> Promises <<//
/* it is a object inside the javascript which has three state 1) pending 2) fullfilled 3) reject 

the two handlers in promises i.e resolve and reject;

it is just like example you ordered somthing from amazon if your item deliverde to you it is the state of fullfilled or resolve if it yet to deliver or in the path then pending or if your item get cancelled due to some internal reason then it is is reject


*/



// in general promises is create by api or other system when we deal with it;

// let create our promises

// let promise = new Promise( (resolve , reject) =>{
//     console.log("i am a  promise");
//     reject(222);
// } )

// function getData(dataId,getNextData){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("successful");
//             if(getNextData){ 
//                 getNextData();
//             }
         
//         },5000);
//     })
// }

// function getData(dataId,getNextData){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//            reject("error");
//             if(getNextData){ 
//                 getNextData();
//             }
         
//         },5000);
//     })
// }

// const getPromise = () =>{
//     return new Promise( (resolve , reject) =>{
//         console.log("i am a  promise");
//         // resolve("success");
//         reject(" network error");
//     } )
// }

// let promise = getPromise();

// // then and catch function

// promise.then( (res) =>{
//     console.log("i completed the task",res);
// })

// promise.catch( (err) =>{
//     console.log("i have not completed the task",err);
// })


// function asyncFun1(){
//     return new Promise( (resolve,reject) => {
//         setTimeout( ()=>{
//             console.log(" data1");
//             resolve("success");
//         },4000)
//     })
// }

// function asyncFun2(){
//     return new Promise( (resolve,reject) => {
//         setTimeout( ()=>{
//             console.log(" data2");
//             resolve("success");
//         },4000)
//     })
// }

// console.log("fetching data1");
// let p1 = asyncFun1();
// p1.then( (res)=>{
//     // console.log(res);
//     console.log("fetching data2");  // this is called chaining in then
//     let p2 = asyncFun2();
//     p2.then( (res)=>{
//         // console.log(res);
//     })
    
// })

// console.log("fetching data1....")
// asyncFun1().then( () => {
//     console.log("fetching data2.....")
//     asyncFun2().then( () => {})
// })

// function getData(dataId){
//     return new Promise( (resolve,reject) => {
//         setTimeout(()=>{
//             console.log(dataId);
//             resolve("success");
//         },5000)
//     });
// }

// let p1 = getData(1);
// p1.then( (res) => {
    
// })

// promise chain


// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

// more better way to write above promise chain

// getData(1).then((res)=>{
//     console.log("res")
//     return getData(2);
// }).then((res)=>{
//     console.log("res")
//     return getData(3);
// }).then((res)=> {
//     console.log("res")
// });


// to more user friendly or easy to understand we use async - await

/* Async - Await */
// async kisi bhi function promise bana deta hai which always returns promise
// await -> pause the execution of its surrounding async function until the promise is settled


// function api(){
//     return new Promise( (resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//         }, 2000);
//     })
// }

// // api();
// async function gettingWeatherData(){
//     await api();//1st call it will wait it complet till its execution
//     await api();//2nd call
//     await api()// 3rd call
// }



function getData(dataId){
    return new Promise( (resolve,reject) => {
        setTimeout(()=>{
            console.log(dataId);
            resolve("success");
        },2000)
    });
}


//  async function gettingData(){
//      console.log("getting data1....");
//      await getData(10);
//      console.log("getting data2....");
//      await getData(20);
//      console.log("getting data3....");
//      await getData(30);
//      console.log("getting data4....");
//      await getData(40);
//      console.log("getting data5....");
//      await getData(50);
//      console.log("getting data6....");
//      await getData(60);
//      console.log("getting data7....");
//      await getData(70);
//      console.log("getting data8....");
//      await getData(80);
//  }

(async  function(){
    console.log("getting data1....");
    await getData(10);
    console.log("getting data2....");
    await getData(20);
    console.log("getting data3....");
    await getData(30);
    console.log("getting data4....");
    await getData(40);
    console.log("getting data5....");
    await getData(50);
    console.log("getting data6....");
    await getData(60);
    console.log("getting data7....");
    await getData(70);
    console.log("getting data8....");
    await getData(80);
}) ();

// isme hamlog ko ek function call karna pad raha hai jo ki unnecessary hai

// toh iske lia hamlog IIFE ka use kare ga
//IIFE -> immediately invoked function expression

// ek bar IIFE wala function chalta hai uske bad delete ho jata hai


/*
1.) 
(function () {
    ...
    ...
})();

2.)

( () => {
    ...
    ...
})();

3.)

( async () => {
    
})();

*/