let url="https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"

function converter(){
    let input= document.getElementById("dolar")
    let valueInput= input.value

    fetch(url).then((resposta)=>{
    
        return resposta.json()
    }).then((data)=>{
        let dados=data.BRLUSD.high
        let brlInput= document.getElementById("real")
        let conta= dados*valueInput
        brlInput.value =  conta.toFixed(2)

        if(valueInput==""){
            alert("Digite um Número para converter")
            brlInput.value="Digite um valor no dólar"
        }
    })
    
}
