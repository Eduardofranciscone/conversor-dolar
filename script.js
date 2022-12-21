let url="https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"

function converter(){
    let input= document.getElementById("dolar")
    let valueInput= input.value

    fetch(url).then((resposta)=>{
    
        return resposta.json()
    }).then((data)=>{
        let dados=data.USDBRL.high
        let brlInput= document.getElementById("real")
        brlInput.value = Math.round(dados*valueInput)

        if(valueInput==""){
            alert("Digite um Número para converter")
            brlInput.value="Digite um valor no dólar"
        }
    })
    
}