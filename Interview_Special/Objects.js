// When we makea object by "new Object" key words then that object is a Singlton Object. Rest other are Literals or non-Singlton Objects.

// let obj = new Object   // This is a singleton Object.
// let obj = {} // This is non-Singleton object.
// ----------------------------------------------------------------------------------------------
// How to call a object 2 methods:-
let obj = {
    name:"Ram",
    "full name":"SiyaRam"
}
// obj.name
// console.log(obj["full name"])

// The Question is How can we have one object inside the other..
// ----------------------------------------------------------------------------------------------
// let object1 = {
    //     fullName:{
        //         firstName:"Ram",
        //         lastName:"Hanuman"
        //     }
        // }
// console.log(object1.fullName.firstName)
        

// ----------------------------------------------------------------------------------------------
// let obj1 = {
//     Name:"Ram",
//     Bhagat:"Hanuman",
//     Bhai:"Lakshman"
// }

// There are two methods below run them one by one and see the difference between Deep Copy and Shallow copy.
//  +++++++++++++++  IMP ++++++++++++++++=
// console.log(obj1)
// let obj2=Object.assign(obj1) // The only Difference is "{}" in the assign method. If we don't use "{}" then if we have done changes in the obj2 it we be also make changes in the obj1.
// obj2.Name="SiyaRam"
// console.log(obj1)
// console.log(obj2)

//  +++++++++++++++  IMP ++++++++++++++++=

// console.log(obj1)
// let obj2=Object.assign({},obj1)
// obj2.Name="SiyaRam"
// console.log(obj1)
// console.log(obj2)

//  +++++++++++++++++++++++

// ----------------------------------------------------------------------------------------------