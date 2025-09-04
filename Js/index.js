window.document.addEventListener("DOMContentLoaded",()=>{
 
    // se a pessoa nao estiver logada ele vai ser redirecionado para pagina de login
    if(window.localStorage.getItem("logado") !== "S"){
        window.location.href = "Login.html"
        return
    }

    // se a pessoa tiver logada eu começo o codigo

    const arrayStringListaNomes = JSON.parse(window.localStorage.getItem("nomes")) || []
    const elementoHtmlTela = window.document.getElementById("tela")

    const atualisar = () => {
        localStorage.setItem("nomes",JSON.stringify(arrayStringListaNomes))
        let stringHtml = ""
        for(let stringNome of arrayStringListaNomes){
            stringHtml  += ` <tr> <td> ${stringNome} </td></tr>` 
        }
        elementoHtmlTela.innerHTML = stringHtml
    }

    // se a pesso tiver logado eu ja mostro a lista de  nomes e continuo com o codigo
    atualisar()
        
    window.document.getElementById("formulario").addEventListener("submit", e=>{
        e.preventDefault()
    
        const nome = window.document.getElementById("nome").value.trim()

        if (arrayStringListaNomes.indexOf(nome)  != -1 ){
            alert("esse nome ja existe")
            return
        }
        // -> 
        if(nome == "" || nome == null){
            alert("digite um nome valido")
            return
        }

        arrayStringListaNomes.push(nome)

        atualisar()
    })
    
    window.document.getElementById("remover").addEventListener("click",()=>{
        const nome = window.document.getElementById("nome").value.trim()

        if (arrayStringListaNomes.indexOf(nome)  == -1 ){
            alert("esse nome nao existe")
        }

        arrayStringListaNomes.splice(arrayStringListaNomes.indexOf(nome),1)
        
        atualisar()
    })

})
