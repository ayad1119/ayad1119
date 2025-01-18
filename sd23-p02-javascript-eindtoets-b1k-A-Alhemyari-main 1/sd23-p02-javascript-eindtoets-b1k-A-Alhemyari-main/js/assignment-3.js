console.log("--- Page 3 ---");
// Opdracht 3a 
const btn = document.querySelector('.btn-check')
btn.addEventListener('click', function () {
    const inputField = document.querySelector('.txt-input');
    if (inputField.value.trim() === '') {

        inputField.classList.add('green');
    } else {
        inputField.classList.remove('red');
    }
});
