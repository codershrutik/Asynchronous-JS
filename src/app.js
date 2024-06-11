// const multiply = (x,y) => x*y;

// const square = x => multiply(x,x);

// const isRightTriangle = (a,b,c) =>(
//     square(a) + square(b) === square(c)
// )

console.log("Sneidng request to server!")
setTimeout(()=>{
    console.log("Here is your data from the server")
},3000)
console.log("You have reached the end of the file!");

setTimeout(()=>{
    document.body.style.backgroundColor = 'red';
},1000)
setTimeout(()=>{
    document.body.style.backgroundColor = 'orange';
},2000)
setTimeout(()=>{
    document.body.style.backgroundColor = 'yellow';
},3000)

const delayedColorChange = (newColor, delay) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
    },delay)
}

delayedColorChange('blue',1000);
delayedColorChange('green',2000);
delayedColorChange('yellow',3000);