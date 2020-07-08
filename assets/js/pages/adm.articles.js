

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.articles.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/02/2020 18:05

$(document).on('click', '#addCategorie', function () {
  if ($('#listeCategories').hasDataAttr('data-checkbox')) {
    const table = $('#listeCategories').DataTable()
    table.clear() //effacer le datatable
    table.destroy() //supprimer le datatable
  }


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
        const html = '<tr>\n' +
          '                        <td>' + categorie.libelle + '</td>\n' +
          '                        <td>' + categorie.nbArticles + '</td>\n' +
          '                        <td><a href="\n' +
          '                               data-csrf=""\n' +
          '                               class="btn btn-danger btn-outline btn-square supprimer"\n' +
          '                               data-provide="tooltip"\n' +
          '                               data-placement="bottom"\n' +
          '                               title="Supprimer la catégorie">\n' +
          '                                <i class="' + iconDelete + '"></i>\n' +
          '                                <span class="sr-only">Supprimer la catégorie</span>\n' +
          '                            </a></td>\n' +
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

