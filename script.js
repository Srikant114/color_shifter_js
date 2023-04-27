

startBtn=document.querySelector('#start');
stopBtn=document.querySelector('#stop');
box=document.querySelectorAll('.element');
// console.log(box);
let count=0;
let interval;

function colShift()
{
    if(count===60){
        count=0;
    }
    box.forEach((e,i)=>{
        if(count===i)
        {
            box[i].style.backgroundColor=`rgb(${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)})`;
        }
        else
        {
            box[i].style.background=`white`;
        }
    });
    count++;
//    let c= count++;
//    console.log(c)
}

startBtn.addEventListener('click',()=>{
    if(!interval){
        interval=setInterval(colShift,500)
    }
})
stopBtn.addEventListener('click',()=>{
    clearInterval(interval);
    interval=undefined
})
