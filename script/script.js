/*LOGIN CPF E CNPJ*/
$('#cpfcnpj').mask('000.000.000-00', {
    onKeyPress : function(cpfcnpj, e, field, options) {
      const masks = ['000.000.000-000', '00.000.000/0000-00'];
      const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
      $('#cpfcnpj').mask(mask, options);
    }
  });

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

