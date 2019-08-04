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

     } else {
       alert("Insira um número para efetuar o cálculo")
     }
  });

});