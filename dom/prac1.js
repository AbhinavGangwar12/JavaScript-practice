let inputBox = document.getElementById('input-box');
let inputBtn = document.getElementById('input-btn');

let ul = document.createElement('ul');
document.body.appendChild(ul);

inputBtn.addEventListener('click', () => {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert('Enter some task');
        return;
    }

    // Create elements
    let li = document.createElement('li');

    let span = document.createElement('span');
    span.innerText = taskText;

    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';

    // Delete logic
    delBtn.addEventListener('click', () => {
        li.remove();
    });

    // Edit logic
    editBtn.addEventListener('click', () => {
        if (editBtn.innerText === 'Edit') {
            let input = document.createElement('input');
            input.value = span.innerText;

            li.replaceChild(input, span);
            editBtn.innerText = 'Save';
        } else {
            let input = li.querySelector('input');
            span.innerText = input.value.trim() || span.innerText;

            li.replaceChild(span, input);
            editBtn.innerText = 'Edit';
        }
    });

    // Build structure
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    ul.appendChild(li);
    inputBox.value = "";
});
