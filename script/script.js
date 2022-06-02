  let nome = document.getElementById('nome');
  let nascimento = document.getElementById("nascimento");

  let materno = document.getElementById("nomeMaterno");
  let endereco = document.getElementById("endereco");
  let cpfcnpj = document.getElementById("cpfcnpj");
  let telefone = document.getElementById("telefone");
  let celular = document.getElementById("celular");
  var res = document.getElementById('res');
  let senha = document.getElementById("Senha");
  let confirma = document.getElementById("confirmar");
  let email = document.getElementById("email");

if (typeof(Storage)!= "undefine"){
  
}else{
  console.log("Sem suporte a web Storage");
}

function gravar(){
  var cpfcnpj = document.getElementById("cpfcnpj").value;
  var senha = document.getElementById('Senha').value
  localStorage.cpfcnpj=cpfcnpj;
  localStorage.Senha=senha;
}
function validar(){
   nome.value
  nascimento.value
  materno.value
  email.value
  endereco.value
  cpfcnpj.value
  celular.value
  telefone.value
  senha.value
  confirma.value

  localStorage.nome=nome;
  localStorage.nascimento=nascimento;
  localStorage.materno=nomeMaterno;
  localStorage.endereco=endereco;
  localStorage.cpfcnpj=cpfcnpj;
  localStorage.telefone=telefone;
  localStorage.celular=celular;
  localStorage.Senha=senha;
  localStorage.confirma=confirma;
  localStorage.email=email;
}
function validar(){

  if(nome.value == ''){
    res.innerHTML+='Mensagem de Erro: O campo NOME é obrigatório';		
    nome.focus();

  }else if(nome.length < 15 && nome.length > 90){
    res.innerHTML+='Mensagem de Erro: O campo NOME é obrigatório';		
        nome.focus();
  }else if(nascimento.value==''){
    res.innerHTML = 'Mensagem de Erro:O campo DATA DE NASCIMENTO é obrigatório';
    nascimento.focus();

  }else if(materno.value==''){
    res.innerHTML ='Mensagem de Erro: O campo NOME MATERNO é obrigatório';
    materno.focus();

  }else if(email.value==''){
    res.innerHTML ='Mensagem de Erro: O campo EMAIL é obrigatório';	
    email.focus();

  }else if(endereco.value==''){
    res.innerHTML ='Mensagem de Erro: O campo ENDEREÇO é obrigatório';
    endereco.focus();

  }else if(cpfcnpj.value==''){
    res.innerHTML ='Mensagem de Erro: O campo CPF ou CNPJ é obrigatório';
    cpfcnpj.focus();

  }else if(celular.value==''){
    res.innerHTML ='Mensagem de Erro: O campo CELULAR é obrigatório';
    celular.focus();

  }else if(telefone.value==''){
    res.innerHTML ='Mensagem de Erro: O campo TELEFONE FIXO é obrigatório';
    telefone.focus();

  }else if(senha.value==''){
    res.innerHTML = 'Mensagem de Erro: O campo SENHA é obrigatório';
    senha.focus();

  }else if(confirma.value==''){
    res.innerHTML = 'Mensagem de Erro: O campo CONFIRMAR SENHA é obrigatório';
    confirma.focus();
  }else if(senha.value != confirma.value){
    res.innerHTML ='Mensagem de Erro: Os campos SENHA e CONFIRMAR SENHA devem ser iguais';
    
  }else{
    document.formulario.submit();
  }
  
}

/*LOGIN CPF E CNPJ*/
$('#cpfcnpj').mask('000.000.000-00', {
    onKeyPress : function(cpfcnpj, e, field, options) {
      const masks = ['000.000.000-000', '00.000.000/0000-00'];
      const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
      $('#cpfcnpj').mask(mask, options);
    }
});
/*TELEFONE*/
$("#telefone")
        .mask("(+99) 99 9999-9999")
        .focusout(function (event) {  
            var target, phone, element;  
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
            phone = target.value.replace(/\D/g, '');
            element = $(target);  
            element.unmask();  
            if(phone.length > 12) {  
                element.mask("(+99) 99 9999-9999");  
            } else {  
                element.mask("(+99) 99 9999-9999");  
            }  
        });
/*CELULAR*/
$("#celular")
        .mask("(+99) 99 9 9999-9999")
        .focusout(function (event) {  
            var target, phone, element;  
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
            phone = target.value.replace(/\D/g, '');
            element = $(target);  
            element.unmask();  
            if(phone.length > 12) {  
                element.mask("(+99) 99 9 9999-9999");  
            } else {  
                element.mask("(+99) 99 99999-9999");  
            }  
        });

//OCULTAR A SENHA
function showPassword() {
  const aberto = document.getElementById('lock');
  const fechado = document.getElementById('unlock');

  if (aberto.style.display === 'block'){
    aberto.style.display = 'none';
    fechado.style.display = 'block';
    senha.type = 'text';
  }else{
    aberto.style.display = 'block';
    fechado.style.display = 'none';
    senha.type = 'password';
  }
}
function showPassword2() {
  const aberto2 = document.getElementById('lock2');
  const fechado2 = document.getElementById('unlock2');
  
  if (aberto2.style.display === 'block'){
    aberto2.style.display = 'none';
    fechado2.style.display = 'block';
    confirma.type = 'text';
  }else{
    aberto2.style.display = 'block';
    fechado2.style.display = 'none';
    confirma.type = 'password';
  }
}


/*NAVBAR*/
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks,dropdown2) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.dropdown2 = document.querySelector(dropdown2)
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.3s ease forwards ${
            index / 5 + 0.3
          }s`
          );
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.dropdown2.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.dropdown2.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
  init() {
    if (this.dropdown2) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".dropdown2"
);
mobileNavbar.init();