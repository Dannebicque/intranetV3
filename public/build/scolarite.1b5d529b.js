"use strict";(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[5531],{4648:(t,e,n)=>{var a=n(2396),r=n(9755);r(document).on("change","#scolarite_semestre",(function(){r.ajax({url:Routing.generate("administration_scolarite_ues_semestre",{semestre:r(this).val()}),type:"POST",success:function(t){var e='<div class="row">';for(var n in t){e=(e+='<div class="col-sm-12 col-md-4">')+'<div class="form-group"><label for="ue_'+n+'" class="required">UE '+t[n]+'</label><input type="text" id="ue_'+n+'" name="ue_'+n+'" required="required" class="form-control" value="0"></div>',e+="</div>"}e+="</div>",r("#ues_semestre").empty().append(e)},error:function(){(0,a.qX)("Erreur la requête.","danger")}})})),r(document).on("change","#scolarite_semestre",(function(){r.ajax({url:Routing.generate("administration_scolarite_ues_semestre",{semestre:r(this).val()}),type:"POST",success:function(t){var e='<div class="row">';for(var n in t){e=(e+='<div class="col-sm-12 col-md-4">')+'<div class="form-group"><label for="ue_'+n+'" class="required">UE '+t[n]+'</label><input type="text" id="ue_'+n+'" name="ue_'+n+'" required="required" class="form-control" value="0"></div>',e+="</div>"}e+="</div>",r("#ues_semestre").empty().append(e)},error:function(){(0,a.qX)("Erreur la requête.","danger")}})}))},2396:(t,e,n)=>{n.d(e,{qX:()=>b,FX:()=>j,xQ:()=>x,XQ:()=>C,zl:()=>B});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a=n(6455),r=n.n(a),i=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),s=n.n(i);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var e,n,a;return e=t,(n=[{key:"show",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(a=c(c({},this.defaultOptions),a)).className+=" toast-"+t;var r='<div class="toast-wrapper">';n&&(r+='<div class="toast-head">'+n+"</div>"),r+='<div class="toast-body">'+e+"</div>",r+="</div>",a.text=r,s()(a).showToast()}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",t,e,n)}},{key:"warning",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",t,e,n)}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",t,e,n)}},{key:"info",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",t,e,n)}}])&&u(e.prototype,n),a&&u(e,a),t}());var p,f,m,v=n(9755),h=n(9755),y=!1;function b(t,e){switch(e){case"success":d.success(t);break;case"danger":d.error(t);break;case"warning":d.warning(t);break;case"info":d.info(t)}}p=v(location).attr("pathname"),f=p.split("/"),m=2,"index.php"===f[1]&&f.length>1&&(m=3),"super-administration"===f[m]&&(m+=1),""===f[f.length-1]&&f.pop(),v(".menu-item").removeClass("active"),v("#menu-"+f[m]).addClass("active"),r().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),v(document).on("click",".supprimer",(function(t){t.preventDefault();var e=v(this).attr("href"),n=v(this).data("csrf");r().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?v.ajax({url:e,type:"DELETE",data:{_token:n},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(v("#ligne_"+t).closest("tr").remove(),b("Suppression effectuée avec succès","success"),r().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){r().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),b("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&r().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var g="",w="text",k=!1;function O(t){var e=v("#myedit-input-"+t).val();v.ajax({url:g.attr("href"),data:{field:g.data("field"),value:e,type:w},method:"POST",success:function(){g.html(e),v("#myEdit-zone-"+t).replaceWith(g),k=!1}})}function x(t,e){var n={};return v.each(v(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[t]=a}})),n}function C(t){t.removeClass("is-valid").addClass("is-invalid")}function B(t){t.removeClass("is-invalid").addClass("is-valid")}function j(t){t.removeClass("is-invalid").removeClass("is-valid")}v(document).on("click",".myedit",(function(t){t.preventDefault(),g=v(this);var e,n,a="";k=!0,void 0!==v(this).data("type")&&(w=v(this).data("type")),"select"===v(this).data("type")||("textarea"===v(this).data("type")?(e=v(this),n=Date.now(),y=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(v(this))),v(this).replaceWith(a),v("#myedit-input").focus()})),v(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===y?O():27===t.keyCode&&v("#myEdit-zone").replaceWith(g)})),v(document).on("click",".myedit-valide",(function(t){y=!1,t.preventDefault(),O(v(this).data("key"))})),v(document).on("keypress",(function(t){!0===k&&!1===y&&13===t.which&&(t.preventDefault(),O(v(this).data("key"))),!0===k&&!1===y&&27===t.which&&(t.preventDefault(),v("#myEdit-zone-"+v(this).data("key")).replaceWith(g))})),v(document).on("click",".myedit-annule",(function(t){t.preventDefault(),v("#myEdit-zone-"+v(this).data("key")).replaceWith(g)})),h.fn.dataAttr=function(t,e){return v(this)[0].getAttribute("data-"+t)||e},h.fn.hasDataAttr=function(t){return v(this)[0].hasAttribute("data-"+t)}}},t=>{t.O(0,[9755,2109,3123,94,8771],(()=>{return e=4648,t(t.s=e);var e}));t.O()}]);