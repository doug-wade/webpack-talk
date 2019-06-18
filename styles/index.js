import './style.css';

function component() {
    var element = document.createElement('div');

    element.textContent = 'hello Adies';
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
