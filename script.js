const pass = document.querySelector('#password');
const text = document.querySelector('.pass_text');
const specialSigns = document.querySelector('.special_signs');
const signs = document.querySelector('.signs');

const passLength = 10;
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;

const showMsg = () => {
    if(pass.value.length >= passLength && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        text.textContent = 'Masz bardzo mocne hasło'
        text.style.color = '#008080'
    } else if(pass.value.length >= passLength && pass.value.match(letters) && pass.value.match(numbers)) {
        text.textContent = 'Masz dobre hasło'
        text.style.color = '#9ACD32'
    } else {
        text.textContent = 'Zmień hasło'
        text.style.color = '#FF0000'
    }
}

const changePass = () => {
    if(pass.value !== '') {
        showMsg()
    } else {
        text.textContent = 'Nie wpisałeś hasła'
        text.style.color = ''
    }
}

const showSigns = () => {
    signs.style.opacity = '1'
} 

const hiddenSigns = () => {
    signs.style.opacity = '0'
}


pass.addEventListener('keyup', changePass)
specialSigns.addEventListener('mouseenter', showSigns)
specialSigns.addEventListener('mouseleave', hiddenSigns)