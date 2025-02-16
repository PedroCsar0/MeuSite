const form = document.getElementById('form')
const input_nome = document.getElementById('input_nome')
const input_email = document.getElementById('input_email')
const input_senha = document.getElementById('input_senha')
const input_confirmarsenha = document.getElementById('input_confirmarsenha')
const mensagem_erro = document.getElementById('mensagem_erro')

form.addEventListener('submit', (e) => {
    //e.preventDefault() -> Impedir o envio do formulário

    let errors = []

    if(input_nome){
        //se existir um input "nome", quando no formulário
        errors = getSignupFormErrors(input_nome.value, input_email.value, input_senha.value, input_confirmarsenha.value)
    }
    else{
        //se não existir input "nome", na página "login"
        errors = getLoginFormErrors(input_email.value, input_senha.value)
    }
    if(errors.length > 0){
        //se houver erros no array
        e.preventDefault()
        mensagem_erro.innerText = errors.join(". ")
    }
    
})

function getSignupFormErrors(nome, email, password, confirmar_senha){
    let errors = []

    if(nome === '' || nome == null){
        errors.push('Insira um nome')
        input_nome.parentElement.classList.add('incorrect')
    } 
    if(email === '' || email == null){
        errors.push('Insira um endereço de email')
        input_email.parentElement.classList.add('incorrect')
    } 
    if(password === '' || password == null){
        errors.push('Insira uma senha')
        input_senha.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push('A senha precisa ter pelo menos 8 caracteres')
        input_confirmarsenha.parentElement.classList.add('incorrect')
    }
    if(password !== confirmar_senha){
        errors.push('As senhas não correspondem')
        input_senha.parentElement.classList.add('incorrect')
        input_confirmarsenha.parentElement.classList.add('incorrect')
    }
    
    return errors;
}

const allInputs = [input_nome, input_email, input_senha, input_confirmarsenha]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            mensagem_erro.innerText = ''
        }
    })
})