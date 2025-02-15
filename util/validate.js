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
        errors = getLoginFormErrors(input_nome.value, input_senha.value)
    }
    if(errors.length > 0){
        //se houver erros detectados no array
        e.preventDefault()
    }
    
})

function getSignupFormErrors(nome, email, senha, confirmar_senha){
    let errors = []

    if(nome === '' || input_nome == null){
        errors.push('Insira um nome, por favor!')
        input_nome.parentElement.classList.add('incorrect')
    } 
    if(email === '' || input_email == null){
        errors.push('Insira um endereço de email, por favor!')
        input_email.parentElement.classList.add('incorrect')
    } 
    if(password === '' || input_senha == null){
        errors.push('Insira uma senha, por favor!')
        input_senha.parentElement.classList.add('incorrect')
    } 
}