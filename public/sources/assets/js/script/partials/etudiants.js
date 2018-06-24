var table = $('#datatableEtudiants').DataTable({});
table.clear(); //effacer le datatable
table.destroy(); //supprimer le datatable

$('#datatableEtudiants').DataTable({
  "language": langueFr,
  "processing": true,
  "serverSide": true,
  "ajax": Routing.generate('api_etudiant_formation'),
  "sAjaxDataProp": "data",
  //"pageLength": 25,
  "columns": [
    {"data": "numetudiant"},
    {"data": "nom"},
    {"data": "prenom"},
    {"data": "semestre"},
    {"data": "profil"}]
});

