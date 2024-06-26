// const multiply = (x,y) => x*y;

// const square = x => multiply(x,x);

// const isRightTriangle = (a,b,c) =>(
//     square(a) + square(b) === square(c)
// )

// console.log("Sneidng request to server!")
// setTimeout(()=>{
//     console.log("Here is your data from the server")
// },3000)
// console.log("You have reached the end of the file!");

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
// },1000)
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'orange';
// },2000)
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'yellow';
// },3000)

// const delayedColorChange = (newColor, delay) =>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newColor;
//     },delay)
// }

// delayedColorChange('blue',1000);
// delayedColorChange('green',2000);
// delayedColorChange('yellow',3000);

// const request = fakeRequestPromise('yelp.com/api/coffee');
// request
//     .then(()=>{
//         console.log("Promise resolved");
//     })
//     .catch(()=>{
//         console.log("Promise rejected")
//     })

// const fakeRequest = (url) =>{
//     return new Promise((resolve, reject)=>{
//         const rand = Math.random();
//         setTimeout(()=>{
//             if(rand<0.7){
//                 resolve('Yiur fake data here');
//             }
//             reject('Request error');
//         },1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then(()=>{
//     console.log("Done with request");
// })

// const sing = async() =>{
//     return 'LA LA LAND'
// }

// sing()
//     .then(data =>{
//         throw 'On no, problem!'
//     })

// const login = async(username, password)=>{
//     if(!username || !password) throw 'Missing Credentials'
//     if(password == 'corgisarecute') return 'Welcome'
//     throw 'Invalid password'
// }

// login('asajsdb')
// .then(msg =>{
//     console.log('Log in')
//     console.log(msg)
// })
// .catch(err =>{
//     console.log('ERROR')
//     console.log(err)
// })

const delayedColorChange = (newColor, delay) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
    },delay)
}

async function rainbow(){
    await delayedColorChange('red',1000);
    await delayedColorChange('orange',1000);
    await delayedColorChange('yellow',1000);
    await delayedColorChange('green',1000);
    await delayedColorChange('blue',1000);
    await delayedColorChange('indigo',1000);
    await delayedColorChange('voilet',1000);
}

rainbow().then(()=>console.log("End of rainbow"))

async function printRainbow(){
    await rainbow();
    console.log("END OF RAINBOW")
}