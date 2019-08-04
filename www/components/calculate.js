$(function(){
  var v1, v2, op;

  // Inserção dos valores nos campos de texto
  $("button[name=btn]").click(function(){
      $("#visor").val($("#visor").val() + $(this).val());
  });

  // Função Limpar
  $("button[name=ce]").click(function(){
    $("#visor").val('');
    $("#op").text('');
  });

  // Função Apagar Caracteres
  $("button[id=del]").click(function(){
    var len = $("#visor").val().length;
    var valor = $("#visor").val();
    valor = valor.replace(valor.charAt(len - 1), "");
    $("#visor").val(valor);
  });

  // Operação: Soma
  $("button[id=add]").click(function(){
     if($("#visor").val() != ''){
       v1 = parseFloat($("#visor").val());
       $("#visor").val('');
       op = "soma";
       $("#op").text($(this).val());
     } else {
       alert("Insira um número para efetuar a operação!")
     }
  });

  // Operação: Subtração
  $("button[id=subtract]").click(function(){
     if($("#visor").val() != ''){
       v1 = parseFloat($("#visor").val());
       $("#visor").val('');
       op = "menos";
       $("#op").text($(this).val());
     } else {
       alert("Insira um número para efetuar a operação!")
     }
  });

  // Operação: Multiplicação
  $("button[id=multiply]").click(function(){
     if($("#visor").val() != ''){
       v1 = parseFloat($("#visor").val());
       $("#visor").val('');
       op = "vezes";
       $("#op").text($(this).val());
     } else {
       alert("Insira um número para efetuar a operação!")
     }
  });

  // Operação: Divisão
  $("button[id=divide]").click(function(){
     if($("#visor").val() != ''){
       v1 = parseFloat($("#visor").val());
       $("#visor").val('');
       op = "divisao";
       $("#op").text($(this).val());
     } else {
       alert("Insira um número para efetuar a operação!")
     }
  });

  // Operação: Raiz Quadrada
  $("button[id=sqrt]").click(function(){
     if($("#visor").val() != ''){
       v1 = parseFloat($("#visor").val());
       $("#visor").val('');
       op = "raiz";
       $("#op").text($(this).val());
     } else {
       alert("Insira um número para efetuar a operação!")
     }
  });

   // Operação: Elevado a dois
  $("button[id=elevado]").click(function(){
     if($("#visor").val() != ''){
       v1 = parseFloat($("#visor").val());
       $("#visor").val('');
       op = "elevado";
       $("#op").text($(this).val());
     } else {
       alert("Insira um número para efetuar a operação!")
     }
  });
 
  // IGUAL
  $("button[id=equals]").click(function(){
     if($("#visor").val() != ''){
       v2 = parseFloat($("#visor").val());
       
       if(op == "soma"){
         $("#visor").val(v1 + v2);
       }

       if(op == "menos"){
         $("#visor").val(v1 - v2);
       }

       if(op == "vezes"){
         $("#visor").val(v1 * v2);
       }

       if(op == "divisao"){
         $("#visor").val(v1 / v2);
       }

       if(op == "raiz"){
         $("#visor").val(Math.sqrt(v1));
       }

       if(op == "elevado"){
         $("#visor").val(Math.pow(v1, 2));
       }

     } else {
       alert("Insira um número para efetuar o cálculo")
     }
  });

});