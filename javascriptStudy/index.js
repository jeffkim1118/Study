function myFirstFunction(obj, elementType = 'string'){
    let arraysOfA = Object.values(obj)
    return arraysOfA.map(array => array.filter(element => {
        if(typeof element === elementType && element.toLowerCase().includes('not')){
            return element
        }
    }))
}

function mySecondFunction(obj, elementType = 'string'){
    let arraysOfA = Object.values(obj)
    return arraysOfA.map(array => array.filter(element => {
        if(typeof element === elementType && element.toLowerCase().includes('not')){    
          return element
        }
    }))
}

function myThirdFunction(obj,elementType='string'){
    let arraysOfA = Object.values(obj)
    let counter = 0;
    const ob = {}
    arraysOfA.map(array => array.filter(element => {
        if(typeof element === elementType && element.toLowerCase().includes('not')){
            counter+=1
        }
    }))
    ob.not = counter
    
    ob.words = arraysOfA.map(array => array.filter(e => typeof e === elementType).length).reduce((a,b) => a+b,0)
    
    return ob;
}


const myObj = {
    Manhattan : ['city', 3, 5, 10, 'state', 'nOt'],
    Brooklyn : ['nothing', 1, 3, 'cannot'],
    Queens : ['something', 'flushing', 'csNoT']
}
console.log(myFirstFunction(myObj))
console.log(mySecondFunction(myObj))
console.log(myThirdFunction(myObj))
















// class UserStorage{
//     loginUser(id,password,onSuccess, onError){
//         setTimeout(() => {
//             if(
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'coder' && password === 'academy')
//             ){
//                 onSuccess(id);
//             }else{
//                 onError(new Error('not found'))
//             }
//         }, 2000);
//     }
//     getRoles(user,onSuccess,onError){
//         setTimeout(() => {
//             if(user === 'ellie'){
//                 onSuccess({name:'ellie', role:'admin'})
//             }else{
//                 onError(new Error('no access'))
//             }
//         }, 1000);
//     }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password')
// userStorage.loginUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error)
//             }
//         )
//     },
//     error => {console.log(error)}
// )
