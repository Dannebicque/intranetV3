// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/profil.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['profil'], {

  /***/ './assets/js/pages/profil.js':
  /*!***********************************!*\
    !*** ./assets/js/pages/profil.js ***!
    \***********************************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function ($) {/* harmony import */
      var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ './assets/js/util.js')
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/profil.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/10/2020 13:41


      __webpack_require__(/*! chart.js */ './node_modules/chart.js/dist/Chart.js')

      $(document).on('change', '#chgt_etudiant_departement', function () {
        $.ajax({
          url: Routing.generate('user_change_departement', {
            etudiant: $(this).data('etudiant'),
            departement: $(this).val()
          }),
          method: 'POST',
          success: function success (e) {
            $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>')
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mofification enregistrée !', 'success')
          },
          error: function error (e) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Erreur lors de la sauvegarde de la modification !', 'danger')
          }
        })
      })
      $(document).on('change', '#chgt_etudiant_fin', function () {
        $.ajax({
          url: Routing.generate('user_change_annee_sortie', {
            etudiant: $(this).data('etudiant'),
            annee: $(this).val()
          }),
          method: 'POST',
          success: function success (e) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mofification enregistrée !', 'success')
          },
          error: function error (e) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Erreur lors de la sauvegarde de la modification !', 'danger')
          }
        })
      })
      $(document).on('click', '.changeprofil', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var $onglet = $(this)
        $('.changeprofil').removeClass('active show')
        $(this).addClass('active show')
        $('#profilContent').empty().load($(this).attr('href'), function () {
          if ($onglet.attr('id') === 'profil-notes') {
            console.log('graph')
            var graph = $('#chart-radar')
            $.get(Routing.generate('profil_etudiant_ajax_notes_graph', {
              slug: $(graph).data('etudiant')
            }), function (datasets) {
              console.log(datasets)
              var labels = []
              new Chart(graph, {
                type: 'radar',
                // Data
                //
                data: {
                  labels: ['Mx101', 'Mx102', 'Mx201', 'Mx203', 'Mx202', 'Mx204', 'Moyenne'],
                  datasets: datasets
                },
                // Options
                //
                options: {
                  responsive: false,
                  legend: {
                    display: true
                  }
                }
              })
            })
          }
        })
      })
      $(document).on('change', '.addfavori', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $.ajax({
          url: Routing.generate('user_add_favori'),
          method: 'POST',
          data: {
            'user': $(this).val(),
            'etat': $(this).prop('checked')
          }
        })
      })
      $(document).on('click', '#btnabs', function (e) {
        $.ajax({
          url: Routing.generate('administration_absences_ajax_add'),
          data: {
            'etudiant': $(this).data('etudiant'),
            'date': $('#jourabs').val(),
            'matiere': $('#moduleabs').val(),
            'heure': $('#heureabs').val(),
            'justif': $('input[type=radio][name=justifabs]:checked').val()
          },
          method: 'POST',
          success: function success (data) {
            //ajout de la ligne
            var classe = ''
            var texte = ''
            var checked = ''

            if (data.justifie === true) {
              classe = 'bg-pale-success'
              texte = 'Oui'
              checked = 'checked'
            } else {
              classe = 'bg-pale-warning'
              texte = 'Non'
              checked = ''
            }

            var html = '<tr class="' + classe + '" id="ligne_' + data.id + '">\n' + '                    <td>' + data.date + ' à ' + data.heure + '</td>\n' + '                    <td>' + data.codeMatiere + '</td>\n' + '                    <td>' + texte + '</td>\n' + '                    <td class="hide">' + data.personnel + '</td>\n' + '                    <td>\n' + '                        <button data-provide="modaler tooltip"\n' + '                                data-url="' + Routing.generate('app_etudiant_absence_detail', {
              'uuid': data.uuidString
            }) + '"\n' + '                                class="btn btn-info btn-outline btn-square btn-xs"\n' + '                                data-placement="bottom"\n' + '                                title="Détails"\n' + '                                data-title="Détails de l\'absence"\n' + '                        >\n' + '                            <i class="fas fa-info"></i>\n' + '                        </button>\n' + '                    </td>\n' + '                        <td>\n' + '                            <div class="custom-control custom-control-lg custom-checkbox">\n' + '                                <input type="checkbox" class="custom-control-input checkAbsence" id="check_' + data.id + '"\n' + '                                       data-absence="' + data.id + '" ' + checked + '>\n' + '                                <label class="custom-control-label" for="check_' + data.id + '">Justifiée*</label>\n' + '                            </div>\n' + '                        </td>\n' + '                </tr>'
            console.log(html)
            $('#tableAbsence > tbody:last').append(html)
          }
        })
      })
      $(document).on('click', '.checkAbsence', function (e) {
        var absence = $(this).data('absence')
        var etat = 0

        if ($(this).is(':checked')) {
          etat = 1
        }

        $.ajax({
          url: Routing.generate('administration_absences_justifie', {
            'absence': absence,
            'etat': etat
          }),
          type: 'GET',
          success: function success (data) {
            if (data) {
              $('#ligne_' + absence).removeClass('bg-pale-warning').addClass('bg-pale-success')
            } else {
              $('#ligne_' + absence).removeClass('bg-pale-success').addClass('bg-pale-warning')
            }
          }
        })
      })
      $(document).on('change', '#btnInit', function () {
        $.ajax({
          url: Routing.generate('security_password_init', {
            user: $(this).data('personnel')
          }),
          method: 'POST',
          success: function success (e) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mot de passe initialisé !', 'success')
          },
          error: function error (e) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Erreur lors l\'initialisation du mot de passe !', 'danger')
          }
        })
      })
      $(document).on('change', '#chgt_etudiant_semestre', function () {
        $.ajax({
          url: Routing.generate('user_change_semestre', {
            etudiant: $(this).data('etudiant'),
            semestre: $(this).val()
          }),
          method: 'POST',
          success: function success (e) {
            $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>')
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mofification enregistrée !', 'success')
          },
          error: function error (e) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Erreur lors de la sauvegarde de la modification !', 'danger')
          }
        })
      })
      /*        {% for semestre in semestres %}
        {
          label: "S1",
            backgroundColor: "rgba(51,202,185,0.7)",
          borderColor: "rgba(0,0,0,0)",
          pointBackgroundColor: "rgba(51,202,185,0.7)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(51,202,185,0.7)",
          data: [10, 9, 19, 8, 15, 16, 8.5]
        }{% if not loop.last %},{% endif %}
        {% endfor %}

       */
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  })

}, [['./assets/js/pages/profil.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~2f9ea679', 'vendors~agenda~app~profil', 'agenda~app~profil']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvcHJvZmlsLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJldHVkaWFudCIsImRhdGEiLCJkZXBhcnRlbWVudCIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJlIiwiZW1wdHkiLCJhcHBlbmQiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJhbm5lZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJG9uZ2xldCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2FkIiwiYXR0ciIsImNvbnNvbGUiLCJsb2ciLCJncmFwaCIsImdldCIsInNsdWciLCJkYXRhc2V0cyIsImxhYmVscyIsIkNoYXJ0IiwidHlwZSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibGVnZW5kIiwiZGlzcGxheSIsInByb3AiLCJjbGFzc2UiLCJ0ZXh0ZSIsImNoZWNrZWQiLCJqdXN0aWZpZSIsImh0bWwiLCJpZCIsImRhdGUiLCJoZXVyZSIsImNvZGVNYXRpZXJlIiwicGVyc29ubmVsIiwidXVpZFN0cmluZyIsImFic2VuY2UiLCJldGF0IiwiaXMiLCJ1c2VyIiwic2VtZXN0cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLHVEQUFELENBQVA7O0FBRUFDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLDRCQUF6QixFQUF1RCxZQUFZO0FBQ2pFRixHQUFDLENBQUNHLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix5QkFBakIsRUFBNEM7QUFBQ0MsY0FBUSxFQUFFUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxVQUFiLENB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QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsV0FBTyxFQUFFLGlCQUFVQyxDQUFWLEVBQWE7QUFDcEJiLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CYyxLQUFwQixHQUE0QkMsTUFBNUIsQ0FBbUMsNENBQW5DO0FBQ0FDLDhEQUFVLENBQUMsNEJBQUQsRUFBK0IsU0FBL0IsQ0FBVjtBQUNELEtBTkk7QUFPTEMsU0FBSyxFQUFFLGVBQVVKLENBQVYsRUFBYTtBQUNsQkcsOERBQVUsQ0FBQyxtREFBRCxFQUFzRCxRQUF0RCxDQUFWO0FBQ0Q7QUFUSSxHQUFQO0FBWUQsQ0FiRDtBQWlCQSIsImZpbGUiOiJwcm9maWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvcHJvZmlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMTAvMjAyMCAxMzo0MVxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG5yZXF1aXJlKCdjaGFydC5qcycpXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfZGVwYXJ0ZW1lbnQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2NoYW5nZV9kZXBhcnRlbWVudCcsIHtldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLCBkZXBhcnRlbWVudDogJCh0aGlzKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcjbGlzdGVfZ3JvdXBlcycpLmVtcHR5KCkuYXBwZW5kKCc8dHI+PHRkIGNvbHNwYW49XCIzXCI+QXVjdW4gZ3JvdXBlPC90ZD48L3RyPicpXG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfZmluJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2VfYW5uZWVfc29ydGllJywge2V0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIGFubmVlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBlbnJlZ2lzdHLDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZSBkZSBsYSBtb2RpZmljYXRpb24gIScsICdkYW5nZXInKVxuICAgIH1cblxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGFuZ2Vwcm9maWwnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgJG9uZ2xldCA9ICQodGhpcylcbiAgJCgnLmNoYW5nZXByb2ZpbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCgnI3Byb2ZpbENvbnRlbnQnKS5lbXB0eSgpLmxvYWQoJCh0aGlzKS5hdHRyKCdocmVmJyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJG9uZ2xldC5hdHRyKCdpZCcpID09PSAncHJvZmlsLW5vdGVzJykge1xuICAgICAgY29uc29sZS5sb2coJ2dyYXBoJylcbiAgICAgIGNvbnN0IGdyYXBoID0gJCgnI2NoYXJ0LXJhZGFyJylcbiAgICAgICQuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ3Byb2ZpbF9ldHVkaWFudF9hamF4X25vdGVzX2dyYXBoJywge3NsdWc6ICQoZ3JhcGgpLmRhdGEoJ2V0dWRpYW50Jyl9KSwgZnVuY3Rpb24gKGRhdGFzZXRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFzZXRzKVxuICAgICAgICBsZXQgbGFiZWxzID0gW11cbiAgICAgICAgbmV3IENoYXJ0KGdyYXBoLCB7XG4gICAgICAgICAgdHlwZTogJ3JhZGFyJyxcblxuICAgICAgICAgIC8vIERhdGFcbiAgICAgICAgICAvL1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxhYmVsczogWydNeDEwMScsICdNeDEwMicsICdNeDIwMScsICdNeDIwMycsICdNeDIwMicsICdNeDIwNCcsICdNb3llbm5lJ10sXG4gICAgICAgICAgICBkYXRhc2V0czogZGF0YXNldHNcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICAgIC8vXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG4gIH0pXG5cblxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuYWRkZmF2b3JpJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9hZGRfZmF2b3JpJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgJ3VzZXInOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgJ2V0YXQnOiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnRuYWJzJywgZnVuY3Rpb24gKGUpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2Fic2VuY2VzX2FqYXhfYWRkJyksXG4gICAgZGF0YToge1xuICAgICAgJ2V0dWRpYW50JzogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLFxuICAgICAgJ2RhdGUnOiAkKCcjam91cmFicycpLnZhbCgpLFxuICAgICAgJ21hdGllcmUnOiAkKCcjbW9kdWxlYWJzJykudmFsKCksXG4gICAgICAnaGV1cmUnOiAkKCcjaGV1cmVhYnMnKS52YWwoKSxcbiAgICAgICdqdXN0aWYnOiAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWp1c3RpZmFic106Y2hlY2tlZCcpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgLy9ham91dCBkZSBsYSBsaWduZVxuICAgICAgbGV0IGNsYXNzZSA9ICcnXG4gICAgICBsZXQgdGV4dGUgPSAnJ1xuICAgICAgbGV0IGNoZWNrZWQgPSAnJ1xuICAgICAgaWYgKGRhdGEuanVzdGlmaWUgPT09IHRydWUpIHtcbiAgICAgICAgY2xhc3NlID0gJ2JnLXBhbGUtc3VjY2VzcydcbiAgICAgICAgdGV4dGUgPSAnT3VpJ1xuICAgICAgICBjaGVja2VkID0gJ2NoZWNrZWQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2UgPSAnYmctcGFsZS13YXJuaW5nJ1xuICAgICAgICB0ZXh0ZSA9ICdOb24nXG4gICAgICAgIGNoZWNrZWQgPSAnJ1xuICAgICAgfVxuXG4gICAgICBsZXQgaHRtbCA9ICc8dHIgY2xhc3M9XCInICsgY2xhc3NlICsgJ1wiIGlkPVwibGlnbmVfJyArIGRhdGEuaWQgKyAnXCI+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgZGF0YS5kYXRlICsgJyDDoCAnICsgZGF0YS5oZXVyZSArICc8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIGRhdGEuY29kZU1hdGllcmUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPicgKyB0ZXh0ZSArICc8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJoaWRlXCI+JyArIGRhdGEucGVyc29ubmVsICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1wcm92aWRlPVwibW9kYWxlciB0b29sdGlwXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11cmw9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnYXBwX2V0dWRpYW50X2Fic2VuY2VfZGV0YWlsJywgeyd1dWlkJzogZGF0YS51dWlkU3RyaW5nfSkgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBidG4teHNcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRMOpdGFpbHNcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpdGxlPVwiRMOpdGFpbHMgZGUgbFxcJ2Fic2VuY2VcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWluZm9cIj48L2k+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNvbnRyb2wtbGcgY3VzdG9tLWNoZWNrYm94XCI+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0IGNoZWNrQWJzZW5jZVwiIGlkPVwiY2hlY2tfJyArIGRhdGEuaWQgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWJzZW5jZT1cIicgKyBkYXRhLmlkICsgJ1wiICcgKyBjaGVja2VkICsgJz5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjaGVja18nICsgZGF0YS5pZCArICdcIj5KdXN0aWZpw6llKjwvbGFiZWw+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDwvdHI+J1xuXG4gICAgICBjb25zb2xlLmxvZyhodG1sKVxuICAgICAgJCgnI3RhYmxlQWJzZW5jZSA+IHRib2R5Omxhc3QnKS5hcHBlbmQoaHRtbClcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoZWNrQWJzZW5jZScsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCBhYnNlbmNlID0gJCh0aGlzKS5kYXRhKCdhYnNlbmNlJylcbiAgbGV0IGV0YXQgPSAwXG5cbiAgaWYgKCgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSkge1xuICAgIGV0YXQgPSAxXG4gIH1cblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZXNfanVzdGlmaWUnLCB7J2Fic2VuY2UnOiBhYnNlbmNlLCAnZXRhdCc6IGV0YXR9KSxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgJCgnI2xpZ25lXycgKyBhYnNlbmNlKS5yZW1vdmVDbGFzcygnYmctcGFsZS13YXJuaW5nJykuYWRkQ2xhc3MoJ2JnLXBhbGUtc3VjY2VzcycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjbGlnbmVfJyArIGFic2VuY2UpLnJlbW92ZUNsYXNzKCdiZy1wYWxlLXN1Y2Nlc3MnKS5hZGRDbGFzcygnYmctcGFsZS13YXJuaW5nJylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2J0bkluaXQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzZWN1cml0eV9wYXNzd29yZF9pbml0Jywge3VzZXI6ICQodGhpcykuZGF0YSgncGVyc29ubmVsJyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnTW90IGRlIHBhc3NlIGluaXRpYWxpc8OpICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGxcXCdpbml0aWFsaXNhdGlvbiBkdSBtb3QgZGUgcGFzc2UgIScsICdkYW5nZXInKVxuICAgIH1cblxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjY2hndF9ldHVkaWFudF9zZW1lc3RyZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfY2hhbmdlX3NlbWVzdHJlJywge2V0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIHNlbWVzdHJlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJyNsaXN0ZV9ncm91cGVzJykuZW1wdHkoKS5hcHBlbmQoJzx0cj48dGQgY29sc3Bhbj1cIjNcIj5BdWN1biBncm91cGU8L3RkPjwvdHI+JylcbiAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBlbnJlZ2lzdHLDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZSBkZSBsYSBtb2RpZmljYXRpb24gIScsICdkYW5nZXInKVxuICAgIH1cblxuICB9KVxufSlcblxuXG5cbi8qICAgICAgICB7JSBmb3Igc2VtZXN0cmUgaW4gc2VtZXN0cmVzICV9XG4gIHtcbiAgICBsYWJlbDogXCJTMVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTEsMjAyLDE4NSwwLjcpXCIsXG4gICAgYm9yZGVyQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTEsMjAyLDE4NSwwLjcpXCIsXG4gICAgcG9pbnRCb3JkZXJDb2xvcjogXCIjZmZmXCIsXG4gICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoNTEsMjAyLDE4NSwwLjcpXCIsXG4gICAgZGF0YTogWzEwLCA5LCAxOSwgOCwgMTUsIDE2LCA4LjVdXG4gIH17JSBpZiBub3QgbG9vcC5sYXN0ICV9LHslIGVuZGlmICV9XG4gIHslIGVuZGZvciAlfVxuXG4gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=
