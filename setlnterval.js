console.log('first');
// setInterval(() =>{
//     console.log('tik tik tik')
// }, 3000)


let second = 10;
const setId = setInterval(()=>{
    // second++;
    console.log(second--);
    if(second < 0){
        clearInterval(setId)
    }
}, 1000)

console.log('secod');