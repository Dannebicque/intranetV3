(self.webpackChunk=self.webpackChunk||[]).push([[6497],{86598:(t,e,n)=>{"use strict";n(54678);var a=n(93320),i=n(19755);i(".savegroupe").click((function(){var t=i(this).attr("id"),e={notes:[]},n=!1;i(".noteetudiant:input").each((function(){if(i(this).hasClass(t)){var a=i(this).data("etudiant"),s=i("#com_"+a);s.val().length>255&&(n=!0,s.addClass("is-invalid"));var o={id:a,note:i(this).val(),absence:i("#abs_"+a).prop("checked"),commentaire:s.val()};e.notes.push(o)}})),!1===n?i.ajax({url:Routing.generate("application_personnel_note_ajax_saisie",{uuid:i(this).data("evaluation")}),type:"POST",data:{notes:e},success:function(t){(0,a.qX)("Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !","success")},error:function(){(0,a.qX)("Une erreur est survenue pendant l'envoi... <br>Veuillez réessayer","danger")}}):(0,a.qX)("Le formulaire contient des erreurs. Veuillez corriger et valider de nouveau","danger")})),i(document).on("keyup",".noteetudiant",(function(t){var e=i(this).val();"-0.01"===e?i(this).removeClass("is-invalid").removeClass("is-valid"):parseFloat(e)>=0&&parseFloat(e)<=20?i(this).removeClass("is-invalid").addClass("is-valid"):i(this).removeClass("is-valid").addClass("is-invalid")}))},93320:(t,e,n)=>{"use strict";n.d(e,{qX:()=>p,xQ:()=>y,XQ:()=>b,zl:()=>g,FX:()=>C});n(3843),n(83710),n(9653),n(74916),n(15306),n(23123),n(73210);var a,i,s,o=n(19755),r=n.n(o),l=n(86455),u=n.n(l),c=n(19755),d=!1;function p(t,e){console.log("callout");var n=new Array;n.success="Succès",n.danger="Erreur",n.warning="Attention";var a='<div class="callout callout-'+e+'" role="alert">\n                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n                        <span>&times;</span>\n                    </button>\n                    <h5>'+n[e]+"</h5>\n                    <p>"+t+"</p>\n                </div>";r()("#mainContent").prepend(a).slideDown("slow"),r()(".callout").delay(5e3).slideUp("slow")}a=r()(location).attr("pathname"),i=a.split("/"),s=2,"index.php"===i[1]&&i.length>1&&(s=3),"super-administration"===i[s]&&(s+=1),""===i[i.length-1]&&i.pop(),r()(".menu-item").removeClass("active"),r()("#menu-"+i[s]).addClass("active"),u().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),r()(document).on("click",".supprimer",(function(t){t.preventDefault();var e=r()(this).attr("href"),n=r()(this).data("csrf");u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?r().ajax({url:e,type:"DELETE",data:{_token:n},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(r()("#ligne_"+t).closest("tr").remove(),p("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),p("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var m="",v="text",f=!1;function h(t){var e=r()("#myedit-input-"+t).val();r().ajax({url:m.attr("href"),data:{field:m.data("field"),value:e,type:v},method:"POST",success:function(){m.html(e),r()("#myEdit-zone-"+t).replaceWith(m),f=!1}})}function y(t,e){var n={};return r().each(r()(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[t]=a}})),n}function b(t){t.removeClass("is-valid").addClass("is-invalid")}function g(t){t.removeClass("is-invalid").addClass("is-valid")}function C(t){t.removeClass("is-invalid").removeClass("is-valid")}r()(document).on("click",".myedit",(function(t){t.preventDefault(),m=r()(this);var e,n,a="";f=!0,void 0!==r()(this).data("type")&&(v=r()(this).data("type")),"select"===r()(this).data("type")||("textarea"===r()(this).data("type")?(e=r()(this),n=Date.now(),d=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(r()(this))),r()(this).replaceWith(a),r()("#myedit-input").focus()})),r()(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===d?h():27===t.keyCode&&r()("#myEdit-zone").replaceWith(m)})),r()(document).on("click",".myedit-valide",(function(t){d=!1,t.preventDefault(),h(r()(this).data("key"))})),r()(document).on("keypress",(function(t){!0===f&&!1===d&&13===t.which&&(t.preventDefault(),h(r()(this).data("key"))),!0===f&&!1===d&&27===t.which&&(t.preventDefault(),r()("#myEdit-zone-"+r()(this).data("key")).replaceWith(m))})),r()(document).on("click",".myedit-annule",(function(t){t.preventDefault(),r()("#myEdit-zone-"+r()(this).data("key")).replaceWith(m)})),c.fn.dataAttr=function(t,e){return r()(this)[0].getAttribute("data-"+t)||e},c.fn.hasDataAttr=function(t){return r()(this)[0].hasAttribute("data-"+t)}},2814:(t,e,n)=>{var a=n(17854),i=n(53111).trim,s=n(81361),o=a.parseFloat,r=1/o(s+"-0")!=-1/0;t.exports=r?function(t){var e=i(String(t)),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n}:o},54678:(t,e,n)=>{var a=n(82109),i=n(2814);a({global:!0,forced:parseFloat!=i},{parseFloat:i})}},0,[[86598,3666,9755,2109,6208,9904]]]);