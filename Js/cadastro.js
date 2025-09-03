window.document.addEventListener("DOMContentLoaded",()=>{

    //pego a lista de usario no meu "bando de dados" caso ela for null  eu crio um novo array
    const arrayListaUsuarios = JSON.parse(window.localStorage.getItem("lista_usuarios")) || new Array

    window.document.getElementById("formulario").addEventListener("submit",e =>{
        e.preventDefault()

        const stringNome = window.document.getElementById("nome").value
        const stringEmail = window.document.getElementById("email").value
        const stringSenha = window.document.getElementById("senha").value
        const stringConfirmarSenha = window.document.getElementById("confirmar_senha").value
            
        // a validação do @ no email e feita pelo propio html assim com se ele esta vasio ou nao 
        // a validação se o nome e vasio o nao tbm foi feito pelo propio html usando 



        // nao presisa verificar se o confirmar senha e menor que 8 caracteres
        // pois vou verificar se ele e igual a senha  logo ele e maior que 8
        
        for(let objetoUsuario of arrayListaUsuarios){
            if(stringEmail === objetoUsuario.email){
                alert("esse email ja foi cadastrado")
                return
            }
        }
        if(stringSenha.length < 8){
            alert("A senha presisar ter 8 ou mais caracteres")
            return
        }
        if(stringConfirmarSenha !== stringSenha){
            alert("Senhas diferentes")
            return
        }


        arrayListaUsuarios.push({nome:stringNome,email:stringEmail,senha:stringSenha})
         window.localStorage.setItem("lista_usuarios", JSON.stringify(arrayListaUsuarios)) 
         window.location.href = "login.html"
})
        
    
    
})