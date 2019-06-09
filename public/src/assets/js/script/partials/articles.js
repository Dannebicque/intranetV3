

$(document).on('click', '#addCategorie', function (e) {

  const table = $('#listeCategories').DataTable()
  table.clear(); //effacer le datatable
  table.destroy(); //supprimer le datatable


  $.ajax({
    url: Routing.generate('administration_article_categorie_add'),
    //dataType: 'json',
    data: {
      libelle: $('#libelle').val()
    },
    method: 'POST',
    success: function (data) {
      const table = $('#listeCategories').empty()
      table.append('<thead>\n' +
       '<tr>\n' +
        '<th>Libellé</th>\n' +
      '<th>Nb Article</th>\n' +
      '<th>Actions</th>\n' +
      '</tr>\n' +
      '</thead>' +
        '<tbody>')

      jQuery.each(data, function (index, categorie) {
        //console.log(etudiant)
        const html = '<tr>\n' +
          '                        <td>' + categorie.libelle + '</td>\n' +
          '                        <td>' + categorie.nbArticles + '</td>\n' +
          '                        <td>' + categorie.id + '</td>\n' +
          '                    </tr>'
        table.append(html)
      })
      table.append('</tbody>')
      table.append('<tfoot>\n' +
        '                <tr>\n' +
        '                    <td><label for="libelle" class="sr-only">Libelle</label>\n' +
        '                        <input type="text" placeholder="Libellé de la catégorie" id="libelle" class="form-control"></td>\n' +
        '                    <td>&nbsp;</td>\n' +
        '                    <td>\n' +
        '                        <button class="btn btn-success btn-block" id="addCategorie">Ajouter catégorie</button>\n' +
        '                    </td>\n' +
        '                </tr>\n' +
        '                </tfoot>')
      table.dataTable({
        'language': langueFr
      })
    }
  })
})

