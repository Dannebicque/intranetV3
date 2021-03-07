(self["webpackChunk"] = self["webpackChunk"] || []).push([["apc"],{

/***/ "./assets/js/pages/apc.js":
/*!********************************!*\
  !*** ./assets/js/pages/apc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_jquery_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/jquery.collection */ "./assets/vendor/jquery.collection.js");
/* harmony import */ var _vendor_jquery_collection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_collection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min */ "./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js");
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/apc.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/03/2021 18:49



var semestreSae = false;
var semestre = null;
var competenceSae = false;
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', 'input:radio[name="apc_sae[semestre]"]', function (e) {
  semestre = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val();
  semestreSae = true;
  updateApprentisagesCritiques();
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', 'input:checkbox[name="apc_sae[competences][]"]', function (e) {
  console.log(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val());
  competenceSae = jquery__WEBPACK_IMPORTED_MODULE_2___default()('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0;
  updateApprentisagesCritiques();
}); //mise à jour à l'affichage

jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  semestreSae = true; //$('input:radio[name="apc_sae[semestre]"]:checked').length() === 1

  semestre = jquery__WEBPACK_IMPORTED_MODULE_2___default()('input:radio[name="apc_sae[semestre]"]').val();
  competenceSae = jquery__WEBPACK_IMPORTED_MODULE_2___default()('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0;
  updateApprentisagesCritiques();
});

function updateApprentisagesCritiques() {
  if (competenceSae === true && semestreSae === true) {
    var comps = [];
    jquery__WEBPACK_IMPORTED_MODULE_2___default().each(jquery__WEBPACK_IMPORTED_MODULE_2___default()('input:checkbox[name="apc_sae[competences][]"]:checked'), function () {
      comps.push(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val());
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({
      url: Routing.generate('administration_apc_sae_ajax_ac'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        competences: comps,
        sae: sae
      },
      success: function success(data) {
        console.log(data);
        var html = '';

        if (data !== false) {
          for (var comp in data) {
            html = html + '<p>' + comp + '</p><div class="row">';

            for (var ac in data[comp]) {
              html = html + '<div class="col-md-6">' + '<div class="form-check">' + '<input type="checkbox" id="ac_' + data[comp][ac].id + '" name="ac[]" class="form-check-input" value="' + data[comp][ac].id + '" ' + data[comp][ac].checked + '>\n' + '<label class="form-check-label" for="ac_' + data[comp][ac].id + '">' + data[comp][ac].libelle + '</label></div>' + '</div>';
            }

            html = html + '</div>';
          }
        } else {
          html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>';
        }

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#acSae').html(html);
      }
    });
  } else {
    var html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>';
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#acSae').html(html);
  }
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  var niveauCompetence = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.selector-niveauCompetence');

  if (niveauCompetence.length > 0) {
    niveauCompetence.collection();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.apc_competence_apcNiveaux-collection-action', function () {
      var apprentissageCritique = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.selector-apprentissageCritique');

      if (apprentissageCritique.length > 0) {
        apprentissageCritique.collection();
      }
    });
  }

  var niveauComposanteEssentielles = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.selector-niveauComposanteEssentielles');

  if (niveauComposanteEssentielles.length > 0) {
    niveauComposanteEssentielles.collection();
  }

  var apcRessourceApprentissageCritique = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.selector-apcRessourceApprentissageCritique');

  if (apcRessourceApprentissageCritique.length > 0) {
    apcRessourceApprentissageCritique.collection();
  }

  var apprentissageCritique = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.selector-apprentissageCritique');

  if (apprentissageCritique.length > 0) {
    apprentissageCritique.collection();
  }
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '.checkNiveau', function (e) {
  var etat = 0;
  console.log('toto');

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).is(':checked')) {
    etat = 1;
  }

  var parcours = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('parcours');
  jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({
    url: Routing.generate('administration_apc_parcours_niveau_ajax', {
      'parcours': parcours,
      'etat': etat,
      'niveau': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()
    }),
    success: function success(data) {}
  });
});

/***/ }),

/***/ "./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js":
/*!***********************************************************************************!*\
  !*** ./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:20
!function (a) {
  a.fn.datepicker.dates.fr = {
    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    monthsShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    today: "Aujourd'hui",
    monthsTitle: "Mois",
    clear: "Effacer",
    weekStart: 1,
    format: "dd/mm/yyyy"
  };
}(jQuery);

/***/ }),

/***/ "./assets/vendor/jquery.collection.js":
/*!********************************************!*\
  !*** ./assets/vendor/jquery.collection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/jquery.collection.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/03/2021 18:49
;

(function ($) {
  $.fn.collection = function (options) {
    var defaults = {
      container: 'body',
      allow_up: true,
      up: '<a href="#">&#x25B2;</a>',
      before_up: function before_up(collection, element) {
        return true;
      },
      after_up: function after_up(collection, element) {
        return true;
      },
      allow_down: true,
      down: '<a href="#">&#x25BC;</a>',
      before_down: function before_down(collection, element) {
        return true;
      },
      after_down: function after_down(collection, element) {
        return true;
      },
      allow_add: true,
      add: '<a href="#"><i class="fas fa-plus-circle"></i></a>',
      before_add: function before_add(collection, element) {
        return true;
      },
      after_add: function after_add(collection, element) {
        return true;
      },
      allow_remove: true,
      remove: '<a href="#"><i class="fas fa-minus-circle"></i></a>',
      before_remove: function before_remove(collection, element) {
        return true;
      },
      after_remove: function after_remove(collection, element) {
        return true;
      },
      allow_duplicate: false,
      duplicate: '<a href="#">[ # ]</a>',
      before_duplicate: function before_duplicate(collection, element) {
        return true;
      },
      after_duplicate: function after_duplicate(collection, element) {
        return true;
      },
      before_init: function before_init(collection) {},
      after_init: function after_init(collection) {},
      min: 0,
      max: 100,
      add_at_the_end: false,
      prefix: 'collection',
      prototype_name: '__name__',
      name_prefix: null,
      elements_selector: '> div, > fieldset',
      elements_parent_selector: '%id%',
      children: null,
      init_with_n_elements: 0,
      hide_useless_buttons: true,
      drag_drop: true,
      drag_drop_options: {
        'placeholder': 'ui-state-highlight'
      },
      drag_drop_start: function drag_drop_start(event, ui) {
        return true;
      },
      drag_drop_update: function drag_drop_update(event, ui) {
        return true;
      },
      custom_add_location: false,
      action_container_tag: 'div',
      fade_in: true,
      fade_out: true,
      position_field_selector: null,
      preserve_names: false
    }; // used to generate random id attributes when required and missing

    var randomNumber = function randomNumber() {
      var rand = '' + Math.random() * 1000 * new Date().getTime();
      return rand.replace('.', '').split('').sort(function () {
        return 0.5 - Math.random();
      }).join('');
    }; // return an element's id, after generating one when missing


    var getOrCreateId = function getOrCreateId(prefix, obj) {
      if (!obj.attr('id')) {
        var generated_id;

        do {
          generated_id = prefix + '_' + randomNumber();
        } while ($('#' + generated_id).length > 0);

        obj.attr('id', generated_id);
      }

      return obj.attr('id');
    }; // return a field value whatever the field type


    var getFieldValue = function getFieldValue(selector) {
      try {
        var jqElem = $(selector);
      } catch (e) {
        return null;
      }

      if (jqElem.length === 0) {
        return null;
      } else if (jqElem.is('input[type="checkbox"]')) {
        return jqElem.prop('checked') === true ? true : false;
      } else if (jqElem.is('input[type="radio"]') && jqElem.attr('name') !== undefined) {
        return $('input[name="' + jqElem.attr('name') + '"]:checked').val();
      } else if (jqElem.prop('value') !== undefined) {
        return jqElem.val();
      } else {
        return jqElem.html();
      }
    }; // set a field value in accordance to the field type


    var putFieldValue = function putFieldValue(selector, value, physical) {
      try {
        var jqElem = $(selector);
      } catch (e) {
        return;
      }

      if (jqElem.length === 0) {
        return;
      } else if (jqElem.is('input[type="checkbox"]')) {
        if (value) {
          jqElem.attr('checked', true);
        } else {
          jqElem.removeAttr('checked');
        }
      } else if (jqElem.prop('value') !== undefined) {
        if (physical) {
          jqElem.attr('value', value);
        } else {
          jqElem.val(value);
        }
      } else {
        jqElem.html(value);
      }
    }; // a callback set in an event will be considered failed if it
    // returns false, null, or 0.


    var trueOrUndefined = function trueOrUndefined(value) {
      return undefined === value || value;
    }; // used to change element indexes in arbitary id attributes


    var pregQuote = function pregQuote(string) {
      return (string + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
    }; // if we need to change CollectionType_field_42_value to CollectionType_field_84_value, this method
    // will change it in id="CollectionType_field_42_value", but also data-id="CollectionType_field_42_value"
    // or anywhere else just in case it could be used otherwise.


    var replaceAttrData = function replaceAttrData(elements, index, toReplace, replaceWith) {
      var replaceAttrDataNode = function replaceAttrDataNode(node) {
        var jqNode = $(node);

        if (_typeof(node) === 'object' && 'attributes' in node) {
          $.each(node.attributes, function (i, attrib) {
            if ($.type(attrib.value) === 'string') {
              jqNode.attr(attrib.name.replace(toReplace, replaceWith), attrib.value.replace(toReplace, replaceWith));
            }
          });
        }

        if (jqNode.length > 0) {
          $.each(jqNode.data(), function (name, value) {
            if ($.type(value) === 'string') {
              jqNode.data(name.replace(toReplace, replaceWith), value.replace(toReplace, replaceWith));
            }
          });
        }
      };

      var element = elements.eq(index);
      replaceAttrDataNode(element[0]);
      element.find('*').each(function () {
        replaceAttrDataNode(this);
      });
    }; // replace element names and indexes in the collection, in Symfony, names are always in format
    // CollectionType[field][42][value] and ids are in format CollectionType_field_42_value;
    // so we need to change both.


    var changeElementIndex = function changeElementIndex(collection, elements, settings, index, oldIndex, newIndex) {
      var toReplace = new RegExp(pregQuote(settings.name_prefix + '[' + oldIndex + ']'), 'g');
      var replaceWith = settings.name_prefix + '[' + newIndex + ']';

      if (settings.children) {
        $.each(settings.children, function (key, child) {
          var childCollection = collection.find(child.selector).eq(index);
          var childSettings = childCollection.data('collection-settings');

          if (childSettings) {
            childSettings.name_prefix = childSettings.name_prefix.replace(toReplace, replaceWith);
            childCollection.data('collection-settings', childSettings);
          }
        });
      }

      replaceAttrData(elements, index, toReplace, replaceWith);
      toReplace = new RegExp(pregQuote(collection.attr('id') + '_' + oldIndex), 'g');
      replaceWith = collection.attr('id') + '_' + newIndex;

      if (settings.children) {
        $.each(settings.children, function (key, child) {
          var childCollection = collection.find(child.selector).eq(index);
          var childSettings = childCollection.data('collection-settings');

          if (childSettings) {
            childSettings.elements_parent_selector = childSettings.elements_parent_selector.replace(toReplace, replaceWith);
            childSettings.elements_selector = childSettings.elements_selector.replace(toReplace, replaceWith);
            childSettings.prefix = childSettings.prefix.replace(toReplace, replaceWith);
            childCollection.data('collection-settings', childSettings);
          }
        });
      }

      replaceAttrData(elements, index, toReplace, replaceWith);
    }; // same as above, but will replace element names and indexes in an html string instead
    // of in a dom element.


    var changeHtmlIndex = function changeHtmlIndex(collection, settings, html, oldIndex, newIndex, oldKey, newKey) {
      var toReplace = new RegExp(pregQuote(settings.name_prefix + '[' + oldKey + ']'), 'g');
      var replaceWith = settings.name_prefix + '[' + newKey + ']';
      html = html.replace(toReplace, replaceWith);
      toReplace = new RegExp(pregQuote(collection.attr('id') + '_' + oldIndex), 'g');
      replaceWith = collection.attr('id') + '_' + newIndex;
      html = html.replace(toReplace, replaceWith);
      return html;
    }; // sometimes, setting a value will only be made in memory and not
    // physically in the dom; and we need the full dom when we want
    // to duplicate a field.


    var putFieldValuesInDom = function putFieldValuesInDom(element) {
      $(element).find(':input').each(function (index, inputObj) {
        putFieldValue(inputObj, getFieldValue(inputObj), true);
      });
    }; // this method does the whole magic: in a collection, if we want to
    // move elements and keep element positions in the backend, we should
    // either move element names or element contents, but not both! thus,
    // if you just move elements in the dom, you keep field names and data
    // attached and nothing will change in the backend.


    var swapElements = function swapElements(collection, elements, oldIndex, newIndex) {
      var settings = collection.data('collection-settings');

      if (!settings.position_field_selector && !settings.preserve_names) {
        changeElementIndex(collection, elements, settings, oldIndex, oldIndex, '__swap__');
        changeElementIndex(collection, elements, settings, newIndex, newIndex, oldIndex);
        changeElementIndex(collection, elements, settings, oldIndex, '__swap__', newIndex);
      }

      elements.eq(oldIndex).insertBefore(elements.eq(newIndex));

      if (newIndex > oldIndex) {
        elements.eq(newIndex).insertBefore(elements.eq(oldIndex));
      } else {
        elements.eq(newIndex).insertAfter(elements.eq(oldIndex));
      }

      return collection.find(settings.elements_selector);
    }; // moving an element down of 3 rows means increasing its index of 3, and
    // decreasing the 2 ones between of 1. Example: 0-A 1-B 2-C 3-D:
    // moving B to 3 becomes 0-A 1-C 2-D 3-B


    var swapElementsUp = function swapElementsUp(collection, elements, settings, oldIndex, newIndex) {
      for (var i = oldIndex + 1; i <= newIndex; i++) {
        elements = swapElements(collection, elements, i, i - 1);
      }

      return collection.find(settings.elements_selector);
    }; // moving an element up of 3 rows means decreasing its index of 3, and
    // increasing the 2 ones between of 1. Example: 0-A 1-B 2-C 3-D:
    // moving D to 1 becomes 0-A 1-D 2-B 3-C


    var swapElementsDown = function swapElementsDown(collection, elements, settings, oldIndex, newIndex) {
      for (var i = oldIndex - 1; i >= newIndex; i--) {
        elements = swapElements(collection, elements, i, i + 1);
      }

      return collection.find(settings.elements_selector);
    }; // if we create an element at position 2, all element indexes from 2 to N
    // should be increased. for example, in 0-A 1-B 2-C 3-D, adding X at position
    // 1 will create 0-A 1-X 2-B 3-C 4-D


    var shiftElementsUp = function shiftElementsUp(collection, elements, settings, index) {
      for (var i = index + 1; i < elements.length; i++) {
        elements = swapElements(collection, elements, i - 1, i);
      }

      return collection.find(settings.elements_selector);
    }; // if we remove an element at position 3, all element indexes from 3 to N
    // should be decreased. for example, in 0-A 1-B 2-C 3-D, removing B will create
    // 0-A 1-C 2-D


    var shiftElementsDown = function shiftElementsDown(collection, elements, settings, index) {
      for (var i = elements.length - 2; i > index; i--) {
        elements = swapElements(collection, elements, i + 1, i);
      }

      return collection.find(settings.elements_selector);
    }; // this method creates buttons for each action, according to all options set
    // (buttons enabled, minimum/maximum of elements not yet reached, rescue
    // button creation when no more elements are remaining...)


    var dumpCollectionActions = function dumpCollectionActions(collection, settings, isInitialization, event) {
      var elementsParent = $(settings.elements_parent_selector);
      var init = elementsParent.find('.' + settings.prefix + '-tmp').length === 0;
      var elements = collection.find(settings.elements_selector); // add a rescue button that will appear only if collection is emptied

      if (settings.allow_add) {
        if (init) {
          elementsParent.append('<span class="' + settings.prefix + '-tmp"></span>');

          if (settings.add) {
            elementsParent.append($(settings.add).addClass(settings.prefix + '-action ' + settings.prefix + '-rescue-add').data('collection', collection.attr('id')));
          }
        }
      } // initializes the collection with a minimal number of elements


      if (isInitialization) {
        collection.data('collection-offset', elements.length);
        var container = $(settings.container);
        var button = collection.find('.' + settings.prefix + '-add, .' + settings.prefix + '-rescue-add, .' + settings.prefix + '-duplicate').first();
        var secure = 0;

        while (elements.length < settings.init_with_n_elements) {
          secure++;
          var element = elements.length > 0 ? elements.last() : undefined;
          var index = elements.length - 1;
          elements = doAdd(container, button, collection, settings, elements, element, index, false);

          if (secure > settings.init_with_n_elements) {
            console.error('Infinite loop, element selector (' + settings.elements_selector + ') not found !');
            break;
          }
        }

        collection.data('collection-offset', elements.length);
      } // make buttons appear/disappear in each elements of the collection according to options
      // (enabled, min/max...) and logic (for example, do not put a move up button on the first
      // element of the collection)


      elements.each(function (index) {
        var element = $(this);

        if (isInitialization) {
          element.data('index', index);
        }

        var actions = element.find('.' + settings.prefix + '-actions').addBack().filter('.' + settings.prefix + '-actions');

        if (actions.length === 0) {
          actions = $('<' + settings.action_container_tag + ' class="' + settings.prefix + '-actions"></' + settings.action_container_tag + '>');
          element.append(actions);
        }

        var delta = 0;

        if (event === 'remove' && settings.fade_out) {
          delta = 1;
        }

        var buttons = [{
          'enabled': settings.allow_remove,
          'selector': settings.prefix + '-remove',
          'html': settings.remove,
          'condition': elements.length - delta > settings.min
        }, {
          'enabled': settings.allow_up,
          'selector': settings.prefix + '-up',
          'html': settings.up,
          'condition': elements.length - delta > 1 && elements.index(element) - delta > 0
        }, {
          'enabled': settings.allow_down,
          'selector': settings.prefix + '-down',
          'html': settings.down,
          'condition': elements.length - delta > 1 && elements.index(element) !== elements.length - 1
        }, {
          'enabled': settings.allow_add && !settings.add_at_the_end && !settings.custom_add_location,
          'selector': settings.prefix + '-add',
          'html': settings.add,
          'condition': elements.length - delta < settings.max
        }, {
          'enabled': settings.allow_duplicate,
          'selector': settings.prefix + '-duplicate',
          'html': settings.duplicate,
          'condition': elements.length - delta < settings.max
        }];
        $.each(buttons, function (i, button) {
          if (button.enabled) {
            var action = element.find('.' + button.selector);

            if (action.length === 0 && button.html) {
              action = $(button.html).appendTo(actions).addClass(button.selector);
            }

            if (button.condition) {
              action.removeClass(settings.prefix + '-action-disabled');

              if (settings.hide_useless_buttons) {
                action.css('display', '');
              }
            } else {
              action.addClass(settings.prefix + '-action-disabled');

              if (settings.hide_useless_buttons) {
                action.css('display', 'none');
              }
            }

            action.addClass(settings.prefix + '-action').data('collection', collection.attr('id')).data('element', getOrCreateId(collection.attr('id') + '_' + index, element));
          } else {
            element.find('.' + button.selector).css('display', 'none');
          }
        });
      }); // elements.each
      // make the rescue button appear / disappear according to options (add_at_the_end) and
      // logic (no more elements on the collection)

      if (settings.allow_add) {
        var delta = 0;

        if (event === 'remove' && settings.fade_out) {
          delta = 1;
        }

        var rescueAdd = collection.find('.' + settings.prefix + '-rescue-add').css('display', '').removeClass(settings.prefix + '-action-disabled');
        var adds = collection.find('.' + settings.prefix + '-add');

        if (!settings.add_at_the_end && adds.length > delta || settings.custom_add_location) {
          rescueAdd.css('display', 'none');
        } else if (event === 'remove' && settings.fade_out) {
          rescueAdd.css('display', 'none');
          rescueAdd.fadeIn('fast');
        }

        if (elements.length - delta >= settings.max) {
          rescueAdd.addClass(settings.prefix + '-action-disabled');

          if (settings.hide_useless_buttons) {
            collection.find('.' + settings.prefix + '-add, .' + settings.prefix + '-rescue-add, .' + settings.prefix + '-duplicate').css('display', 'none');
          }
        }
      }
    }; // dumpCollectionActions
    // this plugin supports nested collections, and this method enables them when the
    // parent collection is initialized. see
    // http://symfony-collection.fuz.org/symfony3/advanced/collectionOfCollections


    var enableChildrenCollections = function enableChildrenCollections(collection, element, settings) {
      if (settings.children) {
        $.each(settings.children, function (index, childrenSettings) {
          if (!childrenSettings.selector) {
            console.log('jquery.collection.js: given collection ' + collection.attr('id') + ' has children collections, but children\'s root selector is undefined.');
            return true;
          }

          if (element !== null) {
            element.find(childrenSettings.selector).collection(childrenSettings);
          } else {
            collection.find(childrenSettings.selector).collection(childrenSettings);
          }
        });
      }
    }; // this method handles a click on "add" buttons, it increases all following element indexes of
    // 1 position and insert a new one in the index that becomes free. if click has been made on a
    // "duplicate" button, all element values are then inserted. finally, callbacks let user cancel
    // those actions if needed.


    var doAdd = function doAdd(container, that, collection, settings, elements, element, index, isDuplicate) {
      if (elements.length < settings.max && (isDuplicate && trueOrUndefined(settings.before_duplicate(collection, element)) || trueOrUndefined(settings.before_add(collection, element)))) {
        var prototype = collection.data('prototype');
        var freeIndex = collection.data('collection-offset');
        collection.data('collection-offset', freeIndex + 1);

        if (index === -1) {
          index = elements.length - 1;
        }

        var regexp = new RegExp(pregQuote(settings.prototype_name), 'g');
        var freeKey = freeIndex;

        if (settings.preserve_names) {
          freeKey = collection.data('collection-free-key');

          if (freeKey === undefined) {
            freeKey = findFreeNumericKey(settings, elements);
          }

          collection.data('collection-free-key', freeKey + 1);
        }

        var code = $(prototype.replace(regexp, freeKey)).data('index', freeIndex);
        setRightPrefix(settings, code);
        var elementsParent = $(settings.elements_parent_selector);
        var tmp = elementsParent.find('> .' + settings.prefix + '-tmp');
        var id = $(code).find('[id]').first().attr('id');

        if (isDuplicate) {
          var oldElement = elements.eq(index);
          putFieldValuesInDom(oldElement);
          var oldHtml = $('<div/>').append(oldElement.clone()).html();
          var oldIndex = settings.preserve_names || settings.position_field_selector ? oldElement.data('index') : index;
          var oldKey = settings.preserve_names ? getElementKey(settings, oldElement) : oldIndex;
          var newHtml = changeHtmlIndex(collection, settings, oldHtml, oldIndex, freeIndex, oldKey, freeKey);
          code = $('<div/>').html(newHtml).contents().data('index', freeIndex);

          if (settings.fade_in) {
            code.hide();
          }

          tmp.before(code).find(settings.prefix + '-actions').remove();
        } else {
          if (settings.fade_in) {
            code.hide();
          }

          tmp.before(code);
        }

        elements = collection.find(settings.elements_selector);
        var action = code.find('.' + settings.prefix + '-add, .' + settings.prefix + '-duplicate');

        if (action.length > 0) {
          action.addClass(settings.prefix + '-action').data('collection', collection.attr('id'));
        }

        if (!settings.add_at_the_end && index + 1 !== freeIndex) {
          elements = doMove(collection, settings, elements, code, freeIndex, index + 1);
        } else {
          dumpCollectionActions(collection, settings, false);
        }

        enableChildrenCollections(collection, code, settings);

        if (isDuplicate && !trueOrUndefined(settings.after_duplicate(collection, code)) || !trueOrUndefined(settings.after_add(collection, code))) {
          if (index !== -1) {
            elements = shiftElementsUp(collection, elements, settings, index + 1);
          }

          code.remove();
        }
      }

      if (code !== undefined && settings.fade_in) {
        code.fadeIn('fast', function () {
          if (settings.position_field_selector) {
            doRewritePositions(settings, elements);
          }
        });
      } else {
        if (settings.position_field_selector) {
          return doRewritePositions(settings, elements);
        }
      }

      return elements;
    }; // removes the current element when clicking on a "delete" button and decrease all following
    // indexes from 1 position.


    var doDelete = function doDelete(collection, settings, elements, element, index) {
      if (elements.length > settings.min && trueOrUndefined(settings.before_remove(collection, element))) {
        var deletion = function deletion() {
          var toDelete = element;

          if (!settings.preserve_names) {
            elements = shiftElementsUp(collection, elements, settings, index);
            toDelete = elements.last();
          }

          var backup = toDelete.clone({
            withDataAndEvents: true
          }).show();
          toDelete.remove();

          if (!trueOrUndefined(settings.after_remove(collection, backup))) {
            var elementsParent = $(settings.elements_parent_selector);
            elementsParent.find('> .' + settings.prefix + '-tmp').before(backup);
            elements = collection.find(settings.elements_selector);
            elements = shiftElementsDown(collection, elements, settings, index - 1);
          }

          if (settings.position_field_selector) {
            doRewritePositions(settings, elements);
          }
        };

        if (settings.fade_out) {
          element.fadeOut('fast', function () {
            deletion();
          });
        } else {
          deletion();
        }
      }

      return elements;
    }; // reverse current element and the previous one (so the current element
    // appears one place higher)


    var doUp = function doUp(collection, settings, elements, element, index) {
      if (index !== 0 && trueOrUndefined(settings.before_up(collection, element))) {
        elements = swapElements(collection, elements, index, index - 1);

        if (!trueOrUndefined(settings.after_up(collection, element))) {
          elements = swapElements(collection, elements, index - 1, index);
        }
      }

      if (settings.position_field_selector) {
        return doRewritePositions(settings, elements);
      }

      return elements;
    }; // reverse the current element and the next one (so the current element
    // appears one place lower)


    var doDown = function doDown(collection, settings, elements, element, index) {
      if (index !== elements.length - 1 && trueOrUndefined(settings.before_down(collection, element))) {
        elements = swapElements(collection, elements, index, index + 1);

        if (!trueOrUndefined(settings.after_down(collection, elements))) {
          elements = swapElements(collection, elements, index + 1, index);
        }
      }

      if (settings.position_field_selector) {
        return doRewritePositions(settings, elements);
      }

      return elements;
    }; // move an element from a position to an arbitrary new position


    var doMove = function doMove(collection, settings, elements, element, oldIndex, newIndex) {
      if (1 === Math.abs(newIndex - oldIndex)) {
        elements = swapElements(collection, elements, oldIndex, newIndex);

        if (!(newIndex - oldIndex > 0 ? trueOrUndefined(settings.after_up(collection, element)) : trueOrUndefined(settings.after_down(collection, element)))) {
          elements = swapElements(collection, elements, newIndex, oldIndex);
        }
      } else {
        if (oldIndex < newIndex) {
          elements = swapElementsUp(collection, elements, settings, oldIndex, newIndex);

          if (!(newIndex - oldIndex > 0 ? trueOrUndefined(settings.after_up(collection, element)) : trueOrUndefined(settings.after_down(collection, element)))) {
            elements = swapElementsDown(collection, elements, settings, newIndex, oldIndex);
          }
        } else {
          elements = swapElementsDown(collection, elements, settings, oldIndex, newIndex);

          if (!(newIndex - oldIndex > 0 ? trueOrUndefined(settings.after_up(collection, element)) : trueOrUndefined(settings.after_down(collection, element)))) {
            elements = swapElementsUp(collection, elements, settings, newIndex, oldIndex);
          }
        }
      }

      dumpCollectionActions(collection, settings, false);

      if (settings.position_field_selector) {
        return doRewritePositions(settings, elements);
      }

      return elements;
    };

    var doRewritePositions = function doRewritePositions(settings, elements) {
      $(elements).each(function () {
        var element = $(this);
        putFieldValue(element.find(settings.position_field_selector), elements.index(element));
      });
      return elements;
    };

    var getElementKey = function getElementKey(settings, element) {
      var name = element.find(':input[name^="' + settings.name_prefix + '["]').attr('name');
      return name.slice(settings.name_prefix.length + 1).split(']', 1)[0];
    };

    var findFreeNumericKey = function findFreeNumericKey(settings, elements) {
      var freeKey = 0;
      elements.each(function () {
        var key = getElementKey(settings, $(this));

        if (/^0|[1-9]\d*$/.test(key) && key >= freeKey) {
          freeKey = Number(key) + 1;
        }
      });
      return freeKey;
    };

    var setRightPrefix = function setRightPrefix(settings, container) {
      var suffixes = ['-action', '-action-disabled', '-actions', '-add', '-down', '-duplicate', '-remove', '-rescue-add', '-tmp', '-up'];
      $.each(suffixes, function () {
        var suffix = this;
        container.each(function () {
          var that = $(this);

          if (that.hasClass(settings.user_prefix + suffix)) {
            that.addClass(settings.prefix + suffix);
          }

          that.find('*').each(function () {
            var here = $(this);

            if (here.hasClass(settings.user_prefix + suffix)) {
              here.addClass(settings.prefix + suffix);
            }
          });
        });
      });
    }; // we're in a $.fn., so in $('.collection').collection(), $(this) equals $('.collection')


    var elems = $(this); // at least one, but why not several collections should be raised

    if (elems.length === 0) {
      console.log('jquery.collection.js: given collection selector does not exist.');
      return false;
    }

    elems.each(function () {
      var settings = $.extend(true, {}, defaults, options); // usage of $.fn.on events using a static container just in case there would be some
      // ajax interactions inside the collection

      if ($(settings.container).length === 0) {
        console.log('jquery.collection.js: a container should exist to handle events (basically, a <body> tag).');
        return false;
      } // it is possible to use this plugin with a selector that will contain the collection id
      // in a data attribute


      var elem = $(this);

      if (elem.data('collection') !== undefined) {
        var collection = $('#' + elem.data('collection'));

        if (collection.length === 0) {
          console.log('jquery.collection.js: given collection id does not exist.');
          return true;
        }
      } else {
        collection = elem;
      }

      collection = $(collection); // when adding elements to a collection, we should be aware of the node that will contain them

      settings.elements_parent_selector = settings.elements_parent_selector.replace('%id%', '#' + getOrCreateId('', collection));

      if (!settings.elements_parent_selector) {
        settings.elements_parent_selector = '#' + getOrCreateId('', collection);

        if ($(settings.elements_parent_selector).length === 0) {
          console.log('jquery.collection.js: given elements parent selector does not return any object.');
          return true;
        }
      } // On nested collections, prefix is the same for all children leading to very
      // random and unexepcted issues, so we merge prefix with current collection id.


      settings.user_prefix = settings.prefix;
      settings.prefix = collection.attr('id') + '-' + settings.user_prefix;
      setRightPrefix(settings, collection); // enforcing logic between options

      if (!settings.allow_add) {
        settings.allow_duplicate = false;
        settings.add_at_the_end = false;
      }

      if (settings.init_with_n_elements > settings.max) {
        settings.init_with_n_elements = settings.max;
      }

      if (settings.min && (!settings.init_with_n_elements || settings.init_with_n_elements < settings.min)) {
        settings.init_with_n_elements = settings.min;
      }

      if (!settings.action_container_tag) {
        console.log('jquery.collection.js: action_container_tag needs to be set.');
        return true;
      } // user callback


      settings.before_init(collection); // prototype required to create new elements in the collection

      if (collection.data('prototype') === null) {
        console.log('jquery.collection.js: given collection field has no prototype, check that your field has the prototype option set to true.');
        return true;
      } // all the following data attributes are automatically available thanks to
      // jquery.collection.html.twig form theme


      if (collection.data('prototype-name') !== undefined) {
        settings.prototype_name = collection.data('prototype-name');
      }

      if (collection.data('allow-add') !== undefined) {
        settings.allow_add = collection.data('allow-add');
        settings.allow_duplicate = collection.data('allow-add') ? settings.allow_duplicate : false;
      }

      if (collection.data('allow-remove') !== undefined) {
        settings.allow_remove = collection.data('allow-remove');
      }

      if (collection.data('name-prefix') !== undefined) {
        settings.name_prefix = collection.data('name-prefix');
      } // prototype-name required for nested collections, where collection id prefix
      // isn't guessable (see https://github.com/symfony/symfony/issues/13837)


      if (!settings.name_prefix) {
        console.log('jquery.collection.js: the prefix used in descendant field names is mandatory, you can set it using 2 ways:');
        console.log('jquery.collection.js: - use the form theme given with this plugin source');
        console.log('jquery.collection.js: - set name_prefix option to  \'{{ formView.myCollectionField.vars.full_name }}\'');
        return true;
      } // if preserve_names option is set, we should enforce many options to avoid
      // having inconsistencies between the UI and the Symfony result


      if (settings.preserve_names) {
        settings.allow_up = false;
        settings.allow_down = false;
        settings.drag_drop = false;
        settings.add_at_the_end = true;
      } // drag & drop support: this is a bit more complex than pressing "up" or
      // "down" buttons because we can move elements more than one place ahead
      // or below...


      if (typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.sortable !== 'undefined' && collection.data('sortable')) {
        collection.sortable('disable');
      }

      if (settings.drag_drop && settings.allow_up && settings.allow_down) {
        var oldPosition;
        var newPosition;

        if (typeof jQuery.ui === 'undefined' || typeof jQuery.ui.sortable === 'undefined') {
          settings.drag_drop = false;
        } else {
          collection.sortable($.extend(true, {}, {
            start: function start(event, ui) {
              var elements = collection.find(settings.elements_selector);
              var element = ui.item;
              var that = $(this);

              if (!trueOrUndefined(settings.drag_drop_start(event, ui, elements, element))) {
                that.sortable('cancel');
                return;
              }

              ui.placeholder.height(ui.item.height());
              ui.placeholder.width(ui.item.width());
              oldPosition = elements.index(element);
            },
            update: function update(event, ui) {
              var elements = collection.find(settings.elements_selector);
              var element = ui.item;
              var that = $(this);
              that.sortable('cancel');

              if (false === settings.drag_drop_update(event, ui, elements, element) || !(newPosition - oldPosition > 0 ? trueOrUndefined(settings.before_up(collection, element)) : trueOrUndefined(settings.before_down(collection, element)))) {
                return;
              }

              newPosition = elements.index(element);
              elements = collection.find(settings.elements_selector);
              doMove(collection, settings, elements, element, oldPosition, newPosition);
            }
          }, settings.drag_drop_options));
        }
      }

      collection.data('collection-settings', settings); // events on buttons using a "static" container so even newly
      // created/ajax downloaded buttons doesn't need further initialization

      var container = $(settings.container);
      container.off('click', '.' + settings.prefix + '-action').on('click', '.' + settings.prefix + '-action', function (e) {
        var that = $(this);
        var collection = $('#' + that.data('collection'));
        var settings = collection.data('collection-settings');

        if (undefined === settings) {
          var collection = $('#' + that.data('collection')).find('.' + that.data('collection') + '-collection');
          var settings = collection.data('collection-settings');

          if (undefined === settings) {
            throw 'Can\'t find collection: ' + that.data('collection');
          }
        }

        var elements = collection.find(settings.elements_selector);
        var element = that.data('element') ? $('#' + that.data('element')) : undefined;
        var index = element && element.length ? elements.index(element) : -1;
        var event = null;
        var isDuplicate = that.is('.' + settings.prefix + '-duplicate');

        if ((that.is('.' + settings.prefix + '-add') || that.is('.' + settings.prefix + '-rescue-add') || isDuplicate) && settings.allow_add) {
          event = 'add';
          elements = doAdd(container, that, collection, settings, elements, element, index, isDuplicate);
        }

        if (that.is('.' + settings.prefix + '-remove') && settings.allow_remove) {
          event = 'remove';
          elements = doDelete(collection, settings, elements, element, index);
        }

        if (that.is('.' + settings.prefix + '-up') && settings.allow_up) {
          event = 'up';
          elements = doUp(collection, settings, elements, element, index);
        }

        if (that.is('.' + settings.prefix + '-down') && settings.allow_down) {
          event = 'down';
          elements = doDown(collection, settings, elements, element, index);
        }

        dumpCollectionActions(collection, settings, false, event);
        e.preventDefault();
      }); // .on

      dumpCollectionActions(collection, settings, true);
      enableChildrenCollections(collection, null, settings); // if collection elements are given in the wrong order, plugin
      // must reorder them graphically

      if (settings.position_field_selector) {
        var array = [];
        var elements = collection.find(settings.elements_selector);
        elements.each(function (index) {
          var that = $(this);
          array.push({
            position: parseFloat(getFieldValue(that.find(settings.position_field_selector))),
            element: that
          });
        });

        var sorter = function sorter(a, b) {
          return a.position < b.position ? -1 : a.position > b.position ? 1 : 0;
        };

        array.sort(sorter);
        $.each(array, function (newIndex, object) {
          var ids = [];
          $(elements).each(function (index) {
            ids.push($(this).attr('id'));
          });
          var element = object.element;
          var oldIndex = $.inArray(element.attr('id'), ids);

          if (newIndex !== oldIndex) {
            elements = doMove(collection, settings, elements, element, oldIndex, newIndex);
            putFieldValue(element.find(settings.position_field_selector), elements.index(element));
          }
        });
      } // if (settings.position_field_selector) {


      settings.after_init(collection);
    }); // elem.each

    return true;
  }; // $.fn.collection

})(jQuery);

/***/ })

},
0,[["./assets/js/pages/apc.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-c0b602","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-9e8e74"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYXBjLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9qcXVlcnkuY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZW1lc3RyZVNhZSIsInNlbWVzdHJlIiwiY29tcGV0ZW5jZVNhZSIsIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInZhbCIsInVwZGF0ZUFwcHJlbnRpc2FnZXNDcml0aXF1ZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicmVhZHkiLCJjb21wcyIsInB1c2giLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkYXRhIiwiY29tcGV0ZW5jZXMiLCJzYWUiLCJzdWNjZXNzIiwiaHRtbCIsImNvbXAiLCJhYyIsImlkIiwiY2hlY2tlZCIsImxpYmVsbGUiLCJuaXZlYXVDb21wZXRlbmNlIiwiY29sbGVjdGlvbiIsImFwcHJlbnRpc3NhZ2VDcml0aXF1ZSIsIm5pdmVhdUNvbXBvc2FudGVFc3NlbnRpZWxsZXMiLCJhcGNSZXNzb3VyY2VBcHByZW50aXNzYWdlQ3JpdGlxdWUiLCJldGF0IiwiaXMiLCJwYXJjb3VycyIsImEiLCJmbiIsImRhdGVwaWNrZXIiLCJkYXRlcyIsImZyIiwiZGF5cyIsImRheXNTaG9ydCIsImRheXNNaW4iLCJtb250aHMiLCJtb250aHNTaG9ydCIsInRvZGF5IiwibW9udGhzVGl0bGUiLCJjbGVhciIsIndlZWtTdGFydCIsImZvcm1hdCIsImpRdWVyeSIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsImNvbnRhaW5lciIsImFsbG93X3VwIiwidXAiLCJiZWZvcmVfdXAiLCJlbGVtZW50IiwiYWZ0ZXJfdXAiLCJhbGxvd19kb3duIiwiZG93biIsImJlZm9yZV9kb3duIiwiYWZ0ZXJfZG93biIsImFsbG93X2FkZCIsImFkZCIsImJlZm9yZV9hZGQiLCJhZnRlcl9hZGQiLCJhbGxvd19yZW1vdmUiLCJyZW1vdmUiLCJiZWZvcmVfcmVtb3ZlIiwiYWZ0ZXJfcmVtb3ZlIiwiYWxsb3dfZHVwbGljYXRlIiwiZHVwbGljYXRlIiwiYmVmb3JlX2R1cGxpY2F0ZSIsImFmdGVyX2R1cGxpY2F0ZSIsImJlZm9yZV9pbml0IiwiYWZ0ZXJfaW5pdCIsIm1pbiIsIm1heCIsImFkZF9hdF90aGVfZW5kIiwicHJlZml4IiwicHJvdG90eXBlX25hbWUiLCJuYW1lX3ByZWZpeCIsImVsZW1lbnRzX3NlbGVjdG9yIiwiZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yIiwiY2hpbGRyZW4iLCJpbml0X3dpdGhfbl9lbGVtZW50cyIsImhpZGVfdXNlbGVzc19idXR0b25zIiwiZHJhZ19kcm9wIiwiZHJhZ19kcm9wX29wdGlvbnMiLCJkcmFnX2Ryb3Bfc3RhcnQiLCJldmVudCIsInVpIiwiZHJhZ19kcm9wX3VwZGF0ZSIsImN1c3RvbV9hZGRfbG9jYXRpb24iLCJhY3Rpb25fY29udGFpbmVyX3RhZyIsImZhZGVfaW4iLCJmYWRlX291dCIsInBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yIiwicHJlc2VydmVfbmFtZXMiLCJyYW5kb21OdW1iZXIiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwicmVwbGFjZSIsInNwbGl0Iiwic29ydCIsImpvaW4iLCJnZXRPckNyZWF0ZUlkIiwib2JqIiwiYXR0ciIsImdlbmVyYXRlZF9pZCIsImdldEZpZWxkVmFsdWUiLCJzZWxlY3RvciIsImpxRWxlbSIsInByb3AiLCJ1bmRlZmluZWQiLCJwdXRGaWVsZFZhbHVlIiwidmFsdWUiLCJwaHlzaWNhbCIsInJlbW92ZUF0dHIiLCJ0cnVlT3JVbmRlZmluZWQiLCJwcmVnUXVvdGUiLCJzdHJpbmciLCJyZXBsYWNlQXR0ckRhdGEiLCJlbGVtZW50cyIsImluZGV4IiwidG9SZXBsYWNlIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQXR0ckRhdGFOb2RlIiwibm9kZSIsImpxTm9kZSIsImVhY2giLCJhdHRyaWJ1dGVzIiwiaSIsImF0dHJpYiIsIm5hbWUiLCJlcSIsImZpbmQiLCJjaGFuZ2VFbGVtZW50SW5kZXgiLCJzZXR0aW5ncyIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJSZWdFeHAiLCJrZXkiLCJjaGlsZCIsImNoaWxkQ29sbGVjdGlvbiIsImNoaWxkU2V0dGluZ3MiLCJjaGFuZ2VIdG1sSW5kZXgiLCJvbGRLZXkiLCJuZXdLZXkiLCJwdXRGaWVsZFZhbHVlc0luRG9tIiwiaW5wdXRPYmoiLCJzd2FwRWxlbWVudHMiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRBZnRlciIsInN3YXBFbGVtZW50c1VwIiwic3dhcEVsZW1lbnRzRG93biIsInNoaWZ0RWxlbWVudHNVcCIsInNoaWZ0RWxlbWVudHNEb3duIiwiZHVtcENvbGxlY3Rpb25BY3Rpb25zIiwiaXNJbml0aWFsaXphdGlvbiIsImVsZW1lbnRzUGFyZW50IiwiaW5pdCIsImFwcGVuZCIsImFkZENsYXNzIiwiYnV0dG9uIiwiZmlyc3QiLCJzZWN1cmUiLCJsYXN0IiwiZG9BZGQiLCJlcnJvciIsImFjdGlvbnMiLCJhZGRCYWNrIiwiZmlsdGVyIiwiZGVsdGEiLCJidXR0b25zIiwiZW5hYmxlZCIsImFjdGlvbiIsImFwcGVuZFRvIiwiY29uZGl0aW9uIiwicmVtb3ZlQ2xhc3MiLCJjc3MiLCJyZXNjdWVBZGQiLCJhZGRzIiwiZmFkZUluIiwiZW5hYmxlQ2hpbGRyZW5Db2xsZWN0aW9ucyIsImNoaWxkcmVuU2V0dGluZ3MiLCJ0aGF0IiwiaXNEdXBsaWNhdGUiLCJwcm90b3R5cGUiLCJmcmVlSW5kZXgiLCJyZWdleHAiLCJmcmVlS2V5IiwiZmluZEZyZWVOdW1lcmljS2V5IiwiY29kZSIsInNldFJpZ2h0UHJlZml4IiwidG1wIiwib2xkRWxlbWVudCIsIm9sZEh0bWwiLCJjbG9uZSIsImdldEVsZW1lbnRLZXkiLCJuZXdIdG1sIiwiY29udGVudHMiLCJoaWRlIiwiYmVmb3JlIiwiZG9Nb3ZlIiwiZG9SZXdyaXRlUG9zaXRpb25zIiwiZG9EZWxldGUiLCJkZWxldGlvbiIsInRvRGVsZXRlIiwiYmFja3VwIiwid2l0aERhdGFBbmRFdmVudHMiLCJzaG93IiwiZmFkZU91dCIsImRvVXAiLCJkb0Rvd24iLCJhYnMiLCJzbGljZSIsInRlc3QiLCJOdW1iZXIiLCJzdWZmaXhlcyIsInN1ZmZpeCIsImhhc0NsYXNzIiwidXNlcl9wcmVmaXgiLCJoZXJlIiwiZWxlbXMiLCJleHRlbmQiLCJlbGVtIiwic29ydGFibGUiLCJvbGRQb3NpdGlvbiIsIm5ld1Bvc2l0aW9uIiwic3RhcnQiLCJpdGVtIiwicGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsInVwZGF0ZSIsIm9mZiIsInByZXZlbnREZWZhdWx0IiwiYXJyYXkiLCJwb3NpdGlvbiIsInBhcnNlRmxvYXQiLCJzb3J0ZXIiLCJiIiwib2JqZWN0IiwiaWRzIiwiaW5BcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUcsS0FBbEI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBLElBQUlDLGFBQWEsR0FBRyxLQUFwQjtBQUVBQyw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsdUNBQXpCLEVBQWtFLFVBQVVDLENBQVYsRUFBYTtBQUM3RUwsVUFBUSxHQUFHRSw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxHQUFSLEVBQVg7QUFDQVAsYUFBVyxHQUFHLElBQWQ7QUFDQVEsOEJBQTRCO0FBQzdCLENBSkQ7QUFNQUwsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLCtDQUF6QixFQUEwRSxVQUFVQyxDQUFWLEVBQWE7QUFDckZHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxHQUFSLEVBQVo7QUFDQUwsZUFBYSxHQUFHQyw2Q0FBQyxDQUFDLHVEQUFELENBQUQsQ0FBMkRRLE1BQTNELEdBQW9FLENBQXBGO0FBQ0FILDhCQUE0QjtBQUM3QixDQUpELEUsQ0FNQTs7QUFDQUwsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlRLEtBQVosQ0FBa0IsWUFBWTtBQUM1QlosYUFBVyxHQUFHLElBQWQsQ0FENEIsQ0FDVjs7QUFDbEJDLFVBQVEsR0FBR0UsNkNBQUMsQ0FBQyx1Q0FBRCxDQUFELENBQTJDSSxHQUEzQyxFQUFYO0FBQ0FMLGVBQWEsR0FBR0MsNkNBQUMsQ0FBQyx1REFBRCxDQUFELENBQTJEUSxNQUEzRCxHQUFvRSxDQUFwRjtBQUNBSCw4QkFBNEI7QUFDN0IsQ0FMRDs7QUFPQSxTQUFTQSw0QkFBVCxHQUF5QztBQUN2QyxNQUFJTixhQUFhLEtBQUssSUFBbEIsSUFBMEJGLFdBQVcsS0FBSyxJQUE5QyxFQUFvRDtBQUNsRCxRQUFJYSxLQUFLLEdBQUcsRUFBWjtBQUVBVixzREFBQSxDQUFPQSw2Q0FBQyxDQUFDLHVEQUFELENBQVIsRUFBbUUsWUFBWTtBQUM3RVUsV0FBSyxDQUFDQyxJQUFOLENBQVdYLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLEdBQVIsRUFBWDtBQUNELEtBRkQ7QUFJQUosc0RBQUEsQ0FBTztBQUNMWSxTQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixnQ0FBakIsQ0FEQTtBQUVMQyxVQUFJLEVBQUUsTUFGRDtBQUdMQyxjQUFRLEVBQUUsTUFITDtBQUlMQyxVQUFJLEVBQUU7QUFDSm5CLGdCQUFRLEVBQUVBLFFBRE47QUFFSm9CLG1CQUFXLEVBQUVSLEtBRlQ7QUFHSlMsV0FBRyxFQUFFQTtBQUhELE9BSkQ7QUFTTEMsYUFBTyxFQUFFLGlCQUFVSCxJQUFWLEVBQWdCO0FBQ3ZCWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsSUFBWjtBQUNBLFlBQUlJLElBQUksR0FBRyxFQUFYOztBQUNBLFlBQUlKLElBQUksS0FBSyxLQUFiLEVBQW9CO0FBRWxCLGVBQUssSUFBSUssSUFBVCxJQUFpQkwsSUFBakIsRUFBdUI7QUFDckJJLGdCQUFJLEdBQUdBLElBQUksR0FBRyxLQUFQLEdBQWVDLElBQWYsR0FBc0IsdUJBQTdCOztBQUNBLGlCQUFLLElBQUlDLEVBQVQsSUFBZU4sSUFBSSxDQUFDSyxJQUFELENBQW5CLEVBQTJCO0FBQ3pCRCxrQkFBSSxHQUFHQSxJQUFJLEdBQUcsd0JBQVAsR0FDTCwwQkFESyxHQUVMLGdDQUZLLEdBRThCSixJQUFJLENBQUNLLElBQUQsQ0FBSixDQUFXQyxFQUFYLEVBQWVDLEVBRjdDLEdBRWtELGdEQUZsRCxHQUVxR1AsSUFBSSxDQUFDSyxJQUFELENBQUosQ0FBV0MsRUFBWCxFQUFlQyxFQUZwSCxHQUV5SCxJQUZ6SCxHQUU4SFAsSUFBSSxDQUFDSyxJQUFELENBQUosQ0FBV0MsRUFBWCxFQUFlRSxPQUY3SSxHQUVxSixLQUZySixHQUdMLDBDQUhLLEdBR3dDUixJQUFJLENBQUNLLElBQUQsQ0FBSixDQUFXQyxFQUFYLEVBQWVDLEVBSHZELEdBRzRELElBSDVELEdBR21FUCxJQUFJLENBQUNLLElBQUQsQ0FBSixDQUFXQyxFQUFYLEVBQWVHLE9BSGxGLEdBRzRGLGdCQUg1RixHQUlMLFFBSkY7QUFLRDs7QUFDREwsZ0JBQUksR0FBR0EsSUFBSSxHQUFHLFFBQWQ7QUFDRDtBQUVGLFNBZEQsTUFjTztBQUNMQSxjQUFJLEdBQUcsd0ZBQVA7QUFDRDs7QUFDRHJCLHFEQUFDLENBQUMsUUFBRCxDQUFELENBQVlxQixJQUFaLENBQWlCQSxJQUFqQjtBQUNEO0FBOUJJLEtBQVA7QUFnQ0QsR0F2Q0QsTUF1Q087QUFDTCxRQUFJQSxJQUFJLEdBQUcsd0ZBQVg7QUFDQXJCLGlEQUFDLENBQUMsUUFBRCxDQUFELENBQVlxQixJQUFaLENBQWlCQSxJQUFqQjtBQUNEO0FBQ0Y7O0FBRURyQiw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWVEsS0FBWixDQUFrQixZQUFZO0FBQzVCLE1BQUlrQixnQkFBZ0IsR0FBRzNCLDZDQUFDLENBQUMsNEJBQUQsQ0FBeEI7O0FBQ0EsTUFBSTJCLGdCQUFnQixDQUFDbkIsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0JtQixvQkFBZ0IsQ0FBQ0MsVUFBakI7QUFDQTVCLGlEQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3Qiw4Q0FBeEIsRUFBd0UsWUFBWTtBQUNsRixVQUFJMkIscUJBQXFCLEdBQUc3Qiw2Q0FBQyxDQUFDLGlDQUFELENBQTdCOztBQUNBLFVBQUk2QixxQkFBcUIsQ0FBQ3JCLE1BQXRCLEdBQStCLENBQW5DLEVBQXNDO0FBQ3BDcUIsNkJBQXFCLENBQUNELFVBQXRCO0FBQ0Q7QUFDRixLQUxEO0FBTUQ7O0FBRUQsTUFBSUUsNEJBQTRCLEdBQUc5Qiw2Q0FBQyxDQUFDLHdDQUFELENBQXBDOztBQUNBLE1BQUk4Qiw0QkFBNEIsQ0FBQ3RCLE1BQTdCLEdBQXNDLENBQTFDLEVBQTZDO0FBQzNDc0IsZ0NBQTRCLENBQUNGLFVBQTdCO0FBQ0Q7O0FBRUQsTUFBSUcsaUNBQWlDLEdBQUcvQiw2Q0FBQyxDQUFDLDZDQUFELENBQXpDOztBQUNBLE1BQUkrQixpQ0FBaUMsQ0FBQ3ZCLE1BQWxDLEdBQTJDLENBQS9DLEVBQWtEO0FBQ2hEdUIscUNBQWlDLENBQUNILFVBQWxDO0FBQ0Q7O0FBRUQsTUFBSUMscUJBQXFCLEdBQUc3Qiw2Q0FBQyxDQUFDLGlDQUFELENBQTdCOztBQUNBLE1BQUk2QixxQkFBcUIsQ0FBQ3JCLE1BQXRCLEdBQStCLENBQW5DLEVBQXNDO0FBQ3BDcUIseUJBQXFCLENBQUNELFVBQXRCO0FBQ0Q7QUFDRixDQTFCRDtBQTRCQTVCLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixjQUF6QixFQUF5QyxVQUFVQyxDQUFWLEVBQWE7QUFDcEQsTUFBSTZCLElBQUksR0FBRyxDQUFYO0FBQ0ExQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLE1BQUtQLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQyxFQUFSLENBQVcsVUFBWCxDQUFMLEVBQThCO0FBQzVCRCxRQUFJLEdBQUcsQ0FBUDtBQUNEOztBQUNELE1BQUlFLFFBQVEsR0FBR2xDLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQixJQUFSLENBQWEsVUFBYixDQUFmO0FBQ0FqQixvREFBQSxDQUFPO0FBQ0xZLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHlDQUFqQixFQUE0RDtBQUMvRCxrQkFBWW9CLFFBRG1EO0FBRS9ELGNBQVFGLElBRnVEO0FBRy9ELGdCQUFVaEMsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksR0FBUjtBQUhxRCxLQUE1RCxDQURBO0FBTUxnQixXQUFPLEVBQUUsaUJBQVVILElBQVYsRUFBZ0IsQ0FFeEI7QUFSSSxHQUFQO0FBV0QsQ0FsQkQsRTs7Ozs7Ozs7Ozs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLENBQUMsVUFBU2tCLENBQVQsRUFBVztBQUFDQSxHQUFDLENBQUNDLEVBQUYsQ0FBS0MsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEVBQXRCLEdBQXlCO0FBQUNDLFFBQUksRUFBQyxDQUFDLFVBQUQsRUFBWSxPQUFaLEVBQW9CLE9BQXBCLEVBQTRCLFVBQTVCLEVBQXVDLE9BQXZDLEVBQStDLFVBQS9DLEVBQTBELFFBQTFELENBQU47QUFBMEVDLGFBQVMsRUFBQyxDQUFDLE1BQUQsRUFBUSxNQUFSLEVBQWUsTUFBZixFQUFzQixNQUF0QixFQUE2QixNQUE3QixFQUFvQyxNQUFwQyxFQUEyQyxNQUEzQyxDQUFwRjtBQUF1SUMsV0FBTyxFQUFDLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxJQUFULEVBQWMsSUFBZCxFQUFtQixHQUFuQixFQUF1QixHQUF2QixFQUEyQixHQUEzQixDQUEvSTtBQUErS0MsVUFBTSxFQUFDLENBQUMsU0FBRCxFQUFXLFNBQVgsRUFBcUIsTUFBckIsRUFBNEIsT0FBNUIsRUFBb0MsS0FBcEMsRUFBMEMsTUFBMUMsRUFBaUQsU0FBakQsRUFBMkQsTUFBM0QsRUFBa0UsV0FBbEUsRUFBOEUsU0FBOUUsRUFBd0YsVUFBeEYsRUFBbUcsVUFBbkcsQ0FBdEw7QUFBcVNDLGVBQVcsRUFBQyxDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLE1BQWpCLEVBQXdCLE9BQXhCLEVBQWdDLEtBQWhDLEVBQXNDLE1BQXRDLEVBQTZDLE9BQTdDLEVBQXFELE1BQXJELEVBQTRELE9BQTVELEVBQW9FLE1BQXBFLEVBQTJFLE1BQTNFLEVBQWtGLE1BQWxGLENBQWpUO0FBQTJZQyxTQUFLLEVBQUMsYUFBalo7QUFBK1pDLGVBQVcsRUFBQyxNQUEzYTtBQUFrYkMsU0FBSyxFQUFDLFNBQXhiO0FBQWtjQyxhQUFTLEVBQUMsQ0FBNWM7QUFBOGNDLFVBQU0sRUFBQztBQUFyZCxHQUF6QjtBQUE0ZixDQUF4Z0IsQ0FBeWdCQyxNQUF6Z0IsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxDQUFDLFVBQVVsRCxDQUFWLEVBQWE7QUFFWkEsR0FBQyxDQUFDb0MsRUFBRixDQUFLUixVQUFMLEdBQWtCLFVBQVV1QixPQUFWLEVBQW1CO0FBRW5DLFFBQUlDLFFBQVEsR0FBRztBQUNiQyxlQUFTLEVBQUUsTUFERTtBQUViQyxjQUFRLEVBQUUsSUFGRztBQUdiQyxRQUFFLEVBQUUsMEJBSFM7QUFJYkMsZUFBUyxFQUFFLG1CQUFVNUIsVUFBVixFQUFzQjZCLE9BQXRCLEVBQStCO0FBQ3hDLGVBQU8sSUFBUDtBQUNELE9BTlk7QUFPYkMsY0FBUSxFQUFFLGtCQUFVOUIsVUFBVixFQUFzQjZCLE9BQXRCLEVBQStCO0FBQ3ZDLGVBQU8sSUFBUDtBQUNELE9BVFk7QUFVYkUsZ0JBQVUsRUFBRSxJQVZDO0FBV2JDLFVBQUksRUFBRSwwQkFYTztBQVliQyxpQkFBVyxFQUFFLHFCQUFVakMsVUFBVixFQUFzQjZCLE9BQXRCLEVBQStCO0FBQzFDLGVBQU8sSUFBUDtBQUNELE9BZFk7QUFlYkssZ0JBQVUsRUFBRSxvQkFBVWxDLFVBQVYsRUFBc0I2QixPQUF0QixFQUErQjtBQUN6QyxlQUFPLElBQVA7QUFDRCxPQWpCWTtBQWtCYk0sZUFBUyxFQUFFLElBbEJFO0FBbUJiQyxTQUFHLEVBQUUsb0RBbkJRO0FBb0JiQyxnQkFBVSxFQUFFLG9CQUFVckMsVUFBVixFQUFzQjZCLE9BQXRCLEVBQStCO0FBQ3pDLGVBQU8sSUFBUDtBQUNELE9BdEJZO0FBdUJiUyxlQUFTLEVBQUUsbUJBQVV0QyxVQUFWLEVBQXNCNkIsT0FBdEIsRUFBK0I7QUFDeEMsZUFBTyxJQUFQO0FBQ0QsT0F6Qlk7QUEwQmJVLGtCQUFZLEVBQUUsSUExQkQ7QUEyQmJDLFlBQU0sRUFBRSxxREEzQks7QUE0QmJDLG1CQUFhLEVBQUUsdUJBQVV6QyxVQUFWLEVBQXNCNkIsT0FBdEIsRUFBK0I7QUFDNUMsZUFBTyxJQUFQO0FBQ0QsT0E5Qlk7QUErQmJhLGtCQUFZLEVBQUUsc0JBQVUxQyxVQUFWLEVBQXNCNkIsT0FBdEIsRUFBK0I7QUFDM0MsZUFBTyxJQUFQO0FBQ0QsT0FqQ1k7QUFrQ2JjLHFCQUFlLEVBQUUsS0FsQ0o7QUFtQ2JDLGVBQVMsRUFBRSx1QkFuQ0U7QUFvQ2JDLHNCQUFnQixFQUFFLDBCQUFVN0MsVUFBVixFQUFzQjZCLE9BQXRCLEVBQStCO0FBQy9DLGVBQU8sSUFBUDtBQUNELE9BdENZO0FBdUNiaUIscUJBQWUsRUFBRSx5QkFBVTlDLFVBQVYsRUFBc0I2QixPQUF0QixFQUErQjtBQUM5QyxlQUFPLElBQVA7QUFDRCxPQXpDWTtBQTBDYmtCLGlCQUFXLEVBQUUscUJBQVUvQyxVQUFWLEVBQXNCLENBQ2xDLENBM0NZO0FBNENiZ0QsZ0JBQVUsRUFBRSxvQkFBVWhELFVBQVYsRUFBc0IsQ0FDakMsQ0E3Q1k7QUE4Q2JpRCxTQUFHLEVBQUUsQ0E5Q1E7QUErQ2JDLFNBQUcsRUFBRSxHQS9DUTtBQWdEYkMsb0JBQWMsRUFBRSxLQWhESDtBQWlEYkMsWUFBTSxFQUFFLFlBakRLO0FBa0RiQyxvQkFBYyxFQUFFLFVBbERIO0FBbURiQyxpQkFBVyxFQUFFLElBbkRBO0FBb0RiQyx1QkFBaUIsRUFBRSxtQkFwRE47QUFxRGJDLDhCQUF3QixFQUFFLE1BckRiO0FBc0RiQyxjQUFRLEVBQUUsSUF0REc7QUF1RGJDLDBCQUFvQixFQUFFLENBdkRUO0FBd0RiQywwQkFBb0IsRUFBRSxJQXhEVDtBQXlEYkMsZUFBUyxFQUFFLElBekRFO0FBMERiQyx1QkFBaUIsRUFBRTtBQUNqQix1QkFBZTtBQURFLE9BMUROO0FBNkRiQyxxQkFBZSxFQUFFLHlCQUFVQyxLQUFWLEVBQWlCQyxFQUFqQixFQUFxQjtBQUNwQyxlQUFPLElBQVA7QUFDRCxPQS9EWTtBQWdFYkMsc0JBQWdCLEVBQUUsMEJBQVVGLEtBQVYsRUFBaUJDLEVBQWpCLEVBQXFCO0FBQ3JDLGVBQU8sSUFBUDtBQUNELE9BbEVZO0FBbUViRSx5QkFBbUIsRUFBRSxLQW5FUjtBQW9FYkMsMEJBQW9CLEVBQUUsS0FwRVQ7QUFxRWJDLGFBQU8sRUFBRSxJQXJFSTtBQXNFYkMsY0FBUSxFQUFFLElBdEVHO0FBdUViQyw2QkFBdUIsRUFBRSxJQXZFWjtBQXdFYkMsb0JBQWMsRUFBRTtBQXhFSCxLQUFmLENBRm1DLENBNkVuQzs7QUFDQSxRQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBQzdCLFVBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsSUFBaEIsR0FBdUIsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQXZDO0FBQ0EsYUFBT0osSUFBSSxDQUFDSyxPQUFMLENBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQkMsS0FBdEIsQ0FBNEIsRUFBNUIsRUFBZ0NDLElBQWhDLENBQXFDLFlBQVk7QUFDdEQsZUFBTyxNQUFNTixJQUFJLENBQUNDLE1BQUwsRUFBYjtBQUNELE9BRk0sRUFFSk0sSUFGSSxDQUVDLEVBRkQsQ0FBUDtBQUdELEtBTEQsQ0E5RW1DLENBcUZuQzs7O0FBQ0EsUUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFVOUIsTUFBVixFQUFrQitCLEdBQWxCLEVBQXVCO0FBQ3pDLFVBQUksQ0FBQ0EsR0FBRyxDQUFDQyxJQUFKLENBQVMsSUFBVCxDQUFMLEVBQXFCO0FBQ25CLFlBQUlDLFlBQUo7O0FBQ0EsV0FBRztBQUNEQSxzQkFBWSxHQUFHakMsTUFBTSxHQUFHLEdBQVQsR0FBZW9CLFlBQVksRUFBMUM7QUFDRCxTQUZELFFBRVNwRyxDQUFDLENBQUMsTUFBTWlILFlBQVAsQ0FBRCxDQUFzQnpHLE1BQXRCLEdBQStCLENBRnhDOztBQUdBdUcsV0FBRyxDQUFDQyxJQUFKLENBQVMsSUFBVCxFQUFlQyxZQUFmO0FBQ0Q7O0FBQ0QsYUFBT0YsR0FBRyxDQUFDQyxJQUFKLENBQVMsSUFBVCxDQUFQO0FBQ0QsS0FURCxDQXRGbUMsQ0FpR25DOzs7QUFDQSxRQUFJRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVDLFFBQVYsRUFBb0I7QUFDdEMsVUFBSTtBQUNGLFlBQUlDLE1BQU0sR0FBR3BILENBQUMsQ0FBQ21ILFFBQUQsQ0FBZDtBQUNELE9BRkQsQ0FFRSxPQUFPaEgsQ0FBUCxFQUFVO0FBQ1YsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBSWlILE1BQU0sQ0FBQzVHLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUk0RyxNQUFNLENBQUNuRixFQUFQLENBQVUsd0JBQVYsQ0FBSixFQUF5QztBQUM5QyxlQUFRbUYsTUFBTSxDQUFDQyxJQUFQLENBQVksU0FBWixNQUEyQixJQUEzQixHQUFrQyxJQUFsQyxHQUF5QyxLQUFqRDtBQUNELE9BRk0sTUFFQSxJQUFJRCxNQUFNLENBQUNuRixFQUFQLENBQVUscUJBQVYsS0FBb0NtRixNQUFNLENBQUNKLElBQVAsQ0FBWSxNQUFaLE1BQXdCTSxTQUFoRSxFQUEyRTtBQUNoRixlQUFPdEgsQ0FBQyxDQUFDLGlCQUFpQm9ILE1BQU0sQ0FBQ0osSUFBUCxDQUFZLE1BQVosQ0FBakIsR0FBdUMsWUFBeEMsQ0FBRCxDQUF1RDVHLEdBQXZELEVBQVA7QUFDRCxPQUZNLE1BRUEsSUFBSWdILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosTUFBeUJDLFNBQTdCLEVBQXdDO0FBQzdDLGVBQU9GLE1BQU0sQ0FBQ2hILEdBQVAsRUFBUDtBQUNELE9BRk0sTUFFQTtBQUNMLGVBQU9nSCxNQUFNLENBQUMvRixJQUFQLEVBQVA7QUFDRDtBQUNGLEtBakJELENBbEdtQyxDQXFIbkM7OztBQUNBLFFBQUlrRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVKLFFBQVYsRUFBb0JLLEtBQXBCLEVBQTJCQyxRQUEzQixFQUFxQztBQUN2RCxVQUFJO0FBQ0YsWUFBSUwsTUFBTSxHQUFHcEgsQ0FBQyxDQUFDbUgsUUFBRCxDQUFkO0FBQ0QsT0FGRCxDQUVFLE9BQU9oSCxDQUFQLEVBQVU7QUFDVjtBQUNEOztBQUNELFVBQUlpSCxNQUFNLENBQUM1RyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0QsT0FGRCxNQUVPLElBQUk0RyxNQUFNLENBQUNuRixFQUFQLENBQVUsd0JBQVYsQ0FBSixFQUF5QztBQUM5QyxZQUFJdUYsS0FBSixFQUFXO0FBQ1RKLGdCQUFNLENBQUNKLElBQVAsQ0FBWSxTQUFaLEVBQXVCLElBQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xJLGdCQUFNLENBQUNNLFVBQVAsQ0FBa0IsU0FBbEI7QUFDRDtBQUNGLE9BTk0sTUFNQSxJQUFJTixNQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLE1BQXlCQyxTQUE3QixFQUF3QztBQUM3QyxZQUFJRyxRQUFKLEVBQWM7QUFDWkwsZ0JBQU0sQ0FBQ0osSUFBUCxDQUFZLE9BQVosRUFBcUJRLEtBQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGdCQUFNLENBQUNoSCxHQUFQLENBQVdvSCxLQUFYO0FBQ0Q7QUFDRixPQU5NLE1BTUE7QUFDTEosY0FBTSxDQUFDL0YsSUFBUCxDQUFZbUcsS0FBWjtBQUNEO0FBQ0YsS0F2QkQsQ0F0SG1DLENBK0luQztBQUNBOzs7QUFDQSxRQUFJRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVVILEtBQVYsRUFBaUI7QUFDckMsYUFBT0YsU0FBUyxLQUFLRSxLQUFkLElBQXVCQSxLQUE5QjtBQUNELEtBRkQsQ0FqSm1DLENBcUpuQzs7O0FBQ0EsUUFBSUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBVUMsTUFBVixFQUFrQjtBQUNoQyxhQUFPLENBQUNBLE1BQU0sR0FBRyxFQUFWLEVBQWNuQixPQUFkLENBQXNCLHNCQUF0QixFQUE4QyxNQUE5QyxDQUFQO0FBQ0QsS0FGRCxDQXRKbUMsQ0EwSm5DO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBVUMsUUFBVixFQUFvQkMsS0FBcEIsRUFBMkJDLFNBQTNCLEVBQXNDQyxXQUF0QyxFQUFtRDtBQUV2RSxVQUFJQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVVDLElBQVYsRUFBZ0I7QUFDeEMsWUFBSUMsTUFBTSxHQUFHckksQ0FBQyxDQUFDb0ksSUFBRCxDQUFkOztBQUNBLFlBQUksUUFBT0EsSUFBUCxNQUFnQixRQUFoQixJQUE0QixnQkFBZ0JBLElBQWhELEVBQXNEO0FBQ3BEcEksV0FBQyxDQUFDc0ksSUFBRixDQUFPRixJQUFJLENBQUNHLFVBQVosRUFBd0IsVUFBVUMsQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQzNDLGdCQUFJekksQ0FBQyxDQUFDZSxJQUFGLENBQU8wSCxNQUFNLENBQUNqQixLQUFkLE1BQXlCLFFBQTdCLEVBQXVDO0FBQ3JDYSxvQkFBTSxDQUFDckIsSUFBUCxDQUFZeUIsTUFBTSxDQUFDQyxJQUFQLENBQVloQyxPQUFaLENBQW9CdUIsU0FBcEIsRUFBK0JDLFdBQS9CLENBQVosRUFBeURPLE1BQU0sQ0FBQ2pCLEtBQVAsQ0FBYWQsT0FBYixDQUFxQnVCLFNBQXJCLEVBQWdDQyxXQUFoQyxDQUF6RDtBQUNEO0FBQ0YsV0FKRDtBQUtEOztBQUNELFlBQUlHLE1BQU0sQ0FBQzdILE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJSLFdBQUMsQ0FBQ3NJLElBQUYsQ0FBT0QsTUFBTSxDQUFDcEgsSUFBUCxFQUFQLEVBQXNCLFVBQVV5SCxJQUFWLEVBQWdCbEIsS0FBaEIsRUFBdUI7QUFDM0MsZ0JBQUl4SCxDQUFDLENBQUNlLElBQUYsQ0FBT3lHLEtBQVAsTUFBa0IsUUFBdEIsRUFBZ0M7QUFDOUJhLG9CQUFNLENBQUNwSCxJQUFQLENBQVl5SCxJQUFJLENBQUNoQyxPQUFMLENBQWF1QixTQUFiLEVBQXdCQyxXQUF4QixDQUFaLEVBQWtEVixLQUFLLENBQUNkLE9BQU4sQ0FBY3VCLFNBQWQsRUFBeUJDLFdBQXpCLENBQWxEO0FBQ0Q7QUFDRixXQUpEO0FBS0Q7QUFDRixPQWhCRDs7QUFrQkEsVUFBSXpFLE9BQU8sR0FBR3NFLFFBQVEsQ0FBQ1ksRUFBVCxDQUFZWCxLQUFaLENBQWQ7QUFDQUcseUJBQW1CLENBQUMxRSxPQUFPLENBQUMsQ0FBRCxDQUFSLENBQW5CO0FBQ0FBLGFBQU8sQ0FBQ21GLElBQVIsQ0FBYSxHQUFiLEVBQWtCTixJQUFsQixDQUF1QixZQUFZO0FBQ2pDSCwyQkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0QsT0FGRDtBQUdELEtBekJELENBN0ptQyxDQXdMbkM7QUFDQTtBQUNBOzs7QUFDQSxRQUFJVSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQVVqSCxVQUFWLEVBQXNCbUcsUUFBdEIsRUFBZ0NlLFFBQWhDLEVBQTBDZCxLQUExQyxFQUFpRGUsUUFBakQsRUFBMkRDLFFBQTNELEVBQXFFO0FBQzVGLFVBQUlmLFNBQVMsR0FBRyxJQUFJZ0IsTUFBSixDQUFXckIsU0FBUyxDQUFDa0IsUUFBUSxDQUFDNUQsV0FBVCxHQUF1QixHQUF2QixHQUE2QjZELFFBQTdCLEdBQXdDLEdBQXpDLENBQXBCLEVBQW1FLEdBQW5FLENBQWhCO0FBQ0EsVUFBSWIsV0FBVyxHQUFHWSxRQUFRLENBQUM1RCxXQUFULEdBQXVCLEdBQXZCLEdBQTZCOEQsUUFBN0IsR0FBd0MsR0FBMUQ7O0FBRUEsVUFBSUYsUUFBUSxDQUFDekQsUUFBYixFQUF1QjtBQUNyQnJGLFNBQUMsQ0FBQ3NJLElBQUYsQ0FBT1EsUUFBUSxDQUFDekQsUUFBaEIsRUFBMEIsVUFBVTZELEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUM5QyxjQUFJQyxlQUFlLEdBQUd4SCxVQUFVLENBQUNnSCxJQUFYLENBQWdCTyxLQUFLLENBQUNoQyxRQUF0QixFQUFnQ3dCLEVBQWhDLENBQW1DWCxLQUFuQyxDQUF0QjtBQUNBLGNBQUlxQixhQUFhLEdBQUdELGVBQWUsQ0FBQ25JLElBQWhCLENBQXFCLHFCQUFyQixDQUFwQjs7QUFDQSxjQUFJb0ksYUFBSixFQUFtQjtBQUNqQkEseUJBQWEsQ0FBQ25FLFdBQWQsR0FBNEJtRSxhQUFhLENBQUNuRSxXQUFkLENBQTBCd0IsT0FBMUIsQ0FBa0N1QixTQUFsQyxFQUE2Q0MsV0FBN0MsQ0FBNUI7QUFDQWtCLDJCQUFlLENBQUNuSSxJQUFoQixDQUFxQixxQkFBckIsRUFBNENvSSxhQUE1QztBQUNEO0FBQ0YsU0FQRDtBQVFEOztBQUVEdkIscUJBQWUsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCQyxTQUFsQixFQUE2QkMsV0FBN0IsQ0FBZjtBQUVBRCxlQUFTLEdBQUcsSUFBSWdCLE1BQUosQ0FBV3JCLFNBQVMsQ0FBQ2hHLFVBQVUsQ0FBQ29GLElBQVgsQ0FBZ0IsSUFBaEIsSUFBd0IsR0FBeEIsR0FBOEIrQixRQUEvQixDQUFwQixFQUE4RCxHQUE5RCxDQUFaO0FBQ0FiLGlCQUFXLEdBQUd0RyxVQUFVLENBQUNvRixJQUFYLENBQWdCLElBQWhCLElBQXdCLEdBQXhCLEdBQThCZ0MsUUFBNUM7O0FBRUEsVUFBSUYsUUFBUSxDQUFDekQsUUFBYixFQUF1QjtBQUNyQnJGLFNBQUMsQ0FBQ3NJLElBQUYsQ0FBT1EsUUFBUSxDQUFDekQsUUFBaEIsRUFBMEIsVUFBVTZELEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUM5QyxjQUFJQyxlQUFlLEdBQUd4SCxVQUFVLENBQUNnSCxJQUFYLENBQWdCTyxLQUFLLENBQUNoQyxRQUF0QixFQUFnQ3dCLEVBQWhDLENBQW1DWCxLQUFuQyxDQUF0QjtBQUNBLGNBQUlxQixhQUFhLEdBQUdELGVBQWUsQ0FBQ25JLElBQWhCLENBQXFCLHFCQUFyQixDQUFwQjs7QUFDQSxjQUFJb0ksYUFBSixFQUFtQjtBQUNqQkEseUJBQWEsQ0FBQ2pFLHdCQUFkLEdBQXlDaUUsYUFBYSxDQUFDakUsd0JBQWQsQ0FBdUNzQixPQUF2QyxDQUErQ3VCLFNBQS9DLEVBQTBEQyxXQUExRCxDQUF6QztBQUNBbUIseUJBQWEsQ0FBQ2xFLGlCQUFkLEdBQWtDa0UsYUFBYSxDQUFDbEUsaUJBQWQsQ0FBZ0N1QixPQUFoQyxDQUF3Q3VCLFNBQXhDLEVBQW1EQyxXQUFuRCxDQUFsQztBQUNBbUIseUJBQWEsQ0FBQ3JFLE1BQWQsR0FBdUJxRSxhQUFhLENBQUNyRSxNQUFkLENBQXFCMEIsT0FBckIsQ0FBNkJ1QixTQUE3QixFQUF3Q0MsV0FBeEMsQ0FBdkI7QUFDQWtCLDJCQUFlLENBQUNuSSxJQUFoQixDQUFxQixxQkFBckIsRUFBNENvSSxhQUE1QztBQUNEO0FBQ0YsU0FURDtBQVVEOztBQUVEdkIscUJBQWUsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCQyxTQUFsQixFQUE2QkMsV0FBN0IsQ0FBZjtBQUNELEtBbENELENBM0xtQyxDQStObkM7QUFDQTs7O0FBQ0EsUUFBSW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBVTFILFVBQVYsRUFBc0JrSCxRQUF0QixFQUFnQ3pILElBQWhDLEVBQXNDMEgsUUFBdEMsRUFBZ0RDLFFBQWhELEVBQTBETyxNQUExRCxFQUFrRUMsTUFBbEUsRUFBMEU7QUFDOUYsVUFBSXZCLFNBQVMsR0FBRyxJQUFJZ0IsTUFBSixDQUFXckIsU0FBUyxDQUFDa0IsUUFBUSxDQUFDNUQsV0FBVCxHQUF1QixHQUF2QixHQUE2QnFFLE1BQTdCLEdBQXNDLEdBQXZDLENBQXBCLEVBQWlFLEdBQWpFLENBQWhCO0FBQ0EsVUFBSXJCLFdBQVcsR0FBR1ksUUFBUSxDQUFDNUQsV0FBVCxHQUF1QixHQUF2QixHQUE2QnNFLE1BQTdCLEdBQXNDLEdBQXhEO0FBQ0FuSSxVQUFJLEdBQUdBLElBQUksQ0FBQ3FGLE9BQUwsQ0FBYXVCLFNBQWIsRUFBd0JDLFdBQXhCLENBQVA7QUFFQUQsZUFBUyxHQUFHLElBQUlnQixNQUFKLENBQVdyQixTQUFTLENBQUNoRyxVQUFVLENBQUNvRixJQUFYLENBQWdCLElBQWhCLElBQXdCLEdBQXhCLEdBQThCK0IsUUFBL0IsQ0FBcEIsRUFBOEQsR0FBOUQsQ0FBWjtBQUNBYixpQkFBVyxHQUFHdEcsVUFBVSxDQUFDb0YsSUFBWCxDQUFnQixJQUFoQixJQUF3QixHQUF4QixHQUE4QmdDLFFBQTVDO0FBQ0EzSCxVQUFJLEdBQUdBLElBQUksQ0FBQ3FGLE9BQUwsQ0FBYXVCLFNBQWIsRUFBd0JDLFdBQXhCLENBQVA7QUFFQSxhQUFPN0csSUFBUDtBQUNELEtBVkQsQ0FqT21DLENBNk9uQztBQUNBO0FBQ0E7OztBQUNBLFFBQUlvSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVVoRyxPQUFWLEVBQW1CO0FBQzNDekQsT0FBQyxDQUFDeUQsT0FBRCxDQUFELENBQVdtRixJQUFYLENBQWdCLFFBQWhCLEVBQTBCTixJQUExQixDQUErQixVQUFVTixLQUFWLEVBQWlCMEIsUUFBakIsRUFBMkI7QUFDeERuQyxxQkFBYSxDQUFDbUMsUUFBRCxFQUFXeEMsYUFBYSxDQUFDd0MsUUFBRCxDQUF4QixFQUFvQyxJQUFwQyxDQUFiO0FBQ0QsT0FGRDtBQUdELEtBSkQsQ0FoUG1DLENBc1BuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxRQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVL0gsVUFBVixFQUFzQm1HLFFBQXRCLEVBQWdDZ0IsUUFBaEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBRXJFLFVBQUlGLFFBQVEsR0FBR2xILFVBQVUsQ0FBQ1gsSUFBWCxDQUFnQixxQkFBaEIsQ0FBZjs7QUFFQSxVQUFJLENBQUM2SCxRQUFRLENBQUM1Qyx1QkFBVixJQUFxQyxDQUFDNEMsUUFBUSxDQUFDM0MsY0FBbkQsRUFBbUU7QUFDakUwQywwQkFBa0IsQ0FBQ2pILFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJlLFFBQXZCLEVBQWlDQyxRQUFqQyxFQUEyQ0EsUUFBM0MsRUFBcUQsVUFBckQsQ0FBbEI7QUFDQUYsMEJBQWtCLENBQUNqSCxVQUFELEVBQWFtRyxRQUFiLEVBQXVCZSxRQUF2QixFQUFpQ0UsUUFBakMsRUFBMkNBLFFBQTNDLEVBQXFERCxRQUFyRCxDQUFsQjtBQUNBRiwwQkFBa0IsQ0FBQ2pILFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJlLFFBQXZCLEVBQWlDQyxRQUFqQyxFQUEyQyxVQUEzQyxFQUF1REMsUUFBdkQsQ0FBbEI7QUFDRDs7QUFFRGpCLGNBQVEsQ0FBQ1ksRUFBVCxDQUFZSSxRQUFaLEVBQXNCYSxZQUF0QixDQUFtQzdCLFFBQVEsQ0FBQ1ksRUFBVCxDQUFZSyxRQUFaLENBQW5DOztBQUNBLFVBQUlBLFFBQVEsR0FBR0QsUUFBZixFQUF5QjtBQUN2QmhCLGdCQUFRLENBQUNZLEVBQVQsQ0FBWUssUUFBWixFQUFzQlksWUFBdEIsQ0FBbUM3QixRQUFRLENBQUNZLEVBQVQsQ0FBWUksUUFBWixDQUFuQztBQUNELE9BRkQsTUFFTztBQUNMaEIsZ0JBQVEsQ0FBQ1ksRUFBVCxDQUFZSyxRQUFaLEVBQXNCYSxXQUF0QixDQUFrQzlCLFFBQVEsQ0FBQ1ksRUFBVCxDQUFZSSxRQUFaLENBQWxDO0FBQ0Q7O0FBRUQsYUFBT25ILFVBQVUsQ0FBQ2dILElBQVgsQ0FBZ0JFLFFBQVEsQ0FBQzNELGlCQUF6QixDQUFQO0FBQ0QsS0FsQkQsQ0EzUG1DLENBK1FuQztBQUNBO0FBQ0E7OztBQUNBLFFBQUkyRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQVVsSSxVQUFWLEVBQXNCbUcsUUFBdEIsRUFBZ0NlLFFBQWhDLEVBQTBDQyxRQUExQyxFQUFvREMsUUFBcEQsRUFBOEQ7QUFDakYsV0FBSyxJQUFJUixDQUFDLEdBQUdPLFFBQVEsR0FBRyxDQUF4QixFQUE0QlAsQ0FBQyxJQUFJUSxRQUFqQyxFQUE0Q1IsQ0FBQyxFQUE3QyxFQUFpRDtBQUMvQ1QsZ0JBQVEsR0FBRzRCLFlBQVksQ0FBQy9ILFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJTLENBQXZCLEVBQTBCQSxDQUFDLEdBQUcsQ0FBOUIsQ0FBdkI7QUFDRDs7QUFDRCxhQUFPNUcsVUFBVSxDQUFDZ0gsSUFBWCxDQUFnQkUsUUFBUSxDQUFDM0QsaUJBQXpCLENBQVA7QUFDRCxLQUxELENBbFJtQyxDQXlSbkM7QUFDQTtBQUNBOzs7QUFDQSxRQUFJNEUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVbkksVUFBVixFQUFzQm1HLFFBQXRCLEVBQWdDZSxRQUFoQyxFQUEwQ0MsUUFBMUMsRUFBb0RDLFFBQXBELEVBQThEO0FBQ25GLFdBQUssSUFBSVIsQ0FBQyxHQUFHTyxRQUFRLEdBQUcsQ0FBeEIsRUFBNEJQLENBQUMsSUFBSVEsUUFBakMsRUFBNENSLENBQUMsRUFBN0MsRUFBaUQ7QUFDL0NULGdCQUFRLEdBQUc0QixZQUFZLENBQUMvSCxVQUFELEVBQWFtRyxRQUFiLEVBQXVCUyxDQUF2QixFQUEwQkEsQ0FBQyxHQUFHLENBQTlCLENBQXZCO0FBQ0Q7O0FBQ0QsYUFBTzVHLFVBQVUsQ0FBQ2dILElBQVgsQ0FBZ0JFLFFBQVEsQ0FBQzNELGlCQUF6QixDQUFQO0FBQ0QsS0FMRCxDQTVSbUMsQ0FtU25DO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSTZFLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBVXBJLFVBQVYsRUFBc0JtRyxRQUF0QixFQUFnQ2UsUUFBaEMsRUFBMENkLEtBQTFDLEVBQWlEO0FBQ3JFLFdBQUssSUFBSVEsQ0FBQyxHQUFHUixLQUFLLEdBQUcsQ0FBckIsRUFBd0JRLENBQUMsR0FBR1QsUUFBUSxDQUFDdkgsTUFBckMsRUFBNkNnSSxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hEVCxnQkFBUSxHQUFHNEIsWUFBWSxDQUFDL0gsVUFBRCxFQUFhbUcsUUFBYixFQUF1QlMsQ0FBQyxHQUFHLENBQTNCLEVBQThCQSxDQUE5QixDQUF2QjtBQUNEOztBQUNELGFBQU81RyxVQUFVLENBQUNnSCxJQUFYLENBQWdCRSxRQUFRLENBQUMzRCxpQkFBekIsQ0FBUDtBQUNELEtBTEQsQ0F0U21DLENBNlNuQztBQUNBO0FBQ0E7OztBQUNBLFFBQUk4RSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVVySSxVQUFWLEVBQXNCbUcsUUFBdEIsRUFBZ0NlLFFBQWhDLEVBQTBDZCxLQUExQyxFQUFpRDtBQUN2RSxXQUFLLElBQUlRLENBQUMsR0FBR1QsUUFBUSxDQUFDdkgsTUFBVCxHQUFrQixDQUEvQixFQUFrQ2dJLENBQUMsR0FBR1IsS0FBdEMsRUFBNkNRLENBQUMsRUFBOUMsRUFBa0Q7QUFDaERULGdCQUFRLEdBQUc0QixZQUFZLENBQUMvSCxVQUFELEVBQWFtRyxRQUFiLEVBQXVCUyxDQUFDLEdBQUcsQ0FBM0IsRUFBOEJBLENBQTlCLENBQXZCO0FBQ0Q7O0FBQ0QsYUFBTzVHLFVBQVUsQ0FBQ2dILElBQVgsQ0FBZ0JFLFFBQVEsQ0FBQzNELGlCQUF6QixDQUFQO0FBQ0QsS0FMRCxDQWhUbUMsQ0F1VG5DO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSStFLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBVXRJLFVBQVYsRUFBc0JrSCxRQUF0QixFQUFnQ3FCLGdCQUFoQyxFQUFrRHhFLEtBQWxELEVBQXlEO0FBQ25GLFVBQUl5RSxjQUFjLEdBQUdwSyxDQUFDLENBQUM4SSxRQUFRLENBQUMxRCx3QkFBVixDQUF0QjtBQUNBLFVBQUlpRixJQUFJLEdBQUdELGNBQWMsQ0FBQ3hCLElBQWYsQ0FBb0IsTUFBTUUsUUFBUSxDQUFDOUQsTUFBZixHQUF3QixNQUE1QyxFQUFvRHhFLE1BQXBELEtBQStELENBQTFFO0FBQ0EsVUFBSXVILFFBQVEsR0FBR25HLFVBQVUsQ0FBQ2dILElBQVgsQ0FBZ0JFLFFBQVEsQ0FBQzNELGlCQUF6QixDQUFmLENBSG1GLENBS25GOztBQUNBLFVBQUkyRCxRQUFRLENBQUMvRSxTQUFiLEVBQXdCO0FBQ3RCLFlBQUlzRyxJQUFKLEVBQVU7QUFDUkQsd0JBQWMsQ0FBQ0UsTUFBZixDQUFzQixrQkFBa0J4QixRQUFRLENBQUM5RCxNQUEzQixHQUFvQyxlQUExRDs7QUFDQSxjQUFJOEQsUUFBUSxDQUFDOUUsR0FBYixFQUFrQjtBQUNoQm9HLDBCQUFjLENBQUNFLE1BQWYsQ0FDRXRLLENBQUMsQ0FBQzhJLFFBQVEsQ0FBQzlFLEdBQVYsQ0FBRCxDQUNHdUcsUUFESCxDQUNZekIsUUFBUSxDQUFDOUQsTUFBVCxHQUFrQixVQUFsQixHQUErQjhELFFBQVEsQ0FBQzlELE1BQXhDLEdBQWlELGFBRDdELEVBRUcvRCxJQUZILENBRVEsWUFGUixFQUVzQlcsVUFBVSxDQUFDb0YsSUFBWCxDQUFnQixJQUFoQixDQUZ0QixDQURGO0FBS0Q7QUFDRjtBQUNGLE9BakJrRixDQW1CbkY7OztBQUNBLFVBQUltRCxnQkFBSixFQUFzQjtBQUNwQnZJLGtCQUFVLENBQUNYLElBQVgsQ0FBZ0IsbUJBQWhCLEVBQXFDOEcsUUFBUSxDQUFDdkgsTUFBOUM7QUFFQSxZQUFJNkMsU0FBUyxHQUFHckQsQ0FBQyxDQUFDOEksUUFBUSxDQUFDekYsU0FBVixDQUFqQjtBQUNBLFlBQUltSCxNQUFNLEdBQUc1SSxVQUFVLENBQUNnSCxJQUFYLENBQWdCLE1BQU1FLFFBQVEsQ0FBQzlELE1BQWYsR0FBd0IsU0FBeEIsR0FBb0M4RCxRQUFRLENBQUM5RCxNQUE3QyxHQUFzRCxnQkFBdEQsR0FBeUU4RCxRQUFRLENBQUM5RCxNQUFsRixHQUEyRixZQUEzRyxFQUF5SHlGLEtBQXpILEVBQWI7QUFDQSxZQUFJQyxNQUFNLEdBQUcsQ0FBYjs7QUFDQSxlQUFPM0MsUUFBUSxDQUFDdkgsTUFBVCxHQUFrQnNJLFFBQVEsQ0FBQ3hELG9CQUFsQyxFQUF3RDtBQUN0RG9GLGdCQUFNO0FBQ04sY0FBSWpILE9BQU8sR0FBR3NFLFFBQVEsQ0FBQ3ZILE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0J1SCxRQUFRLENBQUM0QyxJQUFULEVBQXRCLEdBQXdDckQsU0FBdEQ7QUFDQSxjQUFJVSxLQUFLLEdBQUdELFFBQVEsQ0FBQ3ZILE1BQVQsR0FBa0IsQ0FBOUI7QUFDQXVILGtCQUFRLEdBQUc2QyxLQUFLLENBQUN2SCxTQUFELEVBQVltSCxNQUFaLEVBQW9CNUksVUFBcEIsRUFBZ0NrSCxRQUFoQyxFQUEwQ2YsUUFBMUMsRUFBb0R0RSxPQUFwRCxFQUE2RHVFLEtBQTdELEVBQW9FLEtBQXBFLENBQWhCOztBQUNBLGNBQUkwQyxNQUFNLEdBQUc1QixRQUFRLENBQUN4RCxvQkFBdEIsRUFBNEM7QUFDMUNoRixtQkFBTyxDQUFDdUssS0FBUixDQUFjLHNDQUFzQy9CLFFBQVEsQ0FBQzNELGlCQUEvQyxHQUFtRSxlQUFqRjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRHZELGtCQUFVLENBQUNYLElBQVgsQ0FBZ0IsbUJBQWhCLEVBQXFDOEcsUUFBUSxDQUFDdkgsTUFBOUM7QUFDRCxPQXRDa0YsQ0F3Q25GO0FBQ0E7QUFDQTs7O0FBQ0F1SCxjQUFRLENBQUNPLElBQVQsQ0FBYyxVQUFVTixLQUFWLEVBQWlCO0FBQzdCLFlBQUl2RSxPQUFPLEdBQUd6RCxDQUFDLENBQUMsSUFBRCxDQUFmOztBQUVBLFlBQUltSyxnQkFBSixFQUFzQjtBQUNwQjFHLGlCQUFPLENBQUN4QyxJQUFSLENBQWEsT0FBYixFQUFzQitHLEtBQXRCO0FBQ0Q7O0FBRUQsWUFBSThDLE9BQU8sR0FBR3JILE9BQU8sQ0FBQ21GLElBQVIsQ0FBYSxNQUFNRSxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLFVBQXJDLEVBQWlEK0YsT0FBakQsR0FBMkRDLE1BQTNELENBQWtFLE1BQU1sQyxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLFVBQTFGLENBQWQ7O0FBQ0EsWUFBSThGLE9BQU8sQ0FBQ3RLLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJzSyxpQkFBTyxHQUFHOUssQ0FBQyxDQUFDLE1BQU04SSxRQUFRLENBQUMvQyxvQkFBZixHQUFzQyxVQUF0QyxHQUFtRCtDLFFBQVEsQ0FBQzlELE1BQTVELEdBQXFFLGNBQXJFLEdBQXNGOEQsUUFBUSxDQUFDL0Msb0JBQS9GLEdBQXNILEdBQXZILENBQVg7QUFFQXRDLGlCQUFPLENBQUM2RyxNQUFSLENBQWVRLE9BQWY7QUFDRDs7QUFFRCxZQUFJRyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxZQUFJdEYsS0FBSyxLQUFLLFFBQVYsSUFBc0JtRCxRQUFRLENBQUM3QyxRQUFuQyxFQUE2QztBQUMzQ2dGLGVBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBRUQsWUFBSUMsT0FBTyxHQUFHLENBQ1o7QUFDRSxxQkFBV3BDLFFBQVEsQ0FBQzNFLFlBRHRCO0FBRUUsc0JBQVkyRSxRQUFRLENBQUM5RCxNQUFULEdBQWtCLFNBRmhDO0FBR0Usa0JBQVE4RCxRQUFRLENBQUMxRSxNQUhuQjtBQUlFLHVCQUFhMkQsUUFBUSxDQUFDdkgsTUFBVCxHQUFrQnlLLEtBQWxCLEdBQTBCbkMsUUFBUSxDQUFDakU7QUFKbEQsU0FEWSxFQU1UO0FBQ0QscUJBQVdpRSxRQUFRLENBQUN4RixRQURuQjtBQUVELHNCQUFZd0YsUUFBUSxDQUFDOUQsTUFBVCxHQUFrQixLQUY3QjtBQUdELGtCQUFROEQsUUFBUSxDQUFDdkYsRUFIaEI7QUFJRCx1QkFBYXdFLFFBQVEsQ0FBQ3ZILE1BQVQsR0FBa0J5SyxLQUFsQixHQUEwQixDQUExQixJQUErQmxELFFBQVEsQ0FBQ0MsS0FBVCxDQUFldkUsT0FBZixJQUEwQndILEtBQTFCLEdBQWtDO0FBSjdFLFNBTlMsRUFXVDtBQUNELHFCQUFXbkMsUUFBUSxDQUFDbkYsVUFEbkI7QUFFRCxzQkFBWW1GLFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsT0FGN0I7QUFHRCxrQkFBUThELFFBQVEsQ0FBQ2xGLElBSGhCO0FBSUQsdUJBQWFtRSxRQUFRLENBQUN2SCxNQUFULEdBQWtCeUssS0FBbEIsR0FBMEIsQ0FBMUIsSUFBK0JsRCxRQUFRLENBQUNDLEtBQVQsQ0FBZXZFLE9BQWYsTUFBNEJzRSxRQUFRLENBQUN2SCxNQUFULEdBQWtCO0FBSnpGLFNBWFMsRUFnQlQ7QUFDRCxxQkFBV3NJLFFBQVEsQ0FBQy9FLFNBQVQsSUFBc0IsQ0FBQytFLFFBQVEsQ0FBQy9ELGNBQWhDLElBQWtELENBQUMrRCxRQUFRLENBQUNoRCxtQkFEdEU7QUFFRCxzQkFBWWdELFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsTUFGN0I7QUFHRCxrQkFBUThELFFBQVEsQ0FBQzlFLEdBSGhCO0FBSUQsdUJBQWErRCxRQUFRLENBQUN2SCxNQUFULEdBQWtCeUssS0FBbEIsR0FBMEJuQyxRQUFRLENBQUNoRTtBQUovQyxTQWhCUyxFQXFCVDtBQUNELHFCQUFXZ0UsUUFBUSxDQUFDdkUsZUFEbkI7QUFFRCxzQkFBWXVFLFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsWUFGN0I7QUFHRCxrQkFBUThELFFBQVEsQ0FBQ3RFLFNBSGhCO0FBSUQsdUJBQWF1RCxRQUFRLENBQUN2SCxNQUFULEdBQWtCeUssS0FBbEIsR0FBMEJuQyxRQUFRLENBQUNoRTtBQUovQyxTQXJCUyxDQUFkO0FBNkJBOUUsU0FBQyxDQUFDc0ksSUFBRixDQUFPNEMsT0FBUCxFQUFnQixVQUFVMUMsQ0FBVixFQUFhZ0MsTUFBYixFQUFxQjtBQUNuQyxjQUFJQSxNQUFNLENBQUNXLE9BQVgsRUFBb0I7QUFDbEIsZ0JBQUlDLE1BQU0sR0FBRzNILE9BQU8sQ0FBQ21GLElBQVIsQ0FBYSxNQUFNNEIsTUFBTSxDQUFDckQsUUFBMUIsQ0FBYjs7QUFDQSxnQkFBSWlFLE1BQU0sQ0FBQzVLLE1BQVAsS0FBa0IsQ0FBbEIsSUFBdUJnSyxNQUFNLENBQUNuSixJQUFsQyxFQUF3QztBQUN0QytKLG9CQUFNLEdBQUdwTCxDQUFDLENBQUN3SyxNQUFNLENBQUNuSixJQUFSLENBQUQsQ0FDTmdLLFFBRE0sQ0FDR1AsT0FESCxFQUVOUCxRQUZNLENBRUdDLE1BQU0sQ0FBQ3JELFFBRlYsQ0FBVDtBQUdEOztBQUNELGdCQUFJcUQsTUFBTSxDQUFDYyxTQUFYLEVBQXNCO0FBQ3BCRixvQkFBTSxDQUFDRyxXQUFQLENBQW1CekMsUUFBUSxDQUFDOUQsTUFBVCxHQUFrQixrQkFBckM7O0FBQ0Esa0JBQUk4RCxRQUFRLENBQUN2RCxvQkFBYixFQUFtQztBQUNqQzZGLHNCQUFNLENBQUNJLEdBQVAsQ0FBVyxTQUFYLEVBQXNCLEVBQXRCO0FBQ0Q7QUFDRixhQUxELE1BS087QUFDTEosb0JBQU0sQ0FBQ2IsUUFBUCxDQUFnQnpCLFFBQVEsQ0FBQzlELE1BQVQsR0FBa0Isa0JBQWxDOztBQUNBLGtCQUFJOEQsUUFBUSxDQUFDdkQsb0JBQWIsRUFBbUM7QUFDakM2RixzQkFBTSxDQUFDSSxHQUFQLENBQVcsU0FBWCxFQUFzQixNQUF0QjtBQUNEO0FBQ0Y7O0FBQ0RKLGtCQUFNLENBQ0hiLFFBREgsQ0FDWXpCLFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsU0FEOUIsRUFFRy9ELElBRkgsQ0FFUSxZQUZSLEVBRXNCVyxVQUFVLENBQUNvRixJQUFYLENBQWdCLElBQWhCLENBRnRCLEVBR0cvRixJQUhILENBR1EsU0FIUixFQUdtQjZGLGFBQWEsQ0FBQ2xGLFVBQVUsQ0FBQ29GLElBQVgsQ0FBZ0IsSUFBaEIsSUFBd0IsR0FBeEIsR0FBOEJnQixLQUEvQixFQUFzQ3ZFLE9BQXRDLENBSGhDO0FBSUQsV0F0QkQsTUFzQk87QUFDTEEsbUJBQU8sQ0FBQ21GLElBQVIsQ0FBYSxNQUFNNEIsTUFBTSxDQUFDckQsUUFBMUIsRUFBb0NxRSxHQUFwQyxDQUF3QyxTQUF4QyxFQUFtRCxNQUFuRDtBQUNEO0FBQ0YsU0ExQkQ7QUE0QkQsT0E1RUQsRUEzQ21GLENBdUhoRjtBQUVIO0FBQ0E7O0FBQ0EsVUFBSTFDLFFBQVEsQ0FBQy9FLFNBQWIsRUFBd0I7QUFFdEIsWUFBSWtILEtBQUssR0FBRyxDQUFaOztBQUNBLFlBQUl0RixLQUFLLEtBQUssUUFBVixJQUFzQm1ELFFBQVEsQ0FBQzdDLFFBQW5DLEVBQTZDO0FBQzNDZ0YsZUFBSyxHQUFHLENBQVI7QUFDRDs7QUFFRCxZQUFJUSxTQUFTLEdBQUc3SixVQUFVLENBQUNnSCxJQUFYLENBQWdCLE1BQU1FLFFBQVEsQ0FBQzlELE1BQWYsR0FBd0IsYUFBeEMsRUFBdUR3RyxHQUF2RCxDQUEyRCxTQUEzRCxFQUFzRSxFQUF0RSxFQUEwRUQsV0FBMUUsQ0FBc0Z6QyxRQUFRLENBQUM5RCxNQUFULEdBQWtCLGtCQUF4RyxDQUFoQjtBQUNBLFlBQUkwRyxJQUFJLEdBQUc5SixVQUFVLENBQUNnSCxJQUFYLENBQWdCLE1BQU1FLFFBQVEsQ0FBQzlELE1BQWYsR0FBd0IsTUFBeEMsQ0FBWDs7QUFDQSxZQUFJLENBQUM4RCxRQUFRLENBQUMvRCxjQUFWLElBQTRCMkcsSUFBSSxDQUFDbEwsTUFBTCxHQUFjeUssS0FBMUMsSUFBbURuQyxRQUFRLENBQUNoRCxtQkFBaEUsRUFBcUY7QUFDbkYyRixtQkFBUyxDQUFDRCxHQUFWLENBQWMsU0FBZCxFQUF5QixNQUF6QjtBQUNELFNBRkQsTUFFTyxJQUFJN0YsS0FBSyxLQUFLLFFBQVYsSUFBc0JtRCxRQUFRLENBQUM3QyxRQUFuQyxFQUE2QztBQUNsRHdGLG1CQUFTLENBQUNELEdBQVYsQ0FBYyxTQUFkLEVBQXlCLE1BQXpCO0FBQ0FDLG1CQUFTLENBQUNFLE1BQVYsQ0FBaUIsTUFBakI7QUFDRDs7QUFDRCxZQUFJNUQsUUFBUSxDQUFDdkgsTUFBVCxHQUFrQnlLLEtBQWxCLElBQTJCbkMsUUFBUSxDQUFDaEUsR0FBeEMsRUFBNkM7QUFDM0MyRyxtQkFBUyxDQUFDbEIsUUFBVixDQUFtQnpCLFFBQVEsQ0FBQzlELE1BQVQsR0FBa0Isa0JBQXJDOztBQUNBLGNBQUk4RCxRQUFRLENBQUN2RCxvQkFBYixFQUFtQztBQUNqQzNELHNCQUFVLENBQUNnSCxJQUFYLENBQWdCLE1BQU1FLFFBQVEsQ0FBQzlELE1BQWYsR0FBd0IsU0FBeEIsR0FBb0M4RCxRQUFRLENBQUM5RCxNQUE3QyxHQUFzRCxnQkFBdEQsR0FBeUU4RCxRQUFRLENBQUM5RCxNQUFsRixHQUEyRixZQUEzRyxFQUF5SHdHLEdBQXpILENBQTZILFNBQTdILEVBQXdJLE1BQXhJO0FBQ0Q7QUFDRjtBQUNGO0FBRUYsS0FsSkQsQ0ExVG1DLENBNGNqQztBQUVGO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSUkseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFVaEssVUFBVixFQUFzQjZCLE9BQXRCLEVBQStCcUYsUUFBL0IsRUFBeUM7QUFDdkUsVUFBSUEsUUFBUSxDQUFDekQsUUFBYixFQUF1QjtBQUNyQnJGLFNBQUMsQ0FBQ3NJLElBQUYsQ0FBT1EsUUFBUSxDQUFDekQsUUFBaEIsRUFBMEIsVUFBVTJDLEtBQVYsRUFBaUI2RCxnQkFBakIsRUFBbUM7QUFDM0QsY0FBSSxDQUFDQSxnQkFBZ0IsQ0FBQzFFLFFBQXRCLEVBQWdDO0FBQzlCN0csbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDRDQUE0Q3FCLFVBQVUsQ0FBQ29GLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBNUMsR0FBb0Usd0VBQWhGO0FBQ0EsbUJBQU8sSUFBUDtBQUNEOztBQUNELGNBQUl2RCxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJBLG1CQUFPLENBQUNtRixJQUFSLENBQWFpRCxnQkFBZ0IsQ0FBQzFFLFFBQTlCLEVBQXdDdkYsVUFBeEMsQ0FBbURpSyxnQkFBbkQ7QUFDRCxXQUZELE1BRU87QUFDTGpLLHNCQUFVLENBQUNnSCxJQUFYLENBQWdCaUQsZ0JBQWdCLENBQUMxRSxRQUFqQyxFQUEyQ3ZGLFVBQTNDLENBQXNEaUssZ0JBQXREO0FBQ0Q7QUFDRixTQVZEO0FBV0Q7QUFDRixLQWRELENBamRtQyxDQWllbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQUlqQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFVdkgsU0FBVixFQUFxQnlJLElBQXJCLEVBQTJCbEssVUFBM0IsRUFBdUNrSCxRQUF2QyxFQUFpRGYsUUFBakQsRUFBMkR0RSxPQUEzRCxFQUFvRXVFLEtBQXBFLEVBQTJFK0QsV0FBM0UsRUFBd0Y7QUFDbEcsVUFBSWhFLFFBQVEsQ0FBQ3ZILE1BQVQsR0FBa0JzSSxRQUFRLENBQUNoRSxHQUEzQixLQUFtQ2lILFdBQVcsSUFBSXBFLGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ3JFLGdCQUFULENBQTBCN0MsVUFBMUIsRUFBc0M2QixPQUF0QyxDQUFELENBQTlCLElBQWtGa0UsZUFBZSxDQUFDbUIsUUFBUSxDQUFDN0UsVUFBVCxDQUFvQnJDLFVBQXBCLEVBQWdDNkIsT0FBaEMsQ0FBRCxDQUFwSSxDQUFKLEVBQXFMO0FBQ25MLFlBQUl1SSxTQUFTLEdBQUdwSyxVQUFVLENBQUNYLElBQVgsQ0FBZ0IsV0FBaEIsQ0FBaEI7QUFDQSxZQUFJZ0wsU0FBUyxHQUFHckssVUFBVSxDQUFDWCxJQUFYLENBQWdCLG1CQUFoQixDQUFoQjtBQUVBVyxrQkFBVSxDQUFDWCxJQUFYLENBQWdCLG1CQUFoQixFQUFxQ2dMLFNBQVMsR0FBRyxDQUFqRDs7QUFFQSxZQUFJakUsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQkEsZUFBSyxHQUFHRCxRQUFRLENBQUN2SCxNQUFULEdBQWtCLENBQTFCO0FBQ0Q7O0FBQ0QsWUFBSTBMLE1BQU0sR0FBRyxJQUFJakQsTUFBSixDQUFXckIsU0FBUyxDQUFDa0IsUUFBUSxDQUFDN0QsY0FBVixDQUFwQixFQUErQyxHQUEvQyxDQUFiO0FBQ0EsWUFBSWtILE9BQU8sR0FBR0YsU0FBZDs7QUFFQSxZQUFJbkQsUUFBUSxDQUFDM0MsY0FBYixFQUE2QjtBQUMzQmdHLGlCQUFPLEdBQUd2SyxVQUFVLENBQUNYLElBQVgsQ0FBZ0IscUJBQWhCLENBQVY7O0FBRUEsY0FBSWtMLE9BQU8sS0FBSzdFLFNBQWhCLEVBQTJCO0FBQ3pCNkUsbUJBQU8sR0FBR0Msa0JBQWtCLENBQUN0RCxRQUFELEVBQVdmLFFBQVgsQ0FBNUI7QUFDRDs7QUFFRG5HLG9CQUFVLENBQUNYLElBQVgsQ0FBZ0IscUJBQWhCLEVBQXVDa0wsT0FBTyxHQUFHLENBQWpEO0FBQ0Q7O0FBRUQsWUFBSUUsSUFBSSxHQUFHck0sQ0FBQyxDQUFDZ00sU0FBUyxDQUFDdEYsT0FBVixDQUFrQndGLE1BQWxCLEVBQTBCQyxPQUExQixDQUFELENBQUQsQ0FBc0NsTCxJQUF0QyxDQUEyQyxPQUEzQyxFQUFvRGdMLFNBQXBELENBQVg7QUFDQUssc0JBQWMsQ0FBQ3hELFFBQUQsRUFBV3VELElBQVgsQ0FBZDtBQUVBLFlBQUlqQyxjQUFjLEdBQUdwSyxDQUFDLENBQUM4SSxRQUFRLENBQUMxRCx3QkFBVixDQUF0QjtBQUNBLFlBQUltSCxHQUFHLEdBQUduQyxjQUFjLENBQUN4QixJQUFmLENBQW9CLFFBQVFFLFFBQVEsQ0FBQzlELE1BQWpCLEdBQTBCLE1BQTlDLENBQVY7QUFDQSxZQUFJeEQsRUFBRSxHQUFHeEIsQ0FBQyxDQUFDcU0sSUFBRCxDQUFELENBQVF6RCxJQUFSLENBQWEsTUFBYixFQUFxQjZCLEtBQXJCLEdBQTZCekQsSUFBN0IsQ0FBa0MsSUFBbEMsQ0FBVDs7QUFFQSxZQUFJK0UsV0FBSixFQUFpQjtBQUNmLGNBQUlTLFVBQVUsR0FBR3pFLFFBQVEsQ0FBQ1ksRUFBVCxDQUFZWCxLQUFaLENBQWpCO0FBQ0F5Qiw2QkFBbUIsQ0FBQytDLFVBQUQsQ0FBbkI7QUFDQSxjQUFJQyxPQUFPLEdBQUd6TSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlzSyxNQUFaLENBQW1Ca0MsVUFBVSxDQUFDRSxLQUFYLEVBQW5CLEVBQXVDckwsSUFBdkMsRUFBZDtBQUNBLGNBQUkwSCxRQUFRLEdBQUdELFFBQVEsQ0FBQzNDLGNBQVQsSUFBMkIyQyxRQUFRLENBQUM1Qyx1QkFBcEMsR0FBOERzRyxVQUFVLENBQUN2TCxJQUFYLENBQWdCLE9BQWhCLENBQTlELEdBQXlGK0csS0FBeEc7QUFDQSxjQUFJdUIsTUFBTSxHQUFHVCxRQUFRLENBQUMzQyxjQUFULEdBQTBCd0csYUFBYSxDQUFDN0QsUUFBRCxFQUFXMEQsVUFBWCxDQUF2QyxHQUFnRXpELFFBQTdFO0FBQ0EsY0FBSTZELE9BQU8sR0FBR3RELGVBQWUsQ0FBQzFILFVBQUQsRUFBYWtILFFBQWIsRUFBdUIyRCxPQUF2QixFQUFnQzFELFFBQWhDLEVBQTBDa0QsU0FBMUMsRUFBcUQxQyxNQUFyRCxFQUE2RDRDLE9BQTdELENBQTdCO0FBRUFFLGNBQUksR0FBR3JNLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWXFCLElBQVosQ0FBaUJ1TCxPQUFqQixFQUEwQkMsUUFBMUIsR0FBcUM1TCxJQUFyQyxDQUEwQyxPQUExQyxFQUFtRGdMLFNBQW5ELENBQVA7O0FBQ0EsY0FBSW5ELFFBQVEsQ0FBQzlDLE9BQWIsRUFBc0I7QUFDcEJxRyxnQkFBSSxDQUFDUyxJQUFMO0FBQ0Q7O0FBQ0RQLGFBQUcsQ0FBQ1EsTUFBSixDQUFXVixJQUFYLEVBQWlCekQsSUFBakIsQ0FBc0JFLFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsVUFBeEMsRUFBb0RaLE1BQXBEO0FBQ0QsU0FiRCxNQWFPO0FBQ0wsY0FBSTBFLFFBQVEsQ0FBQzlDLE9BQWIsRUFBc0I7QUFDcEJxRyxnQkFBSSxDQUFDUyxJQUFMO0FBQ0Q7O0FBRURQLGFBQUcsQ0FBQ1EsTUFBSixDQUFXVixJQUFYO0FBQ0Q7O0FBRUR0RSxnQkFBUSxHQUFHbkcsVUFBVSxDQUFDZ0gsSUFBWCxDQUFnQkUsUUFBUSxDQUFDM0QsaUJBQXpCLENBQVg7QUFFQSxZQUFJaUcsTUFBTSxHQUFHaUIsSUFBSSxDQUFDekQsSUFBTCxDQUFVLE1BQU1FLFFBQVEsQ0FBQzlELE1BQWYsR0FBd0IsU0FBeEIsR0FBb0M4RCxRQUFRLENBQUM5RCxNQUE3QyxHQUFzRCxZQUFoRSxDQUFiOztBQUNBLFlBQUlvRyxNQUFNLENBQUM1SyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCNEssZ0JBQU0sQ0FBQ2IsUUFBUCxDQUFnQnpCLFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsU0FBbEMsRUFBNkMvRCxJQUE3QyxDQUFrRCxZQUFsRCxFQUFnRVcsVUFBVSxDQUFDb0YsSUFBWCxDQUFnQixJQUFoQixDQUFoRTtBQUNEOztBQUVELFlBQUksQ0FBQzhCLFFBQVEsQ0FBQy9ELGNBQVYsSUFBNEJpRCxLQUFLLEdBQUcsQ0FBUixLQUFjaUUsU0FBOUMsRUFBeUQ7QUFDdkRsRSxrQkFBUSxHQUFHaUYsTUFBTSxDQUFDcEwsVUFBRCxFQUFha0gsUUFBYixFQUF1QmYsUUFBdkIsRUFBaUNzRSxJQUFqQyxFQUF1Q0osU0FBdkMsRUFBa0RqRSxLQUFLLEdBQUcsQ0FBMUQsQ0FBakI7QUFDRCxTQUZELE1BRU87QUFDTGtDLCtCQUFxQixDQUFDdEksVUFBRCxFQUFha0gsUUFBYixFQUF1QixLQUF2QixDQUFyQjtBQUNEOztBQUVEOEMsaUNBQXlCLENBQUNoSyxVQUFELEVBQWF5SyxJQUFiLEVBQW1CdkQsUUFBbkIsQ0FBekI7O0FBRUEsWUFBS2lELFdBQVcsSUFBSSxDQUFDcEUsZUFBZSxDQUFDbUIsUUFBUSxDQUFDcEUsZUFBVCxDQUF5QjlDLFVBQXpCLEVBQXFDeUssSUFBckMsQ0FBRCxDQUFoQyxJQUFpRixDQUFDMUUsZUFBZSxDQUFDbUIsUUFBUSxDQUFDNUUsU0FBVCxDQUFtQnRDLFVBQW5CLEVBQStCeUssSUFBL0IsQ0FBRCxDQUFyRyxFQUE2STtBQUMzSSxjQUFJckUsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQkQsb0JBQVEsR0FBR2lDLGVBQWUsQ0FBQ3BJLFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJlLFFBQXZCLEVBQWlDZCxLQUFLLEdBQUcsQ0FBekMsQ0FBMUI7QUFDRDs7QUFDRHFFLGNBQUksQ0FBQ2pJLE1BQUw7QUFDRDtBQUNGOztBQUVELFVBQUlpSSxJQUFJLEtBQUsvRSxTQUFULElBQXNCd0IsUUFBUSxDQUFDOUMsT0FBbkMsRUFBNEM7QUFDMUNxRyxZQUFJLENBQUNWLE1BQUwsQ0FBWSxNQUFaLEVBQW9CLFlBQVk7QUFDOUIsY0FBSTdDLFFBQVEsQ0FBQzVDLHVCQUFiLEVBQXNDO0FBQ3BDK0csOEJBQWtCLENBQUNuRSxRQUFELEVBQVdmLFFBQVgsQ0FBbEI7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQU5ELE1BTU87QUFDTCxZQUFJZSxRQUFRLENBQUM1Qyx1QkFBYixFQUFzQztBQUNwQyxpQkFBTytHLGtCQUFrQixDQUFDbkUsUUFBRCxFQUFXZixRQUFYLENBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxRQUFQO0FBQ0QsS0F2RkQsQ0FyZW1DLENBOGpCbkM7QUFDQTs7O0FBQ0EsUUFBSW1GLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVV0TCxVQUFWLEVBQXNCa0gsUUFBdEIsRUFBZ0NmLFFBQWhDLEVBQTBDdEUsT0FBMUMsRUFBbUR1RSxLQUFuRCxFQUEwRDtBQUN2RSxVQUFJRCxRQUFRLENBQUN2SCxNQUFULEdBQWtCc0ksUUFBUSxDQUFDakUsR0FBM0IsSUFBa0M4QyxlQUFlLENBQUNtQixRQUFRLENBQUN6RSxhQUFULENBQXVCekMsVUFBdkIsRUFBbUM2QixPQUFuQyxDQUFELENBQXJELEVBQW9HO0FBQ2xHLFlBQUkwSixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3pCLGNBQUlDLFFBQVEsR0FBRzNKLE9BQWY7O0FBQ0EsY0FBSSxDQUFDcUYsUUFBUSxDQUFDM0MsY0FBZCxFQUE4QjtBQUM1QjRCLG9CQUFRLEdBQUdpQyxlQUFlLENBQUNwSSxVQUFELEVBQWFtRyxRQUFiLEVBQXVCZSxRQUF2QixFQUFpQ2QsS0FBakMsQ0FBMUI7QUFDQW9GLG9CQUFRLEdBQUdyRixRQUFRLENBQUM0QyxJQUFULEVBQVg7QUFDRDs7QUFDRCxjQUFJMEMsTUFBTSxHQUFHRCxRQUFRLENBQUNWLEtBQVQsQ0FBZTtBQUFDWSw2QkFBaUIsRUFBRTtBQUFwQixXQUFmLEVBQTBDQyxJQUExQyxFQUFiO0FBQ0FILGtCQUFRLENBQUNoSixNQUFUOztBQUNBLGNBQUksQ0FBQ3VELGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ3hFLFlBQVQsQ0FBc0IxQyxVQUF0QixFQUFrQ3lMLE1BQWxDLENBQUQsQ0FBcEIsRUFBaUU7QUFDL0QsZ0JBQUlqRCxjQUFjLEdBQUdwSyxDQUFDLENBQUM4SSxRQUFRLENBQUMxRCx3QkFBVixDQUF0QjtBQUNBZ0YsMEJBQWMsQ0FBQ3hCLElBQWYsQ0FBb0IsUUFBUUUsUUFBUSxDQUFDOUQsTUFBakIsR0FBMEIsTUFBOUMsRUFBc0QrSCxNQUF0RCxDQUE2RE0sTUFBN0Q7QUFDQXRGLG9CQUFRLEdBQUduRyxVQUFVLENBQUNnSCxJQUFYLENBQWdCRSxRQUFRLENBQUMzRCxpQkFBekIsQ0FBWDtBQUNBNEMsb0JBQVEsR0FBR2tDLGlCQUFpQixDQUFDckksVUFBRCxFQUFhbUcsUUFBYixFQUF1QmUsUUFBdkIsRUFBaUNkLEtBQUssR0FBRyxDQUF6QyxDQUE1QjtBQUNEOztBQUNELGNBQUljLFFBQVEsQ0FBQzVDLHVCQUFiLEVBQXNDO0FBQ3BDK0csOEJBQWtCLENBQUNuRSxRQUFELEVBQVdmLFFBQVgsQ0FBbEI7QUFDRDtBQUNGLFNBakJEOztBQWtCQSxZQUFJZSxRQUFRLENBQUM3QyxRQUFiLEVBQXVCO0FBQ3JCeEMsaUJBQU8sQ0FBQytKLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0IsWUFBWTtBQUNsQ0wsb0JBQVE7QUFDVCxXQUZEO0FBR0QsU0FKRCxNQUlPO0FBQ0xBLGtCQUFRO0FBQ1Q7QUFDRjs7QUFFRCxhQUFPcEYsUUFBUDtBQUNELEtBOUJELENBaGtCbUMsQ0FnbUJuQztBQUNBOzs7QUFDQSxRQUFJMEYsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBVTdMLFVBQVYsRUFBc0JrSCxRQUF0QixFQUFnQ2YsUUFBaEMsRUFBMEN0RSxPQUExQyxFQUFtRHVFLEtBQW5ELEVBQTBEO0FBQ25FLFVBQUlBLEtBQUssS0FBSyxDQUFWLElBQWVMLGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ3RGLFNBQVQsQ0FBbUI1QixVQUFuQixFQUErQjZCLE9BQS9CLENBQUQsQ0FBbEMsRUFBNkU7QUFDM0VzRSxnQkFBUSxHQUFHNEIsWUFBWSxDQUFDL0gsVUFBRCxFQUFhbUcsUUFBYixFQUF1QkMsS0FBdkIsRUFBOEJBLEtBQUssR0FBRyxDQUF0QyxDQUF2Qjs7QUFDQSxZQUFJLENBQUNMLGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ3BGLFFBQVQsQ0FBa0I5QixVQUFsQixFQUE4QjZCLE9BQTlCLENBQUQsQ0FBcEIsRUFBOEQ7QUFDNURzRSxrQkFBUSxHQUFHNEIsWUFBWSxDQUFDL0gsVUFBRCxFQUFhbUcsUUFBYixFQUF1QkMsS0FBSyxHQUFHLENBQS9CLEVBQWtDQSxLQUFsQyxDQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSWMsUUFBUSxDQUFDNUMsdUJBQWIsRUFBc0M7QUFDcEMsZUFBTytHLGtCQUFrQixDQUFDbkUsUUFBRCxFQUFXZixRQUFYLENBQXpCO0FBQ0Q7O0FBRUQsYUFBT0EsUUFBUDtBQUNELEtBYkQsQ0FsbUJtQyxDQWluQm5DO0FBQ0E7OztBQUNBLFFBQUkyRixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFVOUwsVUFBVixFQUFzQmtILFFBQXRCLEVBQWdDZixRQUFoQyxFQUEwQ3RFLE9BQTFDLEVBQW1EdUUsS0FBbkQsRUFBMEQ7QUFDckUsVUFBSUEsS0FBSyxLQUFNRCxRQUFRLENBQUN2SCxNQUFULEdBQWtCLENBQTdCLElBQW1DbUgsZUFBZSxDQUFDbUIsUUFBUSxDQUFDakYsV0FBVCxDQUFxQmpDLFVBQXJCLEVBQWlDNkIsT0FBakMsQ0FBRCxDQUF0RCxFQUFtRztBQUNqR3NFLGdCQUFRLEdBQUc0QixZQUFZLENBQUMvSCxVQUFELEVBQWFtRyxRQUFiLEVBQXVCQyxLQUF2QixFQUE4QkEsS0FBSyxHQUFHLENBQXRDLENBQXZCOztBQUNBLFlBQUksQ0FBQ0wsZUFBZSxDQUFDbUIsUUFBUSxDQUFDaEYsVUFBVCxDQUFvQmxDLFVBQXBCLEVBQWdDbUcsUUFBaEMsQ0FBRCxDQUFwQixFQUFpRTtBQUMvREEsa0JBQVEsR0FBRzRCLFlBQVksQ0FBQy9ILFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJDLEtBQUssR0FBRyxDQUEvQixFQUFrQ0EsS0FBbEMsQ0FBdkI7QUFDRDtBQUNGOztBQUVELFVBQUljLFFBQVEsQ0FBQzVDLHVCQUFiLEVBQXNDO0FBQ3BDLGVBQU8rRyxrQkFBa0IsQ0FBQ25FLFFBQUQsRUFBV2YsUUFBWCxDQUF6QjtBQUNEOztBQUVELGFBQU9BLFFBQVA7QUFDRCxLQWJELENBbm5CbUMsQ0Frb0JuQzs7O0FBQ0EsUUFBSWlGLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVVwTCxVQUFWLEVBQXNCa0gsUUFBdEIsRUFBZ0NmLFFBQWhDLEVBQTBDdEUsT0FBMUMsRUFBbURzRixRQUFuRCxFQUE2REMsUUFBN0QsRUFBdUU7QUFDbEYsVUFBSSxNQUFNMUMsSUFBSSxDQUFDcUgsR0FBTCxDQUFTM0UsUUFBUSxHQUFHRCxRQUFwQixDQUFWLEVBQXlDO0FBQ3ZDaEIsZ0JBQVEsR0FBRzRCLFlBQVksQ0FBQy9ILFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJnQixRQUF2QixFQUFpQ0MsUUFBakMsQ0FBdkI7O0FBQ0EsWUFBSSxFQUFFQSxRQUFRLEdBQUdELFFBQVgsR0FBc0IsQ0FBdEIsR0FBMEJwQixlQUFlLENBQUNtQixRQUFRLENBQUNwRixRQUFULENBQWtCOUIsVUFBbEIsRUFBOEI2QixPQUE5QixDQUFELENBQXpDLEdBQW9Ga0UsZUFBZSxDQUFDbUIsUUFBUSxDQUFDaEYsVUFBVCxDQUFvQmxDLFVBQXBCLEVBQWdDNkIsT0FBaEMsQ0FBRCxDQUFyRyxDQUFKLEVBQXNKO0FBQ3BKc0Usa0JBQVEsR0FBRzRCLFlBQVksQ0FBQy9ILFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJpQixRQUF2QixFQUFpQ0QsUUFBakMsQ0FBdkI7QUFDRDtBQUNGLE9BTEQsTUFLTztBQUNMLFlBQUlBLFFBQVEsR0FBR0MsUUFBZixFQUF5QjtBQUN2QmpCLGtCQUFRLEdBQUcrQixjQUFjLENBQUNsSSxVQUFELEVBQWFtRyxRQUFiLEVBQXVCZSxRQUF2QixFQUFpQ0MsUUFBakMsRUFBMkNDLFFBQTNDLENBQXpCOztBQUNBLGNBQUksRUFBRUEsUUFBUSxHQUFHRCxRQUFYLEdBQXNCLENBQXRCLEdBQTBCcEIsZUFBZSxDQUFDbUIsUUFBUSxDQUFDcEYsUUFBVCxDQUFrQjlCLFVBQWxCLEVBQThCNkIsT0FBOUIsQ0FBRCxDQUF6QyxHQUFvRmtFLGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ2hGLFVBQVQsQ0FBb0JsQyxVQUFwQixFQUFnQzZCLE9BQWhDLENBQUQsQ0FBckcsQ0FBSixFQUFzSjtBQUNwSnNFLG9CQUFRLEdBQUdnQyxnQkFBZ0IsQ0FBQ25JLFVBQUQsRUFBYW1HLFFBQWIsRUFBdUJlLFFBQXZCLEVBQWlDRSxRQUFqQyxFQUEyQ0QsUUFBM0MsQ0FBM0I7QUFDRDtBQUNGLFNBTEQsTUFLTztBQUNMaEIsa0JBQVEsR0FBR2dDLGdCQUFnQixDQUFDbkksVUFBRCxFQUFhbUcsUUFBYixFQUF1QmUsUUFBdkIsRUFBaUNDLFFBQWpDLEVBQTJDQyxRQUEzQyxDQUEzQjs7QUFDQSxjQUFJLEVBQUVBLFFBQVEsR0FBR0QsUUFBWCxHQUFzQixDQUF0QixHQUEwQnBCLGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ3BGLFFBQVQsQ0FBa0I5QixVQUFsQixFQUE4QjZCLE9BQTlCLENBQUQsQ0FBekMsR0FBb0ZrRSxlQUFlLENBQUNtQixRQUFRLENBQUNoRixVQUFULENBQW9CbEMsVUFBcEIsRUFBZ0M2QixPQUFoQyxDQUFELENBQXJHLENBQUosRUFBc0o7QUFDcEpzRSxvQkFBUSxHQUFHK0IsY0FBYyxDQUFDbEksVUFBRCxFQUFhbUcsUUFBYixFQUF1QmUsUUFBdkIsRUFBaUNFLFFBQWpDLEVBQTJDRCxRQUEzQyxDQUF6QjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRG1CLDJCQUFxQixDQUFDdEksVUFBRCxFQUFha0gsUUFBYixFQUF1QixLQUF2QixDQUFyQjs7QUFFQSxVQUFJQSxRQUFRLENBQUM1Qyx1QkFBYixFQUFzQztBQUNwQyxlQUFPK0csa0JBQWtCLENBQUNuRSxRQUFELEVBQVdmLFFBQVgsQ0FBekI7QUFDRDs7QUFFRCxhQUFPQSxRQUFQO0FBQ0QsS0ExQkQ7O0FBNEJBLFFBQUlrRixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQVVuRSxRQUFWLEVBQW9CZixRQUFwQixFQUE4QjtBQUNyRC9ILE9BQUMsQ0FBQytILFFBQUQsQ0FBRCxDQUFZTyxJQUFaLENBQWlCLFlBQVk7QUFDM0IsWUFBSTdFLE9BQU8sR0FBR3pELENBQUMsQ0FBQyxJQUFELENBQWY7QUFDQXVILHFCQUFhLENBQUM5RCxPQUFPLENBQUNtRixJQUFSLENBQWFFLFFBQVEsQ0FBQzVDLHVCQUF0QixDQUFELEVBQWlENkIsUUFBUSxDQUFDQyxLQUFULENBQWV2RSxPQUFmLENBQWpELENBQWI7QUFDRCxPQUhEO0FBS0EsYUFBT3NFLFFBQVA7QUFDRCxLQVBEOztBQVNBLFFBQUk0RSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVU3RCxRQUFWLEVBQW9CckYsT0FBcEIsRUFBNkI7QUFDL0MsVUFBSWlGLElBQUksR0FBR2pGLE9BQU8sQ0FBQ21GLElBQVIsQ0FBYSxtQkFBbUJFLFFBQVEsQ0FBQzVELFdBQTVCLEdBQTBDLEtBQXZELEVBQThEOEIsSUFBOUQsQ0FBbUUsTUFBbkUsQ0FBWDtBQUVBLGFBQU8wQixJQUFJLENBQUNrRixLQUFMLENBQVc5RSxRQUFRLENBQUM1RCxXQUFULENBQXFCMUUsTUFBckIsR0FBOEIsQ0FBekMsRUFBNENtRyxLQUE1QyxDQUFrRCxHQUFsRCxFQUF1RCxDQUF2RCxFQUEwRCxDQUExRCxDQUFQO0FBQ0QsS0FKRDs7QUFNQSxRQUFJeUYsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFVdEQsUUFBVixFQUFvQmYsUUFBcEIsRUFBOEI7QUFDckQsVUFBSW9FLE9BQU8sR0FBRyxDQUFkO0FBRUFwRSxjQUFRLENBQUNPLElBQVQsQ0FBYyxZQUFZO0FBQ3hCLFlBQUlZLEdBQUcsR0FBR3lELGFBQWEsQ0FBQzdELFFBQUQsRUFBVzlJLENBQUMsQ0FBQyxJQUFELENBQVosQ0FBdkI7O0FBRUEsWUFBSSxlQUFlNk4sSUFBZixDQUFvQjNFLEdBQXBCLEtBQTRCQSxHQUFHLElBQUlpRCxPQUF2QyxFQUFnRDtBQUM5Q0EsaUJBQU8sR0FBRzJCLE1BQU0sQ0FBQzVFLEdBQUQsQ0FBTixHQUFjLENBQXhCO0FBQ0Q7QUFDRixPQU5EO0FBUUEsYUFBT2lELE9BQVA7QUFDRCxLQVpEOztBQWNBLFFBQUlHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBVXhELFFBQVYsRUFBb0J6RixTQUFwQixFQUErQjtBQUNsRCxVQUFJMEssUUFBUSxHQUFHLENBQ2IsU0FEYSxFQUViLGtCQUZhLEVBR2IsVUFIYSxFQUliLE1BSmEsRUFLYixPQUxhLEVBTWIsWUFOYSxFQU9iLFNBUGEsRUFRYixhQVJhLEVBU2IsTUFUYSxFQVViLEtBVmEsQ0FBZjtBQWFBL04sT0FBQyxDQUFDc0ksSUFBRixDQUFPeUYsUUFBUCxFQUFpQixZQUFZO0FBQzNCLFlBQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0EzSyxpQkFBUyxDQUFDaUYsSUFBVixDQUFlLFlBQVk7QUFDekIsY0FBSXdELElBQUksR0FBRzlMLENBQUMsQ0FBQyxJQUFELENBQVo7O0FBQ0EsY0FBSThMLElBQUksQ0FBQ21DLFFBQUwsQ0FBY25GLFFBQVEsQ0FBQ29GLFdBQVQsR0FBdUJGLE1BQXJDLENBQUosRUFBa0Q7QUFDaERsQyxnQkFBSSxDQUFDdkIsUUFBTCxDQUFjekIsUUFBUSxDQUFDOUQsTUFBVCxHQUFrQmdKLE1BQWhDO0FBQ0Q7O0FBQ0RsQyxjQUFJLENBQUNsRCxJQUFMLENBQVUsR0FBVixFQUFlTixJQUFmLENBQW9CLFlBQVk7QUFDOUIsZ0JBQUk2RixJQUFJLEdBQUduTyxDQUFDLENBQUMsSUFBRCxDQUFaOztBQUNBLGdCQUFJbU8sSUFBSSxDQUFDRixRQUFMLENBQWNuRixRQUFRLENBQUNvRixXQUFULEdBQXVCRixNQUFyQyxDQUFKLEVBQWtEO0FBQ2hERyxrQkFBSSxDQUFDNUQsUUFBTCxDQUFjekIsUUFBUSxDQUFDOUQsTUFBVCxHQUFrQmdKLE1BQWhDO0FBQ0Q7QUFDRixXQUxEO0FBTUQsU0FYRDtBQVlELE9BZEQ7QUFlRCxLQTdCRCxDQTVyQm1DLENBMnRCbkM7OztBQUNBLFFBQUlJLEtBQUssR0FBR3BPLENBQUMsQ0FBQyxJQUFELENBQWIsQ0E1dEJtQyxDQTh0Qm5DOztBQUNBLFFBQUlvTyxLQUFLLENBQUM1TixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxpRUFBWjtBQUNBLGFBQU8sS0FBUDtBQUNEOztBQUVENk4sU0FBSyxDQUFDOUYsSUFBTixDQUFXLFlBQVk7QUFFckIsVUFBSVEsUUFBUSxHQUFHOUksQ0FBQyxDQUFDcU8sTUFBRixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CakwsUUFBbkIsRUFBNkJELE9BQTdCLENBQWYsQ0FGcUIsQ0FJckI7QUFDQTs7QUFDQSxVQUFJbkQsQ0FBQyxDQUFDOEksUUFBUSxDQUFDekYsU0FBVixDQUFELENBQXNCN0MsTUFBdEIsS0FBaUMsQ0FBckMsRUFBd0M7QUFDdENGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDRGQUFaO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0FUb0IsQ0FXckI7QUFDQTs7O0FBQ0EsVUFBSStOLElBQUksR0FBR3RPLENBQUMsQ0FBQyxJQUFELENBQVo7O0FBQ0EsVUFBSXNPLElBQUksQ0FBQ3JOLElBQUwsQ0FBVSxZQUFWLE1BQTRCcUcsU0FBaEMsRUFBMkM7QUFDekMsWUFBSTFGLFVBQVUsR0FBRzVCLENBQUMsQ0FBQyxNQUFNc08sSUFBSSxDQUFDck4sSUFBTCxDQUFVLFlBQVYsQ0FBUCxDQUFsQjs7QUFDQSxZQUFJVyxVQUFVLENBQUNwQixNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCRixpQkFBTyxDQUFDQyxHQUFSLENBQVksMkRBQVo7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTHFCLGtCQUFVLEdBQUcwTSxJQUFiO0FBQ0Q7O0FBQ0QxTSxnQkFBVSxHQUFHNUIsQ0FBQyxDQUFDNEIsVUFBRCxDQUFkLENBdkJxQixDQXlCckI7O0FBQ0FrSCxjQUFRLENBQUMxRCx3QkFBVCxHQUFvQzBELFFBQVEsQ0FBQzFELHdCQUFULENBQWtDc0IsT0FBbEMsQ0FBMEMsTUFBMUMsRUFBa0QsTUFBTUksYUFBYSxDQUFDLEVBQUQsRUFBS2xGLFVBQUwsQ0FBckUsQ0FBcEM7O0FBQ0EsVUFBSSxDQUFDa0gsUUFBUSxDQUFDMUQsd0JBQWQsRUFBd0M7QUFDdEMwRCxnQkFBUSxDQUFDMUQsd0JBQVQsR0FBb0MsTUFBTTBCLGFBQWEsQ0FBQyxFQUFELEVBQUtsRixVQUFMLENBQXZEOztBQUNBLFlBQUk1QixDQUFDLENBQUM4SSxRQUFRLENBQUMxRCx3QkFBVixDQUFELENBQXFDNUUsTUFBckMsS0FBZ0QsQ0FBcEQsRUFBdUQ7QUFDckRGLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrRkFBWjtBQUNBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BakNvQixDQW1DckI7QUFDQTs7O0FBQ0F1SSxjQUFRLENBQUNvRixXQUFULEdBQXVCcEYsUUFBUSxDQUFDOUQsTUFBaEM7QUFDQThELGNBQVEsQ0FBQzlELE1BQVQsR0FBa0JwRCxVQUFVLENBQUNvRixJQUFYLENBQWdCLElBQWhCLElBQXdCLEdBQXhCLEdBQThCOEIsUUFBUSxDQUFDb0YsV0FBekQ7QUFDQTVCLG9CQUFjLENBQUN4RCxRQUFELEVBQVdsSCxVQUFYLENBQWQsQ0F2Q3FCLENBeUNyQjs7QUFDQSxVQUFJLENBQUNrSCxRQUFRLENBQUMvRSxTQUFkLEVBQXlCO0FBQ3ZCK0UsZ0JBQVEsQ0FBQ3ZFLGVBQVQsR0FBMkIsS0FBM0I7QUFDQXVFLGdCQUFRLENBQUMvRCxjQUFULEdBQTBCLEtBQTFCO0FBQ0Q7O0FBQ0QsVUFBSStELFFBQVEsQ0FBQ3hELG9CQUFULEdBQWdDd0QsUUFBUSxDQUFDaEUsR0FBN0MsRUFBa0Q7QUFDaERnRSxnQkFBUSxDQUFDeEQsb0JBQVQsR0FBZ0N3RCxRQUFRLENBQUNoRSxHQUF6QztBQUNEOztBQUNELFVBQUlnRSxRQUFRLENBQUNqRSxHQUFULEtBQWlCLENBQUNpRSxRQUFRLENBQUN4RCxvQkFBVixJQUFrQ3dELFFBQVEsQ0FBQ3hELG9CQUFULEdBQWdDd0QsUUFBUSxDQUFDakUsR0FBNUYsQ0FBSixFQUFzRztBQUNwR2lFLGdCQUFRLENBQUN4RCxvQkFBVCxHQUFnQ3dELFFBQVEsQ0FBQ2pFLEdBQXpDO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDaUUsUUFBUSxDQUFDL0Msb0JBQWQsRUFBb0M7QUFDbEN6RixlQUFPLENBQUNDLEdBQVIsQ0FBWSw2REFBWjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BeERvQixDQTBEckI7OztBQUNBdUksY0FBUSxDQUFDbkUsV0FBVCxDQUFxQi9DLFVBQXJCLEVBM0RxQixDQTZEckI7O0FBQ0EsVUFBSUEsVUFBVSxDQUFDWCxJQUFYLENBQWdCLFdBQWhCLE1BQWlDLElBQXJDLEVBQTJDO0FBQ3pDWCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw0SEFBWjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BakVvQixDQW1FckI7QUFDQTs7O0FBQ0EsVUFBSXFCLFVBQVUsQ0FBQ1gsSUFBWCxDQUFnQixnQkFBaEIsTUFBc0NxRyxTQUExQyxFQUFxRDtBQUNuRHdCLGdCQUFRLENBQUM3RCxjQUFULEdBQTBCckQsVUFBVSxDQUFDWCxJQUFYLENBQWdCLGdCQUFoQixDQUExQjtBQUNEOztBQUNELFVBQUlXLFVBQVUsQ0FBQ1gsSUFBWCxDQUFnQixXQUFoQixNQUFpQ3FHLFNBQXJDLEVBQWdEO0FBQzlDd0IsZ0JBQVEsQ0FBQy9FLFNBQVQsR0FBcUJuQyxVQUFVLENBQUNYLElBQVgsQ0FBZ0IsV0FBaEIsQ0FBckI7QUFDQTZILGdCQUFRLENBQUN2RSxlQUFULEdBQTJCM0MsVUFBVSxDQUFDWCxJQUFYLENBQWdCLFdBQWhCLElBQStCNkgsUUFBUSxDQUFDdkUsZUFBeEMsR0FBMEQsS0FBckY7QUFDRDs7QUFDRCxVQUFJM0MsVUFBVSxDQUFDWCxJQUFYLENBQWdCLGNBQWhCLE1BQW9DcUcsU0FBeEMsRUFBbUQ7QUFDakR3QixnQkFBUSxDQUFDM0UsWUFBVCxHQUF3QnZDLFVBQVUsQ0FBQ1gsSUFBWCxDQUFnQixjQUFoQixDQUF4QjtBQUNEOztBQUNELFVBQUlXLFVBQVUsQ0FBQ1gsSUFBWCxDQUFnQixhQUFoQixNQUFtQ3FHLFNBQXZDLEVBQWtEO0FBQ2hEd0IsZ0JBQVEsQ0FBQzVELFdBQVQsR0FBdUJ0RCxVQUFVLENBQUNYLElBQVgsQ0FBZ0IsYUFBaEIsQ0FBdkI7QUFDRCxPQWpGb0IsQ0FtRnJCO0FBQ0E7OztBQUNBLFVBQUksQ0FBQzZILFFBQVEsQ0FBQzVELFdBQWQsRUFBMkI7QUFDekI1RSxlQUFPLENBQUNDLEdBQVIsQ0FBWSw0R0FBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSwwRUFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSx3R0FBWjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BMUZvQixDQTRGckI7QUFDQTs7O0FBQ0EsVUFBSXVJLFFBQVEsQ0FBQzNDLGNBQWIsRUFBNkI7QUFDM0IyQyxnQkFBUSxDQUFDeEYsUUFBVCxHQUFvQixLQUFwQjtBQUNBd0YsZ0JBQVEsQ0FBQ25GLFVBQVQsR0FBc0IsS0FBdEI7QUFDQW1GLGdCQUFRLENBQUN0RCxTQUFULEdBQXFCLEtBQXJCO0FBQ0FzRCxnQkFBUSxDQUFDL0QsY0FBVCxHQUEwQixJQUExQjtBQUNELE9BbkdvQixDQXFHckI7QUFDQTtBQUNBOzs7QUFDQSxVQUFLLE9BQU83QixNQUFNLENBQUMwQyxFQUFkLEtBQXFCLFdBQXJCLElBQW9DLE9BQU8xQyxNQUFNLENBQUMwQyxFQUFQLENBQVUySSxRQUFqQixLQUE4QixXQUFuRSxJQUNDM00sVUFBVSxDQUFDWCxJQUFYLENBQWdCLFVBQWhCLENBREwsRUFDa0M7QUFDaENXLGtCQUFVLENBQUMyTSxRQUFYLENBQW9CLFNBQXBCO0FBQ0Q7O0FBQ0QsVUFBSXpGLFFBQVEsQ0FBQ3RELFNBQVQsSUFBc0JzRCxRQUFRLENBQUN4RixRQUEvQixJQUEyQ3dGLFFBQVEsQ0FBQ25GLFVBQXhELEVBQW9FO0FBQ2xFLFlBQUk2SyxXQUFKO0FBQ0EsWUFBSUMsV0FBSjs7QUFDQSxZQUFJLE9BQU92TCxNQUFNLENBQUMwQyxFQUFkLEtBQXFCLFdBQXJCLElBQW9DLE9BQU8xQyxNQUFNLENBQUMwQyxFQUFQLENBQVUySSxRQUFqQixLQUE4QixXQUF0RSxFQUFtRjtBQUNqRnpGLGtCQUFRLENBQUN0RCxTQUFULEdBQXFCLEtBQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0w1RCxvQkFBVSxDQUFDMk0sUUFBWCxDQUFvQnZPLENBQUMsQ0FBQ3FPLE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQjtBQUNyQ0ssaUJBQUssRUFBRSxlQUFVL0ksS0FBVixFQUFpQkMsRUFBakIsRUFBcUI7QUFDMUIsa0JBQUltQyxRQUFRLEdBQUduRyxVQUFVLENBQUNnSCxJQUFYLENBQWdCRSxRQUFRLENBQUMzRCxpQkFBekIsQ0FBZjtBQUNBLGtCQUFJMUIsT0FBTyxHQUFHbUMsRUFBRSxDQUFDK0ksSUFBakI7QUFDQSxrQkFBSTdDLElBQUksR0FBRzlMLENBQUMsQ0FBQyxJQUFELENBQVo7O0FBQ0Esa0JBQUksQ0FBQzJILGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ3BELGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxFQUFoQyxFQUFvQ21DLFFBQXBDLEVBQThDdEUsT0FBOUMsQ0FBRCxDQUFwQixFQUE4RTtBQUM1RXFJLG9CQUFJLENBQUN5QyxRQUFMLENBQWMsUUFBZDtBQUNBO0FBQ0Q7O0FBQ0QzSSxnQkFBRSxDQUFDZ0osV0FBSCxDQUFlQyxNQUFmLENBQXNCakosRUFBRSxDQUFDK0ksSUFBSCxDQUFRRSxNQUFSLEVBQXRCO0FBQ0FqSixnQkFBRSxDQUFDZ0osV0FBSCxDQUFlRSxLQUFmLENBQXFCbEosRUFBRSxDQUFDK0ksSUFBSCxDQUFRRyxLQUFSLEVBQXJCO0FBQ0FOLHlCQUFXLEdBQUd6RyxRQUFRLENBQUNDLEtBQVQsQ0FBZXZFLE9BQWYsQ0FBZDtBQUNELGFBWm9DO0FBYXJDc0wsa0JBQU0sRUFBRSxnQkFBVXBKLEtBQVYsRUFBaUJDLEVBQWpCLEVBQXFCO0FBQzNCLGtCQUFJbUMsUUFBUSxHQUFHbkcsVUFBVSxDQUFDZ0gsSUFBWCxDQUFnQkUsUUFBUSxDQUFDM0QsaUJBQXpCLENBQWY7QUFDQSxrQkFBSTFCLE9BQU8sR0FBR21DLEVBQUUsQ0FBQytJLElBQWpCO0FBQ0Esa0JBQUk3QyxJQUFJLEdBQUc5TCxDQUFDLENBQUMsSUFBRCxDQUFaO0FBQ0E4TCxrQkFBSSxDQUFDeUMsUUFBTCxDQUFjLFFBQWQ7O0FBQ0Esa0JBQUksVUFBVXpGLFFBQVEsQ0FBQ2pELGdCQUFULENBQTBCRixLQUExQixFQUFpQ0MsRUFBakMsRUFBcUNtQyxRQUFyQyxFQUErQ3RFLE9BQS9DLENBQVYsSUFBcUUsRUFBRWdMLFdBQVcsR0FBR0QsV0FBZCxHQUE0QixDQUE1QixHQUFnQzdHLGVBQWUsQ0FBQ21CLFFBQVEsQ0FBQ3RGLFNBQVQsQ0FBbUI1QixVQUFuQixFQUErQjZCLE9BQS9CLENBQUQsQ0FBL0MsR0FBMkZrRSxlQUFlLENBQUNtQixRQUFRLENBQUNqRixXQUFULENBQXFCakMsVUFBckIsRUFBaUM2QixPQUFqQyxDQUFELENBQTVHLENBQXpFLEVBQW1PO0FBQ2pPO0FBQ0Q7O0FBQ0RnTCx5QkFBVyxHQUFHMUcsUUFBUSxDQUFDQyxLQUFULENBQWV2RSxPQUFmLENBQWQ7QUFDQXNFLHNCQUFRLEdBQUduRyxVQUFVLENBQUNnSCxJQUFYLENBQWdCRSxRQUFRLENBQUMzRCxpQkFBekIsQ0FBWDtBQUNBNkgsb0JBQU0sQ0FBQ3BMLFVBQUQsRUFBYWtILFFBQWIsRUFBdUJmLFFBQXZCLEVBQWlDdEUsT0FBakMsRUFBMEMrSyxXQUExQyxFQUF1REMsV0FBdkQsQ0FBTjtBQUNEO0FBeEJvQyxXQUFuQixFQXlCakIzRixRQUFRLENBQUNyRCxpQkF6QlEsQ0FBcEI7QUEwQkQ7QUFDRjs7QUFFRDdELGdCQUFVLENBQUNYLElBQVgsQ0FBZ0IscUJBQWhCLEVBQXVDNkgsUUFBdkMsRUEvSXFCLENBaUpyQjtBQUNBOztBQUNBLFVBQUl6RixTQUFTLEdBQUdyRCxDQUFDLENBQUM4SSxRQUFRLENBQUN6RixTQUFWLENBQWpCO0FBQ0FBLGVBQVMsQ0FDTjJMLEdBREgsQ0FDTyxPQURQLEVBQ2dCLE1BQU1sRyxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLFNBRHhDLEVBRUc5RSxFQUZILENBRU0sT0FGTixFQUVlLE1BQU00SSxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLFNBRnZDLEVBRWtELFVBQVU3RSxDQUFWLEVBQWE7QUFFM0QsWUFBSTJMLElBQUksR0FBRzlMLENBQUMsQ0FBQyxJQUFELENBQVo7QUFFQSxZQUFJNEIsVUFBVSxHQUFHNUIsQ0FBQyxDQUFDLE1BQU04TCxJQUFJLENBQUM3SyxJQUFMLENBQVUsWUFBVixDQUFQLENBQWxCO0FBQ0EsWUFBSTZILFFBQVEsR0FBR2xILFVBQVUsQ0FBQ1gsSUFBWCxDQUFnQixxQkFBaEIsQ0FBZjs7QUFFQSxZQUFJcUcsU0FBUyxLQUFLd0IsUUFBbEIsRUFBNEI7QUFDMUIsY0FBSWxILFVBQVUsR0FBRzVCLENBQUMsQ0FBQyxNQUFNOEwsSUFBSSxDQUFDN0ssSUFBTCxDQUFVLFlBQVYsQ0FBUCxDQUFELENBQWlDMkgsSUFBakMsQ0FBc0MsTUFBTWtELElBQUksQ0FBQzdLLElBQUwsQ0FBVSxZQUFWLENBQU4sR0FBZ0MsYUFBdEUsQ0FBakI7QUFDQSxjQUFJNkgsUUFBUSxHQUFHbEgsVUFBVSxDQUFDWCxJQUFYLENBQWdCLHFCQUFoQixDQUFmOztBQUNBLGNBQUlxRyxTQUFTLEtBQUt3QixRQUFsQixFQUE0QjtBQUMxQixrQkFBTSw2QkFBNkJnRCxJQUFJLENBQUM3SyxJQUFMLENBQVUsWUFBVixDQUFuQztBQUNEO0FBQ0Y7O0FBRUQsWUFBSThHLFFBQVEsR0FBR25HLFVBQVUsQ0FBQ2dILElBQVgsQ0FBZ0JFLFFBQVEsQ0FBQzNELGlCQUF6QixDQUFmO0FBQ0EsWUFBSTFCLE9BQU8sR0FBR3FJLElBQUksQ0FBQzdLLElBQUwsQ0FBVSxTQUFWLElBQXVCakIsQ0FBQyxDQUFDLE1BQU04TCxJQUFJLENBQUM3SyxJQUFMLENBQVUsU0FBVixDQUFQLENBQXhCLEdBQXVEcUcsU0FBckU7QUFDQSxZQUFJVSxLQUFLLEdBQUd2RSxPQUFPLElBQUlBLE9BQU8sQ0FBQ2pELE1BQW5CLEdBQTRCdUgsUUFBUSxDQUFDQyxLQUFULENBQWV2RSxPQUFmLENBQTVCLEdBQXNELENBQUMsQ0FBbkU7QUFDQSxZQUFJa0MsS0FBSyxHQUFHLElBQVo7QUFFQSxZQUFJb0csV0FBVyxHQUFHRCxJQUFJLENBQUM3SixFQUFMLENBQVEsTUFBTTZHLFFBQVEsQ0FBQzlELE1BQWYsR0FBd0IsWUFBaEMsQ0FBbEI7O0FBQ0EsWUFBSSxDQUFDOEcsSUFBSSxDQUFDN0osRUFBTCxDQUFRLE1BQU02RyxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLE1BQWhDLEtBQTJDOEcsSUFBSSxDQUFDN0osRUFBTCxDQUFRLE1BQU02RyxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLGFBQWhDLENBQTNDLElBQTZGK0csV0FBOUYsS0FBOEdqRCxRQUFRLENBQUMvRSxTQUEzSCxFQUFzSTtBQUNwSTRCLGVBQUssR0FBRyxLQUFSO0FBQ0FvQyxrQkFBUSxHQUFHNkMsS0FBSyxDQUFDdkgsU0FBRCxFQUFZeUksSUFBWixFQUFrQmxLLFVBQWxCLEVBQThCa0gsUUFBOUIsRUFBd0NmLFFBQXhDLEVBQWtEdEUsT0FBbEQsRUFBMkR1RSxLQUEzRCxFQUFrRStELFdBQWxFLENBQWhCO0FBQ0Q7O0FBRUQsWUFBSUQsSUFBSSxDQUFDN0osRUFBTCxDQUFRLE1BQU02RyxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLFNBQWhDLEtBQThDOEQsUUFBUSxDQUFDM0UsWUFBM0QsRUFBeUU7QUFDdkV3QixlQUFLLEdBQUcsUUFBUjtBQUNBb0Msa0JBQVEsR0FBR21GLFFBQVEsQ0FBQ3RMLFVBQUQsRUFBYWtILFFBQWIsRUFBdUJmLFFBQXZCLEVBQWlDdEUsT0FBakMsRUFBMEN1RSxLQUExQyxDQUFuQjtBQUNEOztBQUVELFlBQUk4RCxJQUFJLENBQUM3SixFQUFMLENBQVEsTUFBTTZHLFFBQVEsQ0FBQzlELE1BQWYsR0FBd0IsS0FBaEMsS0FBMEM4RCxRQUFRLENBQUN4RixRQUF2RCxFQUFpRTtBQUMvRHFDLGVBQUssR0FBRyxJQUFSO0FBQ0FvQyxrQkFBUSxHQUFHMEYsSUFBSSxDQUFDN0wsVUFBRCxFQUFha0gsUUFBYixFQUF1QmYsUUFBdkIsRUFBaUN0RSxPQUFqQyxFQUEwQ3VFLEtBQTFDLENBQWY7QUFDRDs7QUFFRCxZQUFJOEQsSUFBSSxDQUFDN0osRUFBTCxDQUFRLE1BQU02RyxRQUFRLENBQUM5RCxNQUFmLEdBQXdCLE9BQWhDLEtBQTRDOEQsUUFBUSxDQUFDbkYsVUFBekQsRUFBcUU7QUFDbkVnQyxlQUFLLEdBQUcsTUFBUjtBQUNBb0Msa0JBQVEsR0FBRzJGLE1BQU0sQ0FBQzlMLFVBQUQsRUFBYWtILFFBQWIsRUFBdUJmLFFBQXZCLEVBQWlDdEUsT0FBakMsRUFBMEN1RSxLQUExQyxDQUFqQjtBQUNEOztBQUVEa0MsNkJBQXFCLENBQUN0SSxVQUFELEVBQWFrSCxRQUFiLEVBQXVCLEtBQXZCLEVBQThCbkQsS0FBOUIsQ0FBckI7QUFDQXhGLFNBQUMsQ0FBQzhPLGNBQUY7QUFDRCxPQTdDSCxFQXBKcUIsQ0FpTWhCOztBQUVML0UsMkJBQXFCLENBQUN0SSxVQUFELEVBQWFrSCxRQUFiLEVBQXVCLElBQXZCLENBQXJCO0FBQ0E4QywrQkFBeUIsQ0FBQ2hLLFVBQUQsRUFBYSxJQUFiLEVBQW1Ca0gsUUFBbkIsQ0FBekIsQ0FwTXFCLENBc01yQjtBQUNBOztBQUNBLFVBQUlBLFFBQVEsQ0FBQzVDLHVCQUFiLEVBQXNDO0FBQ3BDLFlBQUlnSixLQUFLLEdBQUcsRUFBWjtBQUNBLFlBQUluSCxRQUFRLEdBQUduRyxVQUFVLENBQUNnSCxJQUFYLENBQWdCRSxRQUFRLENBQUMzRCxpQkFBekIsQ0FBZjtBQUNBNEMsZ0JBQVEsQ0FBQ08sSUFBVCxDQUFjLFVBQVVOLEtBQVYsRUFBaUI7QUFDN0IsY0FBSThELElBQUksR0FBRzlMLENBQUMsQ0FBQyxJQUFELENBQVo7QUFDQWtQLGVBQUssQ0FBQ3ZPLElBQU4sQ0FBVztBQUNUd08sb0JBQVEsRUFBRUMsVUFBVSxDQUFDbEksYUFBYSxDQUFDNEUsSUFBSSxDQUFDbEQsSUFBTCxDQUFVRSxRQUFRLENBQUM1Qyx1QkFBbkIsQ0FBRCxDQUFkLENBRFg7QUFFVHpDLG1CQUFPLEVBQUVxSTtBQUZBLFdBQVg7QUFJRCxTQU5EOztBQVFBLFlBQUl1RCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFVbE4sQ0FBVixFQUFhbU4sQ0FBYixFQUFnQjtBQUMzQixpQkFBUW5OLENBQUMsQ0FBQ2dOLFFBQUYsR0FBYUcsQ0FBQyxDQUFDSCxRQUFmLEdBQTBCLENBQUMsQ0FBM0IsR0FBZ0NoTixDQUFDLENBQUNnTixRQUFGLEdBQWFHLENBQUMsQ0FBQ0gsUUFBZixHQUEwQixDQUExQixHQUE4QixDQUF0RTtBQUNELFNBRkQ7O0FBR0FELGFBQUssQ0FBQ3RJLElBQU4sQ0FBV3lJLE1BQVg7QUFFQXJQLFNBQUMsQ0FBQ3NJLElBQUYsQ0FBTzRHLEtBQVAsRUFBYyxVQUFVbEcsUUFBVixFQUFvQnVHLE1BQXBCLEVBQTRCO0FBQ3hDLGNBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0F4UCxXQUFDLENBQUMrSCxRQUFELENBQUQsQ0FBWU8sSUFBWixDQUFpQixVQUFVTixLQUFWLEVBQWlCO0FBQ2hDd0gsZUFBRyxDQUFDN08sSUFBSixDQUFTWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSCxJQUFSLENBQWEsSUFBYixDQUFUO0FBQ0QsV0FGRDtBQUlBLGNBQUl2RCxPQUFPLEdBQUc4TCxNQUFNLENBQUM5TCxPQUFyQjtBQUNBLGNBQUlzRixRQUFRLEdBQUcvSSxDQUFDLENBQUN5UCxPQUFGLENBQVVoTSxPQUFPLENBQUN1RCxJQUFSLENBQWEsSUFBYixDQUFWLEVBQThCd0ksR0FBOUIsQ0FBZjs7QUFFQSxjQUFJeEcsUUFBUSxLQUFLRCxRQUFqQixFQUEyQjtBQUN6QmhCLG9CQUFRLEdBQUdpRixNQUFNLENBQUNwTCxVQUFELEVBQWFrSCxRQUFiLEVBQXVCZixRQUF2QixFQUFpQ3RFLE9BQWpDLEVBQTBDc0YsUUFBMUMsRUFBb0RDLFFBQXBELENBQWpCO0FBQ0F6Qix5QkFBYSxDQUFDOUQsT0FBTyxDQUFDbUYsSUFBUixDQUFhRSxRQUFRLENBQUM1Qyx1QkFBdEIsQ0FBRCxFQUFpRDZCLFFBQVEsQ0FBQ0MsS0FBVCxDQUFldkUsT0FBZixDQUFqRCxDQUFiO0FBQ0Q7QUFDRixTQWJEO0FBY0QsT0F0T29CLENBc09uQjs7O0FBRUZxRixjQUFRLENBQUNsRSxVQUFULENBQW9CaEQsVUFBcEI7QUFFRCxLQTFPRCxFQXB1Qm1DLENBODhCaEM7O0FBRUgsV0FBTyxJQUFQO0FBQ0QsR0FqOUJELENBRlksQ0FtOUJWOztBQUVILENBcjlCRCxFQXM5QkNzQixNQXQ5QkQsRSIsImZpbGUiOiJhcGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYXBjLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMDMvMjAyMSAxODo0OVxuaW1wb3J0ICcuLi8uLi92ZW5kb3IvanF1ZXJ5LmNvbGxlY3Rpb24nXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbidcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxubGV0IHNlbWVzdHJlU2FlID0gZmFsc2VcbmxldCBzZW1lc3RyZSA9IG51bGxcbmxldCBjb21wZXRlbmNlU2FlID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICdpbnB1dDpyYWRpb1tuYW1lPVwiYXBjX3NhZVtzZW1lc3RyZV1cIl0nLCBmdW5jdGlvbiAoZSkge1xuICBzZW1lc3RyZSA9ICQodGhpcykudmFsKClcbiAgc2VtZXN0cmVTYWUgPSB0cnVlXG4gIHVwZGF0ZUFwcHJlbnRpc2FnZXNDcml0aXF1ZXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICdpbnB1dDpjaGVja2JveFtuYW1lPVwiYXBjX3NhZVtjb21wZXRlbmNlc11bXVwiXScsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpXG4gIGNvbXBldGVuY2VTYWUgPSAkKCdpbnB1dDpjaGVja2JveFtuYW1lPVwiYXBjX3NhZVtjb21wZXRlbmNlc11bXVwiXTpjaGVja2VkJykubGVuZ3RoID4gMFxuICB1cGRhdGVBcHByZW50aXNhZ2VzQ3JpdGlxdWVzKClcbn0pXG5cbi8vbWlzZSDDoCBqb3VyIMOgIGwnYWZmaWNoYWdlXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHNlbWVzdHJlU2FlID0gdHJ1ZS8vJCgnaW5wdXQ6cmFkaW9bbmFtZT1cImFwY19zYWVbc2VtZXN0cmVdXCJdOmNoZWNrZWQnKS5sZW5ndGgoKSA9PT0gMVxuICBzZW1lc3RyZSA9ICQoJ2lucHV0OnJhZGlvW25hbWU9XCJhcGNfc2FlW3NlbWVzdHJlXVwiXScpLnZhbCgpXG4gIGNvbXBldGVuY2VTYWUgPSAkKCdpbnB1dDpjaGVja2JveFtuYW1lPVwiYXBjX3NhZVtjb21wZXRlbmNlc11bXVwiXTpjaGVja2VkJykubGVuZ3RoID4gMFxuICB1cGRhdGVBcHByZW50aXNhZ2VzQ3JpdGlxdWVzKClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUFwcHJlbnRpc2FnZXNDcml0aXF1ZXMgKCkge1xuICBpZiAoY29tcGV0ZW5jZVNhZSA9PT0gdHJ1ZSAmJiBzZW1lc3RyZVNhZSA9PT0gdHJ1ZSkge1xuICAgIGxldCBjb21wcyA9IFtdXG5cbiAgICAkLmVhY2goJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1cImFwY19zYWVbY29tcGV0ZW5jZXNdW11cIl06Y2hlY2tlZCcpLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb21wcy5wdXNoKCQodGhpcykudmFsKCkpXG4gICAgfSlcblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2FwY19zYWVfYWpheF9hYycpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgICBjb21wZXRlbmNlczogY29tcHMsXG4gICAgICAgIHNhZTogc2FlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgbGV0IGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YSAhPT0gZmFsc2UpIHtcblxuICAgICAgICAgIGZvciAodmFyIGNvbXAgaW4gZGF0YSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPHA+JyArIGNvbXAgKyAnPC9wPjxkaXYgY2xhc3M9XCJyb3dcIj4nXG4gICAgICAgICAgICBmb3IgKGxldCBhYyBpbiBkYXRhW2NvbXBdKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPicgK1xuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhY18nICsgZGF0YVtjb21wXVthY10uaWQgKyAnXCIgbmFtZT1cImFjW11cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cIicgKyBkYXRhW2NvbXBdW2FjXS5pZCArICdcIiAnK2RhdGFbY29tcF1bYWNdLmNoZWNrZWQrJz5cXG4nICtcbiAgICAgICAgICAgICAgICAnPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImFjXycgKyBkYXRhW2NvbXBdW2FjXS5pZCArICdcIj4nICsgZGF0YVtjb21wXVthY10ubGliZWxsZSArICc8L2xhYmVsPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8L2Rpdj4nXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPkluZGlxdWVyIHVuIHNlbWVzdHJlIGV0IGF1IG1vaW5zIHVuZSBjb21ww6l0ZW5jZTwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICAkKCcjYWNTYWUnKS5odG1sKGh0bWwpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBsZXQgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPkluZGlxdWVyIHVuIHNlbWVzdHJlIGV0IGF1IG1vaW5zIHVuZSBjb21ww6l0ZW5jZTwvZGl2PidcbiAgICAkKCcjYWNTYWUnKS5odG1sKGh0bWwpXG4gIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBsZXQgbml2ZWF1Q29tcGV0ZW5jZSA9ICQoJy5zZWxlY3Rvci1uaXZlYXVDb21wZXRlbmNlJylcbiAgaWYgKG5pdmVhdUNvbXBldGVuY2UubGVuZ3RoID4gMCkge1xuICAgIG5pdmVhdUNvbXBldGVuY2UuY29sbGVjdGlvbigpXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hcGNfY29tcGV0ZW5jZV9hcGNOaXZlYXV4LWNvbGxlY3Rpb24tYWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGFwcHJlbnRpc3NhZ2VDcml0aXF1ZSA9ICQoJy5zZWxlY3Rvci1hcHByZW50aXNzYWdlQ3JpdGlxdWUnKVxuICAgICAgaWYgKGFwcHJlbnRpc3NhZ2VDcml0aXF1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFwcHJlbnRpc3NhZ2VDcml0aXF1ZS5jb2xsZWN0aW9uKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbGV0IG5pdmVhdUNvbXBvc2FudGVFc3NlbnRpZWxsZXMgPSAkKCcuc2VsZWN0b3Itbml2ZWF1Q29tcG9zYW50ZUVzc2VudGllbGxlcycpXG4gIGlmIChuaXZlYXVDb21wb3NhbnRlRXNzZW50aWVsbGVzLmxlbmd0aCA+IDApIHtcbiAgICBuaXZlYXVDb21wb3NhbnRlRXNzZW50aWVsbGVzLmNvbGxlY3Rpb24oKVxuICB9XG5cbiAgbGV0IGFwY1Jlc3NvdXJjZUFwcHJlbnRpc3NhZ2VDcml0aXF1ZSA9ICQoJy5zZWxlY3Rvci1hcGNSZXNzb3VyY2VBcHByZW50aXNzYWdlQ3JpdGlxdWUnKVxuICBpZiAoYXBjUmVzc291cmNlQXBwcmVudGlzc2FnZUNyaXRpcXVlLmxlbmd0aCA+IDApIHtcbiAgICBhcGNSZXNzb3VyY2VBcHByZW50aXNzYWdlQ3JpdGlxdWUuY29sbGVjdGlvbigpXG4gIH1cblxuICBsZXQgYXBwcmVudGlzc2FnZUNyaXRpcXVlID0gJCgnLnNlbGVjdG9yLWFwcHJlbnRpc3NhZ2VDcml0aXF1ZScpXG4gIGlmIChhcHByZW50aXNzYWdlQ3JpdGlxdWUubGVuZ3RoID4gMCkge1xuICAgIGFwcHJlbnRpc3NhZ2VDcml0aXF1ZS5jb2xsZWN0aW9uKClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hlY2tOaXZlYXUnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgZXRhdCA9IDBcbiAgY29uc29sZS5sb2coJ3RvdG8nKVxuICBpZiAoKCQodGhpcykuaXMoJzpjaGVja2VkJykpKSB7XG4gICAgZXRhdCA9IDFcbiAgfVxuICBsZXQgcGFyY291cnMgPSAkKHRoaXMpLmRhdGEoJ3BhcmNvdXJzJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2FwY19wYXJjb3Vyc19uaXZlYXVfYWpheCcsIHtcbiAgICAgICdwYXJjb3Vycyc6IHBhcmNvdXJzLFxuICAgICAgJ2V0YXQnOiBldGF0LFxuICAgICAgJ25pdmVhdSc6ICQodGhpcykudmFsKClcbiAgICB9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfVxuICB9KVxuXG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTcvMDgvMjAyMCAxNDoyMFxuXG4hZnVuY3Rpb24oYSl7YS5mbi5kYXRlcGlja2VyLmRhdGVzLmZyPXtkYXlzOltcImRpbWFuY2hlXCIsXCJsdW5kaVwiLFwibWFyZGlcIixcIm1lcmNyZWRpXCIsXCJqZXVkaVwiLFwidmVuZHJlZGlcIixcInNhbWVkaVwiXSxkYXlzU2hvcnQ6W1wiZGltLlwiLFwibHVuLlwiLFwibWFyLlwiLFwibWVyLlwiLFwiamV1LlwiLFwidmVuLlwiLFwic2FtLlwiXSxkYXlzTWluOltcImRcIixcImxcIixcIm1hXCIsXCJtZVwiLFwialwiLFwidlwiLFwic1wiXSxtb250aHM6W1wiamFudmllclwiLFwiZsOpdnJpZXJcIixcIm1hcnNcIixcImF2cmlsXCIsXCJtYWlcIixcImp1aW5cIixcImp1aWxsZXRcIixcImFvw7t0XCIsXCJzZXB0ZW1icmVcIixcIm9jdG9icmVcIixcIm5vdmVtYnJlXCIsXCJkw6ljZW1icmVcIl0sbW9udGhzU2hvcnQ6W1wiamFudi5cIixcImbDqXZyLlwiLFwibWFyc1wiLFwiYXZyaWxcIixcIm1haVwiLFwianVpblwiLFwianVpbC5cIixcImFvw7t0XCIsXCJzZXB0LlwiLFwib2N0LlwiLFwibm92LlwiLFwiZMOpYy5cIl0sdG9kYXk6XCJBdWpvdXJkJ2h1aVwiLG1vbnRoc1RpdGxlOlwiTW9pc1wiLGNsZWFyOlwiRWZmYWNlclwiLHdlZWtTdGFydDoxLGZvcm1hdDpcImRkL21tL3l5eXlcIn19KGpRdWVyeSk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2pxdWVyeS5jb2xsZWN0aW9uLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMDMvMjAyMSAxODo0OVxuXG47XG4oZnVuY3Rpb24gKCQpIHtcblxuICAkLmZuLmNvbGxlY3Rpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBhbGxvd191cDogdHJ1ZSxcbiAgICAgIHVwOiAnPGEgaHJlZj1cIiNcIj4mI3gyNUIyOzwvYT4nLFxuICAgICAgYmVmb3JlX3VwOiBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGFmdGVyX3VwOiBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGFsbG93X2Rvd246IHRydWUsXG4gICAgICBkb3duOiAnPGEgaHJlZj1cIiNcIj4mI3gyNUJDOzwvYT4nLFxuICAgICAgYmVmb3JlX2Rvd246IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgYWZ0ZXJfZG93bjogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhbGxvd19hZGQ6IHRydWUsXG4gICAgICBhZGQ6ICc8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPjwvYT4nLFxuICAgICAgYmVmb3JlX2FkZDogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhZnRlcl9hZGQ6IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgYWxsb3dfcmVtb3ZlOiB0cnVlLFxuICAgICAgcmVtb3ZlOiAnPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1taW51cy1jaXJjbGVcIj48L2k+PC9hPicsXG4gICAgICBiZWZvcmVfcmVtb3ZlOiBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGFmdGVyX3JlbW92ZTogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhbGxvd19kdXBsaWNhdGU6IGZhbHNlLFxuICAgICAgZHVwbGljYXRlOiAnPGEgaHJlZj1cIiNcIj5bICMgXTwvYT4nLFxuICAgICAgYmVmb3JlX2R1cGxpY2F0ZTogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhZnRlcl9kdXBsaWNhdGU6IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgYmVmb3JlX2luaXQ6IGZ1bmN0aW9uIChjb2xsZWN0aW9uKSB7XG4gICAgICB9LFxuICAgICAgYWZ0ZXJfaW5pdDogZnVuY3Rpb24gKGNvbGxlY3Rpb24pIHtcbiAgICAgIH0sXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMCxcbiAgICAgIGFkZF9hdF90aGVfZW5kOiBmYWxzZSxcbiAgICAgIHByZWZpeDogJ2NvbGxlY3Rpb24nLFxuICAgICAgcHJvdG90eXBlX25hbWU6ICdfX25hbWVfXycsXG4gICAgICBuYW1lX3ByZWZpeDogbnVsbCxcbiAgICAgIGVsZW1lbnRzX3NlbGVjdG9yOiAnPiBkaXYsID4gZmllbGRzZXQnLFxuICAgICAgZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yOiAnJWlkJScsXG4gICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgIGluaXRfd2l0aF9uX2VsZW1lbnRzOiAwLFxuICAgICAgaGlkZV91c2VsZXNzX2J1dHRvbnM6IHRydWUsXG4gICAgICBkcmFnX2Ryb3A6IHRydWUsXG4gICAgICBkcmFnX2Ryb3Bfb3B0aW9uczoge1xuICAgICAgICAncGxhY2Vob2xkZXInOiAndWktc3RhdGUtaGlnaGxpZ2h0J1xuICAgICAgfSxcbiAgICAgIGRyYWdfZHJvcF9zdGFydDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRyYWdfZHJvcF91cGRhdGU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBjdXN0b21fYWRkX2xvY2F0aW9uOiBmYWxzZSxcbiAgICAgIGFjdGlvbl9jb250YWluZXJfdGFnOiAnZGl2JyxcbiAgICAgIGZhZGVfaW46IHRydWUsXG4gICAgICBmYWRlX291dDogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yOiBudWxsLFxuICAgICAgcHJlc2VydmVfbmFtZXM6IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gdXNlZCB0byBnZW5lcmF0ZSByYW5kb20gaWQgYXR0cmlidXRlcyB3aGVuIHJlcXVpcmVkIGFuZCBtaXNzaW5nXG4gICAgdmFyIHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByYW5kID0gJycgKyBNYXRoLnJhbmRvbSgpICogMTAwMCAqIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICByZXR1cm4gcmFuZC5yZXBsYWNlKCcuJywgJycpLnNwbGl0KCcnKS5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKClcbiAgICAgIH0pLmpvaW4oJycpXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGFuIGVsZW1lbnQncyBpZCwgYWZ0ZXIgZ2VuZXJhdGluZyBvbmUgd2hlbiBtaXNzaW5nXG4gICAgdmFyIGdldE9yQ3JlYXRlSWQgPSBmdW5jdGlvbiAocHJlZml4LCBvYmopIHtcbiAgICAgIGlmICghb2JqLmF0dHIoJ2lkJykpIHtcbiAgICAgICAgdmFyIGdlbmVyYXRlZF9pZFxuICAgICAgICBkbyB7XG4gICAgICAgICAgZ2VuZXJhdGVkX2lkID0gcHJlZml4ICsgJ18nICsgcmFuZG9tTnVtYmVyKClcbiAgICAgICAgfSB3aGlsZSAoJCgnIycgKyBnZW5lcmF0ZWRfaWQpLmxlbmd0aCA+IDApXG4gICAgICAgIG9iai5hdHRyKCdpZCcsIGdlbmVyYXRlZF9pZClcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmouYXR0cignaWQnKVxuICAgIH1cblxuICAgIC8vIHJldHVybiBhIGZpZWxkIHZhbHVlIHdoYXRldmVyIHRoZSBmaWVsZCB0eXBlXG4gICAgdmFyIGdldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBqcUVsZW0gPSAkKHNlbGVjdG9yKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKGpxRWxlbS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0gZWxzZSBpZiAoanFFbGVtLmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkge1xuICAgICAgICByZXR1cm4gKGpxRWxlbS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgPyB0cnVlIDogZmFsc2UpXG4gICAgICB9IGVsc2UgaWYgKGpxRWxlbS5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykgJiYganFFbGVtLmF0dHIoJ25hbWUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAkKCdpbnB1dFtuYW1lPVwiJyArIGpxRWxlbS5hdHRyKCduYW1lJykgKyAnXCJdOmNoZWNrZWQnKS52YWwoKVxuICAgICAgfSBlbHNlIGlmIChqcUVsZW0ucHJvcCgndmFsdWUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBqcUVsZW0udmFsKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBqcUVsZW0uaHRtbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0IGEgZmllbGQgdmFsdWUgaW4gYWNjb3JkYW5jZSB0byB0aGUgZmllbGQgdHlwZVxuICAgIHZhciBwdXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCB2YWx1ZSwgcGh5c2ljYWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBqcUVsZW0gPSAkKHNlbGVjdG9yKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChqcUVsZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmIChqcUVsZW0uaXMoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGpxRWxlbS5hdHRyKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqcUVsZW0ucmVtb3ZlQXR0cignY2hlY2tlZCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoanFFbGVtLnByb3AoJ3ZhbHVlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGh5c2ljYWwpIHtcbiAgICAgICAgICBqcUVsZW0uYXR0cigndmFsdWUnLCB2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqcUVsZW0udmFsKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqcUVsZW0uaHRtbCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhIGNhbGxiYWNrIHNldCBpbiBhbiBldmVudCB3aWxsIGJlIGNvbnNpZGVyZWQgZmFpbGVkIGlmIGl0XG4gICAgLy8gcmV0dXJucyBmYWxzZSwgbnVsbCwgb3IgMC5cbiAgICB2YXIgdHJ1ZU9yVW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkID09PSB2YWx1ZSB8fCB2YWx1ZVxuICAgIH1cblxuICAgIC8vIHVzZWQgdG8gY2hhbmdlIGVsZW1lbnQgaW5kZXhlcyBpbiBhcmJpdGFyeSBpZCBhdHRyaWJ1dGVzXG4gICAgdmFyIHByZWdRdW90ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiAoc3RyaW5nICsgJycpLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZywgJ1xcXFwkJicpXG4gICAgfVxuXG4gICAgLy8gaWYgd2UgbmVlZCB0byBjaGFuZ2UgQ29sbGVjdGlvblR5cGVfZmllbGRfNDJfdmFsdWUgdG8gQ29sbGVjdGlvblR5cGVfZmllbGRfODRfdmFsdWUsIHRoaXMgbWV0aG9kXG4gICAgLy8gd2lsbCBjaGFuZ2UgaXQgaW4gaWQ9XCJDb2xsZWN0aW9uVHlwZV9maWVsZF80Ml92YWx1ZVwiLCBidXQgYWxzbyBkYXRhLWlkPVwiQ29sbGVjdGlvblR5cGVfZmllbGRfNDJfdmFsdWVcIlxuICAgIC8vIG9yIGFueXdoZXJlIGVsc2UganVzdCBpbiBjYXNlIGl0IGNvdWxkIGJlIHVzZWQgb3RoZXJ3aXNlLlxuICAgIHZhciByZXBsYWNlQXR0ckRhdGEgPSBmdW5jdGlvbiAoZWxlbWVudHMsIGluZGV4LCB0b1JlcGxhY2UsIHJlcGxhY2VXaXRoKSB7XG5cbiAgICAgIHZhciByZXBsYWNlQXR0ckRhdGFOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIGpxTm9kZSA9ICQobm9kZSlcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiAnYXR0cmlidXRlcycgaW4gbm9kZSkge1xuICAgICAgICAgICQuZWFjaChub2RlLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpLCBhdHRyaWIpIHtcbiAgICAgICAgICAgIGlmICgkLnR5cGUoYXR0cmliLnZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAganFOb2RlLmF0dHIoYXR0cmliLm5hbWUucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VXaXRoKSwgYXR0cmliLnZhbHVlLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoanFOb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAkLmVhY2goanFOb2RlLmRhdGEoKSwgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoJC50eXBlKHZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAganFOb2RlLmRhdGEobmFtZS5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpLCB2YWx1ZS5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50cy5lcShpbmRleClcbiAgICAgIHJlcGxhY2VBdHRyRGF0YU5vZGUoZWxlbWVudFswXSlcbiAgICAgIGVsZW1lbnQuZmluZCgnKicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXBsYWNlQXR0ckRhdGFOb2RlKHRoaXMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlcGxhY2UgZWxlbWVudCBuYW1lcyBhbmQgaW5kZXhlcyBpbiB0aGUgY29sbGVjdGlvbiwgaW4gU3ltZm9ueSwgbmFtZXMgYXJlIGFsd2F5cyBpbiBmb3JtYXRcbiAgICAvLyBDb2xsZWN0aW9uVHlwZVtmaWVsZF1bNDJdW3ZhbHVlXSBhbmQgaWRzIGFyZSBpbiBmb3JtYXQgQ29sbGVjdGlvblR5cGVfZmllbGRfNDJfdmFsdWU7XG4gICAgLy8gc28gd2UgbmVlZCB0byBjaGFuZ2UgYm90aC5cbiAgICB2YXIgY2hhbmdlRWxlbWVudEluZGV4ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgaW5kZXgsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgdmFyIHRvUmVwbGFjZSA9IG5ldyBSZWdFeHAocHJlZ1F1b3RlKHNldHRpbmdzLm5hbWVfcHJlZml4ICsgJ1snICsgb2xkSW5kZXggKyAnXScpLCAnZycpXG4gICAgICB2YXIgcmVwbGFjZVdpdGggPSBzZXR0aW5ncy5uYW1lX3ByZWZpeCArICdbJyArIG5ld0luZGV4ICsgJ10nXG5cbiAgICAgIGlmIChzZXR0aW5ncy5jaGlsZHJlbikge1xuICAgICAgICAkLmVhY2goc2V0dGluZ3MuY2hpbGRyZW4sIGZ1bmN0aW9uIChrZXksIGNoaWxkKSB7XG4gICAgICAgICAgdmFyIGNoaWxkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uZmluZChjaGlsZC5zZWxlY3RvcikuZXEoaW5kZXgpXG4gICAgICAgICAgdmFyIGNoaWxkU2V0dGluZ3MgPSBjaGlsZENvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1zZXR0aW5ncycpXG4gICAgICAgICAgaWYgKGNoaWxkU2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGNoaWxkU2V0dGluZ3MubmFtZV9wcmVmaXggPSBjaGlsZFNldHRpbmdzLm5hbWVfcHJlZml4LnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICAgICAgICAgIGNoaWxkQ29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJywgY2hpbGRTZXR0aW5ncylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJlcGxhY2VBdHRyRGF0YShlbGVtZW50cywgaW5kZXgsIHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpXG5cbiAgICAgIHRvUmVwbGFjZSA9IG5ldyBSZWdFeHAocHJlZ1F1b3RlKGNvbGxlY3Rpb24uYXR0cignaWQnKSArICdfJyArIG9sZEluZGV4KSwgJ2cnKVxuICAgICAgcmVwbGFjZVdpdGggPSBjb2xsZWN0aW9uLmF0dHIoJ2lkJykgKyAnXycgKyBuZXdJbmRleFxuXG4gICAgICBpZiAoc2V0dGluZ3MuY2hpbGRyZW4pIHtcbiAgICAgICAgJC5lYWNoKHNldHRpbmdzLmNoaWxkcmVuLCBmdW5jdGlvbiAoa2V5LCBjaGlsZCkge1xuICAgICAgICAgIHZhciBjaGlsZENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmZpbmQoY2hpbGQuc2VsZWN0b3IpLmVxKGluZGV4KVxuICAgICAgICAgIHZhciBjaGlsZFNldHRpbmdzID0gY2hpbGRDb2xsZWN0aW9uLmRhdGEoJ2NvbGxlY3Rpb24tc2V0dGluZ3MnKVxuICAgICAgICAgIGlmIChjaGlsZFNldHRpbmdzKSB7XG4gICAgICAgICAgICBjaGlsZFNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciA9IGNoaWxkU2V0dGluZ3MuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICAgICAgICAgIGNoaWxkU2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IgPSBjaGlsZFNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICAgICAgICAgIGNoaWxkU2V0dGluZ3MucHJlZml4ID0gY2hpbGRTZXR0aW5ncy5wcmVmaXgucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VXaXRoKVxuICAgICAgICAgICAgY2hpbGRDb2xsZWN0aW9uLmRhdGEoJ2NvbGxlY3Rpb24tc2V0dGluZ3MnLCBjaGlsZFNldHRpbmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVwbGFjZUF0dHJEYXRhKGVsZW1lbnRzLCBpbmRleCwgdG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICB9XG5cbiAgICAvLyBzYW1lIGFzIGFib3ZlLCBidXQgd2lsbCByZXBsYWNlIGVsZW1lbnQgbmFtZXMgYW5kIGluZGV4ZXMgaW4gYW4gaHRtbCBzdHJpbmcgaW5zdGVhZFxuICAgIC8vIG9mIGluIGEgZG9tIGVsZW1lbnQuXG4gICAgdmFyIGNoYW5nZUh0bWxJbmRleCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBzZXR0aW5ncywgaHRtbCwgb2xkSW5kZXgsIG5ld0luZGV4LCBvbGRLZXksIG5ld0tleSkge1xuICAgICAgdmFyIHRvUmVwbGFjZSA9IG5ldyBSZWdFeHAocHJlZ1F1b3RlKHNldHRpbmdzLm5hbWVfcHJlZml4ICsgJ1snICsgb2xkS2V5ICsgJ10nKSwgJ2cnKVxuICAgICAgdmFyIHJlcGxhY2VXaXRoID0gc2V0dGluZ3MubmFtZV9wcmVmaXggKyAnWycgKyBuZXdLZXkgKyAnXSdcbiAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcblxuICAgICAgdG9SZXBsYWNlID0gbmV3IFJlZ0V4cChwcmVnUXVvdGUoY29sbGVjdGlvbi5hdHRyKCdpZCcpICsgJ18nICsgb2xkSW5kZXgpLCAnZycpXG4gICAgICByZXBsYWNlV2l0aCA9IGNvbGxlY3Rpb24uYXR0cignaWQnKSArICdfJyArIG5ld0luZGV4XG4gICAgICBodG1sID0gaHRtbC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpXG5cbiAgICAgIHJldHVybiBodG1sXG4gICAgfVxuXG4gICAgLy8gc29tZXRpbWVzLCBzZXR0aW5nIGEgdmFsdWUgd2lsbCBvbmx5IGJlIG1hZGUgaW4gbWVtb3J5IGFuZCBub3RcbiAgICAvLyBwaHlzaWNhbGx5IGluIHRoZSBkb207IGFuZCB3ZSBuZWVkIHRoZSBmdWxsIGRvbSB3aGVuIHdlIHdhbnRcbiAgICAvLyB0byBkdXBsaWNhdGUgYSBmaWVsZC5cbiAgICB2YXIgcHV0RmllbGRWYWx1ZXNJbkRvbSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpbnB1dE9iaikge1xuICAgICAgICBwdXRGaWVsZFZhbHVlKGlucHV0T2JqLCBnZXRGaWVsZFZhbHVlKGlucHV0T2JqKSwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdGhpcyBtZXRob2QgZG9lcyB0aGUgd2hvbGUgbWFnaWM6IGluIGEgY29sbGVjdGlvbiwgaWYgd2Ugd2FudCB0b1xuICAgIC8vIG1vdmUgZWxlbWVudHMgYW5kIGtlZXAgZWxlbWVudCBwb3NpdGlvbnMgaW4gdGhlIGJhY2tlbmQsIHdlIHNob3VsZFxuICAgIC8vIGVpdGhlciBtb3ZlIGVsZW1lbnQgbmFtZXMgb3IgZWxlbWVudCBjb250ZW50cywgYnV0IG5vdCBib3RoISB0aHVzLFxuICAgIC8vIGlmIHlvdSBqdXN0IG1vdmUgZWxlbWVudHMgaW4gdGhlIGRvbSwgeW91IGtlZXAgZmllbGQgbmFtZXMgYW5kIGRhdGFcbiAgICAvLyBhdHRhY2hlZCBhbmQgbm90aGluZyB3aWxsIGNoYW5nZSBpbiB0aGUgYmFja2VuZC5cbiAgICB2YXIgc3dhcEVsZW1lbnRzID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblxuICAgICAgdmFyIHNldHRpbmdzID0gY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJylcblxuICAgICAgaWYgKCFzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3RvciAmJiAhc2V0dGluZ3MucHJlc2VydmVfbmFtZXMpIHtcbiAgICAgICAgY2hhbmdlRWxlbWVudEluZGV4KGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgb2xkSW5kZXgsIG9sZEluZGV4LCAnX19zd2FwX18nKVxuICAgICAgICBjaGFuZ2VFbGVtZW50SW5kZXgoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBuZXdJbmRleCwgbmV3SW5kZXgsIG9sZEluZGV4KVxuICAgICAgICBjaGFuZ2VFbGVtZW50SW5kZXgoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBvbGRJbmRleCwgJ19fc3dhcF9fJywgbmV3SW5kZXgpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzLmVxKG9sZEluZGV4KS5pbnNlcnRCZWZvcmUoZWxlbWVudHMuZXEobmV3SW5kZXgpKVxuICAgICAgaWYgKG5ld0luZGV4ID4gb2xkSW5kZXgpIHtcbiAgICAgICAgZWxlbWVudHMuZXEobmV3SW5kZXgpLmluc2VydEJlZm9yZShlbGVtZW50cy5lcShvbGRJbmRleCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5lcShuZXdJbmRleCkuaW5zZXJ0QWZ0ZXIoZWxlbWVudHMuZXEob2xkSW5kZXgpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgIH1cblxuICAgIC8vIG1vdmluZyBhbiBlbGVtZW50IGRvd24gb2YgMyByb3dzIG1lYW5zIGluY3JlYXNpbmcgaXRzIGluZGV4IG9mIDMsIGFuZFxuICAgIC8vIGRlY3JlYXNpbmcgdGhlIDIgb25lcyBiZXR3ZWVuIG9mIDEuIEV4YW1wbGU6IDAtQSAxLUIgMi1DIDMtRDpcbiAgICAvLyBtb3ZpbmcgQiB0byAzIGJlY29tZXMgMC1BIDEtQyAyLUQgMy1CXG4gICAgdmFyIHN3YXBFbGVtZW50c1VwID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gb2xkSW5kZXggKyAxOyAoaSA8PSBuZXdJbmRleCk7IGkrKykge1xuICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50cyhjb2xsZWN0aW9uLCBlbGVtZW50cywgaSwgaSAtIDEpXG4gICAgICB9XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgIH1cblxuICAgIC8vIG1vdmluZyBhbiBlbGVtZW50IHVwIG9mIDMgcm93cyBtZWFucyBkZWNyZWFzaW5nIGl0cyBpbmRleCBvZiAzLCBhbmRcbiAgICAvLyBpbmNyZWFzaW5nIHRoZSAyIG9uZXMgYmV0d2VlbiBvZiAxLiBFeGFtcGxlOiAwLUEgMS1CIDItQyAzLUQ6XG4gICAgLy8gbW92aW5nIEQgdG8gMSBiZWNvbWVzIDAtQSAxLUQgMi1CIDMtQ1xuICAgIHZhciBzd2FwRWxlbWVudHNEb3duID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gb2xkSW5kZXggLSAxOyAoaSA+PSBuZXdJbmRleCk7IGktLSkge1xuICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50cyhjb2xsZWN0aW9uLCBlbGVtZW50cywgaSwgaSArIDEpXG4gICAgICB9XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgIH1cblxuICAgIC8vIGlmIHdlIGNyZWF0ZSBhbiBlbGVtZW50IGF0IHBvc2l0aW9uIDIsIGFsbCBlbGVtZW50IGluZGV4ZXMgZnJvbSAyIHRvIE5cbiAgICAvLyBzaG91bGQgYmUgaW5jcmVhc2VkLiBmb3IgZXhhbXBsZSwgaW4gMC1BIDEtQiAyLUMgMy1ELCBhZGRpbmcgWCBhdCBwb3NpdGlvblxuICAgIC8vIDEgd2lsbCBjcmVhdGUgMC1BIDEtWCAyLUIgMy1DIDQtRFxuICAgIHZhciBzaGlmdEVsZW1lbnRzVXAgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBpbmRleCkge1xuICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBpIC0gMSwgaSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgLy8gaWYgd2UgcmVtb3ZlIGFuIGVsZW1lbnQgYXQgcG9zaXRpb24gMywgYWxsIGVsZW1lbnQgaW5kZXhlcyBmcm9tIDMgdG8gTlxuICAgIC8vIHNob3VsZCBiZSBkZWNyZWFzZWQuIGZvciBleGFtcGxlLCBpbiAwLUEgMS1CIDItQyAzLUQsIHJlbW92aW5nIEIgd2lsbCBjcmVhdGVcbiAgICAvLyAwLUEgMS1DIDItRFxuICAgIHZhciBzaGlmdEVsZW1lbnRzRG93biA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50cywgc2V0dGluZ3MsIGluZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gZWxlbWVudHMubGVuZ3RoIC0gMjsgaSA+IGluZGV4OyBpLS0pIHtcbiAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHMoY29sbGVjdGlvbiwgZWxlbWVudHMsIGkgKyAxLCBpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmluZChzZXR0aW5ncy5lbGVtZW50c19zZWxlY3RvcilcbiAgICB9XG5cbiAgICAvLyB0aGlzIG1ldGhvZCBjcmVhdGVzIGJ1dHRvbnMgZm9yIGVhY2ggYWN0aW9uLCBhY2NvcmRpbmcgdG8gYWxsIG9wdGlvbnMgc2V0XG4gICAgLy8gKGJ1dHRvbnMgZW5hYmxlZCwgbWluaW11bS9tYXhpbXVtIG9mIGVsZW1lbnRzIG5vdCB5ZXQgcmVhY2hlZCwgcmVzY3VlXG4gICAgLy8gYnV0dG9uIGNyZWF0aW9uIHdoZW4gbm8gbW9yZSBlbGVtZW50cyBhcmUgcmVtYWluaW5nLi4uKVxuICAgIHZhciBkdW1wQ29sbGVjdGlvbkFjdGlvbnMgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgc2V0dGluZ3MsIGlzSW5pdGlhbGl6YXRpb24sIGV2ZW50KSB7XG4gICAgICB2YXIgZWxlbWVudHNQYXJlbnQgPSAkKHNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcilcbiAgICAgIHZhciBpbml0ID0gZWxlbWVudHNQYXJlbnQuZmluZCgnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLXRtcCcpLmxlbmd0aCA9PT0gMFxuICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuXG4gICAgICAvLyBhZGQgYSByZXNjdWUgYnV0dG9uIHRoYXQgd2lsbCBhcHBlYXIgb25seSBpZiBjb2xsZWN0aW9uIGlzIGVtcHRpZWRcbiAgICAgIGlmIChzZXR0aW5ncy5hbGxvd19hZGQpIHtcbiAgICAgICAgaWYgKGluaXQpIHtcbiAgICAgICAgICBlbGVtZW50c1BhcmVudC5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiJyArIHNldHRpbmdzLnByZWZpeCArICctdG1wXCI+PC9zcGFuPicpXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmFkZCkge1xuICAgICAgICAgICAgZWxlbWVudHNQYXJlbnQuYXBwZW5kKFxuICAgICAgICAgICAgICAkKHNldHRpbmdzLmFkZClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24gJyArIHNldHRpbmdzLnByZWZpeCArICctcmVzY3VlLWFkZCcpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ2NvbGxlY3Rpb24nLCBjb2xsZWN0aW9uLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGluaXRpYWxpemVzIHRoZSBjb2xsZWN0aW9uIHdpdGggYSBtaW5pbWFsIG51bWJlciBvZiBlbGVtZW50c1xuICAgICAgaWYgKGlzSW5pdGlhbGl6YXRpb24pIHtcbiAgICAgICAgY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLW9mZnNldCcsIGVsZW1lbnRzLmxlbmd0aClcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChzZXR0aW5ncy5jb250YWluZXIpXG4gICAgICAgIHZhciBidXR0b24gPSBjb2xsZWN0aW9uLmZpbmQoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hZGQsIC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1yZXNjdWUtYWRkLCAuJyArIHNldHRpbmdzLnByZWZpeCArICctZHVwbGljYXRlJykuZmlyc3QoKVxuICAgICAgICB2YXIgc2VjdXJlID0gMFxuICAgICAgICB3aGlsZSAoZWxlbWVudHMubGVuZ3RoIDwgc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMpIHtcbiAgICAgICAgICBzZWN1cmUrK1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHMubGVuZ3RoID4gMCA/IGVsZW1lbnRzLmxhc3QoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIHZhciBpbmRleCA9IGVsZW1lbnRzLmxlbmd0aCAtIDFcbiAgICAgICAgICBlbGVtZW50cyA9IGRvQWRkKGNvbnRhaW5lciwgYnV0dG9uLCBjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIGluZGV4LCBmYWxzZSlcbiAgICAgICAgICBpZiAoc2VjdXJlID4gc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZmluaXRlIGxvb3AsIGVsZW1lbnQgc2VsZWN0b3IgKCcgKyBzZXR0aW5ncy5lbGVtZW50c19zZWxlY3RvciArICcpIG5vdCBmb3VuZCAhJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLW9mZnNldCcsIGVsZW1lbnRzLmxlbmd0aClcbiAgICAgIH1cblxuICAgICAgLy8gbWFrZSBidXR0b25zIGFwcGVhci9kaXNhcHBlYXIgaW4gZWFjaCBlbGVtZW50cyBvZiB0aGUgY29sbGVjdGlvbiBhY2NvcmRpbmcgdG8gb3B0aW9uc1xuICAgICAgLy8gKGVuYWJsZWQsIG1pbi9tYXguLi4pIGFuZCBsb2dpYyAoZm9yIGV4YW1wbGUsIGRvIG5vdCBwdXQgYSBtb3ZlIHVwIGJ1dHRvbiBvbiB0aGUgZmlyc3RcbiAgICAgIC8vIGVsZW1lbnQgb2YgdGhlIGNvbGxlY3Rpb24pXG4gICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcylcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXphdGlvbikge1xuICAgICAgICAgIGVsZW1lbnQuZGF0YSgnaW5kZXgnLCBpbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb25zID0gZWxlbWVudC5maW5kKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctYWN0aW9ucycpLmFkZEJhY2soKS5maWx0ZXIoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb25zJylcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWN0aW9ucyA9ICQoJzwnICsgc2V0dGluZ3MuYWN0aW9uX2NvbnRhaW5lcl90YWcgKyAnIGNsYXNzPVwiJyArIHNldHRpbmdzLnByZWZpeCArICctYWN0aW9uc1wiPjwvJyArIHNldHRpbmdzLmFjdGlvbl9jb250YWluZXJfdGFnICsgJz4nKVxuXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoYWN0aW9ucylcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWx0YSA9IDBcbiAgICAgICAgaWYgKGV2ZW50ID09PSAncmVtb3ZlJyAmJiBzZXR0aW5ncy5mYWRlX291dCkge1xuICAgICAgICAgIGRlbHRhID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJ1dHRvbnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2VuYWJsZWQnOiBzZXR0aW5ncy5hbGxvd19yZW1vdmUsXG4gICAgICAgICAgICAnc2VsZWN0b3InOiBzZXR0aW5ncy5wcmVmaXggKyAnLXJlbW92ZScsXG4gICAgICAgICAgICAnaHRtbCc6IHNldHRpbmdzLnJlbW92ZSxcbiAgICAgICAgICAgICdjb25kaXRpb24nOiBlbGVtZW50cy5sZW5ndGggLSBkZWx0YSA+IHNldHRpbmdzLm1pblxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICdlbmFibGVkJzogc2V0dGluZ3MuYWxsb3dfdXAsXG4gICAgICAgICAgICAnc2VsZWN0b3InOiBzZXR0aW5ncy5wcmVmaXggKyAnLXVwJyxcbiAgICAgICAgICAgICdodG1sJzogc2V0dGluZ3MudXAsXG4gICAgICAgICAgICAnY29uZGl0aW9uJzogZWxlbWVudHMubGVuZ3RoIC0gZGVsdGEgPiAxICYmIGVsZW1lbnRzLmluZGV4KGVsZW1lbnQpIC0gZGVsdGEgPiAwXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgJ2VuYWJsZWQnOiBzZXR0aW5ncy5hbGxvd19kb3duLFxuICAgICAgICAgICAgJ3NlbGVjdG9yJzogc2V0dGluZ3MucHJlZml4ICsgJy1kb3duJyxcbiAgICAgICAgICAgICdodG1sJzogc2V0dGluZ3MuZG93bixcbiAgICAgICAgICAgICdjb25kaXRpb24nOiBlbGVtZW50cy5sZW5ndGggLSBkZWx0YSA+IDEgJiYgZWxlbWVudHMuaW5kZXgoZWxlbWVudCkgIT09IGVsZW1lbnRzLmxlbmd0aCAtIDFcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAnZW5hYmxlZCc6IHNldHRpbmdzLmFsbG93X2FkZCAmJiAhc2V0dGluZ3MuYWRkX2F0X3RoZV9lbmQgJiYgIXNldHRpbmdzLmN1c3RvbV9hZGRfbG9jYXRpb24sXG4gICAgICAgICAgICAnc2VsZWN0b3InOiBzZXR0aW5ncy5wcmVmaXggKyAnLWFkZCcsXG4gICAgICAgICAgICAnaHRtbCc6IHNldHRpbmdzLmFkZCxcbiAgICAgICAgICAgICdjb25kaXRpb24nOiBlbGVtZW50cy5sZW5ndGggLSBkZWx0YSA8IHNldHRpbmdzLm1heFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICdlbmFibGVkJzogc2V0dGluZ3MuYWxsb3dfZHVwbGljYXRlLFxuICAgICAgICAgICAgJ3NlbGVjdG9yJzogc2V0dGluZ3MucHJlZml4ICsgJy1kdXBsaWNhdGUnLFxuICAgICAgICAgICAgJ2h0bWwnOiBzZXR0aW5ncy5kdXBsaWNhdGUsXG4gICAgICAgICAgICAnY29uZGl0aW9uJzogZWxlbWVudHMubGVuZ3RoIC0gZGVsdGEgPCBzZXR0aW5ncy5tYXhcbiAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgICAgICAkLmVhY2goYnV0dG9ucywgZnVuY3Rpb24gKGksIGJ1dHRvbikge1xuICAgICAgICAgIGlmIChidXR0b24uZW5hYmxlZCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGVsZW1lbnQuZmluZCgnLicgKyBidXR0b24uc2VsZWN0b3IpXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCA9PT0gMCAmJiBidXR0b24uaHRtbCkge1xuICAgICAgICAgICAgICBhY3Rpb24gPSAkKGJ1dHRvbi5odG1sKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhhY3Rpb25zKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhidXR0b24uc2VsZWN0b3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICBhY3Rpb24ucmVtb3ZlQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24tZGlzYWJsZWQnKVxuICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuaGlkZV91c2VsZXNzX2J1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uY3NzKCdkaXNwbGF5JywgJycpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjdGlvbi5hZGRDbGFzcyhzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5oaWRlX3VzZWxlc3NfYnV0dG9ucykge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvblxuICAgICAgICAgICAgICAuYWRkQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nKVxuICAgICAgICAgICAgICAuZGF0YSgnY29sbGVjdGlvbicsIGNvbGxlY3Rpb24uYXR0cignaWQnKSlcbiAgICAgICAgICAgICAgLmRhdGEoJ2VsZW1lbnQnLCBnZXRPckNyZWF0ZUlkKGNvbGxlY3Rpb24uYXR0cignaWQnKSArICdfJyArIGluZGV4LCBlbGVtZW50KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuJyArIGJ1dHRvbi5zZWxlY3RvcikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSkgLy8gZWxlbWVudHMuZWFjaFxuXG4gICAgICAvLyBtYWtlIHRoZSByZXNjdWUgYnV0dG9uIGFwcGVhciAvIGRpc2FwcGVhciBhY2NvcmRpbmcgdG8gb3B0aW9ucyAoYWRkX2F0X3RoZV9lbmQpIGFuZFxuICAgICAgLy8gbG9naWMgKG5vIG1vcmUgZWxlbWVudHMgb24gdGhlIGNvbGxlY3Rpb24pXG4gICAgICBpZiAoc2V0dGluZ3MuYWxsb3dfYWRkKSB7XG5cbiAgICAgICAgdmFyIGRlbHRhID0gMFxuICAgICAgICBpZiAoZXZlbnQgPT09ICdyZW1vdmUnICYmIHNldHRpbmdzLmZhZGVfb3V0KSB7XG4gICAgICAgICAgZGVsdGEgPSAxXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzY3VlQWRkID0gY29sbGVjdGlvbi5maW5kKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctcmVzY3VlLWFkZCcpLmNzcygnZGlzcGxheScsICcnKS5yZW1vdmVDbGFzcyhzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAgIHZhciBhZGRzID0gY29sbGVjdGlvbi5maW5kKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctYWRkJylcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRfYXRfdGhlX2VuZCAmJiBhZGRzLmxlbmd0aCA+IGRlbHRhIHx8IHNldHRpbmdzLmN1c3RvbV9hZGRfbG9jYXRpb24pIHtcbiAgICAgICAgICByZXNjdWVBZGQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncmVtb3ZlJyAmJiBzZXR0aW5ncy5mYWRlX291dCkge1xuICAgICAgICAgIHJlc2N1ZUFkZC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAgICAgcmVzY3VlQWRkLmZhZGVJbignZmFzdCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAtIGRlbHRhID49IHNldHRpbmdzLm1heCkge1xuICAgICAgICAgIHJlc2N1ZUFkZC5hZGRDbGFzcyhzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmhpZGVfdXNlbGVzc19idXR0b25zKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLmZpbmQoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hZGQsIC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1yZXNjdWUtYWRkLCAuJyArIHNldHRpbmdzLnByZWZpeCArICctZHVwbGljYXRlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSAvLyBkdW1wQ29sbGVjdGlvbkFjdGlvbnNcblxuICAgIC8vIHRoaXMgcGx1Z2luIHN1cHBvcnRzIG5lc3RlZCBjb2xsZWN0aW9ucywgYW5kIHRoaXMgbWV0aG9kIGVuYWJsZXMgdGhlbSB3aGVuIHRoZVxuICAgIC8vIHBhcmVudCBjb2xsZWN0aW9uIGlzIGluaXRpYWxpemVkLiBzZWVcbiAgICAvLyBodHRwOi8vc3ltZm9ueS1jb2xsZWN0aW9uLmZ1ei5vcmcvc3ltZm9ueTMvYWR2YW5jZWQvY29sbGVjdGlvbk9mQ29sbGVjdGlvbnNcbiAgICB2YXIgZW5hYmxlQ2hpbGRyZW5Db2xsZWN0aW9ucyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50LCBzZXR0aW5ncykge1xuICAgICAgaWYgKHNldHRpbmdzLmNoaWxkcmVuKSB7XG4gICAgICAgICQuZWFjaChzZXR0aW5ncy5jaGlsZHJlbiwgZnVuY3Rpb24gKGluZGV4LCBjaGlsZHJlblNldHRpbmdzKSB7XG4gICAgICAgICAgaWYgKCFjaGlsZHJlblNldHRpbmdzLnNlbGVjdG9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnanF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGNvbGxlY3Rpb24gJyArIGNvbGxlY3Rpb24uYXR0cignaWQnKSArICcgaGFzIGNoaWxkcmVuIGNvbGxlY3Rpb25zLCBidXQgY2hpbGRyZW5cXCdzIHJvb3Qgc2VsZWN0b3IgaXMgdW5kZWZpbmVkLicpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbWVudC5maW5kKGNoaWxkcmVuU2V0dGluZ3Muc2VsZWN0b3IpLmNvbGxlY3Rpb24oY2hpbGRyZW5TZXR0aW5ncylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5maW5kKGNoaWxkcmVuU2V0dGluZ3Muc2VsZWN0b3IpLmNvbGxlY3Rpb24oY2hpbGRyZW5TZXR0aW5ncylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcyBtZXRob2QgaGFuZGxlcyBhIGNsaWNrIG9uIFwiYWRkXCIgYnV0dG9ucywgaXQgaW5jcmVhc2VzIGFsbCBmb2xsb3dpbmcgZWxlbWVudCBpbmRleGVzIG9mXG4gICAgLy8gMSBwb3NpdGlvbiBhbmQgaW5zZXJ0IGEgbmV3IG9uZSBpbiB0aGUgaW5kZXggdGhhdCBiZWNvbWVzIGZyZWUuIGlmIGNsaWNrIGhhcyBiZWVuIG1hZGUgb24gYVxuICAgIC8vIFwiZHVwbGljYXRlXCIgYnV0dG9uLCBhbGwgZWxlbWVudCB2YWx1ZXMgYXJlIHRoZW4gaW5zZXJ0ZWQuIGZpbmFsbHksIGNhbGxiYWNrcyBsZXQgdXNlciBjYW5jZWxcbiAgICAvLyB0aG9zZSBhY3Rpb25zIGlmIG5lZWRlZC5cbiAgICB2YXIgZG9BZGQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCB0aGF0LCBjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIGluZGV4LCBpc0R1cGxpY2F0ZSkge1xuICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA8IHNldHRpbmdzLm1heCAmJiAoaXNEdXBsaWNhdGUgJiYgdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV9kdXBsaWNhdGUoY29sbGVjdGlvbiwgZWxlbWVudCkpIHx8IHRydWVPclVuZGVmaW5lZChzZXR0aW5ncy5iZWZvcmVfYWRkKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSkpIHtcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IGNvbGxlY3Rpb24uZGF0YSgncHJvdG90eXBlJylcbiAgICAgICAgdmFyIGZyZWVJbmRleCA9IGNvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1vZmZzZXQnKVxuXG4gICAgICAgIGNvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1vZmZzZXQnLCBmcmVlSW5kZXggKyAxKVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGVsZW1lbnRzLmxlbmd0aCAtIDFcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cChwcmVnUXVvdGUoc2V0dGluZ3MucHJvdG90eXBlX25hbWUpLCAnZycpXG4gICAgICAgIHZhciBmcmVlS2V5ID0gZnJlZUluZGV4XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnByZXNlcnZlX25hbWVzKSB7XG4gICAgICAgICAgZnJlZUtleSA9IGNvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1mcmVlLWtleScpXG5cbiAgICAgICAgICBpZiAoZnJlZUtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmcmVlS2V5ID0gZmluZEZyZWVOdW1lcmljS2V5KHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb2xsZWN0aW9uLmRhdGEoJ2NvbGxlY3Rpb24tZnJlZS1rZXknLCBmcmVlS2V5ICsgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb2RlID0gJChwcm90b3R5cGUucmVwbGFjZShyZWdleHAsIGZyZWVLZXkpKS5kYXRhKCdpbmRleCcsIGZyZWVJbmRleClcbiAgICAgICAgc2V0UmlnaHRQcmVmaXgoc2V0dGluZ3MsIGNvZGUpXG5cbiAgICAgICAgdmFyIGVsZW1lbnRzUGFyZW50ID0gJChzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpXG4gICAgICAgIHZhciB0bXAgPSBlbGVtZW50c1BhcmVudC5maW5kKCc+IC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy10bXAnKVxuICAgICAgICB2YXIgaWQgPSAkKGNvZGUpLmZpbmQoJ1tpZF0nKS5maXJzdCgpLmF0dHIoJ2lkJylcblxuICAgICAgICBpZiAoaXNEdXBsaWNhdGUpIHtcbiAgICAgICAgICB2YXIgb2xkRWxlbWVudCA9IGVsZW1lbnRzLmVxKGluZGV4KVxuICAgICAgICAgIHB1dEZpZWxkVmFsdWVzSW5Eb20ob2xkRWxlbWVudClcbiAgICAgICAgICB2YXIgb2xkSHRtbCA9ICQoJzxkaXYvPicpLmFwcGVuZChvbGRFbGVtZW50LmNsb25lKCkpLmh0bWwoKVxuICAgICAgICAgIHZhciBvbGRJbmRleCA9IHNldHRpbmdzLnByZXNlcnZlX25hbWVzIHx8IHNldHRpbmdzLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yID8gb2xkRWxlbWVudC5kYXRhKCdpbmRleCcpIDogaW5kZXhcbiAgICAgICAgICB2YXIgb2xkS2V5ID0gc2V0dGluZ3MucHJlc2VydmVfbmFtZXMgPyBnZXRFbGVtZW50S2V5KHNldHRpbmdzLCBvbGRFbGVtZW50KSA6IG9sZEluZGV4XG4gICAgICAgICAgdmFyIG5ld0h0bWwgPSBjaGFuZ2VIdG1sSW5kZXgoY29sbGVjdGlvbiwgc2V0dGluZ3MsIG9sZEh0bWwsIG9sZEluZGV4LCBmcmVlSW5kZXgsIG9sZEtleSwgZnJlZUtleSlcblxuICAgICAgICAgIGNvZGUgPSAkKCc8ZGl2Lz4nKS5odG1sKG5ld0h0bWwpLmNvbnRlbnRzKCkuZGF0YSgnaW5kZXgnLCBmcmVlSW5kZXgpXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmZhZGVfaW4pIHtcbiAgICAgICAgICAgIGNvZGUuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRtcC5iZWZvcmUoY29kZSkuZmluZChzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbnMnKS5yZW1vdmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5mYWRlX2luKSB7XG4gICAgICAgICAgICBjb2RlLmhpZGUoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRtcC5iZWZvcmUoY29kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuXG4gICAgICAgIHZhciBhY3Rpb24gPSBjb2RlLmZpbmQoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hZGQsIC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1kdXBsaWNhdGUnKVxuICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY3Rpb24uYWRkQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nKS5kYXRhKCdjb2xsZWN0aW9uJywgY29sbGVjdGlvbi5hdHRyKCdpZCcpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRfYXRfdGhlX2VuZCAmJiBpbmRleCArIDEgIT09IGZyZWVJbmRleCkge1xuICAgICAgICAgIGVsZW1lbnRzID0gZG9Nb3ZlKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgY29kZSwgZnJlZUluZGV4LCBpbmRleCArIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHVtcENvbGxlY3Rpb25BY3Rpb25zKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVuYWJsZUNoaWxkcmVuQ29sbGVjdGlvbnMoY29sbGVjdGlvbiwgY29kZSwgc2V0dGluZ3MpXG5cbiAgICAgICAgaWYgKChpc0R1cGxpY2F0ZSAmJiAhdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2R1cGxpY2F0ZShjb2xsZWN0aW9uLCBjb2RlKSkpIHx8ICF0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYWZ0ZXJfYWRkKGNvbGxlY3Rpb24sIGNvZGUpKSkge1xuICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2hpZnRFbGVtZW50c1VwKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgaW5kZXggKyAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvZGUgIT09IHVuZGVmaW5lZCAmJiBzZXR0aW5ncy5mYWRlX2luKSB7XG4gICAgICAgIGNvZGUuZmFkZUluKCdmYXN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudHNcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIHRoZSBjdXJyZW50IGVsZW1lbnQgd2hlbiBjbGlja2luZyBvbiBhIFwiZGVsZXRlXCIgYnV0dG9uIGFuZCBkZWNyZWFzZSBhbGwgZm9sbG93aW5nXG4gICAgLy8gaW5kZXhlcyBmcm9tIDEgcG9zaXRpb24uXG4gICAgdmFyIGRvRGVsZXRlID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiBzZXR0aW5ncy5taW4gJiYgdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV9yZW1vdmUoY29sbGVjdGlvbiwgZWxlbWVudCkpKSB7XG4gICAgICAgIHZhciBkZWxldGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdG9EZWxldGUgPSBlbGVtZW50XG4gICAgICAgICAgaWYgKCFzZXR0aW5ncy5wcmVzZXJ2ZV9uYW1lcykge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzaGlmdEVsZW1lbnRzVXAoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBpbmRleClcbiAgICAgICAgICAgIHRvRGVsZXRlID0gZWxlbWVudHMubGFzdCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBiYWNrdXAgPSB0b0RlbGV0ZS5jbG9uZSh7d2l0aERhdGFBbmRFdmVudHM6IHRydWV9KS5zaG93KClcbiAgICAgICAgICB0b0RlbGV0ZS5yZW1vdmUoKVxuICAgICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX3JlbW92ZShjb2xsZWN0aW9uLCBiYWNrdXApKSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzUGFyZW50ID0gJChzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpXG4gICAgICAgICAgICBlbGVtZW50c1BhcmVudC5maW5kKCc+IC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy10bXAnKS5iZWZvcmUoYmFja3VwKVxuICAgICAgICAgICAgZWxlbWVudHMgPSBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgICAgICAgICBlbGVtZW50cyA9IHNoaWZ0RWxlbWVudHNEb3duKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgaW5kZXggLSAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGRvUmV3cml0ZVBvc2l0aW9ucyhzZXR0aW5ncywgZWxlbWVudHMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5mYWRlX291dCkge1xuICAgICAgICAgIGVsZW1lbnQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0aW9uKClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudHNcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIGN1cnJlbnQgZWxlbWVudCBhbmQgdGhlIHByZXZpb3VzIG9uZSAoc28gdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgIC8vIGFwcGVhcnMgb25lIHBsYWNlIGhpZ2hlcilcbiAgICB2YXIgZG9VcCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggIT09IDAgJiYgdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV91cChjb2xsZWN0aW9uLCBlbGVtZW50KSkpIHtcbiAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHMoY29sbGVjdGlvbiwgZWxlbWVudHMsIGluZGV4LCBpbmRleCAtIDEpXG4gICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX3VwKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSkge1xuICAgICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBpbmRleCAtIDEsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgLy8gcmV2ZXJzZSB0aGUgY3VycmVudCBlbGVtZW50IGFuZCB0aGUgbmV4dCBvbmUgKHNvIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAvLyBhcHBlYXJzIG9uZSBwbGFjZSBsb3dlcilcbiAgICB2YXIgZG9Eb3duID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gKGVsZW1lbnRzLmxlbmd0aCAtIDEpICYmIHRydWVPclVuZGVmaW5lZChzZXR0aW5ncy5iZWZvcmVfZG93bihjb2xsZWN0aW9uLCBlbGVtZW50KSkpIHtcbiAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHMoY29sbGVjdGlvbiwgZWxlbWVudHMsIGluZGV4LCBpbmRleCArIDEpXG4gICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudHMpKSkge1xuICAgICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBpbmRleCArIDEsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgLy8gbW92ZSBhbiBlbGVtZW50IGZyb20gYSBwb3NpdGlvbiB0byBhbiBhcmJpdHJhcnkgbmV3IHBvc2l0aW9uXG4gICAgdmFyIGRvTW92ZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgaWYgKDEgPT09IE1hdGguYWJzKG5ld0luZGV4IC0gb2xkSW5kZXgpKSB7XG4gICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICAgIGlmICghKG5ld0luZGV4IC0gb2xkSW5kZXggPiAwID8gdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX3VwKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSA6IHRydWVPclVuZGVmaW5lZChzZXR0aW5ncy5hZnRlcl9kb3duKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSkpIHtcbiAgICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50cyhjb2xsZWN0aW9uLCBlbGVtZW50cywgbmV3SW5kZXgsIG9sZEluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob2xkSW5kZXggPCBuZXdJbmRleCkge1xuICAgICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzVXAoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICAgICAgaWYgKCEobmV3SW5kZXggLSBvbGRJbmRleCA+IDAgPyB0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYWZ0ZXJfdXAoY29sbGVjdGlvbiwgZWxlbWVudCkpIDogdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudCkpKSkge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHNEb3duKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgbmV3SW5kZXgsIG9sZEluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50c0Rvd24oY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICAgICAgaWYgKCEobmV3SW5kZXggLSBvbGRJbmRleCA+IDAgPyB0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYWZ0ZXJfdXAoY29sbGVjdGlvbiwgZWxlbWVudCkpIDogdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudCkpKSkge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHNVcChjb2xsZWN0aW9uLCBlbGVtZW50cywgc2V0dGluZ3MsIG5ld0luZGV4LCBvbGRJbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGR1bXBDb2xsZWN0aW9uQWN0aW9ucyhjb2xsZWN0aW9uLCBzZXR0aW5ncywgZmFsc2UpXG5cbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgdmFyIGRvUmV3cml0ZVBvc2l0aW9ucyA9IGZ1bmN0aW9uIChzZXR0aW5ncywgZWxlbWVudHMpIHtcbiAgICAgICQoZWxlbWVudHMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcylcbiAgICAgICAgcHV0RmllbGRWYWx1ZShlbGVtZW50LmZpbmQoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpLCBlbGVtZW50cy5pbmRleChlbGVtZW50KSlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBlbGVtZW50c1xuICAgIH1cblxuICAgIHZhciBnZXRFbGVtZW50S2V5ID0gZnVuY3Rpb24gKHNldHRpbmdzLCBlbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGVsZW1lbnQuZmluZCgnOmlucHV0W25hbWVePVwiJyArIHNldHRpbmdzLm5hbWVfcHJlZml4ICsgJ1tcIl0nKS5hdHRyKCduYW1lJylcblxuICAgICAgcmV0dXJuIG5hbWUuc2xpY2Uoc2V0dGluZ3MubmFtZV9wcmVmaXgubGVuZ3RoICsgMSkuc3BsaXQoJ10nLCAxKVswXVxuICAgIH1cblxuICAgIHZhciBmaW5kRnJlZU51bWVyaWNLZXkgPSBmdW5jdGlvbiAoc2V0dGluZ3MsIGVsZW1lbnRzKSB7XG4gICAgICB2YXIgZnJlZUtleSA9IDBcblxuICAgICAgZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXkgPSBnZXRFbGVtZW50S2V5KHNldHRpbmdzLCAkKHRoaXMpKVxuXG4gICAgICAgIGlmICgvXjB8WzEtOV1cXGQqJC8udGVzdChrZXkpICYmIGtleSA+PSBmcmVlS2V5KSB7XG4gICAgICAgICAgZnJlZUtleSA9IE51bWJlcihrZXkpICsgMVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gZnJlZUtleVxuICAgIH1cblxuICAgIHZhciBzZXRSaWdodFByZWZpeCA9IGZ1bmN0aW9uIChzZXR0aW5ncywgY29udGFpbmVyKSB7XG4gICAgICB2YXIgc3VmZml4ZXMgPSBbXG4gICAgICAgICctYWN0aW9uJyxcbiAgICAgICAgJy1hY3Rpb24tZGlzYWJsZWQnLFxuICAgICAgICAnLWFjdGlvbnMnLFxuICAgICAgICAnLWFkZCcsXG4gICAgICAgICctZG93bicsXG4gICAgICAgICctZHVwbGljYXRlJyxcbiAgICAgICAgJy1yZW1vdmUnLFxuICAgICAgICAnLXJlc2N1ZS1hZGQnLFxuICAgICAgICAnLXRtcCcsXG4gICAgICAgICctdXAnXG4gICAgICBdXG5cbiAgICAgICQuZWFjaChzdWZmaXhlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VmZml4ID0gdGhpc1xuICAgICAgICBjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgaWYgKHRoYXQuaGFzQ2xhc3Moc2V0dGluZ3MudXNlcl9wcmVmaXggKyBzdWZmaXgpKSB7XG4gICAgICAgICAgICB0aGF0LmFkZENsYXNzKHNldHRpbmdzLnByZWZpeCArIHN1ZmZpeClcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC5maW5kKCcqJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGVyZSA9ICQodGhpcylcbiAgICAgICAgICAgIGlmIChoZXJlLmhhc0NsYXNzKHNldHRpbmdzLnVzZXJfcHJlZml4ICsgc3VmZml4KSkge1xuICAgICAgICAgICAgICBoZXJlLmFkZENsYXNzKHNldHRpbmdzLnByZWZpeCArIHN1ZmZpeClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB3ZSdyZSBpbiBhICQuZm4uLCBzbyBpbiAkKCcuY29sbGVjdGlvbicpLmNvbGxlY3Rpb24oKSwgJCh0aGlzKSBlcXVhbHMgJCgnLmNvbGxlY3Rpb24nKVxuICAgIHZhciBlbGVtcyA9ICQodGhpcylcblxuICAgIC8vIGF0IGxlYXN0IG9uZSwgYnV0IHdoeSBub3Qgc2V2ZXJhbCBjb2xsZWN0aW9ucyBzaG91bGQgYmUgcmFpc2VkXG4gICAgaWYgKGVsZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIHNlbGVjdG9yIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBlbGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRzLCBvcHRpb25zKVxuXG4gICAgICAvLyB1c2FnZSBvZiAkLmZuLm9uIGV2ZW50cyB1c2luZyBhIHN0YXRpYyBjb250YWluZXIganVzdCBpbiBjYXNlIHRoZXJlIHdvdWxkIGJlIHNvbWVcbiAgICAgIC8vIGFqYXggaW50ZXJhY3Rpb25zIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAgaWYgKCQoc2V0dGluZ3MuY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBhIGNvbnRhaW5lciBzaG91bGQgZXhpc3QgdG8gaGFuZGxlIGV2ZW50cyAoYmFzaWNhbGx5LCBhIDxib2R5PiB0YWcpLicpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBpdCBpcyBwb3NzaWJsZSB0byB1c2UgdGhpcyBwbHVnaW4gd2l0aCBhIHNlbGVjdG9yIHRoYXQgd2lsbCBjb250YWluIHRoZSBjb2xsZWN0aW9uIGlkXG4gICAgICAvLyBpbiBhIGRhdGEgYXR0cmlidXRlXG4gICAgICB2YXIgZWxlbSA9ICQodGhpcylcbiAgICAgIGlmIChlbGVtLmRhdGEoJ2NvbGxlY3Rpb24nKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gJCgnIycgKyBlbGVtLmRhdGEoJ2NvbGxlY3Rpb24nKSlcbiAgICAgICAgaWYgKGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIGlkIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdGlvbiA9IGVsZW1cbiAgICAgIH1cbiAgICAgIGNvbGxlY3Rpb24gPSAkKGNvbGxlY3Rpb24pXG5cbiAgICAgIC8vIHdoZW4gYWRkaW5nIGVsZW1lbnRzIHRvIGEgY29sbGVjdGlvbiwgd2Ugc2hvdWxkIGJlIGF3YXJlIG9mIHRoZSBub2RlIHRoYXQgd2lsbCBjb250YWluIHRoZW1cbiAgICAgIHNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciA9IHNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvci5yZXBsYWNlKCclaWQlJywgJyMnICsgZ2V0T3JDcmVhdGVJZCgnJywgY29sbGVjdGlvbikpXG4gICAgICBpZiAoIXNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvcikge1xuICAgICAgICBzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IgPSAnIycgKyBnZXRPckNyZWF0ZUlkKCcnLCBjb2xsZWN0aW9uKVxuICAgICAgICBpZiAoJChzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gZWxlbWVudHMgcGFyZW50IHNlbGVjdG9yIGRvZXMgbm90IHJldHVybiBhbnkgb2JqZWN0LicpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbiBuZXN0ZWQgY29sbGVjdGlvbnMsIHByZWZpeCBpcyB0aGUgc2FtZSBmb3IgYWxsIGNoaWxkcmVuIGxlYWRpbmcgdG8gdmVyeVxuICAgICAgLy8gcmFuZG9tIGFuZCB1bmV4ZXBjdGVkIGlzc3Vlcywgc28gd2UgbWVyZ2UgcHJlZml4IHdpdGggY3VycmVudCBjb2xsZWN0aW9uIGlkLlxuICAgICAgc2V0dGluZ3MudXNlcl9wcmVmaXggPSBzZXR0aW5ncy5wcmVmaXhcbiAgICAgIHNldHRpbmdzLnByZWZpeCA9IGNvbGxlY3Rpb24uYXR0cignaWQnKSArICctJyArIHNldHRpbmdzLnVzZXJfcHJlZml4XG4gICAgICBzZXRSaWdodFByZWZpeChzZXR0aW5ncywgY29sbGVjdGlvbilcblxuICAgICAgLy8gZW5mb3JjaW5nIGxvZ2ljIGJldHdlZW4gb3B0aW9uc1xuICAgICAgaWYgKCFzZXR0aW5ncy5hbGxvd19hZGQpIHtcbiAgICAgICAgc2V0dGluZ3MuYWxsb3dfZHVwbGljYXRlID0gZmFsc2VcbiAgICAgICAgc2V0dGluZ3MuYWRkX2F0X3RoZV9lbmQgPSBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHNldHRpbmdzLmluaXRfd2l0aF9uX2VsZW1lbnRzID4gc2V0dGluZ3MubWF4KSB7XG4gICAgICAgIHNldHRpbmdzLmluaXRfd2l0aF9uX2VsZW1lbnRzID0gc2V0dGluZ3MubWF4XG4gICAgICB9XG4gICAgICBpZiAoc2V0dGluZ3MubWluICYmICghc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMgfHwgc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMgPCBzZXR0aW5ncy5taW4pKSB7XG4gICAgICAgIHNldHRpbmdzLmluaXRfd2l0aF9uX2VsZW1lbnRzID0gc2V0dGluZ3MubWluXG4gICAgICB9XG5cbiAgICAgIGlmICghc2V0dGluZ3MuYWN0aW9uX2NvbnRhaW5lcl90YWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBhY3Rpb25fY29udGFpbmVyX3RhZyBuZWVkcyB0byBiZSBzZXQuJylcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gdXNlciBjYWxsYmFja1xuICAgICAgc2V0dGluZ3MuYmVmb3JlX2luaXQoY29sbGVjdGlvbilcblxuICAgICAgLy8gcHJvdG90eXBlIHJlcXVpcmVkIHRvIGNyZWF0ZSBuZXcgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgIGlmIChjb2xsZWN0aW9uLmRhdGEoJ3Byb3RvdHlwZScpID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBmaWVsZCBoYXMgbm8gcHJvdG90eXBlLCBjaGVjayB0aGF0IHlvdXIgZmllbGQgaGFzIHRoZSBwcm90b3R5cGUgb3B0aW9uIHNldCB0byB0cnVlLicpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGFsbCB0aGUgZm9sbG93aW5nIGRhdGEgYXR0cmlidXRlcyBhcmUgYXV0b21hdGljYWxseSBhdmFpbGFibGUgdGhhbmtzIHRvXG4gICAgICAvLyBqcXVlcnkuY29sbGVjdGlvbi5odG1sLnR3aWcgZm9ybSB0aGVtZVxuICAgICAgaWYgKGNvbGxlY3Rpb24uZGF0YSgncHJvdG90eXBlLW5hbWUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldHRpbmdzLnByb3RvdHlwZV9uYW1lID0gY29sbGVjdGlvbi5kYXRhKCdwcm90b3R5cGUtbmFtZScpXG4gICAgICB9XG4gICAgICBpZiAoY29sbGVjdGlvbi5kYXRhKCdhbGxvdy1hZGQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldHRpbmdzLmFsbG93X2FkZCA9IGNvbGxlY3Rpb24uZGF0YSgnYWxsb3ctYWRkJylcbiAgICAgICAgc2V0dGluZ3MuYWxsb3dfZHVwbGljYXRlID0gY29sbGVjdGlvbi5kYXRhKCdhbGxvdy1hZGQnKSA/IHNldHRpbmdzLmFsbG93X2R1cGxpY2F0ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAoY29sbGVjdGlvbi5kYXRhKCdhbGxvdy1yZW1vdmUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldHRpbmdzLmFsbG93X3JlbW92ZSA9IGNvbGxlY3Rpb24uZGF0YSgnYWxsb3ctcmVtb3ZlJylcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsZWN0aW9uLmRhdGEoJ25hbWUtcHJlZml4JykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZXR0aW5ncy5uYW1lX3ByZWZpeCA9IGNvbGxlY3Rpb24uZGF0YSgnbmFtZS1wcmVmaXgnKVxuICAgICAgfVxuXG4gICAgICAvLyBwcm90b3R5cGUtbmFtZSByZXF1aXJlZCBmb3IgbmVzdGVkIGNvbGxlY3Rpb25zLCB3aGVyZSBjb2xsZWN0aW9uIGlkIHByZWZpeFxuICAgICAgLy8gaXNuJ3QgZ3Vlc3NhYmxlIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N5bWZvbnkvc3ltZm9ueS9pc3N1ZXMvMTM4MzcpXG4gICAgICBpZiAoIXNldHRpbmdzLm5hbWVfcHJlZml4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogdGhlIHByZWZpeCB1c2VkIGluIGRlc2NlbmRhbnQgZmllbGQgbmFtZXMgaXMgbWFuZGF0b3J5LCB5b3UgY2FuIHNldCBpdCB1c2luZyAyIHdheXM6JylcbiAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiAtIHVzZSB0aGUgZm9ybSB0aGVtZSBnaXZlbiB3aXRoIHRoaXMgcGx1Z2luIHNvdXJjZScpXG4gICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogLSBzZXQgbmFtZV9wcmVmaXggb3B0aW9uIHRvICBcXCd7eyBmb3JtVmlldy5teUNvbGxlY3Rpb25GaWVsZC52YXJzLmZ1bGxfbmFtZSB9fVxcJycpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHByZXNlcnZlX25hbWVzIG9wdGlvbiBpcyBzZXQsIHdlIHNob3VsZCBlbmZvcmNlIG1hbnkgb3B0aW9ucyB0byBhdm9pZFxuICAgICAgLy8gaGF2aW5nIGluY29uc2lzdGVuY2llcyBiZXR3ZWVuIHRoZSBVSSBhbmQgdGhlIFN5bWZvbnkgcmVzdWx0XG4gICAgICBpZiAoc2V0dGluZ3MucHJlc2VydmVfbmFtZXMpIHtcbiAgICAgICAgc2V0dGluZ3MuYWxsb3dfdXAgPSBmYWxzZVxuICAgICAgICBzZXR0aW5ncy5hbGxvd19kb3duID0gZmFsc2VcbiAgICAgICAgc2V0dGluZ3MuZHJhZ19kcm9wID0gZmFsc2VcbiAgICAgICAgc2V0dGluZ3MuYWRkX2F0X3RoZV9lbmQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGRyYWcgJiBkcm9wIHN1cHBvcnQ6IHRoaXMgaXMgYSBiaXQgbW9yZSBjb21wbGV4IHRoYW4gcHJlc3NpbmcgXCJ1cFwiIG9yXG4gICAgICAvLyBcImRvd25cIiBidXR0b25zIGJlY2F1c2Ugd2UgY2FuIG1vdmUgZWxlbWVudHMgbW9yZSB0aGFuIG9uZSBwbGFjZSBhaGVhZFxuICAgICAgLy8gb3IgYmVsb3cuLi5cbiAgICAgIGlmICgodHlwZW9mIGpRdWVyeS51aSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGpRdWVyeS51aS5zb3J0YWJsZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICYmIGNvbGxlY3Rpb24uZGF0YSgnc29ydGFibGUnKSkge1xuICAgICAgICBjb2xsZWN0aW9uLnNvcnRhYmxlKCdkaXNhYmxlJylcbiAgICAgIH1cbiAgICAgIGlmIChzZXR0aW5ncy5kcmFnX2Ryb3AgJiYgc2V0dGluZ3MuYWxsb3dfdXAgJiYgc2V0dGluZ3MuYWxsb3dfZG93bikge1xuICAgICAgICB2YXIgb2xkUG9zaXRpb25cbiAgICAgICAgdmFyIG5ld1Bvc2l0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5LnVpID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgalF1ZXJ5LnVpLnNvcnRhYmxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNldHRpbmdzLmRyYWdfZHJvcCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zb3J0YWJsZSgkLmV4dGVuZCh0cnVlLCB7fSwge1xuICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHVpLml0ZW1cbiAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmRyYWdfZHJvcF9zdGFydChldmVudCwgdWksIGVsZW1lbnRzLCBlbGVtZW50KSkpIHtcbiAgICAgICAgICAgICAgICB0aGF0LnNvcnRhYmxlKCdjYW5jZWwnKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHVpLnBsYWNlaG9sZGVyLmhlaWdodCh1aS5pdGVtLmhlaWdodCgpKVxuICAgICAgICAgICAgICB1aS5wbGFjZWhvbGRlci53aWR0aCh1aS5pdGVtLndpZHRoKCkpXG4gICAgICAgICAgICAgIG9sZFBvc2l0aW9uID0gZWxlbWVudHMuaW5kZXgoZWxlbWVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHVpLml0ZW1cbiAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgICAgIHRoYXQuc29ydGFibGUoJ2NhbmNlbCcpXG4gICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gc2V0dGluZ3MuZHJhZ19kcm9wX3VwZGF0ZShldmVudCwgdWksIGVsZW1lbnRzLCBlbGVtZW50KSB8fCAhKG5ld1Bvc2l0aW9uIC0gb2xkUG9zaXRpb24gPiAwID8gdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV91cChjb2xsZWN0aW9uLCBlbGVtZW50KSkgOiB0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYmVmb3JlX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudCkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gZWxlbWVudHMuaW5kZXgoZWxlbWVudClcbiAgICAgICAgICAgICAgZWxlbWVudHMgPSBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgICAgICAgICAgIGRvTW92ZShjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIG9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBzZXR0aW5ncy5kcmFnX2Ryb3Bfb3B0aW9ucykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJywgc2V0dGluZ3MpXG5cbiAgICAgIC8vIGV2ZW50cyBvbiBidXR0b25zIHVzaW5nIGEgXCJzdGF0aWNcIiBjb250YWluZXIgc28gZXZlbiBuZXdseVxuICAgICAgLy8gY3JlYXRlZC9hamF4IGRvd25sb2FkZWQgYnV0dG9ucyBkb2Vzbid0IG5lZWQgZnVydGhlciBpbml0aWFsaXphdGlvblxuICAgICAgdmFyIGNvbnRhaW5lciA9ICQoc2V0dGluZ3MuY29udGFpbmVyKVxuICAgICAgY29udGFpbmVyXG4gICAgICAgIC5vZmYoJ2NsaWNrJywgJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nKVxuICAgICAgICAub24oJ2NsaWNrJywgJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG5cbiAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9ICQoJyMnICsgdGhhdC5kYXRhKCdjb2xsZWN0aW9uJykpXG4gICAgICAgICAgdmFyIHNldHRpbmdzID0gY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJylcblxuICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHNldHRpbmdzKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9ICQoJyMnICsgdGhhdC5kYXRhKCdjb2xsZWN0aW9uJykpLmZpbmQoJy4nICsgdGhhdC5kYXRhKCdjb2xsZWN0aW9uJykgKyAnLWNvbGxlY3Rpb24nKVxuICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJylcbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgIHRocm93ICdDYW5cXCd0IGZpbmQgY29sbGVjdGlvbjogJyArIHRoYXQuZGF0YSgnY29sbGVjdGlvbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhhdC5kYXRhKCdlbGVtZW50JykgPyAkKCcjJyArIHRoYXQuZGF0YSgnZWxlbWVudCcpKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIHZhciBpbmRleCA9IGVsZW1lbnQgJiYgZWxlbWVudC5sZW5ndGggPyBlbGVtZW50cy5pbmRleChlbGVtZW50KSA6IC0xXG4gICAgICAgICAgdmFyIGV2ZW50ID0gbnVsbFxuXG4gICAgICAgICAgdmFyIGlzRHVwbGljYXRlID0gdGhhdC5pcygnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLWR1cGxpY2F0ZScpXG4gICAgICAgICAgaWYgKCh0aGF0LmlzKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctYWRkJykgfHwgdGhhdC5pcygnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLXJlc2N1ZS1hZGQnKSB8fCBpc0R1cGxpY2F0ZSkgJiYgc2V0dGluZ3MuYWxsb3dfYWRkKSB7XG4gICAgICAgICAgICBldmVudCA9ICdhZGQnXG4gICAgICAgICAgICBlbGVtZW50cyA9IGRvQWRkKGNvbnRhaW5lciwgdGhhdCwgY29sbGVjdGlvbiwgc2V0dGluZ3MsIGVsZW1lbnRzLCBlbGVtZW50LCBpbmRleCwgaXNEdXBsaWNhdGUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoYXQuaXMoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1yZW1vdmUnKSAmJiBzZXR0aW5ncy5hbGxvd19yZW1vdmUpIHtcbiAgICAgICAgICAgIGV2ZW50ID0gJ3JlbW92ZSdcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9EZWxldGUoY29sbGVjdGlvbiwgc2V0dGluZ3MsIGVsZW1lbnRzLCBlbGVtZW50LCBpbmRleClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhhdC5pcygnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLXVwJykgJiYgc2V0dGluZ3MuYWxsb3dfdXApIHtcbiAgICAgICAgICAgIGV2ZW50ID0gJ3VwJ1xuICAgICAgICAgICAgZWxlbWVudHMgPSBkb1VwKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoYXQuaXMoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1kb3duJykgJiYgc2V0dGluZ3MuYWxsb3dfZG93bikge1xuICAgICAgICAgICAgZXZlbnQgPSAnZG93bidcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9Eb3duKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZHVtcENvbGxlY3Rpb25BY3Rpb25zKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBmYWxzZSwgZXZlbnQpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH0pIC8vIC5vblxuXG4gICAgICBkdW1wQ29sbGVjdGlvbkFjdGlvbnMoY29sbGVjdGlvbiwgc2V0dGluZ3MsIHRydWUpXG4gICAgICBlbmFibGVDaGlsZHJlbkNvbGxlY3Rpb25zKGNvbGxlY3Rpb24sIG51bGwsIHNldHRpbmdzKVxuXG4gICAgICAvLyBpZiBjb2xsZWN0aW9uIGVsZW1lbnRzIGFyZSBnaXZlbiBpbiB0aGUgd3Jvbmcgb3JkZXIsIHBsdWdpblxuICAgICAgLy8gbXVzdCByZW9yZGVyIHRoZW0gZ3JhcGhpY2FsbHlcbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXVxuICAgICAgICB2YXIgZWxlbWVudHMgPSBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgICAgIGVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogcGFyc2VGbG9hdChnZXRGaWVsZFZhbHVlKHRoYXQuZmluZChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3RvcikpKSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoYXRcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiAoYS5wb3NpdGlvbiA8IGIucG9zaXRpb24gPyAtMSA6IChhLnBvc2l0aW9uID4gYi5wb3NpdGlvbiA/IDEgOiAwKSlcbiAgICAgICAgfVxuICAgICAgICBhcnJheS5zb3J0KHNvcnRlcilcblxuICAgICAgICAkLmVhY2goYXJyYXksIGZ1bmN0aW9uIChuZXdJbmRleCwgb2JqZWN0KSB7XG4gICAgICAgICAgdmFyIGlkcyA9IFtdXG4gICAgICAgICAgJChlbGVtZW50cykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlkcy5wdXNoKCQodGhpcykuYXR0cignaWQnKSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBvYmplY3QuZWxlbWVudFxuICAgICAgICAgIHZhciBvbGRJbmRleCA9ICQuaW5BcnJheShlbGVtZW50LmF0dHIoJ2lkJyksIGlkcylcblxuICAgICAgICAgIGlmIChuZXdJbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9Nb3ZlKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KVxuICAgICAgICAgICAgcHV0RmllbGRWYWx1ZShlbGVtZW50LmZpbmQoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpLCBlbGVtZW50cy5pbmRleChlbGVtZW50KSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IC8vIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuXG4gICAgICBzZXR0aW5ncy5hZnRlcl9pbml0KGNvbGxlY3Rpb24pXG5cbiAgICB9KSAvLyBlbGVtLmVhY2hcblxuICAgIHJldHVybiB0cnVlXG4gIH0gLy8gJC5mbi5jb2xsZWN0aW9uXG5cbn0pXG4oalF1ZXJ5KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==