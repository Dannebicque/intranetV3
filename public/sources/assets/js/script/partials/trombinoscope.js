$(document).on('click', '.semestretrombi', function(e) {
  //todo: comment gérer la locale ?
  e.preventDefault();


  $('.semestretrombi').removeClass('active show');
  $('.enseignanttrombi').removeClass('active show');
  $(this).addClass('active show');


  /*$.ajax({
    url: Routing.generate('api_etudiants_semestre', {semestre: $(this).data('sem')}),
    success: function (data){
      $('#trombi').empty();
      jQuery.each(data, function(index, etudiant) {
        var html = "<div class=\"col-sm-6 col-md-3 col-lg-3\">\n" +
          "    <div class=\"card card-trombi\">\n" +
          "        <div class=\"flexbox align-items-center px-20 pt-20\">\n" +
          "            <label class=\"toggler toggler-danger fs-16\">\n" +
          "                <input type=\"checkbox\" checked class=\"addfavori\" value=\"" + etudiant.slug + "\">\n" +
          "                <i class=\"fa fa-heart\"></i>\n" +
          "            </label>\n" +
          "            <div class=\"dropdown\">\n" +
          "                <a data-toggle=\"dropdown\" href=\"#\"><i class=\"ti-more-alt rotate-90 text-muted\"></i></a>\n" +
          "                <div class=\"dropdown-menu dropdown-menu-right\">\n" +
          "                    <a class=\"dropdown-item\" href=\"" + Routing.generate('user_profil.fr', {
            type: 'etudiant',
            slug: etudiant.slug
          }) + "\"><i class=\"fa fa-user\"></i> Profil</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-picture-o\"></i> Site personnel</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-world\"></i> Site Universitaire</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-email\"></i> Contacter</a>\n" +
          "                </div>\n" +
          "            </div>\n" +
          "        </div>\n" +
          "        <div class=\"card-body text-center pt-1 pb-50\">\n" +
          "            <a href=\"" + Routing.generate('user_profil.fr', {
            type: 'etudiant',
            slug: etudiant.slug
          }) + "\">\n" +
          "                <img class=\"avatar avatar-xxl\" src=\"\">\n" +
          "            </a>\n" +
          "            <h5 class=\"mt-3 mb-1\">\n" +
          "                <a class=\"hover-primary\" href=\"" + Routing.generate('user_profil.fr', {
            type: 'etudiant',
            slug: etudiant.slug
          }) + "\">" + etudiant.prenom + " " + etudiant.nom + "\n" +
          "                </a>\n" +
          "            </h5>\n" +
          "        </div>\n" +
          "    </div>\n" +
          "</div>";
        $('#trombi').append(html);
      });
    }
  })*/
  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre.fr', {semestre: $(this).data('sem')})).slideDown();
});

$(document).on('click', '.changeTypeGroupe', function (e) {
  //todo: comment gérer la locale ?
  e.preventDefault();

  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre.fr', {
    semestre: $(this).data('semestre'),
    typegroupe: $(this).data('typegroupe')
  })).slideDown();
});

$(document).on('click', '.enseignanttrombi', function(e) {
  e.preventDefault();
  //$('#trombifiltre').hide();
  $('.semestretrombi').removeClass('active show');
  $('.enseignanttrombi').removeClass('active show');
  $(this).addClass('active show');
  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_personnel.fr', {type: $(this).data('type')})).slideDown();

  //$('.card-title').html($(this).text());
  /*$.ajax({
    url: Routing.generate('api_enseignants_type', {type: $(this).data('type')}),
    dataType: 'json',
    success: function (data){

      $('#trombi').empty();
      jQuery.each(data, function(index, pers) {
        var html = "<div class=\"col-sm-6 col-md-3 col-lg-3\">\n" +
          "    <div class=\"card card-trombi\">\n" +
          "        <div class=\"flexbox align-items-center px-20 pt-20\">\n" +
          "            <label class=\"toggler toggler-danger fs-16\">\n" +
          "                <input type=\"checkbox\" checked>\n" +
          "                <i class=\"fa fa-heart\"></i>\n" +
          "            </label>\n" +
          "            <div class=\"dropdown\">\n" +
          "                <a data-toggle=\"dropdown\" href=\"#\"><i class=\"ti-more-alt rotate-90 text-muted\"></i></a>\n" +
          "                <div class=\"dropdown-menu dropdown-menu-right\">\n" +
          "                    <a class=\"dropdown-item\" href=\""+Routing.generate('user_profil', {type: 'personnel', slug: pers.slug})+"\"><i class=\"fa fa-user\"></i> Profil</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-picture-o\"></i> Site personnel</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-world\"></i> Site Universitaire</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-email\"></i> Contacter</a>\n" +
          "                </div>\n" +
          "            </div>\n" +
          "        </div>\n" +
          "        <div class=\"card-body text-center pt-1 pb-50\">\n" +
          "            <a href=\""+Routing.generate('user_profil', {type: 'personnel', slug: pers.slug})+"\">\n" +
          "                <img class=\"avatar avatar-xxl\" src=\"\">\n" +
          "            </a>\n" +
          "            <h5 class=\"mt-3 mb-1\">\n" +
          "                <a class=\"hover-primary\" href=\""+Routing.generate('user_profil', {type: 'personnel', slug: pers.slug})+"\">"+pers.prenom+" " + pers.nom+"\n" +
          "                </a>\n" +
          "            </h5>\n" +
          "        </div>\n" +
          "    </div>\n" +
          "</div>";
        $('#trombi').append(html);
      });
    }
  })*/

});
