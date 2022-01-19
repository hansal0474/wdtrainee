let inputdata = document.getElementById("todoinputid");
let buttonname = document.getElementById("enter");
inputdata.addEventListener("keyup", e =>{
    e.preventDefault();
    if(e.key === "Enter"){
        add();
    }
})




function add() {
    let inputdata = document.getElementById("todoinputid").value;

    if (inputdata === "") {
        alert("ENTER THINGS TO DO")  
    }else{
        addfunction();
    }
    function addfunction() {
        //input data
        let inputdata = document.getElementById("todoinputid").value;
        //list value
        const listitem = document.createElement("li");
        const itemvalue = document.createTextNode(inputdata);
        listitem.appendChild(itemvalue);

        //list selection
        const list = document.getElementById("list");
        list.appendChild(listitem);
        //deletebutton
        const deletebutton = document.createElement("button");
        const buttonvalue = document.createTextNode("delete");
        deletebutton.appendChild(buttonvalue);
        const buttonstore = document.getElementById("buttondata");
        buttonstore.appendChild(deletebutton);
        //delete list
        deletebutton.onclick = function () {
            listitem.style.display = "none";
            deletebutton.style.display = "none";
        }
        document.getElementById("todoinputid").value = "";


        //css by javascript
        deletebutton.style.color = "gray"; 
        deletebutton.style.borderRadius = "10px";
        deletebutton.style.padding = "5px";
        deletebutton.style.border = "none";
        deletebutton.style.display = "block";
        deletebutton.style.height = "30px";
        deletebutton.style.width = "50px";
        deletebutton.style.marginTop = "10px";
        listitem.style.height = "30px";
        listitem.style.width = "50px";
        listitem.style.marginTop = "10px";  
    }   
}