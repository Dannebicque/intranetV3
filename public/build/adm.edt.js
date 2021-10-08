(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.edt"],{

/***/ "./assets/js/pages/adm.edt.js":
/*!************************************!*\
  !*** ./assets/js/pages/adm.edt.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_jqueryui_jquery_ui_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vendor/jqueryui/jquery-ui.min */ "./assets/vendor/jqueryui/jquery-ui.min.js");
/* harmony import */ var _vendor_jqueryui_jquery_ui_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_jqueryui_jquery_ui_min__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.edt.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01

var Cells = [];
var Ind = 0;
var $rowClicked; //select

function updateBloc(id) {
  $.ajax({
    url: Routing.generate('administration_edt_get_event', {
      id: id
    }),
    success: function success(data) {
      // $('#hdbt').selectpicker('val', data.heureDbtInt)
      // $('#hfin').selectpicker('val', data.heureFinInt)
      $('#hdbt').val(data.heureDbtInt);
      $('#hfin').val(data.heureFinInt);
      $('#jourc' + data.jour).prop('checked', true); // $('#typecours').selectpicker('val', data.typecours + '-' + data.groupe)

      $('#typecours').val(data.typecours + '-' + data.groupe);
      $('#salle').val(data.salle);
      $('#texte').val(data.texte); // $('#selectmatiere').selectpicker('val', data.typeIdMatiere)
      // $('#selectenseignant').selectpicker('val', data.personnelId)

      $('#selectmatiere').val(data.typeIdMatiere);
      $('#selectenseignant').val(data.personnelId);
      $('#idEdtUpdate').val(data.id);
      $('#btnAddEDT').empty().append('Modifier le créneau');
      $('#btnDelete').prop('href', Routing.generate('administration_edt_delete', {
        'id': data.id
      }));
      $('#blocadd').show();
    }
  });
} //une fois la selection terminée


function selectfin() {
  var valeur;
  var tabdbt = Cells[0].split('_'); // $('#hdbt').selectpicker('val', tabdbt[1])

  $('#hdbt').val(tabdbt[1]);
  var tabfin = Cells[Cells.length - 1].split('_');
  var fin = parseInt(tabfin[1]) + 1; //$('#hfin').selectpicker('val', fin)

  $('#hfin').val(fin);
  $('#jourc' + tabdbt[2]).prop('checked', true);
  var diff = parseInt(tabfin[3]) - parseInt(tabdbt[3]);

  if (diff === 0) //donc sur la même colonne
    {
      valeur = 'TP-' + tabdbt[3];
    } else if (diff === 1) //donc sur 2 colonnes)
    {
      valeur = 'TD-' + tabdbt[3];
    } else {
    valeur = 'CM-1';
  } // $('#typecours').selectpicker('val', valeur)
  // $('#salle').selectpicker('val', '')
  // $('#texte').selectpicker('val', '')


  $('#typecours').val(valeur);
  $('#salle').val('');
  $('#texte').val('');
  $('#idEdtUpdate').val('');
  $('#btnAddEDT').empty().append('Ajouter le créneau');
  $('#blocadd').show();
} //au debut de la selection


function debut() {
  Cells = [];
  Ind = 0;
} //mémoriser les celulles selectionnées


$('#selectable').selectable({
  filter: 'th,td:not(.edt_cours)',
  start: function start(event, ui) {
    if (!$(event.originalEvent.target).hasClass('edt_cours')) {
      debut();
    }
  },
  stop: function stop(event, ui) {
    if ($(event.originalEvent.target).hasClass('edt_cours')) {
      updateBloc($(event.originalEvent.target).data('edt'));
    } else {
      selectfin();
    }
  },
  selected: function selected(event, ui) {
    var s = $(this).find('.ui-selected');
    Cells[Ind] = $(ui.selected).attr('id');
    Ind = Ind + 1;
  }
});
$('#foc').scroll(); //importer semaine

$(document).on('click', '#idimportsemaine', function () {
  var za = $('#zoneaction');
  za.empty();
  za.load(Routing.generate('administration_edt_za_importsemaine'));
  za.fadeIn(1000);
}); //changement d'heure de début

$(document).on('change', '#hdbt', function () {
  var t = parseInt($(this).val()) + 3;
  $('#hfin').val(t);
}); // //affiche par prof

$(document).on('change', '#affichepersonnel', function () {
  var tabetu = $('#zone_edt');
  var $sem = $('#semaine2').val();
  tabetu.empty();
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: 'prof',
    valeur: $(this).val(),
    semaine: $sem
  }));
  tabetu.fadeIn(2000);
}); //affiche par prof

$(document).on('change', '#affichesalle', function () {
  var tabetu = $('#zone_edt');
  var $sem = $('#semaine2').val();
  tabetu.empty().hide();
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: 'salle',
    valeur: $(this).val(),
    semaine: $sem
  }));
  tabetu.fadeIn(2000);
}); // //affiche de tous les groupes de toutes les promos
// $(document).on('change', '#affichejour', function () {
//   const tabetu = $('#zone_edt')
//   const $sem = $('#semainereelle').val()
//   tabetu.empty();
//   /*tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {
//     filtre: 'jour',
//     valeur: $(this).val(),
//     semainer: $sem
//   });*/
//   tabetu.fadeIn(2000);
//   $('#load-page').hide();
//
// });
//affichage d'une promo sur une semaine précise

$(document).on('change', '#affichesemaine', function () {
  var tabetu = $('#zone_edt');
  var $sem = $('#semaine2').val();
  var $val = $(this).val().split('_');
  tabetu.empty();
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: $val[0],
    valeur: $val[1],
    semaine: $val[2]
  }));
  tabetu.fadeIn(2000);
}); //affichage par matière

$(document).on('change', '#affichematiere', function () {
  var tabetu = $('#zone_edt');
  var $sem = $('#semaine2').val();
  tabetu.empty();
  tabetu.load(Routing.generate('administration_edt_ajax_update', {
    filtre: 'module',
    valeur: $(this).val(),
    semaine: $sem
  }));
  tabetu.fadeIn(2000);
});
/***************/

/* EDT REALISE */

/***************/

$(document).on('change', '#selectpersonnel', function () {
  var selectMatiere = $('#selectmatiere'); //selectMatiere.selectpicker('val', '0')

  selectMatiere.val(0);
}); // $(document).on('change', '#edtSelectSemestre', function () {
//   $.ajax(
//     {
//       url: Routing.generate('api_matieres_semestre_personnel', {
//         semestre: $(this).val(),
//         personnel: $('#selectpersonnel').val()
//       }),
//       type: 'POST',
//       dataType: 'json', //Return data type (what we expect).
//       success: function (data) {
//         const selectMatiere = $('#selectmatiere')
//         selectMatiere.selectpicker('destroy')
//         selectMatiere.empty()
//         selectMatiere.append(new Option('Choisissez une matière !', ''))
//         for (let key in data) {
//           let value = data[key]
//           selectMatiere.append(new Option(value.libelle + ' (UE: ' + value.ue + ')', value.id))
//         }
//         selectMatiere.selectpicker()
//       },
//       error: function () {
//
//       }
//     })
// })

$(document).on('click', '#btnafficheRealise', function (e) {
  e.preventDefault();
  var $bloc = $('#blocchrono');
  $bloc.empty();
  $bloc.load(Routing.generate('administration_edt_service_realise_affiche', {
    personnel: $('#selectpersonnel').val(),
    matiere: $('#selectmatiere').val()
  }));
});

/***/ }),

/***/ "./assets/vendor/jqueryui/jquery-ui.min.js":
/*!*************************************************!*\
  !*** ./assets/vendor/jqueryui/jquery-ui.min.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/jqueryui/jquery-ui.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/06/2021 09:51
!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (h) {
  h.ui = h.ui || {};
  h.ui.version = "1.12.1";
  var n,
      s = 0,
      l = Array.prototype.slice;
  h.cleanData = (n = h.cleanData, function (e) {
    for (var t, s, i = 0; null != (s = e[i]); i++) {
      try {
        (t = h._data(s, "events")) && t.remove && h(s).triggerHandler("remove");
      } catch (e) {}
    }

    n(e);
  }), h.widget = function (e, s, t) {
    var i,
        n,
        o,
        a = {},
        l = e.split(".")[0],
        r = l + "-" + (e = e.split(".")[1]);
    return t || (t = s, s = h.Widget), h.isArray(t) && (t = h.extend.apply(null, [{}].concat(t))), h.expr[":"][r.toLowerCase()] = function (e) {
      return !!h.data(e, r);
    }, h[l] = h[l] || {}, i = h[l][e], n = h[l][e] = function (e, t) {
      if (!this._createWidget) return new n(e, t);
      arguments.length && this._createWidget(e, t);
    }, h.extend(n, i, {
      version: t.version,
      _proto: h.extend({}, t),
      _childConstructors: []
    }), (o = new s()).options = h.widget.extend({}, o.options), h.each(t, function (t, i) {
      function n() {
        return s.prototype[t].apply(this, arguments);
      }

      function o(e) {
        return s.prototype[t].apply(this, e);
      }

      h.isFunction(i) ? a[t] = function () {
        var e,
            t = this._super,
            s = this._superApply;
        return this._super = n, this._superApply = o, e = i.apply(this, arguments), this._super = t, this._superApply = s, e;
      } : a[t] = i;
    }), n.prototype = h.widget.extend(o, {
      widgetEventPrefix: i && o.widgetEventPrefix || e
    }, a, {
      constructor: n,
      namespace: l,
      widgetName: e,
      widgetFullName: r
    }), i ? (h.each(i._childConstructors, function (e, t) {
      var s = t.prototype;
      h.widget(s.namespace + "." + s.widgetName, n, t._proto);
    }), delete i._childConstructors) : s._childConstructors.push(n), h.widget.bridge(e, n), n;
  }, h.widget.extend = function (e) {
    for (var t, s, i = l.call(arguments, 1), n = 0, o = i.length; n < o; n++) {
      for (t in i[n]) {
        s = i[n][t], i[n].hasOwnProperty(t) && void 0 !== s && (h.isPlainObject(s) ? e[t] = h.isPlainObject(e[t]) ? h.widget.extend({}, e[t], s) : h.widget.extend({}, s) : e[t] = s);
      }
    }

    return e;
  }, h.widget.bridge = function (o, t) {
    var a = t.prototype.widgetFullName || o;

    h.fn[o] = function (s) {
      var e = "string" == typeof s,
          i = l.call(arguments, 1),
          n = this;
      return e ? this.length || "instance" !== s ? this.each(function () {
        var e,
            t = h.data(this, a);
        return "instance" === s ? (n = t, !1) : t ? h.isFunction(t[s]) && "_" !== s.charAt(0) ? (e = t[s].apply(t, i)) !== t && void 0 !== e ? (n = e && e.jquery ? n.pushStack(e.get()) : e, !1) : void 0 : h.error("no such method '" + s + "' for " + o + " widget instance") : h.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + s + "'");
      }) : n = void 0 : (i.length && (s = h.widget.extend.apply(null, [s].concat(i))), this.each(function () {
        var e = h.data(this, a);
        e ? (e.option(s || {}), e._init && e._init()) : h.data(this, a, new t(s, this));
      })), n;
    };
  }, h.Widget = function () {}, h.Widget._childConstructors = [], h.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(e, t) {
      t = h(t || this.defaultElement || this)[0], this.element = h(t), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = h(), this.hoverable = h(), this.focusable = h(), this.classesElementLookup = {}, t !== this && (h.data(t, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(e) {
          e.target === t && this.destroy();
        }
      }), this.document = h(t.style ? t.ownerDocument : t.document || t), this.window = h(this.document[0].defaultView || this.document[0].parentWindow)), this.options = h.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: h.noop,
    _create: h.noop,
    _init: h.noop,
    destroy: function destroy() {
      var s = this;
      this._destroy(), h.each(this.classesElementLookup, function (e, t) {
        s._removeClass(t, e);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: h.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(e, t) {
      var s,
          i,
          n,
          o = e;
      if (0 === arguments.length) return h.widget.extend({}, this.options);
      if ("string" == typeof e) if (o = {}, e = (s = e.split(".")).shift(), s.length) {
        for (i = o[e] = h.widget.extend({}, this.options[e]), n = 0; n < s.length - 1; n++) {
          i[s[n]] = i[s[n]] || {}, i = i[s[n]];
        }

        if (e = s.pop(), 1 === arguments.length) return void 0 === i[e] ? null : i[e];
        i[e] = t;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        o[e] = t;
      }
      return this._setOptions(o), this;
    },
    _setOptions: function _setOptions(e) {
      for (var t in e) {
        this._setOption(t, e[t]);
      }

      return this;
    },
    _setOption: function _setOption(e, t) {
      return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this;
    },
    _setOptionClasses: function _setOptionClasses(e) {
      var t, s, i;

      for (t in e) {
        i = this.classesElementLookup[t], e[t] !== this.options.classes[t] && i && i.length && (s = h(i.get()), this._removeClass(i, t), s.addClass(this._classes({
          element: s,
          keys: t,
          classes: e,
          add: !0
        })));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(e) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function _classes(n) {
      var o = [],
          a = this;

      function e(e, t) {
        for (var s, i = 0; i < e.length; i++) {
          s = a.classesElementLookup[e[i]] || h(), s = n.add ? h(h.unique(s.get().concat(n.element.get()))) : h(s.not(n.element).get()), a.classesElementLookup[e[i]] = s, o.push(e[i]), t && n.classes[e[i]] && o.push(n.classes[e[i]]);
        }
      }

      return n = h.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, n), this._on(n.element, {
        remove: "_untrackClassesElement"
      }), n.keys && e(n.keys.match(/\S+/g) || [], !0), n.extra && e(n.extra.match(/\S+/g) || []), o.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(s) {
      var i = this;
      h.each(i.classesElementLookup, function (e, t) {
        -1 !== h.inArray(s.target, t) && (i.classesElementLookup[e] = h(t.not(s.target).get()));
      });
    },
    _removeClass: function _removeClass(e, t, s) {
      return this._toggleClass(e, t, s, !1);
    },
    _addClass: function _addClass(e, t, s) {
      return this._toggleClass(e, t, s, !0);
    },
    _toggleClass: function _toggleClass(e, t, s, i) {
      i = "boolean" == typeof i ? i : s;
      var n = "string" == typeof e || null === e,
          e = {
        extra: n ? t : s,
        keys: n ? e : t,
        element: n ? this.element : e,
        add: i
      };
      return e.element.toggleClass(this._classes(e), i), this;
    },
    _on: function _on(n, o, e) {
      var a,
          l = this;
      "boolean" != typeof n && (e = o, o = n, n = !1), e ? (o = a = h(o), this.bindings = this.bindings.add(o)) : (e = o, o = this.element, a = this.widget()), h.each(e, function (e, t) {
        function s() {
          if (n || !0 !== l.options.disabled && !h(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? l[t] : t).apply(l, arguments);
        }

        "string" != typeof t && (s.guid = t.guid = t.guid || s.guid || h.guid++);
        var i = e.match(/^([\w:-]*)\s*(.*)$/),
            e = i[1] + l.eventNamespace,
            i = i[2];
        i ? a.on(e, i, s) : o.on(e, s);
      });
    },
    _off: function _off(e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(t).off(t), this.bindings = h(this.bindings.not(e).get()), this.focusable = h(this.focusable.not(e).get()), this.hoverable = h(this.hoverable.not(e).get());
    },
    _delay: function _delay(e, t) {
      var s = this;
      return setTimeout(function () {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments);
      }, t || 0);
    },
    _hoverable: function _hoverable(e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function mouseenter(e) {
          this._addClass(h(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(e) {
          this._removeClass(h(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function focusin(e) {
          this._addClass(h(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(e) {
          this._removeClass(h(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(e, t, s) {
      var i,
          n,
          o = this.options[e];
      if (s = s || {}, (t = h.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], n = t.originalEvent) for (i in n) {
        i in t || (t[i] = n[i]);
      }
      return this.element.trigger(t, s), !(h.isFunction(o) && !1 === o.apply(this.element[0], [t].concat(s)) || t.isDefaultPrevented());
    }
  }, h.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (o, a) {
    h.Widget.prototype["_" + o] = function (t, e, s) {
      var i;
      "string" == typeof e && (e = {
        effect: e
      });
      var n = e ? !0 !== e && "number" != typeof e && e.effect || a : o;
      "number" == typeof (e = e || {}) && (e = {
        duration: e
      }), i = !h.isEmptyObject(e), e.complete = s, e.delay && t.delay(e.delay), i && h.effects && h.effects.effect[n] ? t[o](e) : n !== o && t[n] ? t[n](e.duration, e.easing, s) : t.queue(function (e) {
        h(this)[o](), s && s.call(t[0]), e();
      });
    };
  });
  h.widget, h.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var o = !1;
  h(document).on("mouseup", function () {
    o = !1;
  });
  h.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var t = this;
      this.element.on("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e);
      }).on("click." + this.widgetName, function (e) {
        if (!0 === h.data(e.target, t.widgetName + ".preventClickEvent")) return h.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(e) {
      if (!o) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var t = this,
            s = 1 === e.which,
            i = !("string" != typeof this.options.cancel || !e.target.nodeName) && h(e.target).closest(this.options.cancel).length;
        return s && !i && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          t.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === h.data(e.target, this.widgetName + ".preventClickEvent") && h.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return t._mouseMove(e);
        }, this._mouseUpDelegate = function (e) {
          return t._mouseUp(e);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(e) {
      if (this._mouseMoved) {
        if (h.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }

      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && h.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, e.preventDefault();
    },
    _mouseDistanceMet: function _mouseDistanceMet(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  }), h.widget("ui.selectable", h.ui.mouse, {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function _create() {
      var s = this;
      this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        s.elementPos = h(s.element[0]).offset(), s.selectees = h(s.options.filter, s.element[0]), s._addClass(s.selectees, "ui-selectee"), s.selectees.each(function () {
          var e = h(this),
              t = e.offset(),
              t = {
            left: t.left - s.elementPos.left,
            top: t.top - s.elementPos.top
          };
          h.data(this, "selectable-item", {
            element: this,
            $element: e,
            left: t.left,
            top: t.top,
            right: t.left + e.outerWidth(),
            bottom: t.top + e.outerHeight(),
            startselected: !1,
            selected: e.hasClass("ui-selected"),
            selecting: e.hasClass("ui-selecting"),
            unselecting: e.hasClass("ui-unselecting")
          });
        });
      }, this.refresh(), this._mouseInit(), this.helper = h("<div>"), this._addClass(this.helper, "ui-selectable-helper");
    },
    _destroy: function _destroy() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy();
    },
    _mouseStart: function _mouseStart(s) {
      var i = this,
          e = this.options;
      this.opos = [s.pageX, s.pageY], this.elementPos = h(this.element[0]).offset(), this.options.disabled || (this.selectees = h(e.filter, this.element[0]), this._trigger("start", s), h(e.appendTo).append(this.helper), this.helper.css({
        left: s.pageX,
        top: s.pageY,
        width: 0,
        height: 0
      }), e.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var e = h.data(this, "selectable-item");
        e.startselected = !0, s.metaKey || s.ctrlKey || (i._removeClass(e.$element, "ui-selected"), e.selected = !1, i._addClass(e.$element, "ui-unselecting"), e.unselecting = !0, i._trigger("unselecting", s, {
          unselecting: e.element
        }));
      }), h(s.target).parents().addBack().each(function () {
        var e,
            t = h.data(this, "selectable-item");
        if (t) return e = !s.metaKey && !s.ctrlKey || !t.$element.hasClass("ui-selected"), i._removeClass(t.$element, e ? "ui-unselecting" : "ui-selected")._addClass(t.$element, e ? "ui-selecting" : "ui-unselecting"), t.unselecting = !e, t.selecting = e, (t.selected = e) ? i._trigger("selecting", s, {
          selecting: t.element
        }) : i._trigger("unselecting", s, {
          unselecting: t.element
        }), !1;
      }));
    },
    _mouseDrag: function _mouseDrag(i) {
      if (this.dragged = !0, !this.options.disabled) {
        var e,
            n = this,
            o = this.options,
            a = this.opos[0],
            l = this.opos[1],
            r = i.pageX,
            u = i.pageY;
        return r < a && (e = r, r = a, a = e), u < l && (e = u, u = l, l = e), this.helper.css({
          left: a,
          top: l,
          width: r - a,
          height: u - l
        }), this.selectees.each(function () {
          var e = h.data(this, "selectable-item"),
              t = !1,
              s = {};
          e && e.element !== n.element[0] && (s.left = e.left + n.elementPos.left, s.right = e.right + n.elementPos.left, s.top = e.top + n.elementPos.top, s.bottom = e.bottom + n.elementPos.top, "touch" === o.tolerance ? t = !(s.left > r || s.right < a || s.top > u || s.bottom < l) : "fit" === o.tolerance && (t = s.left > a && s.right < r && s.top > l && s.bottom < u), t ? (e.selected && (n._removeClass(e.$element, "ui-selected"), e.selected = !1), e.unselecting && (n._removeClass(e.$element, "ui-unselecting"), e.unselecting = !1), e.selecting || (n._addClass(e.$element, "ui-selecting"), e.selecting = !0, n._trigger("selecting", i, {
            selecting: e.element
          }))) : (e.selecting && ((i.metaKey || i.ctrlKey) && e.startselected ? (n._removeClass(e.$element, "ui-selecting"), e.selecting = !1, n._addClass(e.$element, "ui-selected"), e.selected = !0) : (n._removeClass(e.$element, "ui-selecting"), e.selecting = !1, e.startselected && (n._addClass(e.$element, "ui-unselecting"), e.unselecting = !0), n._trigger("unselecting", i, {
            unselecting: e.element
          }))), e.selected && (i.metaKey || i.ctrlKey || e.startselected || (n._removeClass(e.$element, "ui-selected"), e.selected = !1, n._addClass(e.$element, "ui-unselecting"), e.unselecting = !0, n._trigger("unselecting", i, {
            unselecting: e.element
          })))));
        }), !1;
      }
    },
    _mouseStop: function _mouseStop(t) {
      var s = this;
      return this.dragged = !1, h(".ui-unselecting", this.element[0]).each(function () {
        var e = h.data(this, "selectable-item");
        s._removeClass(e.$element, "ui-unselecting"), e.unselecting = !1, e.startselected = !1, s._trigger("unselected", t, {
          unselected: e.element
        });
      }), h(".ui-selecting", this.element[0]).each(function () {
        var e = h.data(this, "selectable-item");
        s._removeClass(e.$element, "ui-selecting")._addClass(e.$element, "ui-selected"), e.selecting = !1, e.selected = !0, e.startselected = !0, s._trigger("selected", t, {
          selected: e.element
        });
      }), this._trigger("stop", t), this.helper.remove(), !1;
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_object-b54182"], () => (__webpack_exec__("./assets/js/pages/adm.edt.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5lZHQuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy92ZW5kb3IvanF1ZXJ5dWkvanF1ZXJ5LXVpLm1pbi5qcyJdLCJuYW1lcyI6WyJDZWxscyIsIkluZCIsIiRyb3dDbGlja2VkIiwidXBkYXRlQmxvYyIsImlkIiwiJCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJzdWNjZXNzIiwiZGF0YSIsInZhbCIsImhldXJlRGJ0SW50IiwiaGV1cmVGaW5JbnQiLCJqb3VyIiwicHJvcCIsInR5cGVjb3VycyIsImdyb3VwZSIsInNhbGxlIiwidGV4dGUiLCJ0eXBlSWRNYXRpZXJlIiwicGVyc29ubmVsSWQiLCJlbXB0eSIsImFwcGVuZCIsInNob3ciLCJzZWxlY3RmaW4iLCJ2YWxldXIiLCJ0YWJkYnQiLCJzcGxpdCIsInRhYmZpbiIsImxlbmd0aCIsImZpbiIsInBhcnNlSW50IiwiZGlmZiIsImRlYnV0Iiwic2VsZWN0YWJsZSIsImZpbHRlciIsInN0YXJ0IiwiZXZlbnQiLCJ1aSIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsInN0b3AiLCJzZWxlY3RlZCIsInMiLCJmaW5kIiwiYXR0ciIsInNjcm9sbCIsImRvY3VtZW50Iiwib24iLCJ6YSIsImxvYWQiLCJmYWRlSW4iLCJ0IiwidGFiZXR1IiwiJHNlbSIsImZpbHRyZSIsInNlbWFpbmUiLCJoaWRlIiwiJHZhbCIsInNlbGVjdE1hdGllcmUiLCJlIiwicHJldmVudERlZmF1bHQiLCIkYmxvYyIsInBlcnNvbm5lbCIsIm1hdGllcmUiLCJkZWZpbmUiLCJoIiwidmVyc2lvbiIsIm4iLCJsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNsZWFuRGF0YSIsImkiLCJfZGF0YSIsInJlbW92ZSIsInRyaWdnZXJIYW5kbGVyIiwid2lkZ2V0IiwibyIsImEiLCJyIiwiV2lkZ2V0IiwiaXNBcnJheSIsImV4dGVuZCIsImFwcGx5IiwiY29uY2F0IiwiZXhwciIsInRvTG93ZXJDYXNlIiwiX2NyZWF0ZVdpZGdldCIsImFyZ3VtZW50cyIsIl9wcm90byIsIl9jaGlsZENvbnN0cnVjdG9ycyIsIm9wdGlvbnMiLCJlYWNoIiwiaXNGdW5jdGlvbiIsIl9zdXBlciIsIl9zdXBlckFwcGx5Iiwid2lkZ2V0RXZlbnRQcmVmaXgiLCJjb25zdHJ1Y3RvciIsIm5hbWVzcGFjZSIsIndpZGdldE5hbWUiLCJ3aWRnZXRGdWxsTmFtZSIsInB1c2giLCJicmlkZ2UiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJpc1BsYWluT2JqZWN0IiwiZm4iLCJjaGFyQXQiLCJqcXVlcnkiLCJwdXNoU3RhY2siLCJnZXQiLCJlcnJvciIsIm9wdGlvbiIsIl9pbml0IiwiZGVmYXVsdEVsZW1lbnQiLCJjbGFzc2VzIiwiZGlzYWJsZWQiLCJjcmVhdGUiLCJlbGVtZW50IiwidXVpZCIsImV2ZW50TmFtZXNwYWNlIiwiYmluZGluZ3MiLCJob3ZlcmFibGUiLCJmb2N1c2FibGUiLCJjbGFzc2VzRWxlbWVudExvb2t1cCIsIl9vbiIsImRlc3Ryb3kiLCJzdHlsZSIsIm93bmVyRG9jdW1lbnQiLCJ3aW5kb3ciLCJkZWZhdWx0VmlldyIsInBhcmVudFdpbmRvdyIsIl9nZXRDcmVhdGVPcHRpb25zIiwiX2NyZWF0ZSIsIl9zZXRPcHRpb25EaXNhYmxlZCIsIl90cmlnZ2VyIiwiX2dldENyZWF0ZUV2ZW50RGF0YSIsIm5vb3AiLCJfZGVzdHJveSIsIl9yZW1vdmVDbGFzcyIsIm9mZiIsInJlbW92ZURhdGEiLCJyZW1vdmVBdHRyIiwic2hpZnQiLCJwb3AiLCJfc2V0T3B0aW9ucyIsIl9zZXRPcHRpb24iLCJfc2V0T3B0aW9uQ2xhc3NlcyIsImFkZENsYXNzIiwiX2NsYXNzZXMiLCJrZXlzIiwiYWRkIiwiX3RvZ2dsZUNsYXNzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInVuaXF1ZSIsIm5vdCIsIm1hdGNoIiwiZXh0cmEiLCJqb2luIiwiX3VudHJhY2tDbGFzc2VzRWxlbWVudCIsImluQXJyYXkiLCJfYWRkQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImd1aWQiLCJfb2ZmIiwiX2RlbGF5Iiwic2V0VGltZW91dCIsIl9ob3ZlcmFibGUiLCJtb3VzZWVudGVyIiwiY3VycmVudFRhcmdldCIsIm1vdXNlbGVhdmUiLCJfZm9jdXNhYmxlIiwiZm9jdXNpbiIsImZvY3Vzb3V0IiwiRXZlbnQiLCJ0eXBlIiwidHJpZ2dlciIsImlzRGVmYXVsdFByZXZlbnRlZCIsImVmZmVjdCIsImR1cmF0aW9uIiwiaXNFbXB0eU9iamVjdCIsImNvbXBsZXRlIiwiZGVsYXkiLCJlZmZlY3RzIiwiZWFzaW5nIiwicXVldWUiLCJpZSIsImV4ZWMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjYW5jZWwiLCJkaXN0YW5jZSIsIl9tb3VzZUluaXQiLCJfbW91c2VEb3duIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RhcnRlZCIsIl9tb3VzZURlc3Ryb3kiLCJfbW91c2VNb3ZlRGVsZWdhdGUiLCJfbW91c2VVcERlbGVnYXRlIiwiX21vdXNlTW92ZWQiLCJfbW91c2VTdGFydGVkIiwiX21vdXNlVXAiLCJfbW91c2VEb3duRXZlbnQiLCJ3aGljaCIsIm5vZGVOYW1lIiwiY2xvc2VzdCIsIl9tb3VzZUNhcHR1cmUiLCJtb3VzZURlbGF5TWV0IiwiX21vdXNlRGVsYXlUaW1lciIsIl9tb3VzZURpc3RhbmNlTWV0IiwiX21vdXNlRGVsYXlNZXQiLCJfbW91c2VTdGFydCIsIl9tb3VzZU1vdmUiLCJkb2N1bWVudE1vZGUiLCJidXR0b24iLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiaWdub3JlTWlzc2luZ1doaWNoIiwiX21vdXNlRHJhZyIsIl9tb3VzZVN0b3AiLCJjbGVhclRpbWVvdXQiLCJNYXRoIiwibWF4IiwiYWJzIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlIiwiYXBwZW5kVG8iLCJhdXRvUmVmcmVzaCIsInRvbGVyYW5jZSIsInNlbGVjdGluZyIsInVuc2VsZWN0ZWQiLCJ1bnNlbGVjdGluZyIsImRyYWdnZWQiLCJyZWZyZXNoIiwiZWxlbWVudFBvcyIsIm9mZnNldCIsInNlbGVjdGVlcyIsImxlZnQiLCJ0b3AiLCIkZWxlbWVudCIsInJpZ2h0Iiwib3V0ZXJXaWR0aCIsImJvdHRvbSIsIm91dGVySGVpZ2h0Iiwic3RhcnRzZWxlY3RlZCIsImhlbHBlciIsIm9wb3MiLCJjc3MiLCJ3aWR0aCIsImhlaWdodCIsInBhcmVudHMiLCJhZGRCYWNrIiwidSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsR0FBRyxHQUFHLENBQVY7QUFFQSxJQUFJQyxXQUFKLEMsQ0FFQTs7QUFDQSxTQUFTQyxVQUFULENBQXFCQyxFQUFyQixFQUF5QjtBQUN2QkMsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsOEJBQWpCLEVBQWlEO0FBQUNMLFFBQUUsRUFBRUE7QUFBTCxLQUFqRCxDQURBO0FBRUxNLFdBQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QjtBQUNBO0FBQ0FOLE9BQUMsQ0FBQyxPQUFELENBQUQsQ0FBV08sR0FBWCxDQUFlRCxJQUFJLENBQUNFLFdBQXBCO0FBQ0FSLE9BQUMsQ0FBQyxPQUFELENBQUQsQ0FBV08sR0FBWCxDQUFlRCxJQUFJLENBQUNHLFdBQXBCO0FBQ0FULE9BQUMsQ0FBQyxXQUFXTSxJQUFJLENBQUNJLElBQWpCLENBQUQsQ0FBd0JDLElBQXhCLENBQTZCLFNBQTdCLEVBQXdDLElBQXhDLEVBTHVCLENBTXZCOztBQUNBWCxPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTyxHQUFoQixDQUFvQkQsSUFBSSxDQUFDTSxTQUFMLEdBQWlCLEdBQWpCLEdBQXVCTixJQUFJLENBQUNPLE1BQWhEO0FBQ0FiLE9BQUMsQ0FB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LFFBQUYsR0FBVyxDQUFDLENBQXpHLEVBQTJHa0IsQ0FBQyxDQUFDOEwsYUFBRixHQUFnQixDQUFDLENBQTVILEVBQThIL00sQ0FBQyxDQUFDOEYsUUFBRixDQUFXLFVBQVgsRUFBc0JyRixDQUF0QixFQUF3QjtBQUFDVixrQkFBUSxFQUFDa0IsQ0FBQyxDQUFDNEQ7QUFBWixTQUF4QixDQUE5SDtBQUE0SyxPQUFwUSxDQUE5TyxFQUFvZixLQUFLaUIsUUFBTCxDQUFjLE1BQWQsRUFBcUJyRixDQUFyQixDQUFwZixFQUE0Z0IsS0FBS3VNLE1BQUwsQ0FBWS9LLE1BQVosRUFBNWdCLEVBQWlpQixDQUFDLENBQXppQjtBQUEyaUI7QUFBL2dJLEdBQXBDLENBQTc5RjtBQUFtaE8sQ0FBamtlLENBQUQsQyIsImZpbGUiOiJhZG0uZWR0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5lZHQuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMi8wOS8yMDIxIDA5OjAxXG5cbmltcG9ydCAnLi4vLi4vdmVuZG9yL2pxdWVyeXVpL2pxdWVyeS11aS5taW4nXG5cbmxldCBDZWxscyA9IFtdXG5sZXQgSW5kID0gMFxuXG5sZXQgJHJvd0NsaWNrZWRcblxuLy9zZWxlY3RcbmZ1bmN0aW9uIHVwZGF0ZUJsb2MgKGlkKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9lZHRfZ2V0X2V2ZW50Jywge2lkOiBpZH0pLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAvLyAkKCcjaGRidCcpLnNlbGVjdHBpY2tlcigndmFsJywgZGF0YS5oZXVyZURidEludClcbiAgICAgIC8vICQoJyNoZmluJykuc2VsZWN0cGlja2VyKCd2YWwnLCBkYXRhLmhldXJlRmluSW50KVxuICAgICAgJCgnI2hkYnQnKS52YWwoZGF0YS5oZXVyZURidEludClcbiAgICAgICQoJyNoZmluJykudmFsKGRhdGEuaGV1cmVGaW5JbnQpXG4gICAgICAkKCcjam91cmMnICsgZGF0YS5qb3VyKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgIC8vICQoJyN0eXBlY291cnMnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIGRhdGEudHlwZWNvdXJzICsgJy0nICsgZGF0YS5ncm91cGUpXG4gICAgICAkKCcjdHlwZWNvdXJzJykudmFsKGRhdGEudHlwZWNvdXJzICsgJy0nICsgZGF0YS5ncm91cGUpXG4gICAgICAkKCcjc2FsbGUnKS52YWwoZGF0YS5zYWxsZSlcbiAgICAgICQoJyN0ZXh0ZScpLnZhbChkYXRhLnRleHRlKVxuICAgICAgLy8gJCgnI3NlbGVjdG1hdGllcmUnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIGRhdGEudHlwZUlkTWF0aWVyZSlcbiAgICAgIC8vICQoJyNzZWxlY3RlbnNlaWduYW50Jykuc2VsZWN0cGlja2VyKCd2YWwnLCBkYXRhLnBlcnNvbm5lbElkKVxuICAgICAgJCgnI3NlbGVjdG1hdGllcmUnKS52YWwoZGF0YS50eXBlSWRNYXRpZXJlKVxuICAgICAgJCgnI3NlbGVjdGVuc2VpZ25hbnQnKS52YWwoZGF0YS5wZXJzb25uZWxJZClcbiAgICAgICQoJyNpZEVkdFVwZGF0ZScpLnZhbChkYXRhLmlkKVxuICAgICAgJCgnI2J0bkFkZEVEVCcpLmVtcHR5KCkuYXBwZW5kKCdNb2RpZmllciBsZSBjcsOpbmVhdScpXG4gICAgICAkKCcjYnRuRGVsZXRlJykucHJvcCgnaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2VkdF9kZWxldGUnLCB7J2lkJzogZGF0YS5pZH0pKVxuXG4gICAgICAkKCcjYmxvY2FkZCcpLnNob3coKVxuICAgIH1cbiAgfSlcbn1cblxuLy91bmUgZm9pcyBsYSBzZWxlY3Rpb24gdGVybWluw6llXG5mdW5jdGlvbiBzZWxlY3RmaW4gKCkge1xuICBsZXQgdmFsZXVyXG5cbiAgbGV0IHRhYmRidCA9IENlbGxzWzBdLnNwbGl0KCdfJylcbiAgLy8gJCgnI2hkYnQnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIHRhYmRidFsxXSlcbiAgJCgnI2hkYnQnKS52YWwodGFiZGJ0WzFdKVxuXG4gIGxldCB0YWJmaW4gPSBDZWxsc1tDZWxscy5sZW5ndGggLSAxXS5zcGxpdCgnXycpXG5cbiAgbGV0IGZpbiA9IHBhcnNlSW50KHRhYmZpblsxXSkgKyAxXG4gIC8vJCgnI2hmaW4nKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIGZpbilcbiAgJCgnI2hmaW4nKS52YWwoZmluKVxuXG4gICQoJyNqb3VyYycgKyB0YWJkYnRbMl0pLnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuXG4gIGxldCBkaWZmID0gcGFyc2VJbnQodGFiZmluWzNdKSAtIHBhcnNlSW50KHRhYmRidFszXSlcbiAgaWYgKGRpZmYgPT09IDApLy9kb25jIHN1ciBsYSBtw6ptZSBjb2xvbm5lXG4gIHtcbiAgICB2YWxldXIgPSAnVFAtJyArIHRhYmRidFszXVxuICB9IGVsc2UgaWYgKGRpZmYgPT09IDEpLy9kb25jIHN1ciAyIGNvbG9ubmVzKVxuICB7XG4gICAgdmFsZXVyID0gJ1RELScgKyB0YWJkYnRbM11cbiAgfSBlbHNlIHtcbiAgICB2YWxldXIgPSAnQ00tMSdcbiAgfVxuXG4gIC8vICQoJyN0eXBlY291cnMnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIHZhbGV1cilcbiAgLy8gJCgnI3NhbGxlJykuc2VsZWN0cGlja2VyKCd2YWwnLCAnJylcbiAgLy8gJCgnI3RleHRlJykuc2VsZWN0cGlja2VyKCd2YWwnLCAnJylcbiAgJCgnI3R5cGVjb3VycycpLnZhbCh2YWxldXIpXG4gICQoJyNzYWxsZScpLnZhbCgnJylcbiAgJCgnI3RleHRlJykudmFsKCcnKVxuICAkKCcjaWRFZHRVcGRhdGUnKS52YWwoJycpXG4gICQoJyNidG5BZGRFRFQnKS5lbXB0eSgpLmFwcGVuZCgnQWpvdXRlciBsZSBjcsOpbmVhdScpXG4gICQoJyNibG9jYWRkJykuc2hvdygpXG59XG5cbi8vYXUgZGVidXQgZGUgbGEgc2VsZWN0aW9uXG5mdW5jdGlvbiBkZWJ1dCAoKSB7XG4gIENlbGxzID0gW11cbiAgSW5kID0gMFxufVxuXG5cbi8vbcOpbW9yaXNlciBsZXMgY2VsdWxsZXMgc2VsZWN0aW9ubsOpZXNcbiQoJyNzZWxlY3RhYmxlJykuc2VsZWN0YWJsZSh7XG4gIGZpbHRlcjogJ3RoLHRkOm5vdCguZWR0X2NvdXJzKScsXG4gIHN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgaWYgKCEkKGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0KS5oYXNDbGFzcygnZWR0X2NvdXJzJykpIHtcbiAgICAgIGRlYnV0KClcbiAgICB9XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICBpZiAoJChldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ2VkdF9jb3VycycpKSB7XG4gICAgICB1cGRhdGVCbG9jKCQoZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXQpLmRhdGEoJ2VkdCcpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RmaW4oKVxuICAgIH1cbiAgfSxcbiAgc2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICBsZXQgcyA9ICQodGhpcykuZmluZCgnLnVpLXNlbGVjdGVkJylcbiAgICBDZWxsc1tJbmRdID0gJCh1aS5zZWxlY3RlZCkuYXR0cignaWQnKVxuICAgIEluZCA9IEluZCArIDFcbiAgfVxufSlcblxuXG4kKCcjZm9jJykuc2Nyb2xsKClcblxuLy9pbXBvcnRlciBzZW1haW5lXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2lkaW1wb3J0c2VtYWluZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgemEgPSAkKCcjem9uZWFjdGlvbicpXG4gIHphLmVtcHR5KClcbiAgemEubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9lZHRfemFfaW1wb3J0c2VtYWluZScpKVxuICB6YS5mYWRlSW4oMTAwMClcbn0pXG5cbi8vY2hhbmdlbWVudCBkJ2hldXJlIGRlIGTDqWJ1dFxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjaGRidCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdCA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpICsgM1xuICAkKCcjaGZpbicpLnZhbCh0KVxufSlcblxuLy8gLy9hZmZpY2hlIHBhciBwcm9mXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNhZmZpY2hlcGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YWJldHUgPSAkKCcjem9uZV9lZHQnKVxuICBjb25zdCAkc2VtID0gJCgnI3NlbWFpbmUyJykudmFsKClcblxuICB0YWJldHUuZW1wdHkoKVxuICB0YWJldHUubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9lZHRfYWpheF91cGRhdGUnLCB7XG4gICAgZmlsdHJlOiAncHJvZicsXG4gICAgdmFsZXVyOiAkKHRoaXMpLnZhbCgpLFxuICAgIHNlbWFpbmU6ICRzZW1cbiAgfSkpXG4gIHRhYmV0dS5mYWRlSW4oMjAwMClcblxufSlcblxuLy9hZmZpY2hlIHBhciBwcm9mXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNhZmZpY2hlc2FsbGUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhYmV0dSA9ICQoJyN6b25lX2VkdCcpXG4gIGNvbnN0ICRzZW0gPSAkKCcjc2VtYWluZTInKS52YWwoKVxuICB0YWJldHUuZW1wdHkoKS5oaWRlKClcbiAgdGFiZXR1LmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZWR0X2FqYXhfdXBkYXRlJywge1xuICAgIGZpbHRyZTogJ3NhbGxlJyxcbiAgICB2YWxldXI6ICQodGhpcykudmFsKCksXG4gICAgc2VtYWluZTogJHNlbVxuICB9KSlcbiAgdGFiZXR1LmZhZGVJbigyMDAwKVxufSlcblxuXG4vLyAvL2FmZmljaGUgZGUgdG91cyBsZXMgZ3JvdXBlcyBkZSB0b3V0ZXMgbGVzIHByb21vc1xuLy8gJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYWZmaWNoZWpvdXInLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGNvbnN0IHRhYmV0dSA9ICQoJyN6b25lX2VkdCcpXG4vLyAgIGNvbnN0ICRzZW0gPSAkKCcjc2VtYWluZXJlZWxsZScpLnZhbCgpXG4vLyAgIHRhYmV0dS5lbXB0eSgpO1xuLy8gICAvKnRhYmV0dS5sb2FkKFwie3sgcGF0aCgnZGFfa2VybmVsX2FkbWluaXN0cmF0aW9uX2FqYXhlZHQnKSB9fVwiLCB7XG4vLyAgICAgZmlsdHJlOiAnam91cicsXG4vLyAgICAgdmFsZXVyOiAkKHRoaXMpLnZhbCgpLFxuLy8gICAgIHNlbWFpbmVyOiAkc2VtXG4vLyAgIH0pOyovXG4vLyAgIHRhYmV0dS5mYWRlSW4oMjAwMCk7XG4vLyAgICQoJyNsb2FkLXBhZ2UnKS5oaWRlKCk7XG4vL1xuLy8gfSk7XG5cbi8vYWZmaWNoYWdlIGQndW5lIHByb21vIHN1ciB1bmUgc2VtYWluZSBwcsOpY2lzZVxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYWZmaWNoZXNlbWFpbmUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhYmV0dSA9ICQoJyN6b25lX2VkdCcpXG4gIGNvbnN0ICRzZW0gPSAkKCcjc2VtYWluZTInKS52YWwoKVxuICBsZXQgJHZhbCA9ICQodGhpcykudmFsKCkuc3BsaXQoJ18nKVxuICB0YWJldHUuZW1wdHkoKVxuICB0YWJldHUubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9lZHRfYWpheF91cGRhdGUnLCB7XG4gICAgZmlsdHJlOiAkdmFsWzBdLFxuICAgIHZhbGV1cjogJHZhbFsxXSxcbiAgICBzZW1haW5lOiAkdmFsWzJdXG4gIH0pKVxuICB0YWJldHUuZmFkZUluKDIwMDApXG59KVxuXG4vL2FmZmljaGFnZSBwYXIgbWF0acOocmVcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2FmZmljaGVtYXRpZXJlJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YWJldHUgPSAkKCcjem9uZV9lZHQnKVxuICBjb25zdCAkc2VtID0gJCgnI3NlbWFpbmUyJykudmFsKClcblxuICB0YWJldHUuZW1wdHkoKVxuICB0YWJldHUubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9lZHRfYWpheF91cGRhdGUnLCB7XG4gICAgZmlsdHJlOiAnbW9kdWxlJyxcbiAgICB2YWxldXI6ICQodGhpcykudmFsKCksXG4gICAgc2VtYWluZTogJHNlbVxuICB9KSlcbiAgdGFiZXR1LmZhZGVJbigyMDAwKVxufSlcblxuXG4vKioqKioqKioqKioqKioqL1xuLyogRURUIFJFQUxJU0UgKi9cbi8qKioqKioqKioqKioqKiovXG5cblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjc2VsZWN0cGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZWxlY3RNYXRpZXJlID0gJCgnI3NlbGVjdG1hdGllcmUnKVxuICAvL3NlbGVjdE1hdGllcmUuc2VsZWN0cGlja2VyKCd2YWwnLCAnMCcpXG4gIHNlbGVjdE1hdGllcmUudmFsKDApXG5cbn0pXG5cbi8vICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2VkdFNlbGVjdFNlbWVzdHJlJywgZnVuY3Rpb24gKCkge1xuLy8gICAkLmFqYXgoXG4vLyAgICAge1xuLy8gICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfbWF0aWVyZXNfc2VtZXN0cmVfcGVyc29ubmVsJywge1xuLy8gICAgICAgICBzZW1lc3RyZTogJCh0aGlzKS52YWwoKSxcbi8vICAgICAgICAgcGVyc29ubmVsOiAkKCcjc2VsZWN0cGVyc29ubmVsJykudmFsKClcbi8vICAgICAgIH0pLFxuLy8gICAgICAgdHlwZTogJ1BPU1QnLFxuLy8gICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy9SZXR1cm4gZGF0YSB0eXBlICh3aGF0IHdlIGV4cGVjdCkuXG4vLyAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuLy8gICAgICAgICBjb25zdCBzZWxlY3RNYXRpZXJlID0gJCgnI3NlbGVjdG1hdGllcmUnKVxuLy8gICAgICAgICBzZWxlY3RNYXRpZXJlLnNlbGVjdHBpY2tlcignZGVzdHJveScpXG4vLyAgICAgICAgIHNlbGVjdE1hdGllcmUuZW1wdHkoKVxuLy8gICAgICAgICBzZWxlY3RNYXRpZXJlLmFwcGVuZChuZXcgT3B0aW9uKCdDaG9pc2lzc2V6IHVuZSBtYXRpw6hyZSAhJywgJycpKVxuLy8gICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuLy8gICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XVxuLy8gICAgICAgICAgIHNlbGVjdE1hdGllcmUuYXBwZW5kKG5ldyBPcHRpb24odmFsdWUubGliZWxsZSArICcgKFVFOiAnICsgdmFsdWUudWUgKyAnKScsIHZhbHVlLmlkKSlcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBzZWxlY3RNYXRpZXJlLnNlbGVjdHBpY2tlcigpXG4vLyAgICAgICB9LFxuLy8gICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbi8vXG4vLyAgICAgICB9XG4vLyAgICAgfSlcbi8vIH0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnRuYWZmaWNoZVJlYWxpc2UnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgJGJsb2MgPSAkKCcjYmxvY2Nocm9ubycpXG4gICRibG9jLmVtcHR5KClcbiAgJGJsb2MubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9lZHRfc2VydmljZV9yZWFsaXNlX2FmZmljaGUnLCB7XG4gICAgcGVyc29ubmVsOiAkKCcjc2VsZWN0cGVyc29ubmVsJykudmFsKCksXG4gICAgbWF0aWVyZTogJCgnI3NlbGVjdG1hdGllcmUnKS52YWwoKVxuICB9KSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2pxdWVyeXVpL2pxdWVyeS11aS5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwOC8wNi8yMDIxIDA5OjUxXG5cbiFmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTplKGpRdWVyeSl9KGZ1bmN0aW9uKGgpe2gudWk9aC51aXx8e307aC51aS52ZXJzaW9uPVwiMS4xMi4xXCI7dmFyIG4scz0wLGw9QXJyYXkucHJvdG90eXBlLnNsaWNlO2guY2xlYW5EYXRhPShuPWguY2xlYW5EYXRhLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxzLGk9MDtudWxsIT0ocz1lW2ldKTtpKyspdHJ5eyh0PWguX2RhdGEocyxcImV2ZW50c1wiKSkmJnQucmVtb3ZlJiZoKHMpLnRyaWdnZXJIYW5kbGVyKFwicmVtb3ZlXCIpfWNhdGNoKGUpe31uKGUpfSksaC53aWRnZXQ9ZnVuY3Rpb24oZSxzLHQpe3ZhciBpLG4sbyxhPXt9LGw9ZS5zcGxpdChcIi5cIilbMF0scj1sK1wiLVwiKyhlPWUuc3BsaXQoXCIuXCIpWzFdKTtyZXR1cm4gdHx8KHQ9cyxzPWguV2lkZ2V0KSxoLmlzQXJyYXkodCkmJih0PWguZXh0ZW5kLmFwcGx5KG51bGwsW3t9XS5jb25jYXQodCkpKSxoLmV4cHJbXCI6XCJdW3IudG9Mb3dlckNhc2UoKV09ZnVuY3Rpb24oZSl7cmV0dXJuISFoLmRhdGEoZSxyKX0saFtsXT1oW2xdfHx7fSxpPWhbbF1bZV0sbj1oW2xdW2VdPWZ1bmN0aW9uKGUsdCl7aWYoIXRoaXMuX2NyZWF0ZVdpZGdldClyZXR1cm4gbmV3IG4oZSx0KTthcmd1bWVudHMubGVuZ3RoJiZ0aGlzLl9jcmVhdGVXaWRnZXQoZSx0KX0saC5leHRlbmQobixpLHt2ZXJzaW9uOnQudmVyc2lvbixfcHJvdG86aC5leHRlbmQoe30sdCksX2NoaWxkQ29uc3RydWN0b3JzOltdfSksKG89bmV3IHMpLm9wdGlvbnM9aC53aWRnZXQuZXh0ZW5kKHt9LG8ub3B0aW9ucyksaC5lYWNoKHQsZnVuY3Rpb24odCxpKXtmdW5jdGlvbiBuKCl7cmV0dXJuIHMucHJvdG90eXBlW3RdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBvKGUpe3JldHVybiBzLnByb3RvdHlwZVt0XS5hcHBseSh0aGlzLGUpfWguaXNGdW5jdGlvbihpKT9hW3RdPWZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzLl9zdXBlcixzPXRoaXMuX3N1cGVyQXBwbHk7cmV0dXJuIHRoaXMuX3N1cGVyPW4sdGhpcy5fc3VwZXJBcHBseT1vLGU9aS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fc3VwZXI9dCx0aGlzLl9zdXBlckFwcGx5PXMsZX06YVt0XT1pfSksbi5wcm90b3R5cGU9aC53aWRnZXQuZXh0ZW5kKG8se3dpZGdldEV2ZW50UHJlZml4OmkmJm8ud2lkZ2V0RXZlbnRQcmVmaXh8fGV9LGEse2NvbnN0cnVjdG9yOm4sbmFtZXNwYWNlOmwsd2lkZ2V0TmFtZTplLHdpZGdldEZ1bGxOYW1lOnJ9KSxpPyhoLmVhY2goaS5fY2hpbGRDb25zdHJ1Y3RvcnMsZnVuY3Rpb24oZSx0KXt2YXIgcz10LnByb3RvdHlwZTtoLndpZGdldChzLm5hbWVzcGFjZStcIi5cIitzLndpZGdldE5hbWUsbix0Ll9wcm90byl9KSxkZWxldGUgaS5fY2hpbGRDb25zdHJ1Y3RvcnMpOnMuX2NoaWxkQ29uc3RydWN0b3JzLnB1c2gobiksaC53aWRnZXQuYnJpZGdlKGUsbiksbn0saC53aWRnZXQuZXh0ZW5kPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxzLGk9bC5jYWxsKGFyZ3VtZW50cywxKSxuPTAsbz1pLmxlbmd0aDtuPG87bisrKWZvcih0IGluIGlbbl0pcz1pW25dW3RdLGlbbl0uaGFzT3duUHJvcGVydHkodCkmJnZvaWQgMCE9PXMmJihoLmlzUGxhaW5PYmplY3Qocyk/ZVt0XT1oLmlzUGxhaW5PYmplY3QoZVt0XSk/aC53aWRnZXQuZXh0ZW5kKHt9LGVbdF0scyk6aC53aWRnZXQuZXh0ZW5kKHt9LHMpOmVbdF09cyk7cmV0dXJuIGV9LGgud2lkZ2V0LmJyaWRnZT1mdW5jdGlvbihvLHQpe3ZhciBhPXQucHJvdG90eXBlLndpZGdldEZ1bGxOYW1lfHxvO2guZm5bb109ZnVuY3Rpb24ocyl7dmFyIGU9XCJzdHJpbmdcIj09dHlwZW9mIHMsaT1sLmNhbGwoYXJndW1lbnRzLDEpLG49dGhpcztyZXR1cm4gZT90aGlzLmxlbmd0aHx8XCJpbnN0YW5jZVwiIT09cz90aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PWguZGF0YSh0aGlzLGEpO3JldHVyblwiaW5zdGFuY2VcIj09PXM/KG49dCwhMSk6dD9oLmlzRnVuY3Rpb24odFtzXSkmJlwiX1wiIT09cy5jaGFyQXQoMCk/KGU9dFtzXS5hcHBseSh0LGkpKSE9PXQmJnZvaWQgMCE9PWU/KG49ZSYmZS5qcXVlcnk/bi5wdXNoU3RhY2soZS5nZXQoKSk6ZSwhMSk6dm9pZCAwOmguZXJyb3IoXCJubyBzdWNoIG1ldGhvZCAnXCIrcytcIicgZm9yIFwiK28rXCIgd2lkZ2V0IGluc3RhbmNlXCIpOmguZXJyb3IoXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiK28rXCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IGF0dGVtcHRlZCB0byBjYWxsIG1ldGhvZCAnXCIrcytcIidcIil9KTpuPXZvaWQgMDooaS5sZW5ndGgmJihzPWgud2lkZ2V0LmV4dGVuZC5hcHBseShudWxsLFtzXS5jb25jYXQoaSkpKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1oLmRhdGEodGhpcyxhKTtlPyhlLm9wdGlvbihzfHx7fSksZS5faW5pdCYmZS5faW5pdCgpKTpoLmRhdGEodGhpcyxhLG5ldyB0KHMsdGhpcykpfSkpLG59fSxoLldpZGdldD1mdW5jdGlvbigpe30saC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzPVtdLGguV2lkZ2V0LnByb3RvdHlwZT17d2lkZ2V0TmFtZTpcIndpZGdldFwiLHdpZGdldEV2ZW50UHJlZml4OlwiXCIsZGVmYXVsdEVsZW1lbnQ6XCI8ZGl2PlwiLG9wdGlvbnM6e2NsYXNzZXM6e30sZGlzYWJsZWQ6ITEsY3JlYXRlOm51bGx9LF9jcmVhdGVXaWRnZXQ6ZnVuY3Rpb24oZSx0KXt0PWgodHx8dGhpcy5kZWZhdWx0RWxlbWVudHx8dGhpcylbMF0sdGhpcy5lbGVtZW50PWgodCksdGhpcy51dWlkPXMrKyx0aGlzLmV2ZW50TmFtZXNwYWNlPVwiLlwiK3RoaXMud2lkZ2V0TmFtZSt0aGlzLnV1aWQsdGhpcy5iaW5kaW5ncz1oKCksdGhpcy5ob3ZlcmFibGU9aCgpLHRoaXMuZm9jdXNhYmxlPWgoKSx0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwPXt9LHQhPT10aGlzJiYoaC5kYXRhKHQsdGhpcy53aWRnZXRGdWxsTmFtZSx0aGlzKSx0aGlzLl9vbighMCx0aGlzLmVsZW1lbnQse3JlbW92ZTpmdW5jdGlvbihlKXtlLnRhcmdldD09PXQmJnRoaXMuZGVzdHJveSgpfX0pLHRoaXMuZG9jdW1lbnQ9aCh0LnN0eWxlP3Qub3duZXJEb2N1bWVudDp0LmRvY3VtZW50fHx0KSx0aGlzLndpbmRvdz1oKHRoaXMuZG9jdW1lbnRbMF0uZGVmYXVsdFZpZXd8fHRoaXMuZG9jdW1lbnRbMF0ucGFyZW50V2luZG93KSksdGhpcy5vcHRpb25zPWgud2lkZ2V0LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMsdGhpcy5fZ2V0Q3JlYXRlT3B0aW9ucygpLGUpLHRoaXMuX2NyZWF0ZSgpLHRoaXMub3B0aW9ucy5kaXNhYmxlZCYmdGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQodGhpcy5vcHRpb25zLmRpc2FibGVkKSx0aGlzLl90cmlnZ2VyKFwiY3JlYXRlXCIsbnVsbCx0aGlzLl9nZXRDcmVhdGVFdmVudERhdGEoKSksdGhpcy5faW5pdCgpfSxfZ2V0Q3JlYXRlT3B0aW9uczpmdW5jdGlvbigpe3JldHVybnt9fSxfZ2V0Q3JlYXRlRXZlbnREYXRhOmgubm9vcCxfY3JlYXRlOmgubm9vcCxfaW5pdDpoLm5vb3AsZGVzdHJveTpmdW5jdGlvbigpe3ZhciBzPXRoaXM7dGhpcy5fZGVzdHJveSgpLGguZWFjaCh0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwLGZ1bmN0aW9uKGUsdCl7cy5fcmVtb3ZlQ2xhc3ModCxlKX0pLHRoaXMuZWxlbWVudC5vZmYodGhpcy5ldmVudE5hbWVzcGFjZSkucmVtb3ZlRGF0YSh0aGlzLndpZGdldEZ1bGxOYW1lKSx0aGlzLndpZGdldCgpLm9mZih0aGlzLmV2ZW50TmFtZXNwYWNlKS5yZW1vdmVBdHRyKFwiYXJpYS1kaXNhYmxlZFwiKSx0aGlzLmJpbmRpbmdzLm9mZih0aGlzLmV2ZW50TmFtZXNwYWNlKX0sX2Rlc3Ryb3k6aC5ub29wLHdpZGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnR9LG9wdGlvbjpmdW5jdGlvbihlLHQpe3ZhciBzLGksbixvPWU7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGgud2lkZ2V0LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKWlmKG89e30sZT0ocz1lLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxzLmxlbmd0aCl7Zm9yKGk9b1tlXT1oLndpZGdldC5leHRlbmQoe30sdGhpcy5vcHRpb25zW2VdKSxuPTA7bjxzLmxlbmd0aC0xO24rKylpW3Nbbl1dPWlbc1tuXV18fHt9LGk9aVtzW25dXTtpZihlPXMucG9wKCksMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWlbZV0/bnVsbDppW2VdO2lbZV09dH1lbHNle2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10aGlzLm9wdGlvbnNbZV0/bnVsbDp0aGlzLm9wdGlvbnNbZV07b1tlXT10fXJldHVybiB0aGlzLl9zZXRPcHRpb25zKG8pLHRoaXN9LF9zZXRPcHRpb25zOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKXRoaXMuX3NldE9wdGlvbih0LGVbdF0pO3JldHVybiB0aGlzfSxfc2V0T3B0aW9uOmZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJjbGFzc2VzXCI9PT1lJiZ0aGlzLl9zZXRPcHRpb25DbGFzc2VzKHQpLHRoaXMub3B0aW9uc1tlXT10LFwiZGlzYWJsZWRcIj09PWUmJnRoaXMuX3NldE9wdGlvbkRpc2FibGVkKHQpLHRoaXN9LF9zZXRPcHRpb25DbGFzc2VzOmZ1bmN0aW9uKGUpe3ZhciB0LHMsaTtmb3IodCBpbiBlKWk9dGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cFt0XSxlW3RdIT09dGhpcy5vcHRpb25zLmNsYXNzZXNbdF0mJmkmJmkubGVuZ3RoJiYocz1oKGkuZ2V0KCkpLHRoaXMuX3JlbW92ZUNsYXNzKGksdCkscy5hZGRDbGFzcyh0aGlzLl9jbGFzc2VzKHtlbGVtZW50OnMsa2V5czp0LGNsYXNzZXM6ZSxhZGQ6ITB9KSkpfSxfc2V0T3B0aW9uRGlzYWJsZWQ6ZnVuY3Rpb24oZSl7dGhpcy5fdG9nZ2xlQ2xhc3ModGhpcy53aWRnZXQoKSx0aGlzLndpZGdldEZ1bGxOYW1lK1wiLWRpc2FibGVkXCIsbnVsbCwhIWUpLGUmJih0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmhvdmVyYWJsZSxudWxsLFwidWktc3RhdGUtaG92ZXJcIiksdGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5mb2N1c2FibGUsbnVsbCxcInVpLXN0YXRlLWZvY3VzXCIpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NldE9wdGlvbnMoe2Rpc2FibGVkOiExfSl9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc2V0T3B0aW9ucyh7ZGlzYWJsZWQ6ITB9KX0sX2NsYXNzZXM6ZnVuY3Rpb24obil7dmFyIG89W10sYT10aGlzO2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIHMsaT0wO2k8ZS5sZW5ndGg7aSsrKXM9YS5jbGFzc2VzRWxlbWVudExvb2t1cFtlW2ldXXx8aCgpLHM9bi5hZGQ/aChoLnVuaXF1ZShzLmdldCgpLmNvbmNhdChuLmVsZW1lbnQuZ2V0KCkpKSk6aChzLm5vdChuLmVsZW1lbnQpLmdldCgpKSxhLmNsYXNzZXNFbGVtZW50TG9va3VwW2VbaV1dPXMsby5wdXNoKGVbaV0pLHQmJm4uY2xhc3Nlc1tlW2ldXSYmby5wdXNoKG4uY2xhc3Nlc1tlW2ldXSl9cmV0dXJuIG49aC5leHRlbmQoe2VsZW1lbnQ6dGhpcy5lbGVtZW50LGNsYXNzZXM6dGhpcy5vcHRpb25zLmNsYXNzZXN8fHt9fSxuKSx0aGlzLl9vbihuLmVsZW1lbnQse3JlbW92ZTpcIl91bnRyYWNrQ2xhc3Nlc0VsZW1lbnRcIn0pLG4ua2V5cyYmZShuLmtleXMubWF0Y2goL1xcUysvZyl8fFtdLCEwKSxuLmV4dHJhJiZlKG4uZXh0cmEubWF0Y2goL1xcUysvZyl8fFtdKSxvLmpvaW4oXCIgXCIpfSxfdW50cmFja0NsYXNzZXNFbGVtZW50OmZ1bmN0aW9uKHMpe3ZhciBpPXRoaXM7aC5lYWNoKGkuY2xhc3Nlc0VsZW1lbnRMb29rdXAsZnVuY3Rpb24oZSx0KXstMSE9PWguaW5BcnJheShzLnRhcmdldCx0KSYmKGkuY2xhc3Nlc0VsZW1lbnRMb29rdXBbZV09aCh0Lm5vdChzLnRhcmdldCkuZ2V0KCkpKX0pfSxfcmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSx0LHMpe3JldHVybiB0aGlzLl90b2dnbGVDbGFzcyhlLHQscywhMSl9LF9hZGRDbGFzczpmdW5jdGlvbihlLHQscyl7cmV0dXJuIHRoaXMuX3RvZ2dsZUNsYXNzKGUsdCxzLCEwKX0sX3RvZ2dsZUNsYXNzOmZ1bmN0aW9uKGUsdCxzLGkpe2k9XCJib29sZWFuXCI9PXR5cGVvZiBpP2k6czt2YXIgbj1cInN0cmluZ1wiPT10eXBlb2YgZXx8bnVsbD09PWUsZT17ZXh0cmE6bj90OnMsa2V5czpuP2U6dCxlbGVtZW50Om4/dGhpcy5lbGVtZW50OmUsYWRkOml9O3JldHVybiBlLmVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5fY2xhc3NlcyhlKSxpKSx0aGlzfSxfb246ZnVuY3Rpb24obixvLGUpe3ZhciBhLGw9dGhpcztcImJvb2xlYW5cIiE9dHlwZW9mIG4mJihlPW8sbz1uLG49ITEpLGU/KG89YT1oKG8pLHRoaXMuYmluZGluZ3M9dGhpcy5iaW5kaW5ncy5hZGQobykpOihlPW8sbz10aGlzLmVsZW1lbnQsYT10aGlzLndpZGdldCgpKSxoLmVhY2goZSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHMoKXtpZihufHwhMCE9PWwub3B0aW9ucy5kaXNhYmxlZCYmIWgodGhpcykuaGFzQ2xhc3MoXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiKSlyZXR1cm4oXCJzdHJpbmdcIj09dHlwZW9mIHQ/bFt0XTp0KS5hcHBseShsLGFyZ3VtZW50cyl9XCJzdHJpbmdcIiE9dHlwZW9mIHQmJihzLmd1aWQ9dC5ndWlkPXQuZ3VpZHx8cy5ndWlkfHxoLmd1aWQrKyk7dmFyIGk9ZS5tYXRjaCgvXihbXFx3Oi1dKilcXHMqKC4qKSQvKSxlPWlbMV0rbC5ldmVudE5hbWVzcGFjZSxpPWlbMl07aT9hLm9uKGUsaSxzKTpvLm9uKGUscyl9KX0sX29mZjpmdW5jdGlvbihlLHQpe3Q9KHR8fFwiXCIpLnNwbGl0KFwiIFwiKS5qb2luKHRoaXMuZXZlbnROYW1lc3BhY2UrXCIgXCIpK3RoaXMuZXZlbnROYW1lc3BhY2UsZS5vZmYodCkub2ZmKHQpLHRoaXMuYmluZGluZ3M9aCh0aGlzLmJpbmRpbmdzLm5vdChlKS5nZXQoKSksdGhpcy5mb2N1c2FibGU9aCh0aGlzLmZvY3VzYWJsZS5ub3QoZSkuZ2V0KCkpLHRoaXMuaG92ZXJhYmxlPWgodGhpcy5ob3ZlcmFibGUubm90KGUpLmdldCgpKX0sX2RlbGF5OmZ1bmN0aW9uKGUsdCl7dmFyIHM9dGhpcztyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybihcInN0cmluZ1wiPT10eXBlb2YgZT9zW2VdOmUpLmFwcGx5KHMsYXJndW1lbnRzKX0sdHx8MCl9LF9ob3ZlcmFibGU6ZnVuY3Rpb24oZSl7dGhpcy5ob3ZlcmFibGU9dGhpcy5ob3ZlcmFibGUuYWRkKGUpLHRoaXMuX29uKGUse21vdXNlZW50ZXI6ZnVuY3Rpb24oZSl7dGhpcy5fYWRkQ2xhc3MoaChlLmN1cnJlbnRUYXJnZXQpLG51bGwsXCJ1aS1zdGF0ZS1ob3ZlclwiKX0sbW91c2VsZWF2ZTpmdW5jdGlvbihlKXt0aGlzLl9yZW1vdmVDbGFzcyhoKGUuY3VycmVudFRhcmdldCksbnVsbCxcInVpLXN0YXRlLWhvdmVyXCIpfX0pfSxfZm9jdXNhYmxlOmZ1bmN0aW9uKGUpe3RoaXMuZm9jdXNhYmxlPXRoaXMuZm9jdXNhYmxlLmFkZChlKSx0aGlzLl9vbihlLHtmb2N1c2luOmZ1bmN0aW9uKGUpe3RoaXMuX2FkZENsYXNzKGgoZS5jdXJyZW50VGFyZ2V0KSxudWxsLFwidWktc3RhdGUtZm9jdXNcIil9LGZvY3Vzb3V0OmZ1bmN0aW9uKGUpe3RoaXMuX3JlbW92ZUNsYXNzKGgoZS5jdXJyZW50VGFyZ2V0KSxudWxsLFwidWktc3RhdGUtZm9jdXNcIil9fSl9LF90cmlnZ2VyOmZ1bmN0aW9uKGUsdCxzKXt2YXIgaSxuLG89dGhpcy5vcHRpb25zW2VdO2lmKHM9c3x8e30sKHQ9aC5FdmVudCh0KSkudHlwZT0oZT09PXRoaXMud2lkZ2V0RXZlbnRQcmVmaXg/ZTp0aGlzLndpZGdldEV2ZW50UHJlZml4K2UpLnRvTG93ZXJDYXNlKCksdC50YXJnZXQ9dGhpcy5lbGVtZW50WzBdLG49dC5vcmlnaW5hbEV2ZW50KWZvcihpIGluIG4paSBpbiB0fHwodFtpXT1uW2ldKTtyZXR1cm4gdGhpcy5lbGVtZW50LnRyaWdnZXIodCxzKSwhKGguaXNGdW5jdGlvbihvKSYmITE9PT1vLmFwcGx5KHRoaXMuZWxlbWVudFswXSxbdF0uY29uY2F0KHMpKXx8dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl9fSxoLmVhY2goe3Nob3c6XCJmYWRlSW5cIixoaWRlOlwiZmFkZU91dFwifSxmdW5jdGlvbihvLGEpe2guV2lkZ2V0LnByb3RvdHlwZVtcIl9cIitvXT1mdW5jdGlvbih0LGUscyl7dmFyIGk7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtlZmZlY3Q6ZX0pO3ZhciBuPWU/ITAhPT1lJiZcIm51bWJlclwiIT10eXBlb2YgZSYmZS5lZmZlY3R8fGE6bztcIm51bWJlclwiPT10eXBlb2YoZT1lfHx7fSkmJihlPXtkdXJhdGlvbjplfSksaT0haC5pc0VtcHR5T2JqZWN0KGUpLGUuY29tcGxldGU9cyxlLmRlbGF5JiZ0LmRlbGF5KGUuZGVsYXkpLGkmJmguZWZmZWN0cyYmaC5lZmZlY3RzLmVmZmVjdFtuXT90W29dKGUpOm4hPT1vJiZ0W25dP3Rbbl0oZS5kdXJhdGlvbixlLmVhc2luZyxzKTp0LnF1ZXVlKGZ1bmN0aW9uKGUpe2godGhpcylbb10oKSxzJiZzLmNhbGwodFswXSksZSgpfSl9fSk7aC53aWRnZXQsaC51aS5pZT0hIS9tc2llIFtcXHcuXSsvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTt2YXIgbz0hMTtoKGRvY3VtZW50KS5vbihcIm1vdXNldXBcIixmdW5jdGlvbigpe289ITF9KTtoLndpZGdldChcInVpLm1vdXNlXCIse3ZlcnNpb246XCIxLjEyLjFcIixvcHRpb25zOntjYW5jZWw6XCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRpb25cIixkaXN0YW5jZToxLGRlbGF5OjB9LF9tb3VzZUluaXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuZWxlbWVudC5vbihcIm1vdXNlZG93bi5cIit0aGlzLndpZGdldE5hbWUsZnVuY3Rpb24oZSl7cmV0dXJuIHQuX21vdXNlRG93bihlKX0pLm9uKFwiY2xpY2suXCIrdGhpcy53aWRnZXROYW1lLGZ1bmN0aW9uKGUpe2lmKCEwPT09aC5kYXRhKGUudGFyZ2V0LHQud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKSlyZXR1cm4gaC5yZW1vdmVEYXRhKGUudGFyZ2V0LHQud2lkZ2V0TmFtZStcIi5wcmV2ZW50Q2xpY2tFdmVudFwiKSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLCExfSksdGhpcy5zdGFydGVkPSExfSxfbW91c2VEZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50Lm9mZihcIi5cIit0aGlzLndpZGdldE5hbWUpLHRoaXMuX21vdXNlTW92ZURlbGVnYXRlJiZ0aGlzLmRvY3VtZW50Lm9mZihcIm1vdXNlbW92ZS5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUpLm9mZihcIm1vdXNldXAuXCIrdGhpcy53aWRnZXROYW1lLHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSl9LF9tb3VzZURvd246ZnVuY3Rpb24oZSl7aWYoIW8pe3RoaXMuX21vdXNlTW92ZWQ9ITEsdGhpcy5fbW91c2VTdGFydGVkJiZ0aGlzLl9tb3VzZVVwKGUpLHRoaXMuX21vdXNlRG93bkV2ZW50PWU7dmFyIHQ9dGhpcyxzPTE9PT1lLndoaWNoLGk9IShcInN0cmluZ1wiIT10eXBlb2YgdGhpcy5vcHRpb25zLmNhbmNlbHx8IWUudGFyZ2V0Lm5vZGVOYW1lKSYmaChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLm9wdGlvbnMuY2FuY2VsKS5sZW5ndGg7cmV0dXJuIHMmJiFpJiZ0aGlzLl9tb3VzZUNhcHR1cmUoZSk/KHRoaXMubW91c2VEZWxheU1ldD0hdGhpcy5vcHRpb25zLmRlbGF5LHRoaXMubW91c2VEZWxheU1ldHx8KHRoaXMuX21vdXNlRGVsYXlUaW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5tb3VzZURlbGF5TWV0PSEwfSx0aGlzLm9wdGlvbnMuZGVsYXkpKSx0aGlzLl9tb3VzZURpc3RhbmNlTWV0KGUpJiZ0aGlzLl9tb3VzZURlbGF5TWV0KGUpJiYodGhpcy5fbW91c2VTdGFydGVkPSExIT09dGhpcy5fbW91c2VTdGFydChlKSwhdGhpcy5fbW91c2VTdGFydGVkKT8oZS5wcmV2ZW50RGVmYXVsdCgpLCEwKTooITA9PT1oLmRhdGEoZS50YXJnZXQsdGhpcy53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpJiZoLnJlbW92ZURhdGEoZS50YXJnZXQsdGhpcy53aWRnZXROYW1lK1wiLnByZXZlbnRDbGlja0V2ZW50XCIpLHRoaXMuX21vdXNlTW92ZURlbGVnYXRlPWZ1bmN0aW9uKGUpe3JldHVybiB0Ll9tb3VzZU1vdmUoZSl9LHRoaXMuX21vdXNlVXBEZWxlZ2F0ZT1mdW5jdGlvbihlKXtyZXR1cm4gdC5fbW91c2VVcChlKX0sdGhpcy5kb2N1bWVudC5vbihcIm1vdXNlbW92ZS5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUpLm9uKFwibW91c2V1cC5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VVcERlbGVnYXRlKSxlLnByZXZlbnREZWZhdWx0KCksbz0hMCkpOiEwfX0sX21vdXNlTW92ZTpmdW5jdGlvbihlKXtpZih0aGlzLl9tb3VzZU1vdmVkKXtpZihoLnVpLmllJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlPDkpJiYhZS5idXR0b24pcmV0dXJuIHRoaXMuX21vdXNlVXAoZSk7aWYoIWUud2hpY2gpaWYoZS5vcmlnaW5hbEV2ZW50LmFsdEtleXx8ZS5vcmlnaW5hbEV2ZW50LmN0cmxLZXl8fGUub3JpZ2luYWxFdmVudC5tZXRhS2V5fHxlLm9yaWdpbmFsRXZlbnQuc2hpZnRLZXkpdGhpcy5pZ25vcmVNaXNzaW5nV2hpY2g9ITA7ZWxzZSBpZighdGhpcy5pZ25vcmVNaXNzaW5nV2hpY2gpcmV0dXJuIHRoaXMuX21vdXNlVXAoZSl9cmV0dXJuKGUud2hpY2h8fGUuYnV0dG9uKSYmKHRoaXMuX21vdXNlTW92ZWQ9ITApLHRoaXMuX21vdXNlU3RhcnRlZD8odGhpcy5fbW91c2VEcmFnKGUpLGUucHJldmVudERlZmF1bHQoKSk6KHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoZSkmJnRoaXMuX21vdXNlRGVsYXlNZXQoZSkmJih0aGlzLl9tb3VzZVN0YXJ0ZWQ9ITEhPT10aGlzLl9tb3VzZVN0YXJ0KHRoaXMuX21vdXNlRG93bkV2ZW50LGUpLHRoaXMuX21vdXNlU3RhcnRlZD90aGlzLl9tb3VzZURyYWcoZSk6dGhpcy5fbW91c2VVcChlKSksIXRoaXMuX21vdXNlU3RhcnRlZCl9LF9tb3VzZVVwOmZ1bmN0aW9uKGUpe3RoaXMuZG9jdW1lbnQub2ZmKFwibW91c2Vtb3ZlLlwiK3RoaXMud2lkZ2V0TmFtZSx0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSkub2ZmKFwibW91c2V1cC5cIit0aGlzLndpZGdldE5hbWUsdGhpcy5fbW91c2VVcERlbGVnYXRlKSx0aGlzLl9tb3VzZVN0YXJ0ZWQmJih0aGlzLl9tb3VzZVN0YXJ0ZWQ9ITEsZS50YXJnZXQ9PT10aGlzLl9tb3VzZURvd25FdmVudC50YXJnZXQmJmguZGF0YShlLnRhcmdldCx0aGlzLndpZGdldE5hbWUrXCIucHJldmVudENsaWNrRXZlbnRcIiwhMCksdGhpcy5fbW91c2VTdG9wKGUpKSx0aGlzLl9tb3VzZURlbGF5VGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fbW91c2VEZWxheVRpbWVyKSxkZWxldGUgdGhpcy5fbW91c2VEZWxheVRpbWVyKSx0aGlzLmlnbm9yZU1pc3NpbmdXaGljaD0hMSxvPSExLGUucHJldmVudERlZmF1bHQoKX0sX21vdXNlRGlzdGFuY2VNZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE1hdGgubWF4KE1hdGguYWJzKHRoaXMuX21vdXNlRG93bkV2ZW50LnBhZ2VYLWUucGFnZVgpLE1hdGguYWJzKHRoaXMuX21vdXNlRG93bkV2ZW50LnBhZ2VZLWUucGFnZVkpKT49dGhpcy5vcHRpb25zLmRpc3RhbmNlfSxfbW91c2VEZWxheU1ldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vdXNlRGVsYXlNZXR9LF9tb3VzZVN0YXJ0OmZ1bmN0aW9uKCl7fSxfbW91c2VEcmFnOmZ1bmN0aW9uKCl7fSxfbW91c2VTdG9wOmZ1bmN0aW9uKCl7fSxfbW91c2VDYXB0dXJlOmZ1bmN0aW9uKCl7cmV0dXJuITB9fSksaC53aWRnZXQoXCJ1aS5zZWxlY3RhYmxlXCIsaC51aS5tb3VzZSx7dmVyc2lvbjpcIjEuMTIuMVwiLG9wdGlvbnM6e2FwcGVuZFRvOlwiYm9keVwiLGF1dG9SZWZyZXNoOiEwLGRpc3RhbmNlOjAsZmlsdGVyOlwiKlwiLHRvbGVyYW5jZTpcInRvdWNoXCIsc2VsZWN0ZWQ6bnVsbCxzZWxlY3Rpbmc6bnVsbCxzdGFydDpudWxsLHN0b3A6bnVsbCx1bnNlbGVjdGVkOm51bGwsdW5zZWxlY3Rpbmc6bnVsbH0sX2NyZWF0ZTpmdW5jdGlvbigpe3ZhciBzPXRoaXM7dGhpcy5fYWRkQ2xhc3MoXCJ1aS1zZWxlY3RhYmxlXCIpLHRoaXMuZHJhZ2dlZD0hMSx0aGlzLnJlZnJlc2g9ZnVuY3Rpb24oKXtzLmVsZW1lbnRQb3M9aChzLmVsZW1lbnRbMF0pLm9mZnNldCgpLHMuc2VsZWN0ZWVzPWgocy5vcHRpb25zLmZpbHRlcixzLmVsZW1lbnRbMF0pLHMuX2FkZENsYXNzKHMuc2VsZWN0ZWVzLFwidWktc2VsZWN0ZWVcIikscy5zZWxlY3RlZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWgodGhpcyksdD1lLm9mZnNldCgpLHQ9e2xlZnQ6dC5sZWZ0LXMuZWxlbWVudFBvcy5sZWZ0LHRvcDp0LnRvcC1zLmVsZW1lbnRQb3MudG9wfTtoLmRhdGEodGhpcyxcInNlbGVjdGFibGUtaXRlbVwiLHtlbGVtZW50OnRoaXMsJGVsZW1lbnQ6ZSxsZWZ0OnQubGVmdCx0b3A6dC50b3AscmlnaHQ6dC5sZWZ0K2Uub3V0ZXJXaWR0aCgpLGJvdHRvbTp0LnRvcCtlLm91dGVySGVpZ2h0KCksc3RhcnRzZWxlY3RlZDohMSxzZWxlY3RlZDplLmhhc0NsYXNzKFwidWktc2VsZWN0ZWRcIiksc2VsZWN0aW5nOmUuaGFzQ2xhc3MoXCJ1aS1zZWxlY3RpbmdcIiksdW5zZWxlY3Rpbmc6ZS5oYXNDbGFzcyhcInVpLXVuc2VsZWN0aW5nXCIpfSl9KX0sdGhpcy5yZWZyZXNoKCksdGhpcy5fbW91c2VJbml0KCksdGhpcy5oZWxwZXI9aChcIjxkaXY+XCIpLHRoaXMuX2FkZENsYXNzKHRoaXMuaGVscGVyLFwidWktc2VsZWN0YWJsZS1oZWxwZXJcIil9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZXMucmVtb3ZlRGF0YShcInNlbGVjdGFibGUtaXRlbVwiKSx0aGlzLl9tb3VzZURlc3Ryb3koKX0sX21vdXNlU3RhcnQ6ZnVuY3Rpb24ocyl7dmFyIGk9dGhpcyxlPXRoaXMub3B0aW9uczt0aGlzLm9wb3M9W3MucGFnZVgscy5wYWdlWV0sdGhpcy5lbGVtZW50UG9zPWgodGhpcy5lbGVtZW50WzBdKS5vZmZzZXQoKSx0aGlzLm9wdGlvbnMuZGlzYWJsZWR8fCh0aGlzLnNlbGVjdGVlcz1oKGUuZmlsdGVyLHRoaXMuZWxlbWVudFswXSksdGhpcy5fdHJpZ2dlcihcInN0YXJ0XCIscyksaChlLmFwcGVuZFRvKS5hcHBlbmQodGhpcy5oZWxwZXIpLHRoaXMuaGVscGVyLmNzcyh7bGVmdDpzLnBhZ2VYLHRvcDpzLnBhZ2VZLHdpZHRoOjAsaGVpZ2h0OjB9KSxlLmF1dG9SZWZyZXNoJiZ0aGlzLnJlZnJlc2goKSx0aGlzLnNlbGVjdGVlcy5maWx0ZXIoXCIudWktc2VsZWN0ZWRcIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPWguZGF0YSh0aGlzLFwic2VsZWN0YWJsZS1pdGVtXCIpO2Uuc3RhcnRzZWxlY3RlZD0hMCxzLm1ldGFLZXl8fHMuY3RybEtleXx8KGkuX3JlbW92ZUNsYXNzKGUuJGVsZW1lbnQsXCJ1aS1zZWxlY3RlZFwiKSxlLnNlbGVjdGVkPSExLGkuX2FkZENsYXNzKGUuJGVsZW1lbnQsXCJ1aS11bnNlbGVjdGluZ1wiKSxlLnVuc2VsZWN0aW5nPSEwLGkuX3RyaWdnZXIoXCJ1bnNlbGVjdGluZ1wiLHMse3Vuc2VsZWN0aW5nOmUuZWxlbWVudH0pKX0pLGgocy50YXJnZXQpLnBhcmVudHMoKS5hZGRCYWNrKCkuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQ9aC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIik7aWYodClyZXR1cm4gZT0hcy5tZXRhS2V5JiYhcy5jdHJsS2V5fHwhdC4kZWxlbWVudC5oYXNDbGFzcyhcInVpLXNlbGVjdGVkXCIpLGkuX3JlbW92ZUNsYXNzKHQuJGVsZW1lbnQsZT9cInVpLXVuc2VsZWN0aW5nXCI6XCJ1aS1zZWxlY3RlZFwiKS5fYWRkQ2xhc3ModC4kZWxlbWVudCxlP1widWktc2VsZWN0aW5nXCI6XCJ1aS11bnNlbGVjdGluZ1wiKSx0LnVuc2VsZWN0aW5nPSFlLHQuc2VsZWN0aW5nPWUsKHQuc2VsZWN0ZWQ9ZSk/aS5fdHJpZ2dlcihcInNlbGVjdGluZ1wiLHMse3NlbGVjdGluZzp0LmVsZW1lbnR9KTppLl90cmlnZ2VyKFwidW5zZWxlY3RpbmdcIixzLHt1bnNlbGVjdGluZzp0LmVsZW1lbnR9KSwhMX0pKX0sX21vdXNlRHJhZzpmdW5jdGlvbihpKXtpZih0aGlzLmRyYWdnZWQ9ITAsIXRoaXMub3B0aW9ucy5kaXNhYmxlZCl7dmFyIGUsbj10aGlzLG89dGhpcy5vcHRpb25zLGE9dGhpcy5vcG9zWzBdLGw9dGhpcy5vcG9zWzFdLHI9aS5wYWdlWCx1PWkucGFnZVk7cmV0dXJuIHI8YSYmKGU9cixyPWEsYT1lKSx1PGwmJihlPXUsdT1sLGw9ZSksdGhpcy5oZWxwZXIuY3NzKHtsZWZ0OmEsdG9wOmwsd2lkdGg6ci1hLGhlaWdodDp1LWx9KSx0aGlzLnNlbGVjdGVlcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9aC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIiksdD0hMSxzPXt9O2UmJmUuZWxlbWVudCE9PW4uZWxlbWVudFswXSYmKHMubGVmdD1lLmxlZnQrbi5lbGVtZW50UG9zLmxlZnQscy5yaWdodD1lLnJpZ2h0K24uZWxlbWVudFBvcy5sZWZ0LHMudG9wPWUudG9wK24uZWxlbWVudFBvcy50b3Ascy5ib3R0b209ZS5ib3R0b20rbi5lbGVtZW50UG9zLnRvcCxcInRvdWNoXCI9PT1vLnRvbGVyYW5jZT90PSEocy5sZWZ0PnJ8fHMucmlnaHQ8YXx8cy50b3A+dXx8cy5ib3R0b208bCk6XCJmaXRcIj09PW8udG9sZXJhbmNlJiYodD1zLmxlZnQ+YSYmcy5yaWdodDxyJiZzLnRvcD5sJiZzLmJvdHRvbTx1KSx0PyhlLnNlbGVjdGVkJiYobi5fcmVtb3ZlQ2xhc3MoZS4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLGUuc2VsZWN0ZWQ9ITEpLGUudW5zZWxlY3RpbmcmJihuLl9yZW1vdmVDbGFzcyhlLiRlbGVtZW50LFwidWktdW5zZWxlY3RpbmdcIiksZS51bnNlbGVjdGluZz0hMSksZS5zZWxlY3Rpbmd8fChuLl9hZGRDbGFzcyhlLiRlbGVtZW50LFwidWktc2VsZWN0aW5nXCIpLGUuc2VsZWN0aW5nPSEwLG4uX3RyaWdnZXIoXCJzZWxlY3RpbmdcIixpLHtzZWxlY3Rpbmc6ZS5lbGVtZW50fSkpKTooZS5zZWxlY3RpbmcmJigoaS5tZXRhS2V5fHxpLmN0cmxLZXkpJiZlLnN0YXJ0c2VsZWN0ZWQ/KG4uX3JlbW92ZUNsYXNzKGUuJGVsZW1lbnQsXCJ1aS1zZWxlY3RpbmdcIiksZS5zZWxlY3Rpbmc9ITEsbi5fYWRkQ2xhc3MoZS4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLGUuc2VsZWN0ZWQ9ITApOihuLl9yZW1vdmVDbGFzcyhlLiRlbGVtZW50LFwidWktc2VsZWN0aW5nXCIpLGUuc2VsZWN0aW5nPSExLGUuc3RhcnRzZWxlY3RlZCYmKG4uX2FkZENsYXNzKGUuJGVsZW1lbnQsXCJ1aS11bnNlbGVjdGluZ1wiKSxlLnVuc2VsZWN0aW5nPSEwKSxuLl90cmlnZ2VyKFwidW5zZWxlY3RpbmdcIixpLHt1bnNlbGVjdGluZzplLmVsZW1lbnR9KSkpLGUuc2VsZWN0ZWQmJihpLm1ldGFLZXl8fGkuY3RybEtleXx8ZS5zdGFydHNlbGVjdGVkfHwobi5fcmVtb3ZlQ2xhc3MoZS4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLGUuc2VsZWN0ZWQ9ITEsbi5fYWRkQ2xhc3MoZS4kZWxlbWVudCxcInVpLXVuc2VsZWN0aW5nXCIpLGUudW5zZWxlY3Rpbmc9ITAsbi5fdHJpZ2dlcihcInVuc2VsZWN0aW5nXCIsaSx7dW5zZWxlY3Rpbmc6ZS5lbGVtZW50fSkpKSkpfSksITF9fSxfbW91c2VTdG9wOmZ1bmN0aW9uKHQpe3ZhciBzPXRoaXM7cmV0dXJuIHRoaXMuZHJhZ2dlZD0hMSxoKFwiLnVpLXVuc2VsZWN0aW5nXCIsdGhpcy5lbGVtZW50WzBdKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9aC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIik7cy5fcmVtb3ZlQ2xhc3MoZS4kZWxlbWVudCxcInVpLXVuc2VsZWN0aW5nXCIpLGUudW5zZWxlY3Rpbmc9ITEsZS5zdGFydHNlbGVjdGVkPSExLHMuX3RyaWdnZXIoXCJ1bnNlbGVjdGVkXCIsdCx7dW5zZWxlY3RlZDplLmVsZW1lbnR9KX0pLGgoXCIudWktc2VsZWN0aW5nXCIsdGhpcy5lbGVtZW50WzBdKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9aC5kYXRhKHRoaXMsXCJzZWxlY3RhYmxlLWl0ZW1cIik7cy5fcmVtb3ZlQ2xhc3MoZS4kZWxlbWVudCxcInVpLXNlbGVjdGluZ1wiKS5fYWRkQ2xhc3MoZS4kZWxlbWVudCxcInVpLXNlbGVjdGVkXCIpLGUuc2VsZWN0aW5nPSExLGUuc2VsZWN0ZWQ9ITAsZS5zdGFydHNlbGVjdGVkPSEwLHMuX3RyaWdnZXIoXCJzZWxlY3RlZFwiLHQse3NlbGVjdGVkOmUuZWxlbWVudH0pfSksdGhpcy5fdHJpZ2dlcihcInN0b3BcIix0KSx0aGlzLmhlbHBlci5yZW1vdmUoKSwhMX19KX0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==