(self.webpackChunk=self.webpackChunk||[]).push([[1158],{93580:(t,n,e)=>{"use strict";e(93320),e(59572);var a=e(19755);a(document).on("change","#justifier_etudiant",(function(){a("#listeJustifie").empty().load(Routing.generate("administration_absences_liste_absence_etudiant",{etudiant:a(this).val()}))})),a(document).on("click",".checkAbsence",(function(t){var n=a(this).data("absence"),e=0;a(this).is(":checked")&&(e=1),a.ajax({url:Routing.generate("administration_absences_justifie",{absence:n,etat:e}),type:"GET",success:function(t){t?a("#ligne_"+n).removeClass("bg-pale-warning").addClass("bg-pale-success"):a("#ligne_"+n).removeClass("bg-pale-success").addClass("bg-pale-warning")}})}))},93320:(t,n,e)=>{"use strict";e.d(n,{qX:()=>p,xQ:()=>v,XQ:()=>y,zl:()=>g,FX:()=>C});e(9653),e(74916),e(15306),e(23123),e(73210);var a,i,s,o=e(19755),r=e.n(o),c=e(86455),u=e.n(c),l=e(19755),d=!1;function p(t,n){console.log("callout");var e=new Array;e.success="Succès",e.danger="Erreur",e.warning="Attention";var a='<div class="callout callout-'+n+'" role="alert">\n                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n                        <span>&times;</span>\n                    </button>\n                    <h5>'+e[n]+"</h5>\n                    <p>"+t+"</p>\n                </div>";r()("#mainContent").prepend(a).slideDown("slow"),r()(".callout").delay(5e3).slideUp("slow")}a=r()(location).attr("pathname"),i=a.split("/"),s=2,"index.php"===i[1]&&i.length>1&&(s=3),"super-administration"===i[s]&&(s+=1),""===i[i.length-1]&&i.pop(),r()(".menu-item").removeClass("active"),r()("#menu-"+i[s]).addClass("active"),u().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),r()(document).on("click",".supprimer",(function(t){t.preventDefault();var n=r()(this).attr("href"),e=r()(this).data("csrf");u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?r().ajax({url:n,type:"DELETE",data:{_token:e},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(r()("#ligne_"+t).closest("tr").remove(),p("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,n,e){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),p("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var m="",f="text",b=!1;function h(){var t=r()("#myedit-input").val();r().ajax({url:m.attr("href"),data:{field:m.data("field"),value:t,type:f},method:"POST",success:function(){m.html(t),r()("#myEdit-zone").replaceWith(m),b=!1}})}function v(t,n){var e={};return r().each(r()(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=n)switch(n[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}e[t]=a}})),e}function y(t){t.removeClass("is-valid").addClass("is-invalid")}function g(t){t.removeClass("is-invalid").addClass("is-valid")}function C(t){t.removeClass("is-invalid").removeClass("is-valid")}r()(document).on("click",".myedit",(function(t){t.preventDefault(),m=r()(this);var n,e="";b=!0,void 0!==r()(this).data("type")&&(f=r()(this).data("type")),"select"===r()(this).data("type")||("textarea"===r()(this).data("type")?(n=r()(this),d=!0,e='<div id="myEdit-zone">\n                      <textarea rows="5" class="form-control" id="myedit-input">'+n.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):e=function(t){return'<div id="myEdit-zone" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(r()(this))),r()(this).replaceWith(e),r()("#myedit-input").focus()})),r()(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===d?h():27===t.keyCode&&r()("#myEdit-zone").replaceWith(m)})),r()(document).on("click","#myedit-valide",(function(t){d=!1,t.preventDefault(),h()})),r()(document).on("keypress",(function(t){!0===b&&!1===d&&13===t.which&&(t.preventDefault(),h()),!0===b&&!1===d&&27===t.which&&(t.preventDefault(),r()("#myEdit-zone").replaceWith(m))})),r()(document).on("click","#myedit-annule",(function(t){t.preventDefault(),r()("#myEdit-zone").replaceWith(m)})),l.fn.dataAttr=function(t,n){return r()(this)[0].getAttribute("data-"+t)||n},l.fn.hasDataAttr=function(t){return r()(this)[0].hasAttribute("data-"+t)}}},0,[[93580,3666,9755,2109,2402,2326,760,2300,9572]]]);