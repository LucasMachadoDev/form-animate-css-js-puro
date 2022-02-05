const form = document.querySelector('.form__login'),
    btnLogin = document.querySelector('.btn__login'),
    inputs = [...document.querySelectorAll('.input__login')];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(index => {
        (index.value == '')? form.classList.add('validate__error') : false;
    })

    const formError = document.querySelector('.validate__error');

    if(formError) {
        formError.addEventListener('animationend', e => {
            if(e.animationName == 'shake') {
                formError.classList.remove('validate__error')
            }
        })
    } else {
        form.classList.add('formHide');
    }
})
form.addEventListener('animationend', () => {
    (form.classList.contains('formHide'))? form.style.display = 'none' : false;
})

const squares = document.querySelector('.squares');

for (let i = 0; i < 11; i++) {
    const li = document.createElement('li');
    li.classList.add('squares__item')

    const random = (min, max) => Math.random() * (max - min) + min;
    const size = Math.floor(random(10, 120)),
        position = random(1, 99),
        delay = random(1, 5),
        durantion = random(10, 20);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${durantion}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`
    
    squares.appendChild(li)
}