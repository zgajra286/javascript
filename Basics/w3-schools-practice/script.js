const form = document.getElementById('form-input');
const input = document.getElementById('age-input');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
const age = Number(input.value);

if (age >= 18){
    result.innerHTML = 'You are an adult.';
}
else{
    result.innerHTML = 'You are not an adult.';
}

}


);