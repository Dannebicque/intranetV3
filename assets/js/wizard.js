// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/wizard.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/06/2021 08:24

import '../vendor/bootstrap-wizard/bootstrap-wizard.min'
// import $ from 'jquery'

$('[data-provide~="wizard"]').each(function () {
  initWizard($(this))
})

function initWizard (obj) {
  if (!$.fn.bootstrapWizard) {
    return
  }


  var wizard = obj
  var nav_item = obj.find('.nav-item')
  var tab_pane = obj.find('.tab-pane')

  wizard.bootstrapWizard({
    tabClass: 'nav-process',
    nextSelector: '[data-wizard="next"]',
    previousSelector: '[data-wizard="prev"]',
    firstSelector: '[data-wizard="first"]',
    lastSelector: '[data-wizard="last"]',
    finishSelector: '[data-wizard="finish"]',
    backSelector: '[data-wizard="back"]',

    onTabClick: function (tab, navigation, index) {
      if (!wizard.is('[data-navigateable="true"]')) {
        return false
      }
    },


    onNext: function (tab, navigation, index) {

      var current_index = wizard.bootstrapWizard('currentIndex')
      var curr_tab = tab_pane.eq(current_index)
      var tab = tab_pane.eq(index)

      // Validator
      var validator_selector = '[data-provide="validation"]'
      var validator = curr_tab.find(validator_selector).addBack(validator_selector)
      if (validator.length) {
        validator.validator('validate')
        if (validator.find('.has-error').length) {
          return false
        }
      }


      // Callback
      //
      if (wizard.hasDataAttr('on-next')) {
        app.call(wizard.data('on-next'), tab, navigation, index)
      }
    },


    onBack: function (tab, navigation, index) {

      // Callback
      //
      if (wizard.hasDataAttr('on-back')) {
        app.call(wizard.data('on-back'), tab, navigation, index)
      }
    },


    onPrevious: function (tab, navigation, index) {

      // Callback
      //
      if (wizard.hasDataAttr('on-previous')) {
        app.call(wizard.data('on-previous'), tab, navigation, index)
      }
    },


    onTabShow: function (tab, navigation, index) {

      var tab = tab_pane.eq(index)
      var nav = nav_item.eq(index)
      var max = wizard.bootstrapWizard('navigationLength')

      // Finish button
      if (index == max) {
        wizard.find('[data-wizard="next"]').addClass('d-none')
        wizard.find('[data-wizard="finish"]').removeClass('d-none')
      } else {
        wizard.find('[data-wizard="next"]').removeClass('d-none')
        wizard.find('[data-wizard="finish"]').addClass('d-none')
      }

      // Nav classes
      navigation.children().removeClass('processing')
      navigation.children(':lt(' + index + '):not(.complete)').addClass('complete')
      nav.addClass('processing')

      if (!wizard.is('[data-stay-complete="true"]')) {
        navigation.children(':gt(' + index + ').complete').removeClass('complete')
      }

      // Ajax load
      if (tab.hasDataAttr('url')) {
        tab.load(tab.data('url'))
      }

      // Callback for tab
      if (tab.hasDataAttr('callback')) {
        app.call(tab.data('callback'), tab)
      }

      // Callback for wizard
      //
      if (wizard.hasDataAttr('on-tab-show')) {
        app.call(wizard.data('on-tab-show'), tab, navigation, index)
      }

    },


    onFinish: function (tab, navigation, index) {

      var curr_tab = tab_pane.eq(index)

      // Validator
      var validator_selector = '[data-provide="validation"]'
      var validator = curr_tab.find(validator_selector).addBack(validator_selector)
      if (validator.length) {
        validator.validator('validate')
        if (validator.find('.has-error').length) {
          validator.closest('form').one('submit', function (e) {
            e.preventDefault()
          })
          return false
        }
      }

      // Navigation
      var nav = nav_item.eq(index)
      nav.addClass('complete').removeClass('processing')

      // Callback
      //
      if (wizard.hasDataAttr('on-finish')) {
        app.call(wizard.data('on-finish'), tab, navigation, index)
      }

    }


  })
}
