console.log("Welcome");
const imgBox=document.querySelector(".imgBox");
console.log(imgBox);
const box=document.getElementsByClassName("box");

imgBox.addEventListener("dragstart",(e)=>{
    e.target.parentElement.className +=" hold";
    setTimeout(() => {
        e.target.className+="hide";
    }, 0);
});
imgBox.addEventListener("dragend",(e)=>{
    console.log("drag end");
    e.target.className="imgBox";
});
for (let whitbox of box) {
    whitbox.addEventListener("dragover",(e)=>{
        e.preventDefault();       
        console.log("dargover");
    });
    whitbox.addEventListener("dragenter",(e)=>{
        e.target.className="box hold dashed";
        console.log("dargenter");

    });
    whitbox.addEventListener("dragleave",(e)=>{
        e.target.className="box";

    });
    whitbox.addEventListener("drop",(e)=>{
        console.log("drop");
        e.target.append(imgBox);
        e.target.className="box"
       
    });
}