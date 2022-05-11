/*LOGIN CPF E CNPJ*/
$('#cpfcnpj').mask('000.000.000-00', {
    onKeyPress : function(cpfcnpj, e, field, options) {
      const masks = ['000.000.000-000', '00.000.000/0000-00'];
      const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
      $('#cpfcnpj').mask(mask, options);
    }
});

//function feedback(){
// 
//}

function validar(){
	var nome = document.getElementById('#nome')
	var social = document.getElementById("#nome-social");
	var nascimento = document.getElementById("#data-nascimento");
	var sexo = document.getElementById("#sexo");
	var senha= document.getElementById("#senha");
	var confirma= document.getElementById("#confirma");
	var res = document.getElementById('#res');

   alert('ola')
	if(nome.value==''){
		res.innerHTML='Mensagem de Erro:O campo nome é obrigatório';
	
	
	}
	
	else if(social.value==''){
    res.innerHTML='Mensagem de Erro:O campo endereço é obrigatório';
	
	}
	
	else if(nascimento.value=='0'){
    res.innerHTML= 'Mensagem de Erro:O campo formação é obrigatório';
	
	
	}
	
	else if(sexo.value==''){
    res.innerHTML= 'Mensagem de Erro:O campo login é obrigatório';
	
		
	}
	
	else if(senha.value==''){
    res.innerHTML= 'Mensagem de Erro:O campo senha é obrigatório';
	
	
	}
	
	else if(senha.value!=confirma.value){
		res.innerHTML='Mensagem de Erro:Os campos senha e confirma senha devem ser iguais';
	

	}
	else {
		document.formulario.submit();
	}
	
}



//OCULTAR A SENHA
function showPassword() {
  const senha = document.getElementById('Senha');
  const aberto = document.getElementById('lock');
  const fechado = document.getElementById('unlock')

  if (aberto.style.display === 'block'){
    aberto.style.display = 'none';
    fechado.style.display = 'block';
    senha.type = 'text';
  }else{
    aberto.style.display = 'block';
    fechado.style.display = 'none';
    senha.type = 'password';
  }
};

