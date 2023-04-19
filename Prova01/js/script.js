const start = () => {

    const submitBtn = document.getElementById("submit")

    submitBtn.onclick = function(){
        const nome = document.getElementById("n1").value;
        const sobrenome = document.getElementById("n2").value;
        
        if(nome != "" && sobrenome != ""){
            const fullname = document.getElementById("fullName");
            fullname.innerText = nome + " " + sobrenome
            
        } else {
            alert("Não foi possivel enviar!!! Existe entradas vazias...")

        }
        console.log(inputNome)
        console.log(inputSobrenome)

    }


}

//alert("connected")
start();