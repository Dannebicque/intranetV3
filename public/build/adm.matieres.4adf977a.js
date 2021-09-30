(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[6477],{9287:(e,t,n)=>{"use strict";n(9826);var a=n(2396),i=n(9755);i("#matiere_semestre").change((function(){var e=i(this);i.ajax({url:Routing.generate("api_liste_ue_by_semestre"),dataType:"JSON",type:"POST",data:{semestreid:e.val()},success:function(t){var n=i("#matiere_ue");n.html(""),n.append("<option value> Choisir une UE dans le semestre "+e.find("option:selected").text()+" ...</option>"),i.each(t,(function(e,t){n.append('<option value="'+t.id+'">'+t.numeroUe+" "+t.libelle+"</option>")}))},error:function(e){alert("An error ocurred while loading data ...")}}),i.ajax({url:Routing.generate("api_liste_parcour_by_semestre"),dataType:"JSON",type:"POST",data:{semestreid:e.val()},success:function(t){var n=i("#matiere_parcours");n.html(""),n.append("<option value> Choisir (optionnel) un parcour pour le semestre "+e.find("option:selected").text()+" ...</option>"),i.each(t,(function(e,t){n.append('<option value="'+t.id+'">'+t.libelle+"</option>")}))},error:function(e){alert("An error ocurred while loading data ...")}}),i.ajax({url:Routing.generate("api_matieres_semestre",{semestre:e.val()}),dataType:"JSON",type:"GET",success:function(e){var t=i("#matiere_matiereParent");t.html(""),t.append("<option value> Choisir (optionnel) une matière parent pour "+i("#matiere_libelle").val()+" ...</option>"),i.each(e,(function(e,n){t.append('<option value="'+n.id+'">'+n.display+"</option>")}))},error:function(e){alert("An error ocurred while loading data ...")}})})),i(document).on("click",".change-diplome",(function(e){e.preventDefault(),i(".change-diplome").removeClass("active show"),i(this).addClass("active show");var t=i(this).data("diplome");i.ajax({url:Routing.generate("administration_matiere_diplome",{diplome:t}),dataType:"HTML",type:"GET",success:function(e){i("#content_diplome").slideUp().empty().append(e).slideDown(),i("#export_csv").attr("href",Routing.generate("administration_matiere_export",{diplome:t,_format:"csv"})),i("#export_xlsx").attr("href",Routing.generate("administration_matiere_export",{diplome:t,_format:"xlsx"})),i("#export_pdf").attr("href",Routing.generate("administration_matiere_export",{diplome:t,_format:"pdf"}))}})})),i(document).on("change",".changeParcours",(function(){i.ajax({url:Routing.generate("administration_matiere_change_parcours",{id:i(this).data("matiere"),parcours:i(this).val()}),method:"POST",success:function(e){(0,a.qX)("Modification enregistrée","success")},error:function(e){(0,a.qX)("Erreur lors de l'enregistrement de la modification","danger")}})})),i(document).on("change",".changeUe",(function(){i.ajax({url:Routing.generate("administration_matiere_change_ue",{id:i(this).data("matiere"),ue:i(this).val()}),method:"POST",success:function(e){(0,a.qX)("Modification enregistrée","success")},error:function(e){(0,a.qX)("Erreur lors de l'enregistrement de la modification","danger")}})}))},2396:(e,t,n)=>{"use strict";n.d(t,{qX:()=>g,FX:()=>T,xQ:()=>_,bV:()=>b,XQ:()=>C,zl:()=>j});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a=n(6455),i=n.n(a),r=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),o=n.n(r);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var t,n,a;return t=e,(n=[{key:"show",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(a=c(c({},this.defaultOptions),a)).className+=" toast-"+e;var i='<div class="toast-wrapper">';n&&(i+='<div class="toast-head">'+n+"</div>"),i+='<div class="toast-body">'+t+"</div>",i+="</div>",a.text=i,o()(a).showToast()}},{key:"error",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",e,t,n)}},{key:"warning",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",e,t,n)}},{key:"success",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",e,t,n)}},{key:"info",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",e,t,n)}}])&&u(t.prototype,n),a&&u(t,a),e}());var p,f,m,h=n(9755),v=n(9755),y=!1;function b(e,t){for(t=t.toLowerCase();e&&e.nodeName.toLowerCase()!=t;)e=e.parentNode;return e||null}function g(e,t){switch(t){case"success":d.success(e);break;case"danger":d.error(e);break;case"warning":d.warning(e);break;case"info":d.info(e)}}p=h(location).attr("pathname"),f=p.split("/"),m=2,"index.php"===f[1]&&f.length>1&&(m=3),"super-administration"===f[m]&&(m+=1),""===f[f.length-1]&&f.pop(),h(".menu-item").removeClass("active"),h("#menu-"+f[m]).addClass("active"),i().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),h(document).on("click",".supprimer",(function(e){e.preventDefault();var t=h(this).attr("href"),n=h(this).data("csrf");i().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(a){a.value?h.ajax({url:t,type:"DELETE",data:{_token:n},success:function(t){if(t.hasOwnProperty("redirect")&&t.hasOwnProperty("url"))document.location.href=t.url;else{var n=b(e.target,"tr");n.parentNode.removeChild(n),g("Suppression effectuée avec succès","success"),i().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}},error:function(e,t,n){i().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),g("Erreur lors de la tentative de suppression","danger")}}):"cancel"===a.dismiss&&i().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var w="",x="text",O=!1;function k(e){var t=h("#myedit-input-"+e).val();h.ajax({url:w.attr("href"),data:{field:w.data("field"),value:t,type:x},method:"POST",success:function(){w.html(t),h("#myEdit-zone-"+e).replaceWith(w),O=!1}})}function _(e,t){var n={};return h.each(h(e).data(),(function(e,a){if("provide"!=(e=e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()})))){if(null!=t)switch(t[e]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[e]=a}})),n}function C(e){e.removeClass("is-valid").addClass("is-invalid")}function j(e){e.removeClass("is-invalid").addClass("is-valid")}function T(e){e.removeClass("is-invalid").removeClass("is-valid")}h(document).on("click",".myedit",(function(e){e.preventDefault(),w=h(this);var t,n,a="";O=!0,void 0!==h(this).data("type")&&(x=h(this).data("type")),"select"===h(this).data("type")||("textarea"===h(this).data("type")?(t=h(this),n=Date.now(),y=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+t.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(e){var t=Date.now();return'<div id="myEdit-zone-'+t+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+t+'" value="'+e.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+t+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+t+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(h(this))),h(this).replaceWith(a),h("#myedit-input").focus()})),h(document).on("keyup","#myedit-input",(function(e){13===e.keyCode&&!1===y?k():27===e.keyCode&&h("#myEdit-zone").replaceWith(w)})),h(document).on("click",".myedit-valide",(function(e){y=!1,e.preventDefault(),k(h(this).data("key"))})),h(document).on("keypress",(function(e){!0===O&&!1===y&&13===e.which&&(e.preventDefault(),k(h(this).data("key"))),!0===O&&!1===y&&27===e.which&&(e.preventDefault(),h("#myEdit-zone-"+h(this).data("key")).replaceWith(w))})),h(document).on("click",".myedit-annule",(function(e){e.preventDefault(),h("#myEdit-zone-"+h(this).data("key")).replaceWith(w)})),v.fn.dataAttr=function(e,t){return h(this)[0].getAttribute("data-"+e)||t},v.fn.hasDataAttr=function(e){return h(this)[0].hasAttribute("data-"+e)}},1223:(e,t,n)=>{var a=n(5112),i=n(30),r=n(3070),o=a("unscopables"),s=Array.prototype;null==s[o]&&r.f(s,o,{configurable:!0,value:i(null)}),e.exports=function(e){s[o][e]=!0}},9826:(e,t,n)=>{"use strict";var a=n(2109),i=n(2092).find,r=n(1223),o=n(9207),s="find",c=!0,u=o(s);s in[]&&Array(1).find((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!u},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(s)}},e=>{"use strict";e.O(0,[9755,2109,4093,1870,8771],(()=>{return t=9287,e(e.s=t);var t}));e.O()}]);