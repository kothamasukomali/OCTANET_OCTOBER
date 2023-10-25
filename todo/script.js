let pendingTasks=[];
let completeTasks=[];
const taskInput=document.getElementById('add');

const addTask=()=>{
    const text=taskInput.value.trim();
    if(text!==''){
        pendingTasks.push(text);
        renderPendingTasks();
        taskInput.value='';
        taskInput.focus()
    }else{
        alert("enter your task!")
        taskInput.focus()
    }

}
const renderPendingTasks=()=>{
    const pendingList=document.getElementById('pendingList');
    const exist=pendingList.querySelectorAll('li');
    exist.forEach(task=>task.remove());
    for(let i=0;i<pendingTasks.length;i++){
        const tasktext=pendingTasks[i];
        const newtask=document.createElement('span');
        newtask.innerHTML=`
        <li>${tasktext}
        <div><i class="fa-solid fa-circle-check" onclick='completeTask(${i})'></i>
        <i class="fa-solid fa-pen" onclick='editTask(${i})'></i>
        <i class="fa-solid fa-trash-can"onclick="deleteTask('pending',${i})"></i>
        </div>
        </li>
        `;
        pendingList.appendChild(newtask);
      
      
    }

}
function editTask(index){
    const tasktext=prompt('Edit the task:',pendingTasks[index]);
    if(tasktext!==null){
        pendingTasks[index]=tasktext;
        renderPendingTasks();
        
    }

}
function completeTask(index){
    const tasktext=pendingTasks[index];
    pendingTasks.splice(index,1);
    completeTasks.push(tasktext);
    renderPendingTasks();
    renderCompletedTasks();

}
function deleteTask(listType,index){
    if(listType==='pending'){
        pendingTasks.splice(index,1);
        renderPendingTasks();
    }else if(listType==='completed'){
        completeTasks.splice(index,1);
        renderCompletedTasks();
    }


}
function   renderCompletedTasks(){
    const completeList=document.getElementById('completeList');
    const exist=completeList.querySelectorAll('li');
    exist.forEach(task=>task.remove());
    for(let i=0;i<completeTasks.length;i++){
        const tasktext=completeTasks[i];
        const newtask=document.createElement('span');
        newtask.innerHTML=`
        <li>${tasktext}
       <div>
        <i class="fa-solid fa-trash-can"onclick="deleteTask('completed',${i})"></i>
        </div>
        </li>
        `;
        completeList.appendChild(newtask);
   
        
    }
}

document.getElementById("btn").addEventListener('click',addTask);
document.getElementById("add").addEventListener('keyup',function(event){
    if(event.key=='Enter'){
        addTask();
    }

});