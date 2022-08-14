// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.articles.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import Routing from 'fos-router'

$(document).on('click', '#addCategorie', () => {
  $.ajax({
    url: Routing.generate('administration_article_categorie_add'),
    // dataType: 'json',
    data: {
      libelle: $('#libelle').val(),
    },
    method: 'POST',
    success(data) {
      const table = $('#listeCategories').empty()
      table.append(`<thead>
       <tr>
          <th>Libellé</th>
          <th>Nb Article</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>`)

      jQuery.each(data, (index, categorie) => {
        const html = `<tr>
                          <td>${categorie.libelle}</td>
                          <td>${categorie.nbArticles}</td>
                          <td><a href=""
                                 data-csrf=""
                                 class="btn btn-danger btn-outline btn-square supprimer"
                                 data-provide="tooltip"
                                 data-placement="bottom"
                                 title="Supprimer la catégorie">
                                  <i class="fas fa-trash-alt"></i>
                                  <span class="sr-only">Supprimer la catégorie</span>
                              </a></td>
                      </tr>`
        table.append(html)
      })
      table.append('</tbody>')
      table.append(`<tfoot>
                    <tr>
                        <td><label for="libelle" class="sr-only">Libelle</label>
                            <input type="text" placeholder="Libellé de la catégorie" id="libelle" class="form-control"></td>
                        <td>&nbsp;</td>
                        <td>
                            <button class="btn btn-success btn-block" id="addCategorie">Ajouter catégorie</button>
                        </td>
                    </tr>
                    </tfoot>`)
      table.dataTable({
        language: dataTableLangueFr,
      })
    },
  })
})
