//var minhaPromisse = function(){
//    return new Promise(function(resolve,reject){
//        var xhr = new XMLHttpRequest();
//        xhr.open('GET','https://api.github.com/users/diego3g');
//        xhr.send(null);
//
//        xhr.onreadystatechange = function(){
//            if(xhr.readyState === 4){
//                if(xhr.status === 200){
//                    resolve(JSON.parse(xhr.responseText));
//                } else {
//                    reject('Erro na Requisição');
//                }
//            }
//        }
//    })
//}
//
//minhaPromisse()
//.then(function(response){
//    console.log(response);
//})
//.catch(function(error){
//    console.warn(error);
//});

function checaIdade(idade){
    return new Promise(function(resolve,reject){
        if(idade > 18){
            resolve();
        } else {
            reject();
        }
    })
}

var teste = checaIdade(18)
.then(function(){
    setTimeout(function(){ console.log('Maior que 18'); }, 2000);
})
.catch(function(){
    setTimeout(function(){ console.log('Menor que 18'); }, 2000);
})

var listaTodosNomes = [];
var botaoAdicionar = document.querySelector('button');
botaoAdicionar.onclick = function(){
    return new Promise(function(resolve,reject){
        var listaNomes = document.querySelector('ul');
        var nomeBusca = document.querySelector('input').value;
        var nome = document.createElement('li');
        
        nome.innerText = 'Carregando...';
        listaNomes.appendChild(nome);
        listaTodosNomes.push(nomeBusca);

        setTimeout(function(){ 
            for(cadaNome of listaTodosNomes){
                nome.innerText = cadaNome;
                listaNomes.appendChild(nome);
            } 
        }, 2000);
        
    })
}

            

