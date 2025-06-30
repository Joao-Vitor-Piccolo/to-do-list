//DECLARAÇÃO DE VARIAVEIS
let inputEl = document.querySelector("input");
let btnEl = document.querySelector("button");
let tarefas =[];

//FUNÇÃO PARA VALIDAR CAMPO

const validarCampo=()=>{
 let valida = false;
 if(document.getElementById("task").value =="") valida =true;
 return valida;
}


//FUNÇÃO ADIOCINAR TAREFA

function adicionarTarefa(){
    let linha =document.getElementById("task")

    if(validarCampo()){
        //alert("Preencha o campo tarefa")
        Swal.fire({
            icon:"warning",
            title:"Atenção",
            text:"Preencha o campo tarefa",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"Ok"
        })
    }else{
        
        tarefas.push(linha.value)
        linha.value="";
        listarTarefas();
        Swal.fire({
            icon:"success",
            title:"Tarefa Adicionada com Sucesso",
            showConfirmButton:false,
            timer:950
        })
    }
}

//FUNÇÃO LISTAR TAREFAS

function listarTarefas(){
    let valor="";
    for(let i=0; i < tarefas.length;i++){
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}

//FUNÇÃO REMOVER TAREFA

function removerTarefa(){
    Swal.fire({
        icon:"warning",
        title:"Tem certeza que deseja Apagar ?",
        text:"Sua tarefa será apagada",
        showCancelButton:"#3082d6",
        showCancelButton:true,
        cancelButtonColor:"#d33",
        confirmButtonText:"Sim, apagar",
        cancelButtonText:"Cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            tarefas.pop();
            listarTarefas();
            Swal.fire(
                "Apagado",
                "A Tarefa foi apagada da lista",
                "success"
            )
        }
    })
}

inputEl.addEventListener("keypress", (e)=>{
    if(e.key == "Enter") adicionarTarefa();
})
