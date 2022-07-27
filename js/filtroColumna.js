/* Este filtro busca filtrar las columnas de una tabla. Las filas de la tabla 
deben ser "searchable"*/


$(document).ready(function() {

    $(".btn-group > .btn").on("click", function() {
      var letter = $(this).text();
      $(".searchable tr td:nth-child(2)").each(function() {
        $(this).parent().show();
        if (!$(this).text().indexOf(letter) == 0 && letter !== 'Todos') {
          $(this).parent().hide();
        }
      });
    });
  
  });