(self.webpackChunk=self.webpackChunk||[]).push([[9526],{89120:(t,n,e)=>{"use strict";var a=e(93320),i=e(19755);i(document).on("change",".changeOption",(function(t){t.preventDefault(),t.stopPropagation(),i.ajax({url:Routing.generate("administration_configuration_change_option"),method:"POST",data:{type:i(this).data("type"),value:i(this).prop("checked"),name:i(this).attr("name"),id:i(this).data("id")},success:function(t){(0,a.qX)("Configuration enregistrée","success")},error:function(t){(0,a.qX)("Erreur lors de l'enregistrement de la configuration","danger")}})})),i(document).on("change",".changeOptionSelect",(function(){i.ajax({url:Routing.generate("administration_configuration_change_option"),method:"POST",data:{type:i(this).data("type"),value:i(this).val(),name:i(this).attr("name"),id:i(this).data("id")},success:function(t){(0,a.qX)("Configuration enregistrée","success")},error:function(t){(0,a.qX)("Erreur lors de l'enregistrement de la configuration","danger")}})})),i(document).on("change",".activeAnneeUniversitaire",(function(t){t.preventDefault(),t.stopPropagation(),i.ajax({url:Routing.generate("sa_annee_universitaire_change_active",{annee:i(this).data("id")}),method:"POST",data:{value:i(this).prop("checked")},success:function(t){(0,a.qX)("Configuration enregistrée","success")},error:function(t){(0,a.qX)("Erreur lors de l'enregistrement de la configuration","danger")}})}))},93320:(t,n,e)=>{"use strict";e.d(n,{qX:()=>p,xQ:()=>g,XQ:()=>y,zl:()=>b,FX:()=>C});e(9653),e(74916),e(15306),e(23123),e(73210);var a,i,o,r=e(19755),s=e.n(r),c=e(86455),u=e.n(c),l=e(19755),d=!1;function p(t,n){console.log("callout");var e=new Array;e.success="Succès",e.danger="Erreur",e.warning="Attention";var a='<div class="callout callout-'+n+'" role="alert">\n                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n                        <span>&times;</span>\n                    </button>\n                    <h5>'+e[n]+"</h5>\n                    <p>"+t+"</p>\n                </div>";s()("#mainContent").prepend(a).slideDown("slow"),s()(".callout").delay(5e3).slideUp("slow")}a=s()(location).attr("pathname"),i=a.split("/"),o=2,"index.php"===i[1]&&i.length>1&&(o=3),"super-administration"===i[o]&&(o+=1),""===i[i.length-1]&&i.pop(),s()(".menu-item").removeClass("active"),s()("#menu-"+i[o]).addClass("active"),u().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),s()(document).on("click",".supprimer",(function(t){t.preventDefault();var n=s()(this).attr("href"),e=s()(this).data("csrf");u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?s().ajax({url:n,type:"DELETE",data:{_token:e},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(s()("#ligne_"+t).closest("tr").remove(),p("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,n,e){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),p("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var m="",f="text",h=!1;function v(){var t=s()("#myedit-input").val();s().ajax({url:m.attr("href"),data:{field:m.data("field"),value:t,type:f},method:"POST",success:function(){m.html(t),s()("#myEdit-zone").replaceWith(m),h=!1}})}function g(t,n){var e={};return s().each(s()(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=n)switch(n[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}e[t]=a}})),e}function y(t){t.removeClass("is-valid").addClass("is-invalid")}function b(t){t.removeClass("is-invalid").addClass("is-valid")}function C(t){t.removeClass("is-invalid").removeClass("is-valid")}s()(document).on("click",".myedit",(function(t){t.preventDefault(),m=s()(this);var n,e="";h=!0,void 0!==s()(this).data("type")&&(f=s()(this).data("type")),"select"===s()(this).data("type")||("textarea"===s()(this).data("type")?(n=s()(this),d=!0,e='<div id="myEdit-zone">\n                      <textarea rows="5" class="form-control" id="myedit-input">'+n.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):e=function(t){return'<div id="myEdit-zone" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(s()(this))),s()(this).replaceWith(e),s()("#myedit-input").focus()})),s()(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===d?v():27===t.keyCode&&s()("#myEdit-zone").replaceWith(m)})),s()(document).on("click","#myedit-valide",(function(t){d=!1,t.preventDefault(),v()})),s()(document).on("keypress",(function(t){!0===h&&!1===d&&13===t.which&&(t.preventDefault(),v()),!0===h&&!1===d&&27===t.which&&(t.preventDefault(),s()("#myEdit-zone").replaceWith(m))})),s()(document).on("click","#myedit-annule",(function(t){t.preventDefault(),s()("#myEdit-zone").replaceWith(m)})),l.fn.dataAttr=function(t,n){return s()(this)[0].getAttribute("data-"+t)||n},l.fn.hasDataAttr=function(t){return s()(this)[0].hasAttribute("data-"+t)}}},0,[[89120,3666,9755,2109,2402,2326]]]);