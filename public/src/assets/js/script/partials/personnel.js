/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/personnel.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

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
            "<td><a href=\"#\" class=\"btn btn-success btn-outline btn-square addpersonnel\" data-provide=\"tooltip\" data-placement=\"bottom\" title=\"Ajouter à la departement\" data-slug=\""+pers.slug+"\"><i class=\"ti-plus\"></i></a></td>" +
            "</tr>";
          $('#result').append(html);
        });
      }
    })
  }
});

$(document).on('click', '.addpersonnel', function(){
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {slug: $(this).data('slug')}),
    dataType: 'json',
    success: function(data) {
      addCallout('Personnel ajouté au département !', 'success')
    }
  })
});

$(document).on('keyup', '#sa_login_urca', function () {
  var departement = $(this).data('departement');
  var $val = $(this).val()
  console.log($val)
  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {needle: $val}),
      dataType: 'json',
      success: function (data) {
        $('#result').empty()
        jQuery.each(data, function (index, pers) {
          var html = '<tr>' +
            '<td>' + pers.nom + '</td>' +
            '<td>' + pers.prenom + '</td>' +
            '<td>' + pers.username + '</td>' +
            '<td>' + pers.mail_univ + '</td>' +
            '<td><a href="#" class="btn btn-success btn-outline btn-square sa_addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '" data-departement="' + departement + '"><i class="ti-plus"></i></a></td>' +
            '</tr>'
          $('#result').append(html)
        })
      }
    })
  }
})

$(document).on('click', '.sa_addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {slug: $(this).data('slug'), departement: $(this).data('departement')}),
    dataType: 'json',
    success: function (data) {
      addCallout('Personnel ajouté au departement !', 'success')

    }
  })
})

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
    {"data": "departements"},
    {"data": "deleted"},
    {
      "data": "id",
      "sortable": false,
      "mRender": function (data, type, full) { return "<a href=\""+Routing.generate('administration_personnel_show', {id: data})+"\" class=\"btn btn-info btn-outline btn-square\" data-provide=\"tooltip\"\n" +
        "   data-placement=\"bottom\" title=\"Détails\"><i class=\"ti-eye\"></i></a>\n" +
        "<a href=\""+Routing.generate('administration_personnel_edit', {id: data})+"\"\n" +
        "   class=\"btn btn-warning btn-outline btn-square\"><i class=\"ti-pencil\"\n" +
        "                                                     data-provide=\"tooltip\"\n" +
        "                                                     data-placement=\"bottom\"\n" +
        "                                                     title=\"Modifier\"></i></a>\n" +
        "<a href=\""+Routing.generate('administration_personnel_delete', {id: data})+"\" class=\"btn btn-danger btn-outline btn-square supprimer\" data-id=\"id\"><i\n" +
        "            class=\"ti-close\" data-provide=\"tooltip\" data-placement=\"bottom\"\n" +
        "            title=\"Supprimer\"></i></a>"}
    }]
  //todo: gérer scrf sur le delete
});

$(document).on('change','.change_droit_pf', function (){
  $.ajax({
    url: Routing.generate('sa_personnel_departement_modifier_droit', {pf: $(this).data('pf')}),
    method: 'POST',
    data: {'droit': $(this).val()},
    success: function (data) {
      addCallout('Droits modifiés !', 'success')

    }
})

});
