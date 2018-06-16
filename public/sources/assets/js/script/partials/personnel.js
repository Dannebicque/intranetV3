$(document).on('keyup', '#login_urca', function() {
  var $val = $(this).val();
  console.log($val);
  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {needle: $val}),
      dataType: 'json',
      success: function(data) {
        $('#result').empty();
        jQuery.each(data, function (index, pers) {
          var html = "<tr>" +
            "<td>"+pers.nom+"</td>" +
            "<td>"+pers.prenom+"</td>" +
            "<td>"+pers.username+"</td>" +
            "<td>"+pers.mail_univ+"</td>" +
            "<td><a href=\"#\" class=\"btn btn-success btn-outline btn-square addpersonnel\" data-provide=\"tooltip\" data-placement=\"bottom\" title=\"Ajouter à la formation\" data-slug=\""+pers.slug+"\"><i class=\"ti-plus\"></i></a></td>" +
            "</tr>";
          $('#result').append(html);
        });
      }
    })
  }
});

$(document).on('click', '.addpersonnel', function(){
  $.ajax({
    url: Routing.generate('api_personnel_add_to_formation', {slug: $(this).data('slug')}),
    dataType: 'json',
    success: function(data) {
      $(this).remove();
    }
  })
});

$(document).on('click', '.personnel_index_change', function(){
  $('.personnel_index_change').removeClass('active show');
  $(this).addClass('active show');
  var table = $('#tableau').DataTable();
  table.clear(); //effacer le datatable
  table.destroy(); //supprimer le datatable
  $.ajax({
    url: Routing.generate('api_enseignants_type', {type: $(this).data('type')}),
    dataType: 'json',
    success: function(data) {
      jQuery.each(data, function (index, pers) {
        //ajouter les lignes
        var html = "<tr>\n" +
          "                        <td>"+pers.nom+"</td>\n" +
          "                        <td>"+pers.prenom+"</td>\n" +
          "                        <td>"+pers.posteInterne+"</td>\n" +
          "                        <td>"+pers.telBureau+"</td>\n" +
          "                        <td>"+pers.bureau1+"</td>\n" +
          "                        <td>"+pers.numeroHarpege+"</td>\n" +
          "                        <td>"+pers.mailUniv+"</td>\n" +
          "                        <td>\n" +
          "<a href=\""+Routing.generate('administration_personnel_show', {id: pers.id})+"\" class=\"btn btn-info btn-outline btn-square\" data-provide=\"tooltip\"\n" +
          "   data-placement=\"bottom\" title=\"Détails\"><i class=\"ti-eye\"></i></a>\n" +
          "<a href=\""+Routing.generate('administration_personnel_edit', {id: pers.id})+"\"\n" +
          "   class=\"btn btn-warning btn-outline btn-square\"><i class=\"ti-pencil\"\n" +
          "                                                     data-provide=\"tooltip\"\n" +
          "                                                     data-placement=\"bottom\"\n" +
          "                                                     title=\"Modifier\"></i></a>\n" +
          "<a href=\""+Routing.generate('administration_personnel_delete', {id: pers.id})+"\" class=\"btn btn-danger btn-outline btn-square supprimer\" data-id=\"id\"><i\n" +
          "            class=\"ti-close\" data-provide=\"tooltip\" data-placement=\"bottom\"\n" +
          "            title=\"Supprimer\"></i></a>"
          "                        </td>\n" +
          "                    </tr>";
        $('#datatableau').append(html);
      });

      $('#tableau').DataTable({}); //regenerer le datatable avec les nouvelles data
    }
  })
});

//var table = $('#datatableRh').DataTable({});
//table.clear(); //effacer le datatable
//table.destroy(); //supprimer le datatable

$('#datatableRh').DataTable({
  "processing": true,
  "serverSide": true,
  "ajax": Routing.generate('api_all_personnel'),
  "sAjaxDataProp": "data",
  "pageLength": 25,
  "columns": [
    {"data": "numero_harpege"},
    {"data": "nom"},
    {"data": "prenom"},
    {"data": "formations"},
    {"data": "profil"}]
});



