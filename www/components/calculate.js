$(function(){
  // Inserção dos valores nos campos de texto
  $("button[name=btn]").click(function(){
      $("#visor").val($("#visor").val() + $(this).val());
  });

  $("button[name=ce]").click(function(){
    $("#visor").val('');
  });

});