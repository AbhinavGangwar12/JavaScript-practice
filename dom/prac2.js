// let addBtn = document.getElementById('addNoteBtn')
// let noteInput = document.getElementById('noteInput')
// let inputDiv = document.getElementById('input-div')

// let allBtn = document.getElementById("filterAll")
// let selectPinBtn = document.getElementById("filterPinned")
// let selectUnpinBtn = document.getElementById("filterUnpinned")

// let ul = document.createElement('ul')
// inputDiv.appendChild(ul)

// users = []

// addBtn.addEventListener('click', function () {
//     let value = noteInput.value.trim()
//     if(value === ""){
//         alert('Enter something')
//         return 
//     }

//     // user info
//     let id = users.length + 1
//     let task = value 
//     let isPinned = true
//     let new_user = {
//         'id' : id,
//         'task' : task,
//         'isPinned' : isPinned
//     } 

//     //document related work
//     let li = document.createElement('li')
    
//     let span = document.createElement('span')
//     span.innerText = value 
//     let pinBtn = document.createElement('button')
//     pinBtn.innerText = "Pin"
//     let delBtn = document.createElement('button')
//     delBtn.innerText = "Delete"
//     let editBtn = document.createElement('button')
//     editBtn.innerText = "Edit"
    
//     delBtn.addEventListener('click', function(){
//         li.remove()
//     })
    
//     editBtn.addEventListener('click', function(){
//         // yet to be completed
//         if(editBtn.innerText === 'Edit'){
//             let new_input = document.createElement('input')
//             new_input.id = 'newInput'
//             new_input.innerText = span.innerHTML
//             li.replaceChild(new_input, span)
//             editBtn.innerText = 'Save'
//         }
//         else{
//             let new_input = document.getElementById('newInput')
//             span.innerText = new_input.value.trim() || new_input.innerText
//             new_user.task = span.innerText
            
//             li.replaceChild(span, new_input)
//             editBtn.innerText = 'Edit'
//         }
//     });

//     pinBtn.addEventListener('click', function () {
//         if(pinBtn.innerText === 'Pin'){
//             new_user.isPinned = false
//             pinBtn.innerText = 'Unpin'
//         }
//         else{
//             new_user.isPinned = true 
//             pinBtn.innerText = 'Pin'
//         }
//     })

//     users = [...users, new_user]
//     li.appendChild(span)
//     li.appendChild(pinBtn)
//     li.appendChild(editBtn)
//     li.appendChild(delBtn)

//     ul.appendChild(li)
//     noteInput.innerText = ""


// }, false)
// allBtn.addEventListener('click', function(){
//     let list = document.getElementById('notesList')
//     if(users.length == 0){
//         let li = document.createElement('li')
//         let span = document.createElement('span')
//         span.innerText = "No task to display"
//         li.appendChild(span)
//         list.appendChild(li)
//     }
//     else{
//         // let lists = []
//         for(let i = 0; i < users.length; i++){
//             let newLi = document.createElement('li')
//             newLi.innerText = users[i].task 
//             // lists.push(newLi)
//             list.appendChild(newLi)   
//         }
//     }
//     selectPinBtn.disabled = false
//     selectUnpinBtn.disabled = false
//     allBtn.disabled = true 
// })

// selectPinBtn.addEventListener('click', function(){
//     let list = document.getElementById('notesList')
//     if(users.length == 0){
//         let li = document.createElement('li')
//         let span = document.createElement('span')
//         span.innerText = "No task to display"
//         li.appendChild(span)
//         list.appendChild(li)
//     }
//     else{
//         let flag = false 
//         for(let i = 0; i < users.length; i++){
//             if(users[i].isPinned){
//                 flag = true 
//                 let newLi = document.createElement('li')
//                 newLi.innerText = users[i].task 
//                 list.appendChild(newLi)   
//             }
//         }
//         if(!flag){
//             let li = document.createElement('li')
//             let span = document.createElement('span')
//             span.innerText = "No pinned tasks"
//             li.appendChild(span)
//             list.appendChild(li)
//         }
//     }
    
//     allBtn.disabled = false 
//     selectPinBtn.disabled = true 
//     selectUnpinBtn.disabled = false 
// })
// selectUnpinBtn.addEventListener('click', function(){
//     let list = document.getElementById('notesList')
//     if(users.length == 0){
//         let li = document.createElement('li')
//         let span = document.createElement('span')
//         span.innerText = "No task to display"
//         li.appendChild(span)
//         list.appendChild(li)
//     }
//     else{
//         let flag = false
//         for(let i = 0; i < users.length; i++){
//             if(!users[i].isPinned){
//                 flag = true 
//                 let newLi = document.createElement('li')
//                 newLi.innerText = users[i].task 
//                 list.appendChild(newLi)   
//             }
//         }
//         if(!flag){
//             let li = document.createElement('li')
//             let span = document.createElement('span')
//             span.innerText = "No Un-pinned tasks"
//             li.appendChild(span)
//             list.appendChild(li)
//         }
//     }
    
//     allBtn.disabled = false 
//     selectPinBtn.disabled = false
//     selectUnpinBtn.disabled = true
// })


const addBtn = document.getElementById('addNoteBtn');
const noteInput = document.getElementById('noteInput');
const list = document.getElementById('notesList');

const allBtn = document.getElementById('filterAll');
const pinnedBtn = document.getElementById('filterPinned');
const unpinnedBtn = document.getElementById('filterUnpinned');

let notes = [];
let currentFilter = 'all';

/* ---------- ADD NOTE ---------- */
addBtn.addEventListener('click', () => {
    const text = noteInput.value.trim();
    if (!text) {
        alert('Enter a note');
        return;
    }

    const note = {
        id: Date.now(),
        text,
        isPinned: false
    };

    notes.push(note);
    noteInput.value = '';
    renderNotes();
});

/* ---------- RENDER ---------- */
function renderNotes() {
    list.innerHTML = '';

    let filteredNotes = notes;

    if (currentFilter === 'pinned') {
        filteredNotes = notes.filter(n => n.isPinned);
    } else if (currentFilter === 'unpinned') {
        filteredNotes = notes.filter(n => !n.isPinned);
    }

    if (filteredNotes.length === 0) {
        const li = document.createElement('li');
        li.innerText = 'No notes to display';
        list.appendChild(li);
        return;
    }

    filteredNotes.forEach(note => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.innerText = note.text;

        const pinBtn = document.createElement('button');
        pinBtn.innerText = note.isPinned ? 'Unpin' : 'Pin';

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';

        const delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';

        /* ---- DELETE ---- */
        delBtn.addEventListener('click', () => {
            notes = notes.filter(n => n.id !== note.id);
            renderNotes();
        });

        /* ---- PIN ---- */
        pinBtn.addEventListener('click', () => {
            note.isPinned = !note.isPinned;
            renderNotes();
        });

        /* ---- EDIT ---- */
        editBtn.addEventListener('click', () => {
            if (editBtn.innerText === 'Edit') {
                const input = document.createElement('input');
                input.value = span.innerText;
                li.replaceChild(input, span);
                editBtn.innerText = 'Save';
            } else {
                const input = li.querySelector('input');
                note.text = input.value.trim() || note.text;
                span.innerText = note.text;
                li.replaceChild(span, input);
                editBtn.innerText = 'Edit';
            }
        });

        li.appendChild(span);
        li.appendChild(pinBtn);
        li.appendChild(editBtn);
        li.appendChild(delBtn);

        list.appendChild(li);
    });
}

/* ---------- FILTERS ---------- */
allBtn.addEventListener('click', () => {
    currentFilter = 'all';
    renderNotes();
});

pinnedBtn.addEventListener('click', () => {
    currentFilter = 'pinned';
    renderNotes();
});

unpinnedBtn.addEventListener('click', () => {
    currentFilter = 'unpinned';
    renderNotes();
});
