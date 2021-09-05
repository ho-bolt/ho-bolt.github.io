
const ToDoFrom=document.getElementById("ToDoForm");
const ToDoList=document.getElementById("ToDoList");

let ToDos=[];//비어있기 때문에 새로 덮어쓴다. 예전에 todolist를 가지고 있는 않는다. 

//삭제 함수 
function DeleteToDo(event){
    const li=event.target.parentElement;
    //클락한(삭제하고 싶은 li)
    //누가 클릭되어있는 지 알게 해준다. targer.parentElement
    //하지만 지금은 어떤 텍스트를 지워야하는 지 db에서 모른다. 
    li.remove();
    ToDos=ToDos.filter(toDo=>toDo.id !== parseInt(li.id));
    saveToDo();
}

//submitted된 거 작성하는 함수
function printToDoList(NewTodo){

    const li=document.createElement("li");
    li.id=NewTodo.id;
    const span=document.createElement("span");
    span.innerText=NewTodo.text;
    const button=document.createElement("button");
    button.innerText="  ✖";
    button.addEventListener("click",DeleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    ToDoList.appendChild(li);

}

function saveToDo(){
    localStorage.setItem("ToDos",JSON.stringify(ToDos)); 
    //string으로    JSON.parse로 살아있는 object로 만들 수 있다. 
}
const ToDos_Key="ToDos";

//todo적으면 submit하는 함수
function hanldeToDoSubmit(event){
    event.preventDefault();
    const ToDoInput=ToDoFrom.querySelector("input");
    const NewTodo=ToDoInput.value;
    ToDoInput.value="";
    const NewToDoObj={
        text: NewTodo,
        id : Date.now(),
    };
    ToDos.push(NewToDoObj);//array에 push 이것을 localstorge에 넣어야 함 
    printToDoList(NewToDoObj);
    saveToDo();

}

ToDoFrom.addEventListener("submit",hanldeToDoSubmit);
//localStoragedml id로 가져온다. 
const savedToDos=localStorage.getItem(ToDos_Key);

//parse에서 event를 사용할 수 있는 것처럼 item을 사용할 수 있다. 
if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    ToDos=parsedToDos;//[]에 예전 꺼 넣어둠
    parsedToDos.forEach(printToDoList);
    //localStorage에 있는 object를 요소 개수만큼 printToDoList 함수를 실행한다. 
    //그러나 이러면 새로운 걸 작성하면 덮어쓴다. 

}

