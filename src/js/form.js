const inputs = document.querySelectorAll('.input')
const form = document.querySelector('form')

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value !== "") {
            input.classList.add('preenchido')
            input.classList.remove('nao-preenchido')
            input.nextElementSibling.classList.remove('nao-preenchido')
        } else {
            input.classList.remove('preenchido')
        }
    })
})

form.addEventListener('submit', event => {
    event.preventDefault()

    inputs.forEach(input => {
        const campoObrigatorio = input.nextElementSibling

        if(input.value === ""){
            input.classList.add('nao-preenchido')
            input.classList.remove('preenchido')
            campoObrigatorio.classList.add('nao-preenchido')
        }else {
            input.classList.remove('nao-preenchido')
            campoObrigatorio.classList.remove('nao-preenchido')
        }
    })
})