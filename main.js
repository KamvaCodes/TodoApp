//get all the elements
let addNewTask = document.getElementById('newtask')
let addTaskBtn = document.getElementById('addTaskBtn')
let form = document.getElementById('taskform')
let tasklist = document.getElementById('tasks')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const task = addNewTask.value


    if(!task)
    {
        alert("PLease enter a task")
    }

    else{
        const task_element = document.createElement('div')
        task_element.id = "task"
        
    
        const content = document.createElement('div')
        content.id = 'content'
    
        task_element.appendChild(content)
    
        const taskinput = document.createElement('input')
        taskinput.id = 'text'
        taskinput.type = "text"
        taskinput.value = task
    
        taskinput.setAttribute('readonly', 'readonly')
    
        content.appendChild(taskinput)
    
        tasklist.appendChild(task_element)

        const actions = document.createElement('div')
        actions.id = 'actions'

        const deleteBTN = document.createElement('button')
        deleteBTN.classList.add('delete')
        deleteBTN.innerHTML = "Delete"
        const editBTN = document.createElement('button')
        editBTN.classList.add('edit')
        editBTN.innerHTML = "Edit"

        actions.appendChild(editBTN)
        actions.appendChild(deleteBTN)


        task_element.appendChild(actions)

        tasklist.appendChild(task_element)

        addNewTask.value = ''

        deleteBTN.addEventListener('click', ()=> {
            tasklist.removeChild(task_element)
        })

        editBTN.addEventListener('click', ()=>{
          if(editBTN.innerText.toLowerCase() == "edit")
          {
            taskinput.removeAttribute("readonly")
            taskinput.focus()
            editBTN.innerHTML = 'Save'
          }
          else{
            taskinput.setAttribute('readonly', 'readonly')
            editBTN.innerText = "Edit"
          }
        })
    }
})
