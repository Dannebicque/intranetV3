$(document).on('keyup', '#search', function (e) {

  var keyword = $(this).val()
  console.log(keyword)
  var search_reponse_etudiant = $('#search_reponse_etudiant')
  var search_reponse_personnel = $('#search_reponse_personnel')
  var search_reponse_autre = $('#search_reponse_autre')

  if (keyword.length > 2) {
    $.ajax({
      url: Routing.generate('recherche', {keyword: keyword}),
      dataType: 'json',
      success: function (data) {


        var html = ''
        if (data.etudiants.length > 0) {
          jQuery.each(data.etudiants, function (index, etudiant) {
            html = html + '<a class="media" href="' + Routing.generate('user_profil.fr', {
                type: 'etudiant',
                slug: etudiant.slug
              }) + '" target="_blank">\n' +
              '                <span class="avatar status-dark">\n' +
              '                  <img src="' + basePath + 'photo/' + etudiant.photo + '" alt="Photo de profil de ' + etudiant.displayPr + '">\n' +
              '                </span>\n' +
              '\n' +
              '                        <div class="media-body">\n' +
              '                            <p><strong>' + etudiant.displayPr + '</strong>\n' +
              '                                <time class="float-right" datetime="2018-07-14 20:00">Groupes...</time>\n' +
              '                            </p>\n' +
              '                        </div>\n' +
              '                    </a>'
          })
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre rehcerche <strong>"' + keyword + '"</strong></div>'
        }

        search_reponse_etudiant.slideUp().empty().append(html).slideDown()

        html = ''
        if (data.personnels.length > 0) {
          jQuery.each(data.personnels, function (index, personnel) {
            html = html + '<a class="media items-center" href="' + Routing.generate('user_profil.fr', {
                type: 'personnel',
                slug: personnel.slug
              }) + '" target="_blank">\n' +
              '                        <img class="avatar avatar-sm" src="' + basePath + 'photo/' + personnel.photo + '" alt="Photo de profil de ' + personnel.displayPr + '">\n' +
              '                        <p>' + personnel.displayPr + '</p>\n' +
              '                    </a>'
          })
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre rehcerche <strong>"' + keyword + '"</strong></div>'
        }
        search_reponse_personnel.slideUp().empty().append(html).slideDown()

        html = ''
        if (data.autres.length > 0) {
          jQuery.each(data.autres, function (index, autre) {
            html = html + '<a class="media items-center" href="">\n' +
              '                        <img class="avatar avatar-sm" src="../assets/img/avatar/1.jpg" alt="...">\n' +
              '                        <p>' + autre + '</p>\n' +
              '                    </a>'
          })
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre rehcerche <strong>"' + keyword + '"</strong></div>'
        }
        search_reponse_autre.slideUp().empty().append(html).slideDown()
      }
    })
  } else {
    var html = '<div class="alert alert-info">Saisir au moins 3 caractères</div>'
    search_reponse_autre.slideUp().empty().append(html).slideDown()
    search_reponse_personnel.slideUp().empty().append(html).slideDown()
    search_reponse_etudiant.slideUp().empty().append(html).slideDown()
  }
})