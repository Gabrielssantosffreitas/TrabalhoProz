window.document.addEventListener("DOMContentLoaded",()=>{
    window.document.getElementById("formulario").addEventListener("submit",e =>{
        e.preventDefault()
        const arrayObjetosUsuarioListaDeUsuario = JSON.parse( window.localStorage.getItem("lista_usuarios")) 
        const stringEmail = window.document.getElementById("email").value
        const stringSenha = window.document.getElementById("senha").value

        // O HTML ja verifica se a senha e vasia tbm ja faz a verificacao do email 
        // nao verifico se a senha e menor que 8 pois nao existe registro no meu banco de dados com senha menor que 8
        // e se mais para frente a regra de negocio mudar eu nao preciso mecher em dois lugares.

        if(arrayObjetosUsuarioListaDeUsuario == null || arrayObjetosUsuarioListaDeUsuario == ""){
            alert("Nao  ha nenhum cadastro no banco de dados por favor cadastre-se ")
            return
        }

        for(let objeto of  arrayObjetosUsuarioListaDeUsuario){
            if(objeto.senha == stringSenha && objeto.email == stringEmail){
                localStorage.setItem("logado","S")
                window.location.href = "index.html"
            }else{
                alert("nao existe esse usuario ou a senha esta incorreta")
                break
            }
        }
        

    })
    
})