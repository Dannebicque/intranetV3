(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["apc"],{

/***/ "./assets/js/pages/apc.js":
/*!********************************!*\
  !*** ./assets/js/pages/apc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_jquery_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/jquery.collection */ "./assets/vendor/jquery.collection.js");
/* harmony import */ var _vendor_jquery_collection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_collection__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/apc.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01

var semestreSae = false;
var semestreRessource = false;
var semestre = null;
var competenceSae = false;
var competenceRessource = false;
$(document).on('change', 'input:radio[name="apc_sae[semestre]"]', function (e) {
  semestre = $(this).val();
  semestreSae = true;
  updateSaeApprentisagesCritiques();
  updateSaeRessources();
});
$(document).on('change', 'input:checkbox[name="apc_sae[competences][]"]', function (e) {
  competenceSae = $('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0;
  updateSaeApprentisagesCritiques();
});
$(document).on('change', 'input:radio[name="apc_ressource[semestre]"]', function (e) {
  semestre = $(this).val();
  semestreRessource = true;
  updateRessourcesApprentisagesCritiques();
  updateRessourceSae();
});
$(document).on('change', 'input:checkbox[name="apc_ressource[competences][]"]', function (e) {
  competenceRessource = $('input:checkbox[name="apc_ressource[competences][]"]:checked').length > 0;
  updateRessourcesApprentisagesCritiques();
});

function updateSaeRessources() {
  if (semestreSae === true) {
    $.ajax({
      url: Routing.generate('administration_apc_ressources_ajax'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        sae: sae
      },
      success: function success(data) {
        var html = '<div class="row">';

        if (data !== false) {
          for (var ressource in data) {
            html = html + '<div class="col-md-6">' + '<div class="form-check">' + '<input type="checkbox" id="ressource_' + data[ressource].id + '" name="ressources[]" class="form-check-input" value="' + data[ressource].id + '" ' + data[ressource].checked + '>\n' + '<label class="form-check-label" for="ressource_' + data[ressource].id + '">' + data[ressource].code + ' ' + data[ressource].libelle + '</label></div>' + '</div>';
          }

          html = html + '</div>';
        }

        $('#ressourcesSae').html(html);
      }
    });
  } else {
    var html = '<div class="alert alert-warning">Indiquer un semestre</div>';
    $('#ressourcesSae').html(html);
  }
}

function updateSaeApprentisagesCritiques() {
  if (competenceSae === true && semestreSae === true) {
    var comps = [];
    $.each($('input:checkbox[name="apc_sae[competences][]"]:checked'), function () {
      comps.push($(this).val());
    });
    $.ajax({
      url: Routing.generate('administration_apc_sae_ajax_ac'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        competences: comps,
        sae: sae
      },
      success: function success(data) {
        var html = '';

        if (data !== false) {
          for (var comp in data) {
            html = html + '<p>' + comp + '</p><div class="row">';

            for (var ac in data[comp]) {
              html = html + '<div class="col-md-6">' + '<div class="form-check">' + '<input type="checkbox" id="ac_' + data[comp][ac].id + '" name="ac[]" class="form-check-input" value="' + data[comp][ac].id + '" ' + data[comp][ac].checked + '>\n' + '<label class="form-check-label" for="ac_' + data[comp][ac].id + '">' + data[comp][ac].code + ' : ' + data[comp][ac].libelle + '</label></div>' + '</div>';
            }

            html = html + '</div>';
          }
        } else {
          html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>';
        }

        $('#acSae').html(html);
      }
    });
  } else {
    var html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>';
    $('#acSae').html(html);
  }
}

function updateRessourceSae() {
  if (semestreRessource === true) {
    $.ajax({
      url: Routing.generate('administration_apc_sae_ajax'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        ressource: ressource
      },
      success: function success(data) {
        var html = '<div class="row">';

        if (data !== false) {
          for (var ressource in data) {
            html = html + '<div class="col-md-6">' + '<div class="form-check">' + '<input type="checkbox" id="sae_' + data[ressource].id + '" name="saes[]" class="form-check-input" value="' + data[ressource].id + '" ' + data[ressource].checked + '>\n' + '<label class="form-check-label" for="sae_' + data[ressource].id + '">' + data[ressource].code + ' : ' + data[ressource].libelle + '</label></div>' + '</div>';
          }

          html = html + '</div>';
        }

        $('#saeRessource').html(html);
      }
    });
  } else {
    var html = '<div class="alert alert-warning">Indiquer un semestre</div>';
    $('#saeRessource').html(html);
  }
}

function updateRessourcesApprentisagesCritiques() {
  if (competenceRessource === true && semestreRessource === true) {
    var comps = [];
    $.each($('input:checkbox[name="apc_ressource[competences][]"]:checked'), function () {
      comps.push($(this).val());
    });
    $.ajax({
      url: Routing.generate('administration_apc_ressources_ajax_ac'),
      type: 'POST',
      dataType: 'json',
      data: {
        semestre: semestre,
        competences: comps,
        ressource: ressource
      },
      success: function success(data) {
        var html = '';

        if (data !== false) {
          for (var comp in data) {
            html = html + '<p>' + comp + '</p><div class="row">';

            for (var ac in data[comp]) {
              html = html + '<div class="col-md-6">' + '<div class="form-check">' + '<input type="checkbox" id="ac_' + data[comp][ac].id + '" name="ac[]" class="form-check-input" value="' + data[comp][ac].id + '" ' + data[comp][ac].checked + '>\n' + '<label class="form-check-label" for="ac_' + data[comp][ac].id + '">' + data[comp][ac].code + ' : ' + data[comp][ac].libelle + '</label></div>' + '</div>';
            }

            html = html + '</div>';
          }
        } else {
          html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>';
        }

        $('#acRessources').html(html);
      }
    });
  } else {
    var html = '<div class="alert alert-warning">Indiquer un semestre et au moins une compétence</div>';
    $('#acRessources').html(html);
  }
}

$(document).ready(function () {
  semestreSae = true; //$('input:radio[name="apc_sae[semestre]"]:checked').length() === 1

  semestreRessource = true; //$('input:radio[name="apc_sae[semestre]"]:checked').length() === 1

  if (sae !== null) {
    semestre = $('input:radio[name="apc_sae[semestre]"]:checked').val();
  }

  if (ressource !== null) {
    semestre = $('input:radio[name="apc_ressource[semestre]"]:checked').val();
  }

  competenceSae = $('input:checkbox[name="apc_sae[competences][]"]:checked').length > 0;
  competenceRessource = $('input:checkbox[name="apc_ressource[competences][]"]:checked').length > 0;
  updateSaeApprentisagesCritiques();
  updateRessourcesApprentisagesCritiques();
  updateRessourceSae();
  updateSaeRessources();
  var niveauCompetence = $('.selector-niveauCompetence');

  if (niveauCompetence.length > 0) {
    niveauCompetence.collection();
    $(document).on('click', '.apc_competence_apcNiveaux-collection-action', function () {
      var apprentissageCritique = $('.selector-apprentissageCritique');

      if (apprentissageCritique.length > 0) {
        apprentissageCritique.collection();
      }
    });
  }

  var niveauComposanteEssentielles = $('.selector-niveauComposanteEssentielles');

  if (niveauComposanteEssentielles.length > 0) {
    niveauComposanteEssentielles.collection();
  }

  var apcRessourceApprentissageCritique = $('.selector-apcRessourceApprentissageCritique');

  if (apcRessourceApprentissageCritique.length > 0) {
    apcRessourceApprentissageCritique.collection();
  }

  var apprentissageCritique = $('.selector-apprentissageCritique');

  if (apprentissageCritique.length > 0) {
    apprentissageCritique.collection();
  }

  var niveauSituationsProfessionnelles = $('.selector-niveauSituationsProfessionnelles');

  if (niveauSituationsProfessionnelles.length > 0) {
    niveauSituationsProfessionnelles.collection();
  }
});
$(document).on('change', '.checkNiveau', function (e) {
  var etat = 0;

  if ($(this).is(':checked')) {
    etat = 1;
  }

  var parcours = $(this).data('parcours');
  $.ajax({
    url: Routing.generate('administration_apc_parcours_niveau_ajax', {
      'parcours': parcours,
      'etat': etat,
      'niveau': $(this).val()
    }),
    success: function success(data) {}
  });
});

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

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_j-dfa474"], () => (__webpack_exec__("./assets/js/pages/apc.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FwYy5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL3ZlbmRvci9qcXVlcnkuY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyJdLCJuYW1lcyI6WyJzZW1lc3RyZVNhZSIsInNlbWVzdHJlUmVzc291cmNlIiwic2VtZXN0cmUiLCJjb21wZXRlbmNlU2FlIiwiY29tcGV0ZW5jZVJlc3NvdXJjZSIsIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInZhbCIsInVwZGF0ZVNhZUFwcHJlbnRpc2FnZXNDcml0aXF1ZXMiLCJ1cGRhdGVTYWVSZXNzb3VyY2VzIiwibGVuZ3RoIiwidXBkYXRlUmVzc291cmNlc0FwcHJlbnRpc2FnZXNDcml0aXF1ZXMiLCJ1cGRhdGVSZXNzb3VyY2VTYWUiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZSIsImRhdGFUeXBlIiwiZGF0YSIsInNhZSIsInN1Y2Nlc3MiLCJodG1sIiwicmVzc291cmNlIiwiaWQiLCJjaGVja2VkIiwiY29kZSIsImxpYmVsbGUiLCJjb21wcyIsImVhY2giLCJwdXNoIiwiY29tcGV0ZW5jZXMiLCJjb21wIiwiYWMiLCJyZWFkeSIsIm5pdmVhdUNvbXBldGVuY2UiLCJjb2xsZWN0aW9uIiwiYXBwcmVudGlzc2FnZUNyaXRpcXVlIiwibml2ZWF1Q29tcG9zYW50ZUVzc2VudGllbGxlcyIsImFwY1Jlc3NvdXJjZUFwcHJlbnRpc3NhZ2VDcml0aXF1ZSIsIm5pdmVhdVNpdHVhdGlvbnNQcm9mZXNzaW9ubmVsbGVzIiwiZXRhdCIsImlzIiwicGFyY291cnMiLCJmbiIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsImNvbnRhaW5lciIsImFsbG93X3VwIiwidXAiLCJiZWZvcmVfdXAiLCJlbGVtZW50IiwiYWZ0ZXJfdXAiLCJhbGxvd19kb3duIiwiZG93biIsImJlZm9yZV9kb3duIiwiYWZ0ZXJfZG93biIsImFsbG93X2FkZCIsImFkZCIsImJlZm9yZV9hZGQiLCJhZnRlcl9hZGQiLCJhbGxvd19yZW1vdmUiLCJyZW1vdmUiLCJiZWZvcmVfcmVtb3ZlIiwiYWZ0ZXJfcmVtb3ZlIiwiYWxsb3dfZHVwbGljYXRlIiwiZHVwbGljYXRlIiwiYmVmb3JlX2R1cGxpY2F0ZSIsImFmdGVyX2R1cGxpY2F0ZSIsImJlZm9yZV9pbml0IiwiYWZ0ZXJfaW5pdCIsIm1pbiIsIm1heCIsImFkZF9hdF90aGVfZW5kIiwicHJlZml4IiwicHJvdG90eXBlX25hbWUiLCJuYW1lX3ByZWZpeCIsImVsZW1lbnRzX3NlbGVjdG9yIiwiZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yIiwiY2hpbGRyZW4iLCJpbml0X3dpdGhfbl9lbGVtZW50cyIsImhpZGVfdXNlbGVzc19idXR0b25zIiwiZHJhZ19kcm9wIiwiZHJhZ19kcm9wX29wdGlvbnMiLCJkcmFnX2Ryb3Bfc3RhcnQiLCJldmVudCIsInVpIiwiZHJhZ19kcm9wX3VwZGF0ZSIsImN1c3RvbV9hZGRfbG9jYXRpb24iLCJhY3Rpb25fY29udGFpbmVyX3RhZyIsImZhZGVfaW4iLCJmYWRlX291dCIsInBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yIiwicHJlc2VydmVfbmFtZXMiLCJyYW5kb21OdW1iZXIiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwicmVwbGFjZSIsInNwbGl0Iiwic29ydCIsImpvaW4iLCJnZXRPckNyZWF0ZUlkIiwib2JqIiwiYXR0ciIsImdlbmVyYXRlZF9pZCIsImdldEZpZWxkVmFsdWUiLCJzZWxlY3RvciIsImpxRWxlbSIsInByb3AiLCJ1bmRlZmluZWQiLCJwdXRGaWVsZFZhbHVlIiwidmFsdWUiLCJwaHlzaWNhbCIsInJlbW92ZUF0dHIiLCJ0cnVlT3JVbmRlZmluZWQiLCJwcmVnUXVvdGUiLCJzdHJpbmciLCJyZXBsYWNlQXR0ckRhdGEiLCJlbGVtZW50cyIsImluZGV4IiwidG9SZXBsYWNlIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQXR0ckRhdGFOb2RlIiwibm9kZSIsImpxTm9kZSIsImF0dHJpYnV0ZXMiLCJpIiwiYXR0cmliIiwibmFtZSIsImVxIiwiZmluZCIsImNoYW5nZUVsZW1lbnRJbmRleCIsInNldHRpbmdzIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIlJlZ0V4cCIsImtleSIsImNoaWxkIiwiY2hpbGRDb2xsZWN0aW9uIiwiY2hpbGRTZXR0aW5ncyIsImNoYW5nZUh0bWxJbmRleCIsIm9sZEtleSIsIm5ld0tleSIsInB1dEZpZWxkVmFsdWVzSW5Eb20iLCJpbnB1dE9iaiIsInN3YXBFbGVtZW50cyIsImluc2VydEJlZm9yZSIsImluc2VydEFmdGVyIiwic3dhcEVsZW1lbnRzVXAiLCJzd2FwRWxlbWVudHNEb3duIiwic2hpZnRFbGVtZW50c1VwIiwic2hpZnRFbGVtZW50c0Rvd24iLCJkdW1wQ29sbGVjdGlvbkFjdGlvbnMiLCJpc0luaXRpYWxpemF0aW9uIiwiZWxlbWVudHNQYXJlbnQiLCJpbml0IiwiYXBwZW5kIiwiYWRkQ2xhc3MiLCJidXR0b24iLCJmaXJzdCIsInNlY3VyZSIsImxhc3QiLCJkb0FkZCIsImNvbnNvbGUiLCJlcnJvciIsImFjdGlvbnMiLCJhZGRCYWNrIiwiZmlsdGVyIiwiZGVsdGEiLCJidXR0b25zIiwiZW5hYmxlZCIsImFjdGlvbiIsImFwcGVuZFRvIiwiY29uZGl0aW9uIiwicmVtb3ZlQ2xhc3MiLCJjc3MiLCJyZXNjdWVBZGQiLCJhZGRzIiwiZmFkZUluIiwiZW5hYmxlQ2hpbGRyZW5Db2xsZWN0aW9ucyIsImNoaWxkcmVuU2V0dGluZ3MiLCJsb2ciLCJ0aGF0IiwiaXNEdXBsaWNhdGUiLCJwcm90b3R5cGUiLCJmcmVlSW5kZXgiLCJyZWdleHAiLCJmcmVlS2V5IiwiZmluZEZyZWVOdW1lcmljS2V5Iiwic2V0UmlnaHRQcmVmaXgiLCJ0bXAiLCJvbGRFbGVtZW50Iiwib2xkSHRtbCIsImNsb25lIiwiZ2V0RWxlbWVudEtleSIsIm5ld0h0bWwiLCJjb250ZW50cyIsImhpZGUiLCJiZWZvcmUiLCJkb01vdmUiLCJkb1Jld3JpdGVQb3NpdGlvbnMiLCJkb0RlbGV0ZSIsImRlbGV0aW9uIiwidG9EZWxldGUiLCJiYWNrdXAiLCJ3aXRoRGF0YUFuZEV2ZW50cyIsInNob3ciLCJmYWRlT3V0IiwiZG9VcCIsImRvRG93biIsImFicyIsInNsaWNlIiwidGVzdCIsIk51bWJlciIsInN1ZmZpeGVzIiwic3VmZml4IiwiaGFzQ2xhc3MiLCJ1c2VyX3ByZWZpeCIsImhlcmUiLCJlbGVtcyIsImV4dGVuZCIsImVsZW0iLCJqUXVlcnkiLCJzb3J0YWJsZSIsIm9sZFBvc2l0aW9uIiwibmV3UG9zaXRpb24iLCJzdGFydCIsIml0ZW0iLCJwbGFjZWhvbGRlciIsImhlaWdodCIsIndpZHRoIiwidXBkYXRlIiwib2ZmIiwicHJldmVudERlZmF1bHQiLCJhcnJheSIsInBvc2l0aW9uIiwicGFyc2VGbG9hdCIsInNvcnRlciIsImEiLCJiIiwib2JqZWN0IiwiaWRzIiwiaW5BcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFdBQVcsR0FBRyxLQUFsQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLEtBQXhCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQWY7QUFDQSxJQUFJQyxhQUFhLEdBQUcsS0FBcEI7QUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxLQUExQjtBQUVBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5Qix1Q0FBekIsRUFBa0UsVUFBVUMsQ0FBVixFQUFhO0FBQzdFTixVQUFRLEdBQUdHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksR0FBUixFQUFYO0FBQ0FULGFBQVcsR0FBRyxJQUFkO0FBQ0FVLGlDQUErQjtBQUMvQkMscUJBQW1CO0FBQ3BCLENBTEQ7QUFPQU4sQ0FBQyxDQUFDQyxRQUFE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Q0FBUXVHLElBQVIsQ0FBYSxJQUFiLENBQVQ7QUFDRCxXQUZEO0FBSUEsY0FBSXZELE9BQU8sR0FBR2dNLE1BQU0sQ0FBQ2hNLE9BQXJCO0FBQ0EsY0FBSXFGLFFBQVEsR0FBR3JJLENBQUMsQ0FBQ2tQLE9BQUYsQ0FBVWxNLE9BQU8sQ0FBQ3VELElBQVIsQ0FBYSxJQUFiLENBQVYsRUFBOEIwSSxHQUE5QixDQUFmOztBQUVBLGNBQUkzRyxRQUFRLEtBQUtELFFBQWpCLEVBQTJCO0FBQ3pCZixvQkFBUSxHQUFHaUYsTUFBTSxDQUFDdEssVUFBRCxFQUFhbUcsUUFBYixFQUF1QmQsUUFBdkIsRUFBaUN0RSxPQUFqQyxFQUEwQ3FGLFFBQTFDLEVBQW9EQyxRQUFwRCxDQUFqQjtBQUNBeEIseUJBQWEsQ0FBQzlELE9BQU8sQ0FBQ2tGLElBQVIsQ0FBYUUsUUFBUSxDQUFDM0MsdUJBQXRCLENBQUQsRUFBaUQ2QixRQUFRLENBQUNDLEtBQVQsQ0FBZXZFLE9BQWYsQ0FBakQsQ0FBYjtBQUNEO0FBQ0YsU0FiRDtBQWNELE9BdE9vQixDQXNPbkI7OztBQUVGb0YsY0FBUSxDQUFDakUsVUFBVCxDQUFvQmxDLFVBQXBCO0FBRUQsS0ExT0QsRUFwdUJtQyxDQTg4QmhDOztBQUVILFdBQU8sSUFBUDtBQUNELEdBajlCRCxDQUZZLENBbTlCVjs7QUFFSCxDQXI5QkQsRUFzOUJDNkwsTUF0OUJELEU7Ozs7Ozs7Ozs7QUNQQSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsYUFBYSxtQkFBTyxDQUFDLHFGQUE0QjtBQUNqRCwyQkFBMkIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hcGMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMi8wOS8yMDIxIDA5OjAxXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9qcXVlcnkuY29sbGVjdGlvbidcblxubGV0IHNlbWVzdHJlU2FlID0gZmFsc2VcbmxldCBzZW1lc3RyZVJlc3NvdXJjZSA9IGZhbHNlXG5sZXQgc2VtZXN0cmUgPSBudWxsXG5sZXQgY29tcGV0ZW5jZVNhZSA9IGZhbHNlXG5sZXQgY29tcGV0ZW5jZVJlc3NvdXJjZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnaW5wdXQ6cmFkaW9bbmFtZT1cImFwY19zYWVbc2VtZXN0cmVdXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpXG4gIHNlbWVzdHJlU2FlID0gdHJ1ZVxuICB1cGRhdGVTYWVBcHByZW50aXNhZ2VzQ3JpdGlxdWVzKClcbiAgdXBkYXRlU2FlUmVzc291cmNlcygpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJ2lucHV0OmNoZWNrYm94W25hbWU9XCJhcGNfc2FlW2NvbXBldGVuY2VzXVtdXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgY29tcGV0ZW5jZVNhZSA9ICQoJ2lucHV0OmNoZWNrYm94W25hbWU9XCJhcGNfc2FlW2NvbXBldGVuY2VzXVtdXCJdOmNoZWNrZWQnKS5sZW5ndGggPiAwXG4gIHVwZGF0ZVNhZUFwcHJlbnRpc2FnZXNDcml0aXF1ZXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICdpbnB1dDpyYWRpb1tuYW1lPVwiYXBjX3Jlc3NvdXJjZVtzZW1lc3RyZV1cIl0nLCBmdW5jdGlvbiAoZSkge1xuICBzZW1lc3RyZSA9ICQodGhpcykudmFsKClcbiAgc2VtZXN0cmVSZXNzb3VyY2UgPSB0cnVlXG4gIHVwZGF0ZVJlc3NvdXJjZXNBcHByZW50aXNhZ2VzQ3JpdGlxdWVzKClcbiAgdXBkYXRlUmVzc291cmNlU2FlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnaW5wdXQ6Y2hlY2tib3hbbmFtZT1cImFwY19yZXNzb3VyY2VbY29tcGV0ZW5jZXNdW11cIl0nLCBmdW5jdGlvbiAoZSkge1xuICBjb21wZXRlbmNlUmVzc291cmNlID0gJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1cImFwY19yZXNzb3VyY2VbY29tcGV0ZW5jZXNdW11cIl06Y2hlY2tlZCcpLmxlbmd0aCA+IDBcbiAgdXBkYXRlUmVzc291cmNlc0FwcHJlbnRpc2FnZXNDcml0aXF1ZXMoKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlU2FlUmVzc291cmNlcyAoKSB7XG4gIGlmIChzZW1lc3RyZVNhZSA9PT0gdHJ1ZSkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2FwY19yZXNzb3VyY2VzX2FqYXgnKSxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlbWVzdHJlOiBzZW1lc3RyZSxcbiAgICAgICAgc2FlOiBzYWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicm93XCI+J1xuICAgICAgICBpZiAoZGF0YSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBmb3IgKHZhciByZXNzb3VyY2UgaW4gZGF0YSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPicgK1xuICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicmVzc291cmNlXycgKyBkYXRhW3Jlc3NvdXJjZV0uaWQgKyAnXCIgbmFtZT1cInJlc3NvdXJjZXNbXVwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHZhbHVlPVwiJyArIGRhdGFbcmVzc291cmNlXS5pZCArICdcIiAnICsgZGF0YVtyZXNzb3VyY2VdLmNoZWNrZWQgKyAnPlxcbicgK1xuICAgICAgICAgICAgICAnPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInJlc3NvdXJjZV8nICsgZGF0YVtyZXNzb3VyY2VdLmlkICsgJ1wiPicgKyBkYXRhW3Jlc3NvdXJjZV0uY29kZSArICcgJyArIGRhdGFbcmVzc291cmNlXS5saWJlbGxlICsgJzwvbGFiZWw+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwgPSBodG1sICsgJzwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICAkKCcjcmVzc291cmNlc1NhZScpLmh0bWwoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+SW5kaXF1ZXIgdW4gc2VtZXN0cmU8L2Rpdj4nXG4gICAgJCgnI3Jlc3NvdXJjZXNTYWUnKS5odG1sKGh0bWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU2FlQXBwcmVudGlzYWdlc0NyaXRpcXVlcyAoKSB7XG4gIGlmIChjb21wZXRlbmNlU2FlID09PSB0cnVlICYmIHNlbWVzdHJlU2FlID09PSB0cnVlKSB7XG4gICAgbGV0IGNvbXBzID0gW11cblxuICAgICQuZWFjaCgkKCdpbnB1dDpjaGVja2JveFtuYW1lPVwiYXBjX3NhZVtjb21wZXRlbmNlc11bXVwiXTpjaGVja2VkJyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbXBzLnB1c2goJCh0aGlzKS52YWwoKSlcbiAgICB9KVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYXBjX3NhZV9hamF4X2FjJyksXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZW1lc3RyZTogc2VtZXN0cmUsXG4gICAgICAgIGNvbXBldGVuY2VzOiBjb21wcyxcbiAgICAgICAgc2FlOiBzYWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhICE9PSBmYWxzZSkge1xuXG4gICAgICAgICAgZm9yICh2YXIgY29tcCBpbiBkYXRhKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8cD4nICsgY29tcCArICc8L3A+PGRpdiBjbGFzcz1cInJvd1wiPidcbiAgICAgICAgICAgIGZvciAobGV0IGFjIGluIGRhdGFbY29tcF0pIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+JyArXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImFjXycgKyBkYXRhW2NvbXBdW2FjXS5pZCArICdcIiBuYW1lPVwiYWNbXVwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHZhbHVlPVwiJyArIGRhdGFbY29tcF1bYWNdLmlkICsgJ1wiICcgKyBkYXRhW2NvbXBdW2FjXS5jaGVja2VkICsgJz5cXG4nICtcbiAgICAgICAgICAgICAgICAnPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImFjXycgKyBkYXRhW2NvbXBdW2FjXS5pZCArICdcIj4nICsgZGF0YVtjb21wXVthY10uY29kZSArICcgOiAnICsgZGF0YVtjb21wXVthY10ubGliZWxsZSArICc8L2xhYmVsPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8L2Rpdj4nXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPkluZGlxdWVyIHVuIHNlbWVzdHJlIGV0IGF1IG1vaW5zIHVuZSBjb21ww6l0ZW5jZTwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICAkKCcjYWNTYWUnKS5odG1sKGh0bWwpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBsZXQgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPkluZGlxdWVyIHVuIHNlbWVzdHJlIGV0IGF1IG1vaW5zIHVuZSBjb21ww6l0ZW5jZTwvZGl2PidcbiAgICAkKCcjYWNTYWUnKS5odG1sKGh0bWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUmVzc291cmNlU2FlICgpIHtcbiAgaWYgKHNlbWVzdHJlUmVzc291cmNlID09PSB0cnVlKSB7XG5cblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2FwY19zYWVfYWpheCcpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgICByZXNzb3VyY2U6IHJlc3NvdXJjZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJyb3dcIj4nXG4gICAgICAgIGlmIChkYXRhICE9PSBmYWxzZSkge1xuXG4gICAgICAgICAgZm9yICh2YXIgcmVzc291cmNlIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj4nICtcbiAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNhZV8nICsgZGF0YVtyZXNzb3VyY2VdLmlkICsgJ1wiIG5hbWU9XCJzYWVzW11cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cIicgKyBkYXRhW3Jlc3NvdXJjZV0uaWQgKyAnXCIgJyArIGRhdGFbcmVzc291cmNlXS5jaGVja2VkICsgJz5cXG4nICtcbiAgICAgICAgICAgICAgJzxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJzYWVfJyArIGRhdGFbcmVzc291cmNlXS5pZCArICdcIj4nICsgZGF0YVtyZXNzb3VyY2VdLmNvZGUgKyAnIDogJyArIGRhdGFbcmVzc291cmNlXS5saWJlbGxlICsgJzwvbGFiZWw+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwgPSBodG1sICsgJzwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2FlUmVzc291cmNlJykuaHRtbChodG1sKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgbGV0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5JbmRpcXVlciB1biBzZW1lc3RyZTwvZGl2PidcbiAgICAkKCcjc2FlUmVzc291cmNlJykuaHRtbChodG1sKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJlc3NvdXJjZXNBcHByZW50aXNhZ2VzQ3JpdGlxdWVzICgpIHtcbiAgaWYgKGNvbXBldGVuY2VSZXNzb3VyY2UgPT09IHRydWUgJiYgc2VtZXN0cmVSZXNzb3VyY2UgPT09IHRydWUpIHtcbiAgICBsZXQgY29tcHMgPSBbXVxuICAgICQuZWFjaCgkKCdpbnB1dDpjaGVja2JveFtuYW1lPVwiYXBjX3Jlc3NvdXJjZVtjb21wZXRlbmNlc11bXVwiXTpjaGVja2VkJyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbXBzLnB1c2goJCh0aGlzKS52YWwoKSlcbiAgICB9KVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYXBjX3Jlc3NvdXJjZXNfYWpheF9hYycpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgICBjb21wZXRlbmNlczogY29tcHMsXG4gICAgICAgIHJlc3NvdXJjZTogcmVzc291cmNlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbGV0IGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YSAhPT0gZmFsc2UpIHtcblxuICAgICAgICAgIGZvciAodmFyIGNvbXAgaW4gZGF0YSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPHA+JyArIGNvbXAgKyAnPC9wPjxkaXYgY2xhc3M9XCJyb3dcIj4nXG4gICAgICAgICAgICBmb3IgKGxldCBhYyBpbiBkYXRhW2NvbXBdKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPicgK1xuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhY18nICsgZGF0YVtjb21wXVthY10uaWQgKyAnXCIgbmFtZT1cImFjW11cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cIicgKyBkYXRhW2NvbXBdW2FjXS5pZCArICdcIiAnICsgZGF0YVtjb21wXVthY10uY2hlY2tlZCArICc+XFxuJyArXG4gICAgICAgICAgICAgICAgJzxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJhY18nICsgZGF0YVtjb21wXVthY10uaWQgKyAnXCI+JyArIGRhdGFbY29tcF1bYWNdLmNvZGUgKyAnIDogJyArIGRhdGFbY29tcF1bYWNdLmxpYmVsbGUgKyAnPC9sYWJlbD48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPC9kaXY+J1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5JbmRpcXVlciB1biBzZW1lc3RyZSBldCBhdSBtb2lucyB1bmUgY29tcMOpdGVuY2U8L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgJCgnI2FjUmVzc291cmNlcycpLmh0bWwoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+SW5kaXF1ZXIgdW4gc2VtZXN0cmUgZXQgYXUgbW9pbnMgdW5lIGNvbXDDqXRlbmNlPC9kaXY+J1xuICAgICQoJyNhY1Jlc3NvdXJjZXMnKS5odG1sKGh0bWwpXG4gIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBzZW1lc3RyZVNhZSA9IHRydWUgLy8kKCdpbnB1dDpyYWRpb1tuYW1lPVwiYXBjX3NhZVtzZW1lc3RyZV1cIl06Y2hlY2tlZCcpLmxlbmd0aCgpID09PSAxXG4gIHNlbWVzdHJlUmVzc291cmNlID0gdHJ1ZSAvLyQoJ2lucHV0OnJhZGlvW25hbWU9XCJhcGNfc2FlW3NlbWVzdHJlXVwiXTpjaGVja2VkJykubGVuZ3RoKCkgPT09IDFcbiAgaWYgKHNhZSAhPT0gbnVsbCkge1xuICAgIHNlbWVzdHJlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZT1cImFwY19zYWVbc2VtZXN0cmVdXCJdOmNoZWNrZWQnKS52YWwoKVxuICB9XG4gIGlmIChyZXNzb3VyY2UgIT09IG51bGwpIHtcbiAgICBzZW1lc3RyZSA9ICQoJ2lucHV0OnJhZGlvW25hbWU9XCJhcGNfcmVzc291cmNlW3NlbWVzdHJlXVwiXTpjaGVja2VkJykudmFsKClcbiAgfVxuICBjb21wZXRlbmNlU2FlID0gJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1cImFwY19zYWVbY29tcGV0ZW5jZXNdW11cIl06Y2hlY2tlZCcpLmxlbmd0aCA+IDBcbiAgY29tcGV0ZW5jZVJlc3NvdXJjZSA9ICQoJ2lucHV0OmNoZWNrYm94W25hbWU9XCJhcGNfcmVzc291cmNlW2NvbXBldGVuY2VzXVtdXCJdOmNoZWNrZWQnKS5sZW5ndGggPiAwXG4gIHVwZGF0ZVNhZUFwcHJlbnRpc2FnZXNDcml0aXF1ZXMoKVxuICB1cGRhdGVSZXNzb3VyY2VzQXBwcmVudGlzYWdlc0NyaXRpcXVlcygpXG4gIHVwZGF0ZVJlc3NvdXJjZVNhZSgpXG4gIHVwZGF0ZVNhZVJlc3NvdXJjZXMoKVxuXG5cbiAgbGV0IG5pdmVhdUNvbXBldGVuY2UgPSAkKCcuc2VsZWN0b3Itbml2ZWF1Q29tcGV0ZW5jZScpXG4gIGlmIChuaXZlYXVDb21wZXRlbmNlLmxlbmd0aCA+IDApIHtcbiAgICBuaXZlYXVDb21wZXRlbmNlLmNvbGxlY3Rpb24oKVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYXBjX2NvbXBldGVuY2VfYXBjTml2ZWF1eC1jb2xsZWN0aW9uLWFjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBhcHByZW50aXNzYWdlQ3JpdGlxdWUgPSAkKCcuc2VsZWN0b3ItYXBwcmVudGlzc2FnZUNyaXRpcXVlJylcbiAgICAgIGlmIChhcHByZW50aXNzYWdlQ3JpdGlxdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBhcHByZW50aXNzYWdlQ3JpdGlxdWUuY29sbGVjdGlvbigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxldCBuaXZlYXVDb21wb3NhbnRlRXNzZW50aWVsbGVzID0gJCgnLnNlbGVjdG9yLW5pdmVhdUNvbXBvc2FudGVFc3NlbnRpZWxsZXMnKVxuICBpZiAobml2ZWF1Q29tcG9zYW50ZUVzc2VudGllbGxlcy5sZW5ndGggPiAwKSB7XG4gICAgbml2ZWF1Q29tcG9zYW50ZUVzc2VudGllbGxlcy5jb2xsZWN0aW9uKClcbiAgfVxuXG4gIGxldCBhcGNSZXNzb3VyY2VBcHByZW50aXNzYWdlQ3JpdGlxdWUgPSAkKCcuc2VsZWN0b3ItYXBjUmVzc291cmNlQXBwcmVudGlzc2FnZUNyaXRpcXVlJylcbiAgaWYgKGFwY1Jlc3NvdXJjZUFwcHJlbnRpc3NhZ2VDcml0aXF1ZS5sZW5ndGggPiAwKSB7XG4gICAgYXBjUmVzc291cmNlQXBwcmVudGlzc2FnZUNyaXRpcXVlLmNvbGxlY3Rpb24oKVxuICB9XG5cbiAgbGV0IGFwcHJlbnRpc3NhZ2VDcml0aXF1ZSA9ICQoJy5zZWxlY3Rvci1hcHByZW50aXNzYWdlQ3JpdGlxdWUnKVxuICBpZiAoYXBwcmVudGlzc2FnZUNyaXRpcXVlLmxlbmd0aCA+IDApIHtcbiAgICBhcHByZW50aXNzYWdlQ3JpdGlxdWUuY29sbGVjdGlvbigpXG4gIH1cblxuICBsZXQgbml2ZWF1U2l0dWF0aW9uc1Byb2Zlc3Npb25uZWxsZXMgPSAkKCcuc2VsZWN0b3Itbml2ZWF1U2l0dWF0aW9uc1Byb2Zlc3Npb25uZWxsZXMnKVxuICBpZiAobml2ZWF1U2l0dWF0aW9uc1Byb2Zlc3Npb25uZWxsZXMubGVuZ3RoID4gMCkge1xuICAgIG5pdmVhdVNpdHVhdGlvbnNQcm9mZXNzaW9ubmVsbGVzLmNvbGxlY3Rpb24oKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGVja05pdmVhdScsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCBldGF0ID0gMFxuICBpZiAoKCQodGhpcykuaXMoJzpjaGVja2VkJykpKSB7XG4gICAgZXRhdCA9IDFcbiAgfVxuICBsZXQgcGFyY291cnMgPSAkKHRoaXMpLmRhdGEoJ3BhcmNvdXJzJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2FwY19wYXJjb3Vyc19uaXZlYXVfYWpheCcsIHtcbiAgICAgICdwYXJjb3Vycyc6IHBhcmNvdXJzLFxuICAgICAgJ2V0YXQnOiBldGF0LFxuICAgICAgJ25pdmVhdSc6ICQodGhpcykudmFsKClcbiAgICB9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgfVxuICB9KVxuXG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2pxdWVyeS5jb2xsZWN0aW9uLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMDMvMjAyMSAxODo0OVxuXG47XG4oZnVuY3Rpb24gKCQpIHtcblxuICAkLmZuLmNvbGxlY3Rpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBhbGxvd191cDogdHJ1ZSxcbiAgICAgIHVwOiAnPGEgaHJlZj1cIiNcIj4mI3gyNUIyOzwvYT4nLFxuICAgICAgYmVmb3JlX3VwOiBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGFmdGVyX3VwOiBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGFsbG93X2Rvd246IHRydWUsXG4gICAgICBkb3duOiAnPGEgaHJlZj1cIiNcIj4mI3gyNUJDOzwvYT4nLFxuICAgICAgYmVmb3JlX2Rvd246IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgYWZ0ZXJfZG93bjogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhbGxvd19hZGQ6IHRydWUsXG4gICAgICBhZGQ6ICc8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPjwvYT4nLFxuICAgICAgYmVmb3JlX2FkZDogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhZnRlcl9hZGQ6IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgYWxsb3dfcmVtb3ZlOiB0cnVlLFxuICAgICAgcmVtb3ZlOiAnPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1taW51cy1jaXJjbGVcIj48L2k+PC9hPicsXG4gICAgICBiZWZvcmVfcmVtb3ZlOiBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGFmdGVyX3JlbW92ZTogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhbGxvd19kdXBsaWNhdGU6IGZhbHNlLFxuICAgICAgZHVwbGljYXRlOiAnPGEgaHJlZj1cIiNcIj5bICMgXTwvYT4nLFxuICAgICAgYmVmb3JlX2R1cGxpY2F0ZTogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBhZnRlcl9kdXBsaWNhdGU6IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgYmVmb3JlX2luaXQ6IGZ1bmN0aW9uIChjb2xsZWN0aW9uKSB7XG4gICAgICB9LFxuICAgICAgYWZ0ZXJfaW5pdDogZnVuY3Rpb24gKGNvbGxlY3Rpb24pIHtcbiAgICAgIH0sXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMCxcbiAgICAgIGFkZF9hdF90aGVfZW5kOiBmYWxzZSxcbiAgICAgIHByZWZpeDogJ2NvbGxlY3Rpb24nLFxuICAgICAgcHJvdG90eXBlX25hbWU6ICdfX25hbWVfXycsXG4gICAgICBuYW1lX3ByZWZpeDogbnVsbCxcbiAgICAgIGVsZW1lbnRzX3NlbGVjdG9yOiAnPiBkaXYsID4gZmllbGRzZXQnLFxuICAgICAgZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yOiAnJWlkJScsXG4gICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgIGluaXRfd2l0aF9uX2VsZW1lbnRzOiAwLFxuICAgICAgaGlkZV91c2VsZXNzX2J1dHRvbnM6IHRydWUsXG4gICAgICBkcmFnX2Ryb3A6IHRydWUsXG4gICAgICBkcmFnX2Ryb3Bfb3B0aW9uczoge1xuICAgICAgICAncGxhY2Vob2xkZXInOiAndWktc3RhdGUtaGlnaGxpZ2h0J1xuICAgICAgfSxcbiAgICAgIGRyYWdfZHJvcF9zdGFydDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRyYWdfZHJvcF91cGRhdGU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBjdXN0b21fYWRkX2xvY2F0aW9uOiBmYWxzZSxcbiAgICAgIGFjdGlvbl9jb250YWluZXJfdGFnOiAnZGl2JyxcbiAgICAgIGZhZGVfaW46IHRydWUsXG4gICAgICBmYWRlX291dDogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yOiBudWxsLFxuICAgICAgcHJlc2VydmVfbmFtZXM6IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gdXNlZCB0byBnZW5lcmF0ZSByYW5kb20gaWQgYXR0cmlidXRlcyB3aGVuIHJlcXVpcmVkIGFuZCBtaXNzaW5nXG4gICAgdmFyIHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByYW5kID0gJycgKyBNYXRoLnJhbmRvbSgpICogMTAwMCAqIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICByZXR1cm4gcmFuZC5yZXBsYWNlKCcuJywgJycpLnNwbGl0KCcnKS5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKClcbiAgICAgIH0pLmpvaW4oJycpXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGFuIGVsZW1lbnQncyBpZCwgYWZ0ZXIgZ2VuZXJhdGluZyBvbmUgd2hlbiBtaXNzaW5nXG4gICAgdmFyIGdldE9yQ3JlYXRlSWQgPSBmdW5jdGlvbiAocHJlZml4LCBvYmopIHtcbiAgICAgIGlmICghb2JqLmF0dHIoJ2lkJykpIHtcbiAgICAgICAgdmFyIGdlbmVyYXRlZF9pZFxuICAgICAgICBkbyB7XG4gICAgICAgICAgZ2VuZXJhdGVkX2lkID0gcHJlZml4ICsgJ18nICsgcmFuZG9tTnVtYmVyKClcbiAgICAgICAgfSB3aGlsZSAoJCgnIycgKyBnZW5lcmF0ZWRfaWQpLmxlbmd0aCA+IDApXG4gICAgICAgIG9iai5hdHRyKCdpZCcsIGdlbmVyYXRlZF9pZClcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmouYXR0cignaWQnKVxuICAgIH1cblxuICAgIC8vIHJldHVybiBhIGZpZWxkIHZhbHVlIHdoYXRldmVyIHRoZSBmaWVsZCB0eXBlXG4gICAgdmFyIGdldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBqcUVsZW0gPSAkKHNlbGVjdG9yKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKGpxRWxlbS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0gZWxzZSBpZiAoanFFbGVtLmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkge1xuICAgICAgICByZXR1cm4gKGpxRWxlbS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgPyB0cnVlIDogZmFsc2UpXG4gICAgICB9IGVsc2UgaWYgKGpxRWxlbS5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykgJiYganFFbGVtLmF0dHIoJ25hbWUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAkKCdpbnB1dFtuYW1lPVwiJyArIGpxRWxlbS5hdHRyKCduYW1lJykgKyAnXCJdOmNoZWNrZWQnKS52YWwoKVxuICAgICAgfSBlbHNlIGlmIChqcUVsZW0ucHJvcCgndmFsdWUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBqcUVsZW0udmFsKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBqcUVsZW0uaHRtbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0IGEgZmllbGQgdmFsdWUgaW4gYWNjb3JkYW5jZSB0byB0aGUgZmllbGQgdHlwZVxuICAgIHZhciBwdXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCB2YWx1ZSwgcGh5c2ljYWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBqcUVsZW0gPSAkKHNlbGVjdG9yKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChqcUVsZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmIChqcUVsZW0uaXMoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGpxRWxlbS5hdHRyKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqcUVsZW0ucmVtb3ZlQXR0cignY2hlY2tlZCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoanFFbGVtLnByb3AoJ3ZhbHVlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGh5c2ljYWwpIHtcbiAgICAgICAgICBqcUVsZW0uYXR0cigndmFsdWUnLCB2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqcUVsZW0udmFsKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqcUVsZW0uaHRtbCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhIGNhbGxiYWNrIHNldCBpbiBhbiBldmVudCB3aWxsIGJlIGNvbnNpZGVyZWQgZmFpbGVkIGlmIGl0XG4gICAgLy8gcmV0dXJucyBmYWxzZSwgbnVsbCwgb3IgMC5cbiAgICB2YXIgdHJ1ZU9yVW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkID09PSB2YWx1ZSB8fCB2YWx1ZVxuICAgIH1cblxuICAgIC8vIHVzZWQgdG8gY2hhbmdlIGVsZW1lbnQgaW5kZXhlcyBpbiBhcmJpdGFyeSBpZCBhdHRyaWJ1dGVzXG4gICAgdmFyIHByZWdRdW90ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiAoc3RyaW5nICsgJycpLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZywgJ1xcXFwkJicpXG4gICAgfVxuXG4gICAgLy8gaWYgd2UgbmVlZCB0byBjaGFuZ2UgQ29sbGVjdGlvblR5cGVfZmllbGRfNDJfdmFsdWUgdG8gQ29sbGVjdGlvblR5cGVfZmllbGRfODRfdmFsdWUsIHRoaXMgbWV0aG9kXG4gICAgLy8gd2lsbCBjaGFuZ2UgaXQgaW4gaWQ9XCJDb2xsZWN0aW9uVHlwZV9maWVsZF80Ml92YWx1ZVwiLCBidXQgYWxzbyBkYXRhLWlkPVwiQ29sbGVjdGlvblR5cGVfZmllbGRfNDJfdmFsdWVcIlxuICAgIC8vIG9yIGFueXdoZXJlIGVsc2UganVzdCBpbiBjYXNlIGl0IGNvdWxkIGJlIHVzZWQgb3RoZXJ3aXNlLlxuICAgIHZhciByZXBsYWNlQXR0ckRhdGEgPSBmdW5jdGlvbiAoZWxlbWVudHMsIGluZGV4LCB0b1JlcGxhY2UsIHJlcGxhY2VXaXRoKSB7XG5cbiAgICAgIHZhciByZXBsYWNlQXR0ckRhdGFOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIGpxTm9kZSA9ICQobm9kZSlcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiAnYXR0cmlidXRlcycgaW4gbm9kZSkge1xuICAgICAgICAgICQuZWFjaChub2RlLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpLCBhdHRyaWIpIHtcbiAgICAgICAgICAgIGlmICgkLnR5cGUoYXR0cmliLnZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAganFOb2RlLmF0dHIoYXR0cmliLm5hbWUucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VXaXRoKSwgYXR0cmliLnZhbHVlLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoanFOb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAkLmVhY2goanFOb2RlLmRhdGEoKSwgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoJC50eXBlKHZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAganFOb2RlLmRhdGEobmFtZS5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpLCB2YWx1ZS5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50cy5lcShpbmRleClcbiAgICAgIHJlcGxhY2VBdHRyRGF0YU5vZGUoZWxlbWVudFswXSlcbiAgICAgIGVsZW1lbnQuZmluZCgnKicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXBsYWNlQXR0ckRhdGFOb2RlKHRoaXMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlcGxhY2UgZWxlbWVudCBuYW1lcyBhbmQgaW5kZXhlcyBpbiB0aGUgY29sbGVjdGlvbiwgaW4gU3ltZm9ueSwgbmFtZXMgYXJlIGFsd2F5cyBpbiBmb3JtYXRcbiAgICAvLyBDb2xsZWN0aW9uVHlwZVtmaWVsZF1bNDJdW3ZhbHVlXSBhbmQgaWRzIGFyZSBpbiBmb3JtYXQgQ29sbGVjdGlvblR5cGVfZmllbGRfNDJfdmFsdWU7XG4gICAgLy8gc28gd2UgbmVlZCB0byBjaGFuZ2UgYm90aC5cbiAgICB2YXIgY2hhbmdlRWxlbWVudEluZGV4ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgaW5kZXgsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgdmFyIHRvUmVwbGFjZSA9IG5ldyBSZWdFeHAocHJlZ1F1b3RlKHNldHRpbmdzLm5hbWVfcHJlZml4ICsgJ1snICsgb2xkSW5kZXggKyAnXScpLCAnZycpXG4gICAgICB2YXIgcmVwbGFjZVdpdGggPSBzZXR0aW5ncy5uYW1lX3ByZWZpeCArICdbJyArIG5ld0luZGV4ICsgJ10nXG5cbiAgICAgIGlmIChzZXR0aW5ncy5jaGlsZHJlbikge1xuICAgICAgICAkLmVhY2goc2V0dGluZ3MuY2hpbGRyZW4sIGZ1bmN0aW9uIChrZXksIGNoaWxkKSB7XG4gICAgICAgICAgdmFyIGNoaWxkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uZmluZChjaGlsZC5zZWxlY3RvcikuZXEoaW5kZXgpXG4gICAgICAgICAgdmFyIGNoaWxkU2V0dGluZ3MgPSBjaGlsZENvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1zZXR0aW5ncycpXG4gICAgICAgICAgaWYgKGNoaWxkU2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGNoaWxkU2V0dGluZ3MubmFtZV9wcmVmaXggPSBjaGlsZFNldHRpbmdzLm5hbWVfcHJlZml4LnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICAgICAgICAgIGNoaWxkQ29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJywgY2hpbGRTZXR0aW5ncylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJlcGxhY2VBdHRyRGF0YShlbGVtZW50cywgaW5kZXgsIHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpXG5cbiAgICAgIHRvUmVwbGFjZSA9IG5ldyBSZWdFeHAocHJlZ1F1b3RlKGNvbGxlY3Rpb24uYXR0cignaWQnKSArICdfJyArIG9sZEluZGV4KSwgJ2cnKVxuICAgICAgcmVwbGFjZVdpdGggPSBjb2xsZWN0aW9uLmF0dHIoJ2lkJykgKyAnXycgKyBuZXdJbmRleFxuXG4gICAgICBpZiAoc2V0dGluZ3MuY2hpbGRyZW4pIHtcbiAgICAgICAgJC5lYWNoKHNldHRpbmdzLmNoaWxkcmVuLCBmdW5jdGlvbiAoa2V5LCBjaGlsZCkge1xuICAgICAgICAgIHZhciBjaGlsZENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmZpbmQoY2hpbGQuc2VsZWN0b3IpLmVxKGluZGV4KVxuICAgICAgICAgIHZhciBjaGlsZFNldHRpbmdzID0gY2hpbGRDb2xsZWN0aW9uLmRhdGEoJ2NvbGxlY3Rpb24tc2V0dGluZ3MnKVxuICAgICAgICAgIGlmIChjaGlsZFNldHRpbmdzKSB7XG4gICAgICAgICAgICBjaGlsZFNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciA9IGNoaWxkU2V0dGluZ3MuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICAgICAgICAgIGNoaWxkU2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IgPSBjaGlsZFNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICAgICAgICAgIGNoaWxkU2V0dGluZ3MucHJlZml4ID0gY2hpbGRTZXR0aW5ncy5wcmVmaXgucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VXaXRoKVxuICAgICAgICAgICAgY2hpbGRDb2xsZWN0aW9uLmRhdGEoJ2NvbGxlY3Rpb24tc2V0dGluZ3MnLCBjaGlsZFNldHRpbmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVwbGFjZUF0dHJEYXRhKGVsZW1lbnRzLCBpbmRleCwgdG9SZXBsYWNlLCByZXBsYWNlV2l0aClcbiAgICB9XG5cbiAgICAvLyBzYW1lIGFzIGFib3ZlLCBidXQgd2lsbCByZXBsYWNlIGVsZW1lbnQgbmFtZXMgYW5kIGluZGV4ZXMgaW4gYW4gaHRtbCBzdHJpbmcgaW5zdGVhZFxuICAgIC8vIG9mIGluIGEgZG9tIGVsZW1lbnQuXG4gICAgdmFyIGNoYW5nZUh0bWxJbmRleCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBzZXR0aW5ncywgaHRtbCwgb2xkSW5kZXgsIG5ld0luZGV4LCBvbGRLZXksIG5ld0tleSkge1xuICAgICAgdmFyIHRvUmVwbGFjZSA9IG5ldyBSZWdFeHAocHJlZ1F1b3RlKHNldHRpbmdzLm5hbWVfcHJlZml4ICsgJ1snICsgb2xkS2V5ICsgJ10nKSwgJ2cnKVxuICAgICAgdmFyIHJlcGxhY2VXaXRoID0gc2V0dGluZ3MubmFtZV9wcmVmaXggKyAnWycgKyBuZXdLZXkgKyAnXSdcbiAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlV2l0aClcblxuICAgICAgdG9SZXBsYWNlID0gbmV3IFJlZ0V4cChwcmVnUXVvdGUoY29sbGVjdGlvbi5hdHRyKCdpZCcpICsgJ18nICsgb2xkSW5kZXgpLCAnZycpXG4gICAgICByZXBsYWNlV2l0aCA9IGNvbGxlY3Rpb24uYXR0cignaWQnKSArICdfJyArIG5ld0luZGV4XG4gICAgICBodG1sID0gaHRtbC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZVdpdGgpXG5cbiAgICAgIHJldHVybiBodG1sXG4gICAgfVxuXG4gICAgLy8gc29tZXRpbWVzLCBzZXR0aW5nIGEgdmFsdWUgd2lsbCBvbmx5IGJlIG1hZGUgaW4gbWVtb3J5IGFuZCBub3RcbiAgICAvLyBwaHlzaWNhbGx5IGluIHRoZSBkb207IGFuZCB3ZSBuZWVkIHRoZSBmdWxsIGRvbSB3aGVuIHdlIHdhbnRcbiAgICAvLyB0byBkdXBsaWNhdGUgYSBmaWVsZC5cbiAgICB2YXIgcHV0RmllbGRWYWx1ZXNJbkRvbSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpbnB1dE9iaikge1xuICAgICAgICBwdXRGaWVsZFZhbHVlKGlucHV0T2JqLCBnZXRGaWVsZFZhbHVlKGlucHV0T2JqKSwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdGhpcyBtZXRob2QgZG9lcyB0aGUgd2hvbGUgbWFnaWM6IGluIGEgY29sbGVjdGlvbiwgaWYgd2Ugd2FudCB0b1xuICAgIC8vIG1vdmUgZWxlbWVudHMgYW5kIGtlZXAgZWxlbWVudCBwb3NpdGlvbnMgaW4gdGhlIGJhY2tlbmQsIHdlIHNob3VsZFxuICAgIC8vIGVpdGhlciBtb3ZlIGVsZW1lbnQgbmFtZXMgb3IgZWxlbWVudCBjb250ZW50cywgYnV0IG5vdCBib3RoISB0aHVzLFxuICAgIC8vIGlmIHlvdSBqdXN0IG1vdmUgZWxlbWVudHMgaW4gdGhlIGRvbSwgeW91IGtlZXAgZmllbGQgbmFtZXMgYW5kIGRhdGFcbiAgICAvLyBhdHRhY2hlZCBhbmQgbm90aGluZyB3aWxsIGNoYW5nZSBpbiB0aGUgYmFja2VuZC5cbiAgICB2YXIgc3dhcEVsZW1lbnRzID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblxuICAgICAgdmFyIHNldHRpbmdzID0gY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJylcblxuICAgICAgaWYgKCFzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3RvciAmJiAhc2V0dGluZ3MucHJlc2VydmVfbmFtZXMpIHtcbiAgICAgICAgY2hhbmdlRWxlbWVudEluZGV4KGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgb2xkSW5kZXgsIG9sZEluZGV4LCAnX19zd2FwX18nKVxuICAgICAgICBjaGFuZ2VFbGVtZW50SW5kZXgoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBuZXdJbmRleCwgbmV3SW5kZXgsIG9sZEluZGV4KVxuICAgICAgICBjaGFuZ2VFbGVtZW50SW5kZXgoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBvbGRJbmRleCwgJ19fc3dhcF9fJywgbmV3SW5kZXgpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzLmVxKG9sZEluZGV4KS5pbnNlcnRCZWZvcmUoZWxlbWVudHMuZXEobmV3SW5kZXgpKVxuICAgICAgaWYgKG5ld0luZGV4ID4gb2xkSW5kZXgpIHtcbiAgICAgICAgZWxlbWVudHMuZXEobmV3SW5kZXgpLmluc2VydEJlZm9yZShlbGVtZW50cy5lcShvbGRJbmRleCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5lcShuZXdJbmRleCkuaW5zZXJ0QWZ0ZXIoZWxlbWVudHMuZXEob2xkSW5kZXgpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgIH1cblxuICAgIC8vIG1vdmluZyBhbiBlbGVtZW50IGRvd24gb2YgMyByb3dzIG1lYW5zIGluY3JlYXNpbmcgaXRzIGluZGV4IG9mIDMsIGFuZFxuICAgIC8vIGRlY3JlYXNpbmcgdGhlIDIgb25lcyBiZXR3ZWVuIG9mIDEuIEV4YW1wbGU6IDAtQSAxLUIgMi1DIDMtRDpcbiAgICAvLyBtb3ZpbmcgQiB0byAzIGJlY29tZXMgMC1BIDEtQyAyLUQgMy1CXG4gICAgdmFyIHN3YXBFbGVtZW50c1VwID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gb2xkSW5kZXggKyAxOyAoaSA8PSBuZXdJbmRleCk7IGkrKykge1xuICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50cyhjb2xsZWN0aW9uLCBlbGVtZW50cywgaSwgaSAtIDEpXG4gICAgICB9XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgIH1cblxuICAgIC8vIG1vdmluZyBhbiBlbGVtZW50IHVwIG9mIDMgcm93cyBtZWFucyBkZWNyZWFzaW5nIGl0cyBpbmRleCBvZiAzLCBhbmRcbiAgICAvLyBpbmNyZWFzaW5nIHRoZSAyIG9uZXMgYmV0d2VlbiBvZiAxLiBFeGFtcGxlOiAwLUEgMS1CIDItQyAzLUQ6XG4gICAgLy8gbW92aW5nIEQgdG8gMSBiZWNvbWVzIDAtQSAxLUQgMi1CIDMtQ1xuICAgIHZhciBzd2FwRWxlbWVudHNEb3duID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gb2xkSW5kZXggLSAxOyAoaSA+PSBuZXdJbmRleCk7IGktLSkge1xuICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50cyhjb2xsZWN0aW9uLCBlbGVtZW50cywgaSwgaSArIDEpXG4gICAgICB9XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgIH1cblxuICAgIC8vIGlmIHdlIGNyZWF0ZSBhbiBlbGVtZW50IGF0IHBvc2l0aW9uIDIsIGFsbCBlbGVtZW50IGluZGV4ZXMgZnJvbSAyIHRvIE5cbiAgICAvLyBzaG91bGQgYmUgaW5jcmVhc2VkLiBmb3IgZXhhbXBsZSwgaW4gMC1BIDEtQiAyLUMgMy1ELCBhZGRpbmcgWCBhdCBwb3NpdGlvblxuICAgIC8vIDEgd2lsbCBjcmVhdGUgMC1BIDEtWCAyLUIgMy1DIDQtRFxuICAgIHZhciBzaGlmdEVsZW1lbnRzVXAgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBpbmRleCkge1xuICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBpIC0gMSwgaSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgLy8gaWYgd2UgcmVtb3ZlIGFuIGVsZW1lbnQgYXQgcG9zaXRpb24gMywgYWxsIGVsZW1lbnQgaW5kZXhlcyBmcm9tIDMgdG8gTlxuICAgIC8vIHNob3VsZCBiZSBkZWNyZWFzZWQuIGZvciBleGFtcGxlLCBpbiAwLUEgMS1CIDItQyAzLUQsIHJlbW92aW5nIEIgd2lsbCBjcmVhdGVcbiAgICAvLyAwLUEgMS1DIDItRFxuICAgIHZhciBzaGlmdEVsZW1lbnRzRG93biA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50cywgc2V0dGluZ3MsIGluZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gZWxlbWVudHMubGVuZ3RoIC0gMjsgaSA+IGluZGV4OyBpLS0pIHtcbiAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHMoY29sbGVjdGlvbiwgZWxlbWVudHMsIGkgKyAxLCBpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmluZChzZXR0aW5ncy5lbGVtZW50c19zZWxlY3RvcilcbiAgICB9XG5cbiAgICAvLyB0aGlzIG1ldGhvZCBjcmVhdGVzIGJ1dHRvbnMgZm9yIGVhY2ggYWN0aW9uLCBhY2NvcmRpbmcgdG8gYWxsIG9wdGlvbnMgc2V0XG4gICAgLy8gKGJ1dHRvbnMgZW5hYmxlZCwgbWluaW11bS9tYXhpbXVtIG9mIGVsZW1lbnRzIG5vdCB5ZXQgcmVhY2hlZCwgcmVzY3VlXG4gICAgLy8gYnV0dG9uIGNyZWF0aW9uIHdoZW4gbm8gbW9yZSBlbGVtZW50cyBhcmUgcmVtYWluaW5nLi4uKVxuICAgIHZhciBkdW1wQ29sbGVjdGlvbkFjdGlvbnMgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgc2V0dGluZ3MsIGlzSW5pdGlhbGl6YXRpb24sIGV2ZW50KSB7XG4gICAgICB2YXIgZWxlbWVudHNQYXJlbnQgPSAkKHNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcilcbiAgICAgIHZhciBpbml0ID0gZWxlbWVudHNQYXJlbnQuZmluZCgnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLXRtcCcpLmxlbmd0aCA9PT0gMFxuICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuXG4gICAgICAvLyBhZGQgYSByZXNjdWUgYnV0dG9uIHRoYXQgd2lsbCBhcHBlYXIgb25seSBpZiBjb2xsZWN0aW9uIGlzIGVtcHRpZWRcbiAgICAgIGlmIChzZXR0aW5ncy5hbGxvd19hZGQpIHtcbiAgICAgICAgaWYgKGluaXQpIHtcbiAgICAgICAgICBlbGVtZW50c1BhcmVudC5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiJyArIHNldHRpbmdzLnByZWZpeCArICctdG1wXCI+PC9zcGFuPicpXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmFkZCkge1xuICAgICAgICAgICAgZWxlbWVudHNQYXJlbnQuYXBwZW5kKFxuICAgICAgICAgICAgICAkKHNldHRpbmdzLmFkZClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24gJyArIHNldHRpbmdzLnByZWZpeCArICctcmVzY3VlLWFkZCcpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ2NvbGxlY3Rpb24nLCBjb2xsZWN0aW9uLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGluaXRpYWxpemVzIHRoZSBjb2xsZWN0aW9uIHdpdGggYSBtaW5pbWFsIG51bWJlciBvZiBlbGVtZW50c1xuICAgICAgaWYgKGlzSW5pdGlhbGl6YXRpb24pIHtcbiAgICAgICAgY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLW9mZnNldCcsIGVsZW1lbnRzLmxlbmd0aClcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChzZXR0aW5ncy5jb250YWluZXIpXG4gICAgICAgIHZhciBidXR0b24gPSBjb2xsZWN0aW9uLmZpbmQoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hZGQsIC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1yZXNjdWUtYWRkLCAuJyArIHNldHRpbmdzLnByZWZpeCArICctZHVwbGljYXRlJykuZmlyc3QoKVxuICAgICAgICB2YXIgc2VjdXJlID0gMFxuICAgICAgICB3aGlsZSAoZWxlbWVudHMubGVuZ3RoIDwgc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMpIHtcbiAgICAgICAgICBzZWN1cmUrK1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHMubGVuZ3RoID4gMCA/IGVsZW1lbnRzLmxhc3QoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIHZhciBpbmRleCA9IGVsZW1lbnRzLmxlbmd0aCAtIDFcbiAgICAgICAgICBlbGVtZW50cyA9IGRvQWRkKGNvbnRhaW5lciwgYnV0dG9uLCBjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIGluZGV4LCBmYWxzZSlcbiAgICAgICAgICBpZiAoc2VjdXJlID4gc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZmluaXRlIGxvb3AsIGVsZW1lbnQgc2VsZWN0b3IgKCcgKyBzZXR0aW5ncy5lbGVtZW50c19zZWxlY3RvciArICcpIG5vdCBmb3VuZCAhJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLW9mZnNldCcsIGVsZW1lbnRzLmxlbmd0aClcbiAgICAgIH1cblxuICAgICAgLy8gbWFrZSBidXR0b25zIGFwcGVhci9kaXNhcHBlYXIgaW4gZWFjaCBlbGVtZW50cyBvZiB0aGUgY29sbGVjdGlvbiBhY2NvcmRpbmcgdG8gb3B0aW9uc1xuICAgICAgLy8gKGVuYWJsZWQsIG1pbi9tYXguLi4pIGFuZCBsb2dpYyAoZm9yIGV4YW1wbGUsIGRvIG5vdCBwdXQgYSBtb3ZlIHVwIGJ1dHRvbiBvbiB0aGUgZmlyc3RcbiAgICAgIC8vIGVsZW1lbnQgb2YgdGhlIGNvbGxlY3Rpb24pXG4gICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcylcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXphdGlvbikge1xuICAgICAgICAgIGVsZW1lbnQuZGF0YSgnaW5kZXgnLCBpbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb25zID0gZWxlbWVudC5maW5kKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctYWN0aW9ucycpLmFkZEJhY2soKS5maWx0ZXIoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb25zJylcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWN0aW9ucyA9ICQoJzwnICsgc2V0dGluZ3MuYWN0aW9uX2NvbnRhaW5lcl90YWcgKyAnIGNsYXNzPVwiJyArIHNldHRpbmdzLnByZWZpeCArICctYWN0aW9uc1wiPjwvJyArIHNldHRpbmdzLmFjdGlvbl9jb250YWluZXJfdGFnICsgJz4nKVxuXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoYWN0aW9ucylcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWx0YSA9IDBcbiAgICAgICAgaWYgKGV2ZW50ID09PSAncmVtb3ZlJyAmJiBzZXR0aW5ncy5mYWRlX291dCkge1xuICAgICAgICAgIGRlbHRhID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJ1dHRvbnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2VuYWJsZWQnOiBzZXR0aW5ncy5hbGxvd19yZW1vdmUsXG4gICAgICAgICAgICAnc2VsZWN0b3InOiBzZXR0aW5ncy5wcmVmaXggKyAnLXJlbW92ZScsXG4gICAgICAgICAgICAnaHRtbCc6IHNldHRpbmdzLnJlbW92ZSxcbiAgICAgICAgICAgICdjb25kaXRpb24nOiBlbGVtZW50cy5sZW5ndGggLSBkZWx0YSA+IHNldHRpbmdzLm1pblxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICdlbmFibGVkJzogc2V0dGluZ3MuYWxsb3dfdXAsXG4gICAgICAgICAgICAnc2VsZWN0b3InOiBzZXR0aW5ncy5wcmVmaXggKyAnLXVwJyxcbiAgICAgICAgICAgICdodG1sJzogc2V0dGluZ3MudXAsXG4gICAgICAgICAgICAnY29uZGl0aW9uJzogZWxlbWVudHMubGVuZ3RoIC0gZGVsdGEgPiAxICYmIGVsZW1lbnRzLmluZGV4KGVsZW1lbnQpIC0gZGVsdGEgPiAwXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgJ2VuYWJsZWQnOiBzZXR0aW5ncy5hbGxvd19kb3duLFxuICAgICAgICAgICAgJ3NlbGVjdG9yJzogc2V0dGluZ3MucHJlZml4ICsgJy1kb3duJyxcbiAgICAgICAgICAgICdodG1sJzogc2V0dGluZ3MuZG93bixcbiAgICAgICAgICAgICdjb25kaXRpb24nOiBlbGVtZW50cy5sZW5ndGggLSBkZWx0YSA+IDEgJiYgZWxlbWVudHMuaW5kZXgoZWxlbWVudCkgIT09IGVsZW1lbnRzLmxlbmd0aCAtIDFcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAnZW5hYmxlZCc6IHNldHRpbmdzLmFsbG93X2FkZCAmJiAhc2V0dGluZ3MuYWRkX2F0X3RoZV9lbmQgJiYgIXNldHRpbmdzLmN1c3RvbV9hZGRfbG9jYXRpb24sXG4gICAgICAgICAgICAnc2VsZWN0b3InOiBzZXR0aW5ncy5wcmVmaXggKyAnLWFkZCcsXG4gICAgICAgICAgICAnaHRtbCc6IHNldHRpbmdzLmFkZCxcbiAgICAgICAgICAgICdjb25kaXRpb24nOiBlbGVtZW50cy5sZW5ndGggLSBkZWx0YSA8IHNldHRpbmdzLm1heFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICdlbmFibGVkJzogc2V0dGluZ3MuYWxsb3dfZHVwbGljYXRlLFxuICAgICAgICAgICAgJ3NlbGVjdG9yJzogc2V0dGluZ3MucHJlZml4ICsgJy1kdXBsaWNhdGUnLFxuICAgICAgICAgICAgJ2h0bWwnOiBzZXR0aW5ncy5kdXBsaWNhdGUsXG4gICAgICAgICAgICAnY29uZGl0aW9uJzogZWxlbWVudHMubGVuZ3RoIC0gZGVsdGEgPCBzZXR0aW5ncy5tYXhcbiAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgICAgICAkLmVhY2goYnV0dG9ucywgZnVuY3Rpb24gKGksIGJ1dHRvbikge1xuICAgICAgICAgIGlmIChidXR0b24uZW5hYmxlZCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGVsZW1lbnQuZmluZCgnLicgKyBidXR0b24uc2VsZWN0b3IpXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCA9PT0gMCAmJiBidXR0b24uaHRtbCkge1xuICAgICAgICAgICAgICBhY3Rpb24gPSAkKGJ1dHRvbi5odG1sKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhhY3Rpb25zKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhidXR0b24uc2VsZWN0b3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICBhY3Rpb24ucmVtb3ZlQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24tZGlzYWJsZWQnKVxuICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuaGlkZV91c2VsZXNzX2J1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uY3NzKCdkaXNwbGF5JywgJycpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjdGlvbi5hZGRDbGFzcyhzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5oaWRlX3VzZWxlc3NfYnV0dG9ucykge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvblxuICAgICAgICAgICAgICAuYWRkQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nKVxuICAgICAgICAgICAgICAuZGF0YSgnY29sbGVjdGlvbicsIGNvbGxlY3Rpb24uYXR0cignaWQnKSlcbiAgICAgICAgICAgICAgLmRhdGEoJ2VsZW1lbnQnLCBnZXRPckNyZWF0ZUlkKGNvbGxlY3Rpb24uYXR0cignaWQnKSArICdfJyArIGluZGV4LCBlbGVtZW50KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuJyArIGJ1dHRvbi5zZWxlY3RvcikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSkgLy8gZWxlbWVudHMuZWFjaFxuXG4gICAgICAvLyBtYWtlIHRoZSByZXNjdWUgYnV0dG9uIGFwcGVhciAvIGRpc2FwcGVhciBhY2NvcmRpbmcgdG8gb3B0aW9ucyAoYWRkX2F0X3RoZV9lbmQpIGFuZFxuICAgICAgLy8gbG9naWMgKG5vIG1vcmUgZWxlbWVudHMgb24gdGhlIGNvbGxlY3Rpb24pXG4gICAgICBpZiAoc2V0dGluZ3MuYWxsb3dfYWRkKSB7XG5cbiAgICAgICAgdmFyIGRlbHRhID0gMFxuICAgICAgICBpZiAoZXZlbnQgPT09ICdyZW1vdmUnICYmIHNldHRpbmdzLmZhZGVfb3V0KSB7XG4gICAgICAgICAgZGVsdGEgPSAxXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzY3VlQWRkID0gY29sbGVjdGlvbi5maW5kKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctcmVzY3VlLWFkZCcpLmNzcygnZGlzcGxheScsICcnKS5yZW1vdmVDbGFzcyhzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAgIHZhciBhZGRzID0gY29sbGVjdGlvbi5maW5kKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctYWRkJylcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRfYXRfdGhlX2VuZCAmJiBhZGRzLmxlbmd0aCA+IGRlbHRhIHx8IHNldHRpbmdzLmN1c3RvbV9hZGRfbG9jYXRpb24pIHtcbiAgICAgICAgICByZXNjdWVBZGQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncmVtb3ZlJyAmJiBzZXR0aW5ncy5mYWRlX291dCkge1xuICAgICAgICAgIHJlc2N1ZUFkZC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAgICAgcmVzY3VlQWRkLmZhZGVJbignZmFzdCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAtIGRlbHRhID49IHNldHRpbmdzLm1heCkge1xuICAgICAgICAgIHJlc2N1ZUFkZC5hZGRDbGFzcyhzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmhpZGVfdXNlbGVzc19idXR0b25zKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLmZpbmQoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hZGQsIC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1yZXNjdWUtYWRkLCAuJyArIHNldHRpbmdzLnByZWZpeCArICctZHVwbGljYXRlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSAvLyBkdW1wQ29sbGVjdGlvbkFjdGlvbnNcblxuICAgIC8vIHRoaXMgcGx1Z2luIHN1cHBvcnRzIG5lc3RlZCBjb2xsZWN0aW9ucywgYW5kIHRoaXMgbWV0aG9kIGVuYWJsZXMgdGhlbSB3aGVuIHRoZVxuICAgIC8vIHBhcmVudCBjb2xsZWN0aW9uIGlzIGluaXRpYWxpemVkLiBzZWVcbiAgICAvLyBodHRwOi8vc3ltZm9ueS1jb2xsZWN0aW9uLmZ1ei5vcmcvc3ltZm9ueTMvYWR2YW5jZWQvY29sbGVjdGlvbk9mQ29sbGVjdGlvbnNcbiAgICB2YXIgZW5hYmxlQ2hpbGRyZW5Db2xsZWN0aW9ucyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBlbGVtZW50LCBzZXR0aW5ncykge1xuICAgICAgaWYgKHNldHRpbmdzLmNoaWxkcmVuKSB7XG4gICAgICAgICQuZWFjaChzZXR0aW5ncy5jaGlsZHJlbiwgZnVuY3Rpb24gKGluZGV4LCBjaGlsZHJlblNldHRpbmdzKSB7XG4gICAgICAgICAgaWYgKCFjaGlsZHJlblNldHRpbmdzLnNlbGVjdG9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnanF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGNvbGxlY3Rpb24gJyArIGNvbGxlY3Rpb24uYXR0cignaWQnKSArICcgaGFzIGNoaWxkcmVuIGNvbGxlY3Rpb25zLCBidXQgY2hpbGRyZW5cXCdzIHJvb3Qgc2VsZWN0b3IgaXMgdW5kZWZpbmVkLicpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbWVudC5maW5kKGNoaWxkcmVuU2V0dGluZ3Muc2VsZWN0b3IpLmNvbGxlY3Rpb24oY2hpbGRyZW5TZXR0aW5ncylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5maW5kKGNoaWxkcmVuU2V0dGluZ3Muc2VsZWN0b3IpLmNvbGxlY3Rpb24oY2hpbGRyZW5TZXR0aW5ncylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcyBtZXRob2QgaGFuZGxlcyBhIGNsaWNrIG9uIFwiYWRkXCIgYnV0dG9ucywgaXQgaW5jcmVhc2VzIGFsbCBmb2xsb3dpbmcgZWxlbWVudCBpbmRleGVzIG9mXG4gICAgLy8gMSBwb3NpdGlvbiBhbmQgaW5zZXJ0IGEgbmV3IG9uZSBpbiB0aGUgaW5kZXggdGhhdCBiZWNvbWVzIGZyZWUuIGlmIGNsaWNrIGhhcyBiZWVuIG1hZGUgb24gYVxuICAgIC8vIFwiZHVwbGljYXRlXCIgYnV0dG9uLCBhbGwgZWxlbWVudCB2YWx1ZXMgYXJlIHRoZW4gaW5zZXJ0ZWQuIGZpbmFsbHksIGNhbGxiYWNrcyBsZXQgdXNlciBjYW5jZWxcbiAgICAvLyB0aG9zZSBhY3Rpb25zIGlmIG5lZWRlZC5cbiAgICB2YXIgZG9BZGQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCB0aGF0LCBjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIGluZGV4LCBpc0R1cGxpY2F0ZSkge1xuICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA8IHNldHRpbmdzLm1heCAmJiAoaXNEdXBsaWNhdGUgJiYgdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV9kdXBsaWNhdGUoY29sbGVjdGlvbiwgZWxlbWVudCkpIHx8IHRydWVPclVuZGVmaW5lZChzZXR0aW5ncy5iZWZvcmVfYWRkKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSkpIHtcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IGNvbGxlY3Rpb24uZGF0YSgncHJvdG90eXBlJylcbiAgICAgICAgdmFyIGZyZWVJbmRleCA9IGNvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1vZmZzZXQnKVxuXG4gICAgICAgIGNvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1vZmZzZXQnLCBmcmVlSW5kZXggKyAxKVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGVsZW1lbnRzLmxlbmd0aCAtIDFcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cChwcmVnUXVvdGUoc2V0dGluZ3MucHJvdG90eXBlX25hbWUpLCAnZycpXG4gICAgICAgIHZhciBmcmVlS2V5ID0gZnJlZUluZGV4XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnByZXNlcnZlX25hbWVzKSB7XG4gICAgICAgICAgZnJlZUtleSA9IGNvbGxlY3Rpb24uZGF0YSgnY29sbGVjdGlvbi1mcmVlLWtleScpXG5cbiAgICAgICAgICBpZiAoZnJlZUtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmcmVlS2V5ID0gZmluZEZyZWVOdW1lcmljS2V5KHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb2xsZWN0aW9uLmRhdGEoJ2NvbGxlY3Rpb24tZnJlZS1rZXknLCBmcmVlS2V5ICsgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb2RlID0gJChwcm90b3R5cGUucmVwbGFjZShyZWdleHAsIGZyZWVLZXkpKS5kYXRhKCdpbmRleCcsIGZyZWVJbmRleClcbiAgICAgICAgc2V0UmlnaHRQcmVmaXgoc2V0dGluZ3MsIGNvZGUpXG5cbiAgICAgICAgdmFyIGVsZW1lbnRzUGFyZW50ID0gJChzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpXG4gICAgICAgIHZhciB0bXAgPSBlbGVtZW50c1BhcmVudC5maW5kKCc+IC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy10bXAnKVxuICAgICAgICB2YXIgaWQgPSAkKGNvZGUpLmZpbmQoJ1tpZF0nKS5maXJzdCgpLmF0dHIoJ2lkJylcblxuICAgICAgICBpZiAoaXNEdXBsaWNhdGUpIHtcbiAgICAgICAgICB2YXIgb2xkRWxlbWVudCA9IGVsZW1lbnRzLmVxKGluZGV4KVxuICAgICAgICAgIHB1dEZpZWxkVmFsdWVzSW5Eb20ob2xkRWxlbWVudClcbiAgICAgICAgICB2YXIgb2xkSHRtbCA9ICQoJzxkaXYvPicpLmFwcGVuZChvbGRFbGVtZW50LmNsb25lKCkpLmh0bWwoKVxuICAgICAgICAgIHZhciBvbGRJbmRleCA9IHNldHRpbmdzLnByZXNlcnZlX25hbWVzIHx8IHNldHRpbmdzLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yID8gb2xkRWxlbWVudC5kYXRhKCdpbmRleCcpIDogaW5kZXhcbiAgICAgICAgICB2YXIgb2xkS2V5ID0gc2V0dGluZ3MucHJlc2VydmVfbmFtZXMgPyBnZXRFbGVtZW50S2V5KHNldHRpbmdzLCBvbGRFbGVtZW50KSA6IG9sZEluZGV4XG4gICAgICAgICAgdmFyIG5ld0h0bWwgPSBjaGFuZ2VIdG1sSW5kZXgoY29sbGVjdGlvbiwgc2V0dGluZ3MsIG9sZEh0bWwsIG9sZEluZGV4LCBmcmVlSW5kZXgsIG9sZEtleSwgZnJlZUtleSlcblxuICAgICAgICAgIGNvZGUgPSAkKCc8ZGl2Lz4nKS5odG1sKG5ld0h0bWwpLmNvbnRlbnRzKCkuZGF0YSgnaW5kZXgnLCBmcmVlSW5kZXgpXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmZhZGVfaW4pIHtcbiAgICAgICAgICAgIGNvZGUuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRtcC5iZWZvcmUoY29kZSkuZmluZChzZXR0aW5ncy5wcmVmaXggKyAnLWFjdGlvbnMnKS5yZW1vdmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5mYWRlX2luKSB7XG4gICAgICAgICAgICBjb2RlLmhpZGUoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRtcC5iZWZvcmUoY29kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuXG4gICAgICAgIHZhciBhY3Rpb24gPSBjb2RlLmZpbmQoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hZGQsIC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1kdXBsaWNhdGUnKVxuICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY3Rpb24uYWRkQ2xhc3Moc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nKS5kYXRhKCdjb2xsZWN0aW9uJywgY29sbGVjdGlvbi5hdHRyKCdpZCcpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRfYXRfdGhlX2VuZCAmJiBpbmRleCArIDEgIT09IGZyZWVJbmRleCkge1xuICAgICAgICAgIGVsZW1lbnRzID0gZG9Nb3ZlKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgY29kZSwgZnJlZUluZGV4LCBpbmRleCArIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHVtcENvbGxlY3Rpb25BY3Rpb25zKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVuYWJsZUNoaWxkcmVuQ29sbGVjdGlvbnMoY29sbGVjdGlvbiwgY29kZSwgc2V0dGluZ3MpXG5cbiAgICAgICAgaWYgKChpc0R1cGxpY2F0ZSAmJiAhdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2R1cGxpY2F0ZShjb2xsZWN0aW9uLCBjb2RlKSkpIHx8ICF0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYWZ0ZXJfYWRkKGNvbGxlY3Rpb24sIGNvZGUpKSkge1xuICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2hpZnRFbGVtZW50c1VwKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgaW5kZXggKyAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvZGUgIT09IHVuZGVmaW5lZCAmJiBzZXR0aW5ncy5mYWRlX2luKSB7XG4gICAgICAgIGNvZGUuZmFkZUluKCdmYXN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudHNcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIHRoZSBjdXJyZW50IGVsZW1lbnQgd2hlbiBjbGlja2luZyBvbiBhIFwiZGVsZXRlXCIgYnV0dG9uIGFuZCBkZWNyZWFzZSBhbGwgZm9sbG93aW5nXG4gICAgLy8gaW5kZXhlcyBmcm9tIDEgcG9zaXRpb24uXG4gICAgdmFyIGRvRGVsZXRlID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiBzZXR0aW5ncy5taW4gJiYgdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV9yZW1vdmUoY29sbGVjdGlvbiwgZWxlbWVudCkpKSB7XG4gICAgICAgIHZhciBkZWxldGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdG9EZWxldGUgPSBlbGVtZW50XG4gICAgICAgICAgaWYgKCFzZXR0aW5ncy5wcmVzZXJ2ZV9uYW1lcykge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzaGlmdEVsZW1lbnRzVXAoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBpbmRleClcbiAgICAgICAgICAgIHRvRGVsZXRlID0gZWxlbWVudHMubGFzdCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBiYWNrdXAgPSB0b0RlbGV0ZS5jbG9uZSh7d2l0aERhdGFBbmRFdmVudHM6IHRydWV9KS5zaG93KClcbiAgICAgICAgICB0b0RlbGV0ZS5yZW1vdmUoKVxuICAgICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX3JlbW92ZShjb2xsZWN0aW9uLCBiYWNrdXApKSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzUGFyZW50ID0gJChzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpXG4gICAgICAgICAgICBlbGVtZW50c1BhcmVudC5maW5kKCc+IC4nICsgc2V0dGluZ3MucHJlZml4ICsgJy10bXAnKS5iZWZvcmUoYmFja3VwKVxuICAgICAgICAgICAgZWxlbWVudHMgPSBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgICAgICAgICBlbGVtZW50cyA9IHNoaWZ0RWxlbWVudHNEb3duKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgaW5kZXggLSAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGRvUmV3cml0ZVBvc2l0aW9ucyhzZXR0aW5ncywgZWxlbWVudHMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5mYWRlX291dCkge1xuICAgICAgICAgIGVsZW1lbnQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0aW9uKClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudHNcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIGN1cnJlbnQgZWxlbWVudCBhbmQgdGhlIHByZXZpb3VzIG9uZSAoc28gdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgIC8vIGFwcGVhcnMgb25lIHBsYWNlIGhpZ2hlcilcbiAgICB2YXIgZG9VcCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggIT09IDAgJiYgdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV91cChjb2xsZWN0aW9uLCBlbGVtZW50KSkpIHtcbiAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHMoY29sbGVjdGlvbiwgZWxlbWVudHMsIGluZGV4LCBpbmRleCAtIDEpXG4gICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX3VwKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSkge1xuICAgICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBpbmRleCAtIDEsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgLy8gcmV2ZXJzZSB0aGUgY3VycmVudCBlbGVtZW50IGFuZCB0aGUgbmV4dCBvbmUgKHNvIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAvLyBhcHBlYXJzIG9uZSBwbGFjZSBsb3dlcilcbiAgICB2YXIgZG9Eb3duID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gKGVsZW1lbnRzLmxlbmd0aCAtIDEpICYmIHRydWVPclVuZGVmaW5lZChzZXR0aW5ncy5iZWZvcmVfZG93bihjb2xsZWN0aW9uLCBlbGVtZW50KSkpIHtcbiAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHMoY29sbGVjdGlvbiwgZWxlbWVudHMsIGluZGV4LCBpbmRleCArIDEpXG4gICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudHMpKSkge1xuICAgICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBpbmRleCArIDEsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgLy8gbW92ZSBhbiBlbGVtZW50IGZyb20gYSBwb3NpdGlvbiB0byBhbiBhcmJpdHJhcnkgbmV3IHBvc2l0aW9uXG4gICAgdmFyIGRvTW92ZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgaWYgKDEgPT09IE1hdGguYWJzKG5ld0luZGV4IC0gb2xkSW5kZXgpKSB7XG4gICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICAgIGlmICghKG5ld0luZGV4IC0gb2xkSW5kZXggPiAwID8gdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX3VwKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSA6IHRydWVPclVuZGVmaW5lZChzZXR0aW5ncy5hZnRlcl9kb3duKGNvbGxlY3Rpb24sIGVsZW1lbnQpKSkpIHtcbiAgICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50cyhjb2xsZWN0aW9uLCBlbGVtZW50cywgbmV3SW5kZXgsIG9sZEluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob2xkSW5kZXggPCBuZXdJbmRleCkge1xuICAgICAgICAgIGVsZW1lbnRzID0gc3dhcEVsZW1lbnRzVXAoY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICAgICAgaWYgKCEobmV3SW5kZXggLSBvbGRJbmRleCA+IDAgPyB0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYWZ0ZXJfdXAoY29sbGVjdGlvbiwgZWxlbWVudCkpIDogdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudCkpKSkge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHNEb3duKGNvbGxlY3Rpb24sIGVsZW1lbnRzLCBzZXR0aW5ncywgbmV3SW5kZXgsIG9sZEluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50cyA9IHN3YXBFbGVtZW50c0Rvd24oY29sbGVjdGlvbiwgZWxlbWVudHMsIHNldHRpbmdzLCBvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICAgICAgaWYgKCEobmV3SW5kZXggLSBvbGRJbmRleCA+IDAgPyB0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYWZ0ZXJfdXAoY29sbGVjdGlvbiwgZWxlbWVudCkpIDogdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmFmdGVyX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudCkpKSkge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzd2FwRWxlbWVudHNVcChjb2xsZWN0aW9uLCBlbGVtZW50cywgc2V0dGluZ3MsIG5ld0luZGV4LCBvbGRJbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGR1bXBDb2xsZWN0aW9uQWN0aW9ucyhjb2xsZWN0aW9uLCBzZXR0aW5ncywgZmFsc2UpXG5cbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9SZXdyaXRlUG9zaXRpb25zKHNldHRpbmdzLCBlbGVtZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgdmFyIGRvUmV3cml0ZVBvc2l0aW9ucyA9IGZ1bmN0aW9uIChzZXR0aW5ncywgZWxlbWVudHMpIHtcbiAgICAgICQoZWxlbWVudHMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcylcbiAgICAgICAgcHV0RmllbGRWYWx1ZShlbGVtZW50LmZpbmQoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpLCBlbGVtZW50cy5pbmRleChlbGVtZW50KSlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBlbGVtZW50c1xuICAgIH1cblxuICAgIHZhciBnZXRFbGVtZW50S2V5ID0gZnVuY3Rpb24gKHNldHRpbmdzLCBlbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGVsZW1lbnQuZmluZCgnOmlucHV0W25hbWVePVwiJyArIHNldHRpbmdzLm5hbWVfcHJlZml4ICsgJ1tcIl0nKS5hdHRyKCduYW1lJylcblxuICAgICAgcmV0dXJuIG5hbWUuc2xpY2Uoc2V0dGluZ3MubmFtZV9wcmVmaXgubGVuZ3RoICsgMSkuc3BsaXQoJ10nLCAxKVswXVxuICAgIH1cblxuICAgIHZhciBmaW5kRnJlZU51bWVyaWNLZXkgPSBmdW5jdGlvbiAoc2V0dGluZ3MsIGVsZW1lbnRzKSB7XG4gICAgICB2YXIgZnJlZUtleSA9IDBcblxuICAgICAgZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXkgPSBnZXRFbGVtZW50S2V5KHNldHRpbmdzLCAkKHRoaXMpKVxuXG4gICAgICAgIGlmICgvXjB8WzEtOV1cXGQqJC8udGVzdChrZXkpICYmIGtleSA+PSBmcmVlS2V5KSB7XG4gICAgICAgICAgZnJlZUtleSA9IE51bWJlcihrZXkpICsgMVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gZnJlZUtleVxuICAgIH1cblxuICAgIHZhciBzZXRSaWdodFByZWZpeCA9IGZ1bmN0aW9uIChzZXR0aW5ncywgY29udGFpbmVyKSB7XG4gICAgICB2YXIgc3VmZml4ZXMgPSBbXG4gICAgICAgICctYWN0aW9uJyxcbiAgICAgICAgJy1hY3Rpb24tZGlzYWJsZWQnLFxuICAgICAgICAnLWFjdGlvbnMnLFxuICAgICAgICAnLWFkZCcsXG4gICAgICAgICctZG93bicsXG4gICAgICAgICctZHVwbGljYXRlJyxcbiAgICAgICAgJy1yZW1vdmUnLFxuICAgICAgICAnLXJlc2N1ZS1hZGQnLFxuICAgICAgICAnLXRtcCcsXG4gICAgICAgICctdXAnXG4gICAgICBdXG5cbiAgICAgICQuZWFjaChzdWZmaXhlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VmZml4ID0gdGhpc1xuICAgICAgICBjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgaWYgKHRoYXQuaGFzQ2xhc3Moc2V0dGluZ3MudXNlcl9wcmVmaXggKyBzdWZmaXgpKSB7XG4gICAgICAgICAgICB0aGF0LmFkZENsYXNzKHNldHRpbmdzLnByZWZpeCArIHN1ZmZpeClcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC5maW5kKCcqJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGVyZSA9ICQodGhpcylcbiAgICAgICAgICAgIGlmIChoZXJlLmhhc0NsYXNzKHNldHRpbmdzLnVzZXJfcHJlZml4ICsgc3VmZml4KSkge1xuICAgICAgICAgICAgICBoZXJlLmFkZENsYXNzKHNldHRpbmdzLnByZWZpeCArIHN1ZmZpeClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB3ZSdyZSBpbiBhICQuZm4uLCBzbyBpbiAkKCcuY29sbGVjdGlvbicpLmNvbGxlY3Rpb24oKSwgJCh0aGlzKSBlcXVhbHMgJCgnLmNvbGxlY3Rpb24nKVxuICAgIHZhciBlbGVtcyA9ICQodGhpcylcblxuICAgIC8vIGF0IGxlYXN0IG9uZSwgYnV0IHdoeSBub3Qgc2V2ZXJhbCBjb2xsZWN0aW9ucyBzaG91bGQgYmUgcmFpc2VkXG4gICAgaWYgKGVsZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIHNlbGVjdG9yIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBlbGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRzLCBvcHRpb25zKVxuXG4gICAgICAvLyB1c2FnZSBvZiAkLmZuLm9uIGV2ZW50cyB1c2luZyBhIHN0YXRpYyBjb250YWluZXIganVzdCBpbiBjYXNlIHRoZXJlIHdvdWxkIGJlIHNvbWVcbiAgICAgIC8vIGFqYXggaW50ZXJhY3Rpb25zIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAgaWYgKCQoc2V0dGluZ3MuY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBhIGNvbnRhaW5lciBzaG91bGQgZXhpc3QgdG8gaGFuZGxlIGV2ZW50cyAoYmFzaWNhbGx5LCBhIDxib2R5PiB0YWcpLicpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBpdCBpcyBwb3NzaWJsZSB0byB1c2UgdGhpcyBwbHVnaW4gd2l0aCBhIHNlbGVjdG9yIHRoYXQgd2lsbCBjb250YWluIHRoZSBjb2xsZWN0aW9uIGlkXG4gICAgICAvLyBpbiBhIGRhdGEgYXR0cmlidXRlXG4gICAgICB2YXIgZWxlbSA9ICQodGhpcylcbiAgICAgIGlmIChlbGVtLmRhdGEoJ2NvbGxlY3Rpb24nKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gJCgnIycgKyBlbGVtLmRhdGEoJ2NvbGxlY3Rpb24nKSlcbiAgICAgICAgaWYgKGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIGlkIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdGlvbiA9IGVsZW1cbiAgICAgIH1cbiAgICAgIGNvbGxlY3Rpb24gPSAkKGNvbGxlY3Rpb24pXG5cbiAgICAgIC8vIHdoZW4gYWRkaW5nIGVsZW1lbnRzIHRvIGEgY29sbGVjdGlvbiwgd2Ugc2hvdWxkIGJlIGF3YXJlIG9mIHRoZSBub2RlIHRoYXQgd2lsbCBjb250YWluIHRoZW1cbiAgICAgIHNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciA9IHNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvci5yZXBsYWNlKCclaWQlJywgJyMnICsgZ2V0T3JDcmVhdGVJZCgnJywgY29sbGVjdGlvbikpXG4gICAgICBpZiAoIXNldHRpbmdzLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvcikge1xuICAgICAgICBzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IgPSAnIycgKyBnZXRPckNyZWF0ZUlkKCcnLCBjb2xsZWN0aW9uKVxuICAgICAgICBpZiAoJChzZXR0aW5ncy5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gZWxlbWVudHMgcGFyZW50IHNlbGVjdG9yIGRvZXMgbm90IHJldHVybiBhbnkgb2JqZWN0LicpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbiBuZXN0ZWQgY29sbGVjdGlvbnMsIHByZWZpeCBpcyB0aGUgc2FtZSBmb3IgYWxsIGNoaWxkcmVuIGxlYWRpbmcgdG8gdmVyeVxuICAgICAgLy8gcmFuZG9tIGFuZCB1bmV4ZXBjdGVkIGlzc3Vlcywgc28gd2UgbWVyZ2UgcHJlZml4IHdpdGggY3VycmVudCBjb2xsZWN0aW9uIGlkLlxuICAgICAgc2V0dGluZ3MudXNlcl9wcmVmaXggPSBzZXR0aW5ncy5wcmVmaXhcbiAgICAgIHNldHRpbmdzLnByZWZpeCA9IGNvbGxlY3Rpb24uYXR0cignaWQnKSArICctJyArIHNldHRpbmdzLnVzZXJfcHJlZml4XG4gICAgICBzZXRSaWdodFByZWZpeChzZXR0aW5ncywgY29sbGVjdGlvbilcblxuICAgICAgLy8gZW5mb3JjaW5nIGxvZ2ljIGJldHdlZW4gb3B0aW9uc1xuICAgICAgaWYgKCFzZXR0aW5ncy5hbGxvd19hZGQpIHtcbiAgICAgICAgc2V0dGluZ3MuYWxsb3dfZHVwbGljYXRlID0gZmFsc2VcbiAgICAgICAgc2V0dGluZ3MuYWRkX2F0X3RoZV9lbmQgPSBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHNldHRpbmdzLmluaXRfd2l0aF9uX2VsZW1lbnRzID4gc2V0dGluZ3MubWF4KSB7XG4gICAgICAgIHNldHRpbmdzLmluaXRfd2l0aF9uX2VsZW1lbnRzID0gc2V0dGluZ3MubWF4XG4gICAgICB9XG4gICAgICBpZiAoc2V0dGluZ3MubWluICYmICghc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMgfHwgc2V0dGluZ3MuaW5pdF93aXRoX25fZWxlbWVudHMgPCBzZXR0aW5ncy5taW4pKSB7XG4gICAgICAgIHNldHRpbmdzLmluaXRfd2l0aF9uX2VsZW1lbnRzID0gc2V0dGluZ3MubWluXG4gICAgICB9XG5cbiAgICAgIGlmICghc2V0dGluZ3MuYWN0aW9uX2NvbnRhaW5lcl90YWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiBhY3Rpb25fY29udGFpbmVyX3RhZyBuZWVkcyB0byBiZSBzZXQuJylcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gdXNlciBjYWxsYmFja1xuICAgICAgc2V0dGluZ3MuYmVmb3JlX2luaXQoY29sbGVjdGlvbilcblxuICAgICAgLy8gcHJvdG90eXBlIHJlcXVpcmVkIHRvIGNyZWF0ZSBuZXcgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgIGlmIChjb2xsZWN0aW9uLmRhdGEoJ3Byb3RvdHlwZScpID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBmaWVsZCBoYXMgbm8gcHJvdG90eXBlLCBjaGVjayB0aGF0IHlvdXIgZmllbGQgaGFzIHRoZSBwcm90b3R5cGUgb3B0aW9uIHNldCB0byB0cnVlLicpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGFsbCB0aGUgZm9sbG93aW5nIGRhdGEgYXR0cmlidXRlcyBhcmUgYXV0b21hdGljYWxseSBhdmFpbGFibGUgdGhhbmtzIHRvXG4gICAgICAvLyBqcXVlcnkuY29sbGVjdGlvbi5odG1sLnR3aWcgZm9ybSB0aGVtZVxuICAgICAgaWYgKGNvbGxlY3Rpb24uZGF0YSgncHJvdG90eXBlLW5hbWUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldHRpbmdzLnByb3RvdHlwZV9uYW1lID0gY29sbGVjdGlvbi5kYXRhKCdwcm90b3R5cGUtbmFtZScpXG4gICAgICB9XG4gICAgICBpZiAoY29sbGVjdGlvbi5kYXRhKCdhbGxvdy1hZGQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldHRpbmdzLmFsbG93X2FkZCA9IGNvbGxlY3Rpb24uZGF0YSgnYWxsb3ctYWRkJylcbiAgICAgICAgc2V0dGluZ3MuYWxsb3dfZHVwbGljYXRlID0gY29sbGVjdGlvbi5kYXRhKCdhbGxvdy1hZGQnKSA/IHNldHRpbmdzLmFsbG93X2R1cGxpY2F0ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAoY29sbGVjdGlvbi5kYXRhKCdhbGxvdy1yZW1vdmUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldHRpbmdzLmFsbG93X3JlbW92ZSA9IGNvbGxlY3Rpb24uZGF0YSgnYWxsb3ctcmVtb3ZlJylcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsZWN0aW9uLmRhdGEoJ25hbWUtcHJlZml4JykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZXR0aW5ncy5uYW1lX3ByZWZpeCA9IGNvbGxlY3Rpb24uZGF0YSgnbmFtZS1wcmVmaXgnKVxuICAgICAgfVxuXG4gICAgICAvLyBwcm90b3R5cGUtbmFtZSByZXF1aXJlZCBmb3IgbmVzdGVkIGNvbGxlY3Rpb25zLCB3aGVyZSBjb2xsZWN0aW9uIGlkIHByZWZpeFxuICAgICAgLy8gaXNuJ3QgZ3Vlc3NhYmxlIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N5bWZvbnkvc3ltZm9ueS9pc3N1ZXMvMTM4MzcpXG4gICAgICBpZiAoIXNldHRpbmdzLm5hbWVfcHJlZml4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogdGhlIHByZWZpeCB1c2VkIGluIGRlc2NlbmRhbnQgZmllbGQgbmFtZXMgaXMgbWFuZGF0b3J5LCB5b3UgY2FuIHNldCBpdCB1c2luZyAyIHdheXM6JylcbiAgICAgICAgY29uc29sZS5sb2coJ2pxdWVyeS5jb2xsZWN0aW9uLmpzOiAtIHVzZSB0aGUgZm9ybSB0aGVtZSBnaXZlbiB3aXRoIHRoaXMgcGx1Z2luIHNvdXJjZScpXG4gICAgICAgIGNvbnNvbGUubG9nKCdqcXVlcnkuY29sbGVjdGlvbi5qczogLSBzZXQgbmFtZV9wcmVmaXggb3B0aW9uIHRvICBcXCd7eyBmb3JtVmlldy5teUNvbGxlY3Rpb25GaWVsZC52YXJzLmZ1bGxfbmFtZSB9fVxcJycpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHByZXNlcnZlX25hbWVzIG9wdGlvbiBpcyBzZXQsIHdlIHNob3VsZCBlbmZvcmNlIG1hbnkgb3B0aW9ucyB0byBhdm9pZFxuICAgICAgLy8gaGF2aW5nIGluY29uc2lzdGVuY2llcyBiZXR3ZWVuIHRoZSBVSSBhbmQgdGhlIFN5bWZvbnkgcmVzdWx0XG4gICAgICBpZiAoc2V0dGluZ3MucHJlc2VydmVfbmFtZXMpIHtcbiAgICAgICAgc2V0dGluZ3MuYWxsb3dfdXAgPSBmYWxzZVxuICAgICAgICBzZXR0aW5ncy5hbGxvd19kb3duID0gZmFsc2VcbiAgICAgICAgc2V0dGluZ3MuZHJhZ19kcm9wID0gZmFsc2VcbiAgICAgICAgc2V0dGluZ3MuYWRkX2F0X3RoZV9lbmQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGRyYWcgJiBkcm9wIHN1cHBvcnQ6IHRoaXMgaXMgYSBiaXQgbW9yZSBjb21wbGV4IHRoYW4gcHJlc3NpbmcgXCJ1cFwiIG9yXG4gICAgICAvLyBcImRvd25cIiBidXR0b25zIGJlY2F1c2Ugd2UgY2FuIG1vdmUgZWxlbWVudHMgbW9yZSB0aGFuIG9uZSBwbGFjZSBhaGVhZFxuICAgICAgLy8gb3IgYmVsb3cuLi5cbiAgICAgIGlmICgodHlwZW9mIGpRdWVyeS51aSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGpRdWVyeS51aS5zb3J0YWJsZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICYmIGNvbGxlY3Rpb24uZGF0YSgnc29ydGFibGUnKSkge1xuICAgICAgICBjb2xsZWN0aW9uLnNvcnRhYmxlKCdkaXNhYmxlJylcbiAgICAgIH1cbiAgICAgIGlmIChzZXR0aW5ncy5kcmFnX2Ryb3AgJiYgc2V0dGluZ3MuYWxsb3dfdXAgJiYgc2V0dGluZ3MuYWxsb3dfZG93bikge1xuICAgICAgICB2YXIgb2xkUG9zaXRpb25cbiAgICAgICAgdmFyIG5ld1Bvc2l0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5LnVpID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgalF1ZXJ5LnVpLnNvcnRhYmxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNldHRpbmdzLmRyYWdfZHJvcCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zb3J0YWJsZSgkLmV4dGVuZCh0cnVlLCB7fSwge1xuICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHVpLml0ZW1cbiAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgICAgIGlmICghdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmRyYWdfZHJvcF9zdGFydChldmVudCwgdWksIGVsZW1lbnRzLCBlbGVtZW50KSkpIHtcbiAgICAgICAgICAgICAgICB0aGF0LnNvcnRhYmxlKCdjYW5jZWwnKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHVpLnBsYWNlaG9sZGVyLmhlaWdodCh1aS5pdGVtLmhlaWdodCgpKVxuICAgICAgICAgICAgICB1aS5wbGFjZWhvbGRlci53aWR0aCh1aS5pdGVtLndpZHRoKCkpXG4gICAgICAgICAgICAgIG9sZFBvc2l0aW9uID0gZWxlbWVudHMuaW5kZXgoZWxlbWVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHVpLml0ZW1cbiAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgICAgIHRoYXQuc29ydGFibGUoJ2NhbmNlbCcpXG4gICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gc2V0dGluZ3MuZHJhZ19kcm9wX3VwZGF0ZShldmVudCwgdWksIGVsZW1lbnRzLCBlbGVtZW50KSB8fCAhKG5ld1Bvc2l0aW9uIC0gb2xkUG9zaXRpb24gPiAwID8gdHJ1ZU9yVW5kZWZpbmVkKHNldHRpbmdzLmJlZm9yZV91cChjb2xsZWN0aW9uLCBlbGVtZW50KSkgOiB0cnVlT3JVbmRlZmluZWQoc2V0dGluZ3MuYmVmb3JlX2Rvd24oY29sbGVjdGlvbiwgZWxlbWVudCkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gZWxlbWVudHMuaW5kZXgoZWxlbWVudClcbiAgICAgICAgICAgICAgZWxlbWVudHMgPSBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgICAgICAgICAgIGRvTW92ZShjb2xsZWN0aW9uLCBzZXR0aW5ncywgZWxlbWVudHMsIGVsZW1lbnQsIG9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBzZXR0aW5ncy5kcmFnX2Ryb3Bfb3B0aW9ucykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJywgc2V0dGluZ3MpXG5cbiAgICAgIC8vIGV2ZW50cyBvbiBidXR0b25zIHVzaW5nIGEgXCJzdGF0aWNcIiBjb250YWluZXIgc28gZXZlbiBuZXdseVxuICAgICAgLy8gY3JlYXRlZC9hamF4IGRvd25sb2FkZWQgYnV0dG9ucyBkb2Vzbid0IG5lZWQgZnVydGhlciBpbml0aWFsaXphdGlvblxuICAgICAgdmFyIGNvbnRhaW5lciA9ICQoc2V0dGluZ3MuY29udGFpbmVyKVxuICAgICAgY29udGFpbmVyXG4gICAgICAgIC5vZmYoJ2NsaWNrJywgJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nKVxuICAgICAgICAub24oJ2NsaWNrJywgJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1hY3Rpb24nLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG5cbiAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9ICQoJyMnICsgdGhhdC5kYXRhKCdjb2xsZWN0aW9uJykpXG4gICAgICAgICAgdmFyIHNldHRpbmdzID0gY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJylcblxuICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHNldHRpbmdzKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9ICQoJyMnICsgdGhhdC5kYXRhKCdjb2xsZWN0aW9uJykpLmZpbmQoJy4nICsgdGhhdC5kYXRhKCdjb2xsZWN0aW9uJykgKyAnLWNvbGxlY3Rpb24nKVxuICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gY29sbGVjdGlvbi5kYXRhKCdjb2xsZWN0aW9uLXNldHRpbmdzJylcbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgIHRocm93ICdDYW5cXCd0IGZpbmQgY29sbGVjdGlvbjogJyArIHRoYXQuZGF0YSgnY29sbGVjdGlvbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGVsZW1lbnRzID0gY29sbGVjdGlvbi5maW5kKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhhdC5kYXRhKCdlbGVtZW50JykgPyAkKCcjJyArIHRoYXQuZGF0YSgnZWxlbWVudCcpKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIHZhciBpbmRleCA9IGVsZW1lbnQgJiYgZWxlbWVudC5sZW5ndGggPyBlbGVtZW50cy5pbmRleChlbGVtZW50KSA6IC0xXG4gICAgICAgICAgdmFyIGV2ZW50ID0gbnVsbFxuXG4gICAgICAgICAgdmFyIGlzRHVwbGljYXRlID0gdGhhdC5pcygnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLWR1cGxpY2F0ZScpXG4gICAgICAgICAgaWYgKCh0aGF0LmlzKCcuJyArIHNldHRpbmdzLnByZWZpeCArICctYWRkJykgfHwgdGhhdC5pcygnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLXJlc2N1ZS1hZGQnKSB8fCBpc0R1cGxpY2F0ZSkgJiYgc2V0dGluZ3MuYWxsb3dfYWRkKSB7XG4gICAgICAgICAgICBldmVudCA9ICdhZGQnXG4gICAgICAgICAgICBlbGVtZW50cyA9IGRvQWRkKGNvbnRhaW5lciwgdGhhdCwgY29sbGVjdGlvbiwgc2V0dGluZ3MsIGVsZW1lbnRzLCBlbGVtZW50LCBpbmRleCwgaXNEdXBsaWNhdGUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoYXQuaXMoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1yZW1vdmUnKSAmJiBzZXR0aW5ncy5hbGxvd19yZW1vdmUpIHtcbiAgICAgICAgICAgIGV2ZW50ID0gJ3JlbW92ZSdcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9EZWxldGUoY29sbGVjdGlvbiwgc2V0dGluZ3MsIGVsZW1lbnRzLCBlbGVtZW50LCBpbmRleClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhhdC5pcygnLicgKyBzZXR0aW5ncy5wcmVmaXggKyAnLXVwJykgJiYgc2V0dGluZ3MuYWxsb3dfdXApIHtcbiAgICAgICAgICAgIGV2ZW50ID0gJ3VwJ1xuICAgICAgICAgICAgZWxlbWVudHMgPSBkb1VwKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoYXQuaXMoJy4nICsgc2V0dGluZ3MucHJlZml4ICsgJy1kb3duJykgJiYgc2V0dGluZ3MuYWxsb3dfZG93bikge1xuICAgICAgICAgICAgZXZlbnQgPSAnZG93bidcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9Eb3duKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgaW5kZXgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZHVtcENvbGxlY3Rpb25BY3Rpb25zKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBmYWxzZSwgZXZlbnQpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH0pIC8vIC5vblxuXG4gICAgICBkdW1wQ29sbGVjdGlvbkFjdGlvbnMoY29sbGVjdGlvbiwgc2V0dGluZ3MsIHRydWUpXG4gICAgICBlbmFibGVDaGlsZHJlbkNvbGxlY3Rpb25zKGNvbGxlY3Rpb24sIG51bGwsIHNldHRpbmdzKVxuXG4gICAgICAvLyBpZiBjb2xsZWN0aW9uIGVsZW1lbnRzIGFyZSBnaXZlbiBpbiB0aGUgd3Jvbmcgb3JkZXIsIHBsdWdpblxuICAgICAgLy8gbXVzdCByZW9yZGVyIHRoZW0gZ3JhcGhpY2FsbHlcbiAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXVxuICAgICAgICB2YXIgZWxlbWVudHMgPSBjb2xsZWN0aW9uLmZpbmQoc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpXG4gICAgICAgIGVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpXG4gICAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogcGFyc2VGbG9hdChnZXRGaWVsZFZhbHVlKHRoYXQuZmluZChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3RvcikpKSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoYXRcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiAoYS5wb3NpdGlvbiA8IGIucG9zaXRpb24gPyAtMSA6IChhLnBvc2l0aW9uID4gYi5wb3NpdGlvbiA/IDEgOiAwKSlcbiAgICAgICAgfVxuICAgICAgICBhcnJheS5zb3J0KHNvcnRlcilcblxuICAgICAgICAkLmVhY2goYXJyYXksIGZ1bmN0aW9uIChuZXdJbmRleCwgb2JqZWN0KSB7XG4gICAgICAgICAgdmFyIGlkcyA9IFtdXG4gICAgICAgICAgJChlbGVtZW50cykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlkcy5wdXNoKCQodGhpcykuYXR0cignaWQnKSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBvYmplY3QuZWxlbWVudFxuICAgICAgICAgIHZhciBvbGRJbmRleCA9ICQuaW5BcnJheShlbGVtZW50LmF0dHIoJ2lkJyksIGlkcylcblxuICAgICAgICAgIGlmIChuZXdJbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9Nb3ZlKGNvbGxlY3Rpb24sIHNldHRpbmdzLCBlbGVtZW50cywgZWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KVxuICAgICAgICAgICAgcHV0RmllbGRWYWx1ZShlbGVtZW50LmZpbmQoc2V0dGluZ3MucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpLCBlbGVtZW50cy5pbmRleChlbGVtZW50KSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IC8vIGlmIChzZXR0aW5ncy5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcikge1xuXG4gICAgICBzZXR0aW5ncy5hZnRlcl9pbml0KGNvbGxlY3Rpb24pXG5cbiAgICB9KSAvLyBlbGVtLmVhY2hcblxuICAgIHJldHVybiB0cnVlXG4gIH0gLy8gJC5mbi5jb2xsZWN0aW9uXG5cbn0pXG4oalF1ZXJ5KVxuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9