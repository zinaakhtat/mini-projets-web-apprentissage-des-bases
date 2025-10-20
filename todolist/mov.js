let input=document.querySelector("input");
input.focus();
let button=document.querySelector("button");
let container=document.querySelector(".affichage");


button.addEventListener("click",()=>{
    let value=input.value;
 
   if(value!== ""){
     let cheak=document.createElement("input");
     cheak.setAttribute("type","checkbox");
     let drop=document.createElement("i");
     drop.setAttribute("class","fas fa-trash");
     let span=document.createElement("span");
     span.appendChild(cheak);
     span.appendChild(drop);
     let text=document.createElement("span");
     text.innerHTML=value;
     let newele=document.createElement("div");
    
     newele.appendChild(text);
     newele.appendChild(span);
     span.classList.add("span");
     drop.style.color="rgb(93, 238, 190)";
     drop.style.cursor="pointer";
     cheak.style.color="rgb(93, 238, 190)";
     cheak.style.width="22px";
     cheak.style.width="22px";
     text.style.width="700px";
     newele.classList.add("newele");
     
     container.appendChild(newele);
     
     drop.addEventListener("click",(e)=>{
       if(e.target.closest(".newele"))
        e.target.closest(".newele").remove();

     })
      
     cheak.addEventListener("change",()=>{
    
        // newele.classList.toggle("complited");
        newele.style.backgroundColor="aquamarine";
          drop.style.color="rgb(105, 105, 105)";
      
   

     })
   }

})