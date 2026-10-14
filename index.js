let btn=document.querySelector("button");
let inputs=document.querySelectorAll("input");
btn.addEventListener("click",function(){
    for(x of inputs)
    {
        console.log(x.value);
    }
})