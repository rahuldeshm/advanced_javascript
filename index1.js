
var addItem = document.getElementById("addForm");
var ulList=document.getElementById('items');
var lList = document.querySelectorAll("li")
for (var i =0;i<lList.length;i++){
    var editbutton = document.createElement("button");
    editbutton.className="btn btn-danger btn-sm float-right delet";
    editbutton.appendChild(document.createTextNode("Edit"));
    lList[i].appendChild(editbutton)
}
addItem.addEventListener("submit",onSubmit);
ulList.addEventListener("click",remItem);
function onSubmit(e){
    e.preventDefault();
    //CREATING A ELEMENT OF LI
    var newDiv= document.createElement("li");
    newDiv.className="list-group-item";
    //COLLECTING INPUT
    var input= document.getElementById("item").value;
    //ENTERING INPUT IN LI ELEMENT
    newDiv.appendChild(document.createTextNode(input));
    //DELETE BUTTON
    var deletebtn = document.createElement("button");
    //ADD CLASS TO DELETE BUTTON
    deletebtn.className="btn btn-danger btn-sm float-right delete";
    //APPEND TEXT NODE
    deletebtn.appendChild(document.createTextNode('X'));
    //APPEND TEXT NODE
    newDiv.appendChild(deletebtn);
    //EDIT BUTTON APPEND
    var editbutton = document.createElement("button");
    editbutton.className="btn btn-danger btn-sm float-right delet";
    editbutton.appendChild(document.createTextNode("Edit"));
    newDiv.appendChild(editbutton)
    //ADDING ITEM IN UL LIST
    ulList.appendChild(newDiv)
    
    //DELETING VALUE OF ADD ITEMS
    document.getElementById("item").value="";
}
ulList.addEventListener("click",remItem);
function remItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            var li=e.target.parentElement;
            ulList.removeChild(li);
        }
    }
}
