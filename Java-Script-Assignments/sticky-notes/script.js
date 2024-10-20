let btn = document.getElementById("button");
let text = document.getElementById("text-area");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
let msg = document.getElementById("msg");


function addNotes(){
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    // cross_btn.classList.add(crs);

    

    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;

    if(text.value==""){
        alert("Empty");
        return;
    }
    else{
        notes_container.appendChild(div);
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.width = "30%";
        div.style.height = "15rem";
        div.style.margin = "1rem"; 
        msg.style.display = "none";
    // console.log(div);
    }
    

    cross_btn.addEventListener("click",function(){
        // console.log("jyfjdhgjd");
        div.style.display = "none";
    })

    
}

btn.addEventListener("click" , addNotes);


