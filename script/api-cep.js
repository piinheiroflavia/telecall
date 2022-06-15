'use strict';

const limparFormulario = (endereco) => {
    
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherFormulario = (endereco) => {
    limparFormulario();
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep = 8 && eNumero(cep);


const pesquisarCep = async( ) => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    
    if(cepValido(cep)){

        const url = `https://viacep.com.br/ws/${cep}/json/`;
    //recebendo do fetch
        const dados = await fetch(url);
    //pegando os dados e aplicando o json
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado'
        }else{
            preencherFormulario(endereco);
        }

    }

   
    
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
