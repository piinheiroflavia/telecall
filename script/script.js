  let nome = document.getElementById('nome');
  var resN = document.getElementById('resN');
  var validaNome = false;

  let nascimento = document.getElementById("nascimento");
  var resDn = document.getElementById('resDn'); 
  var validaNascimento = false;

  let materno = document.getElementById("nomeMaterno");
  var resNm = document.getElementById('resNm');
  var validaMaterno = false;

  let cep = document.getElementById("cep");
  var resCep = document.getElementById('resCep');
  var validaCep = false;

  let numero = document.getElementById("numero-casa");
  var resNum = document.getElementById('resNum');
  var validaNum = false;

  let cpfcnpj = document.getElementById("cpfcnpj");
  var resCpf = document.getElementById('resCpf');
  var validaCpfCnpj = false;

  let telefone = document.getElementById("telefone");
  var resTel = document.getElementById('resTel');
  var validaTelefone = false;

  let celular = document.getElementById("celular"); 
  var resCel = document.getElementById('resCel');
  var validaCelular = false;

  let senha = document.getElementById("Senha");
  var resSenha = document.getElementById('resSenha');
  var validaSenha = false;

  let confirma = document.getElementById("confirmar");
  var resConSenha = document.getElementById('resConSenha');
  var validaconSenha = false;

  let email = document.getElementById("email"); 
  var resEmail = document.getElementById('resEmail');
  var validaEmail = false;

  let social = document.getElementById('social')
  var resNs = document.getElementById('resNs');

  let inputCadastro = document.getElementById('input-cadastro')
  var respErro = document.getElementById('respErro');
  var respSucesso = document.getElementById('respSucesso');
  

//DARK MODE
  const checkbox = document.getElementById('checkbox-dark-mode');
//fundo img dos cards
  var fundoCards = document.getElementById('fundo-cards')
//fundo img tela de cadastro

  const theme = window.localStorage.getItem("theme");
  if (theme === "dark") document.body.classList.add("dark");


  function darkMode(){
    document.body.classList.toggle('dark');
    darkMode = true;
    document.getElementsByClassName('fundo-cards').src = 'src = img/fundo.jpeg'; 


    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
      fundoCards.style.backgroundImage= 'none'
      

    } else window.localStorage.setItem("theme", "dark");
     
    };  

  
if (typeof(Storage)!= "undefine"){
  
}else{
  console.log("Sem suporte a web Storage");
}

//INICIO PAGINA DE LOGIN
//VALIDAÇÃO LOGIN E LOCAL STORAGE

validaentraCpfcnpj = false;

 /*CPF E CNPJ*/
$('#entraCpfcnpj').mask('000.000.000-00', {
  onKeyPress : function(entraCpfcnpj, e, field, options) {
    const masks = ['000.000.000-000', '00.000.000/0000-00'];
    const mask = (entraCpfcnpj.length > 14) ? masks[1] : masks[0];
    $('#entraCpfcnpj').mask(mask, options);
  }
});
function entrarValidCpfCnp() {

  if( entraCpfcnpj.value==''){
     entraCpfcnpj.style.borderBlockColor = ' #CA1C2A'
    
     resCpf.style.color = ' red'
    entraCpfcnpj.focus();
    validaentraCpfcnpj = false;
  }else{
    resCpf.style.color = 'black'
    resCpf.innerHTML='CPF ou CNPJ ';	
     entraCpfcnpj.style.borderBlockColor = ' #008000'
    validaentraCpfcnpj = true;
  }
}
function gravar(){

  var entraCpfcnpj = document.getElementById("entraCpfcnpj");
  var resCpf = document.getElementById("resCpf");

  var Senhaa = document.getElementById('Senha');
  var senhaLogin = document.getElementById("senha-login");
  
  let userLogado = JSON.parse(localStorage.getItem('userLogado'))
  let areaCliente = document.getElementsByClassName('cliente')

  let listaUsuarios = []

  let userValid = {

    login: '',
    user:'',
    senha: ''
  }

  listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

  listaUsuarios.forEach((item) => {

    if (entraCpfcnpj.value == item.CpfCnpj && Senhaa.value == item.Senha){
      userValid = {
        login: item.CpfCnpj,
        user: item.Nome,
        senha: item.Senha
       
      }
    }
  })
  console.log(userValid)

  if (entraCpfcnpj.value == userValid.login && Senhaa.value == userValid.senha){
    respErro.setAttribute('style', 'display: bloco');
    respSucesso.innerHTML = '<strong>loading...</strong>';
    respErro.innerHTML ='';

    //token => garante que o usuario esta logado//  só aparece depois do ponto
    let token = Math.random().toString(16).substring(2);
    localStorage.setItem('token', token) ;

    setTimeout(()=>{
      window.location.href= "https://piinheiroflavia.github.io/telecall/index.html"
    }, 3000);

    areaCliente.innerHTML = `Olá ${userLogado.Nome}`;
    
  }else {

    resCpf.setAttribute('style', 'color: red');
    entraCpfcnpj.setAttribute('style', 'border-color: red');
    senhaLogin.setAttribute('style', 'color: red');
    Senhaa.setAttribute('style', 'border-color: red');
    respErro.setAttribute('style', 'display: bloco');
    respErro.style.color= 'red';
    respSucesso.innerHTML = '';
    respErro.innerHTML = 'Usuário não cadastrado';
    entraCpfcnpj.focus()
  }  
}
//fim da pagina de login


//página de cadastro
//ESSAS FUNCÕES VERIFICA SE OS CAMPOS ESTÃO SENDO PREENCHIDOS CORRETAMENTE
function validNome(){
  if(nome.value == ''){
    nome.style.borderBlockColor = ' red'
    resN.innerHTML = 'Nome *';		
    resN.style.color = 'red'
  nome.focus();
  }else if (nome.value.length < 15 || nome.value.length >= 90 ){
    nome.style.borderBlockColor = ' red'
    resN.innerHTML = 'Nome *Insira no min. 15 caracteres';	
    resN.style.fontSize = ' 0.8rem'	
    resN.style.color = 'red';
    validaNome = false;
  }else{
    resN.innerHTML='Nome ';
    resN.style.color = 'black'
    nome.style.borderBlockColor = ' #008000'
    resN.style.fontSize = ' 1.2rem'
    validaNome = true;
}
}

function validNomeSocial() {
  if(social.value == ''){
  resNs.innerHTML = 'Nome Social* ';		
  social.focus();
  }else if (social.value.length < 3 || social.value.length >= 90 ){
    social.style.borderBlockColor = ' red'
    resNs.innerHTML = 'N. Social *Insira no min 3 caracteres';
    resNs.style.fontSize = ' 0.8rem'	
    resNs.style.color = 'red';
  }else{
  resNs.innerHTML='nome social ';
  resNs.style.color = 'black'
  social.style.borderBlockColor = ' #008000'
  resNs.style.fontSize = ' 1.2rem'
}
}

function validNascimento(){
  if(nascimento.value==''){
    nascimento.style.borderBlockColor = ' #CA1C2A'
    nascimento.focus();
    validaNascimento = false;
  }else{
    nascimento.style.borderBlockColor = ' #008000'
    validaNascimento = true;
  }

}

function validMaterno(){
if(materno.value == ''){
  materno.style.borderBlockColor = ' red'
  resNm.innerHTML = 'Materno* ';		
  resNm.style.color = 'red'
  materno.focus();
  validaMaterno = false;
  }else if (materno.value.length < 15 || materno.value.length >= 90 ){
    materno.style.borderBlockColor = ' red'
    resNm.innerHTML = ' *Insira no min. 15 caracteres';
    resNm.style.color = 'red';
    validaMaterno = false;
  }else{
    resNm.innerHTML='Materno ';
    resNm.style.color = 'black'
    materno.style.borderBlockColor = ' #008000'
    validaMaterno = true;
}
}

function validEmail(emaill){

  let ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

   if(email.value==''){
      email.style.borderBlockColor = ' #CA1C2A'
      resEmail.innerHTML ='Email*';		
      resEmail.style.color = ' red'
      email.focus();
      validaEmail = false;
    } else if (!ev.test(emaill)) {
      email.style.borderBlockColor = ' red'
      resEmail.innerHTML = 'Email* Inválido';		
      resEmail.style.color = 'red';
    }else{
        resEmail.style.color = 'black'
        resEmail.innerHTML ='Email ';	
        email.style.borderBlockColor = ' #008000'
        validaEmail = true;
    }
}

/*$(document).ready(function(){
  $('#cep').mask('99 999-999');
});
*/
function validCep(){

  if(cep.value==''){
    cep.style.borderBlockColor = ' #CA1C2A'
    resCep.innerHTML='CEP';		
    resCep.style.color = ' red'
    cep.focus();
    validaCep = false;
  }else{
    resCep.style.color = 'black'
    resCep.innerHTML='CEP ';	
    cep.style.borderBlockColor = ' #008000'
    validaCep = true;
  }
}

function validNumeroCasa(){

  if(numero.value==''){
    numero.style.borderBlockColor = ' #CA1C2A'
    resNum.innerHTML='Nº Casa*';		
    resNum.style.color = ' red'
    numero.focus();
    validaNum = false;
  }else if (email.value.length < 0 ){
    email.style.borderBlockColor = ' red'
    resEmail.innerHTML = 'Nº Casa*';		
    resEmail.style.color = 'red';
  }else{
    resNum.style.color = 'black'
    resNum.innerHTML='Nº Casa';	
    numero.style.borderBlockColor = ' #008000'
    validaNum = true;
  }
}


function validCelular(){

  if(celular.value==''){
    celular.style.borderBlockColor = ' #CA1C2A'
    resCel.innerHTML='Celular *2222222222';		
    resCel.style.color = ' red'
    resCel.style.fontSize = ' 0.8rem'
    celular.focus();
    validaCelular = false;
  }else if (celular.value.length <20 ){
      celular.style.borderBlockColor = ' red'
      resCel.innerHTML = 'Celular *';		
      resCel.style.color = 'red';
    validaCelular = false;
  }else{
    resCel.style.color = 'black'
    resCel.innerHTML='Celular ';		
    celular.style.borderBlockColor = '#008000'
    validaCelular = true;
  }
  
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
}
  /*CPF E CNPJ*/
$('#cpfcnpj').mask('000.000.000-00', {
    onKeyPress : function(cpfcnpj, e, field, options) {
      const masks = ['000.000.000-000', '00.000.000/0000-00'];
      const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
      $('#cpfcnpj').mask(mask, options);
    }
});
function validCpfCnp() {

  if(cpfcnpj.value==''){
    cpfcnpj.style.borderBlockColor = ' #CA1C2A'
    
    resCpf.style.color = ' red'
    cpfcnpj.focus();
    validaCpfCnpj = false;
  }else{
    resCpf.style.color = 'black'
    resCpf.innerHTML='CPF ou CNPJ ';	
    cpfcnpj.style.borderBlockColor = ' #008000'
    validaCpfCnpj = true;
  }
  

}

  /*TELEFONE*/
  $("#telefone")
          .mask("(+99) 99 9999-9999")
          .focusout(function (event) {  
              var target, phone, element;  
              target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
              phone = target.value.replace(/^[0-9.]+$/g, '');
              element = $(target);  
              element.unmask();  
              if(phone.length > 12) {  
                  element.mask("(+99) 99 9999-9999");  
              } else {  
                  element.mask("(+99) 99 9999-9999");  
              }  
          });
function validTelefone(){
  
  if(telefone.value==''){
    telefone.style.borderBlockColor = ' #CA1C2A'
    resTel.innerHTML='Telefone *(+55) 21 9999-9999';		
    resTel.style.color = ' red'
    telefone.focus();
    validaTelefone = false;
  }else if (telefone.value.length < 15 ){
    telefone.style.borderBlockColor = ' red'
    resTel.innerHTML = 'telefone *(+55) 21 9999-9999';		
    resTel.style.color = 'red';
    validaTelefone = false;
  }else{
    resTel.style.color = 'black'
    resTel.innerHTML='Telefone ';		
    telefone.style.borderBlockColor = ' #008000'
    validaTelefone = true;
  }
  

}

function validSenha() {

  if((senha.value=='')||(senha.value.length < 8 )){
    senha.style.borderBlockColor = ' #CA1C2A'
    resSenha.innerHTML='Senha  *Apenas letras';		
    resSenha.style.color = ' red'
    senha.focus();
    validaSenha = false;
  }else{
    resSenha.style.color = 'black'
    resSenha.innerHTML='Senha ';		
    senha.style.borderBlockColor = ' #008000'
    validaSenha = true;
  }
}

function validConfirmaSenha(){

  if((confirma.value == '')||(senha.value != confirma.value)){
    confirma.style.borderBlockColor = ' #CA1C2A'
    resConSenha.innerHTML='Confirmar *As senhas não são iguais';		
    resConSenha.style.color = ' red'
    confirma.focus();
    validaconSenha = false;
  }else{
    resConSenha.style.color = 'black'
    resConSenha.innerHTML='Confirmar Senha ';		
    confirma.style.borderBlockColor = ' #008000'
    validaconSenha = true;
  }
}

//VERIFICAR SE TODOS OS CAMPOS ESTAO VAZIOS ANTES DE CADASTRAR
function validar(){

  if (validaNome && validaNascimento && validaEmail && validaCep && validaNum && validaCpfCnpj && validaCelular && validaTelefone && validaSenha && validaconSenha){

    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsarios') || '[]');

//ADICIONA OS DADOS A UMA LISTA NO LOCAL STORAGE
    listaUsuarios.push( 
      {
        Nome: nome.value,
        Social: social.value,
        Nascimento: nascimento.value,
        Materno: materno.value,
        Email: email.value, 
        Endereco: endereco.value,
        CpfCnpj: cpfcnpj.value,
        Celuar: celular.value,
        Telefone: telefone.value,   
        Senha: senha.value,
        Confirma: confirma.value,
      }
    )
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios))
    
    respErro.setAttribute('style', 'display: bloco', 'color: #0C4B77')
    respSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>'
    respErro.innerHTML =''
//AO CADASTRAR REDIRECIONA A OUTRA PÁGINA
    setTimeout(()=>{
      window.location.href= "https://piinheiroflavia.github.io/telecall/login/index.html"
    }, 3000)
    
  }else{
    respErro.setAttribute('style', 'display: bloco', 'color: #0C4B77')
    respSucesso.innerHTML = ''
    respErro.innerHTML = 'Preencha todos os campos corretamente'
    respErro.style.color = 'red'

  }
     
}

//APENAS LETRAS NA SENHA
function ApenasLetras(e, t) {
  try {
      if (window.event) {
          var charCode = window.event.keyCode;
      } else if (e) {
          var charCode = e.which;
      } else {
          return true;
      }
      if (
        (charCode > 64 && charCode < 91) || 
        (charCode > 96 && charCode < 123) ||
        (charCode > 191 && charCode <= 255) // letras com acentos
        ){
          return true;
        } else {
          return false;
        }
      } catch (err) {
        alert(err.Description);
      }
    }
    
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

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}