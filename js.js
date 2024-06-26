const form = document.querySelector('.search-form');
const clear = form.querySelector('.clear');
const resalt = document.querySelector('.results-wrapper');
form.querySelector('input').addEventListener('input', () => {
    if (form.querySelector('input').value) {
        clear.style.display = 'flex';
    } else {
        clear.style.display = 'none';
    }
});
document.addEventListener('click', e => {
    if (e.target.closest('.clear')) {
        clear.style.display = 'none';
        form.querySelector('input').value ='';
        resalt.innerText = '';
    }
    if (e.target.closest('.search-form')) {
        return
    } else {
        clear.style.display = 'none';
        resalt.innerText = '';
        form.querySelector('input').value ='';
    }
});