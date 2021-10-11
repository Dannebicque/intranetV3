// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/modaler.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2021 21:48

// =====================
// Modaler
// =====================
//
import {Modal} from 'bootstrap'


let configModaler = {
  url: '',
  isModal: false,
  html: '',
  target: '',
  type: '',
  size: '',
  title: '',
  backdrop: true,
  headerVisible: true,
  footerVisible: true,
  confirmVisible: true,
  confirmText: 'Ok',
  confirmClass: 'btn btn-w-sm btn-primary',
  cancelVisible: false,
  cancelText: 'Cancel',
  cancelClass: 'btn btn-w-sm btn-secondary',
  bodyExtraClass: '',
  spinner: '<div class="h-200 center-vh"><svg class="spinner-circle-material-svg" viewBox="0 0 50 50"><circle class="circle" cx="25" cy="25" r="20"></svg></div>',

  autoDestroy: true,

  // Events
  onShow: null,
  onShown: null,
  onHide: null,
  onHidden: null,
  onConfirm: null,
  onCancel: null,

  // Private options
  modalId: null
}
//Todo: probablement à refaire au prore avec BS5 ?
const guid = (len) => {
  if (len == undefined) {
    len = 5
  }
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, len)
}


export const modaler = (options) => {
  let modal = null

  var setting = $.extend({}, configModaler, options)

  if (setting.modalId) {
    modal = new Modal($('#' + setting.modalId))
    modal.show()
    return
  }


  var id = 'modal-' + guid()

  var handleCallback = function (id) {

    // Bootstrap modal events
    //
    if (setting.onShow) {
      $('#' + id).on('show.bs.modal', function (e) {
        //setting.onShow();
      })
    }

    if (setting.onShown) {
      $('#' + id).on('shown.bs.modal', function (e) {
        //setting.onShown();
      })
    }

    if (setting.onHide) {

      var myModalEl = document.getElementById(id)
      myModalEl.addEventListener('hidden.bs.modal', function (event) {
        setting.onHide()
      })
    }

    if (setting.onHidden) {
      var myModalEl = document.getElementById(id)
      myModalEl.addEventListener('hidden.bs.modal', function (event) {
        setting.onHidden()
      })
    }


    // Handle confirm callback
    //
    $('#' + id).find('[data-perform="confirm"]').on('click', function () {

      // Hasn't set
      if (setting.onConfirm == null) {
        return
      }

      // Is a function
      if ($.isFunction(setting.onConfirm)) {
        setting.onConfirm($('#' + id))
        return
      }

      // Is string value, so call it
      if (setting.onConfirm.substring) {
        app.call(setting.onConfirm, $('#' + id))
      }

    })


      // Handle cancel callback
      //
      $('#' + id).find('[data-perform="cancel"]').on('click', function () {

        // Hasn't set
        if (setting.onCancel == null) {
          return
        }

        // Is a function
        if ($.isFunction(setting.onCancel)) {
          setting.onCancel($('#' + id))
          return
        }

        // Is string value, so call it
        if (setting.onCancel.substring) {
          app.call(setting.onCancel, $('#' + id))
        }

      })
  }


  //----------------------------------
  // We recieve modal markup from url
  //
  if (setting.isModal) {

    $('<div>').load(setting.url, function () {
      $('body').append($(this).find('.modal').attr('id', id).outerHTML())

      const modal = new Modal($('#' + id))
      modal.show()
      $('#' + id).on('shown.bs.modal', function (e) {
        //todo: a confirmer $('#'+ id).find('.modal-body').perfectScrollbar('update');
      })


      // Destroy after close
      //
      if (setting.autoDestroy) {
        var myModalEl = document.getElementById(id)
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
          modal.remove()
        })
      } else {
        $(setting.this).attr('data-modal-id', id)
      }


      handleCallback(id)
    })
  }





    ////----------------------------------
    // We should design the modal
  //
  else {

    switch (setting.size) {
      case 'sm':
        setting.size = 'modal-sm'
        break

      case 'lg':
        setting.size = 'modal-lg'
        break

      default:
      //setting.size = '';
    }


    if (setting.type) {
      setting.type = 'modal-' + setting.type
    }


    // Header code
    //
    var html_header = ''
    if (setting.headerVisible) {
      html_header +=
        '<div class="modal-header"> \
          <h5 class="modal-title">' + setting.title + '</h5> \
            <button type="button" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button> \
          </div>'
    }


    // Footer code
    //
    var html_footer = ''
    if (setting.footerVisible) {
      html_footer += '<div class="modal-footer">'

      if (setting.cancelVisible) {
        html_footer += '<button class="' + setting.cancelClass + '" data-bs-dismiss="modal" data-perform="cancel">' + setting.cancelText + '</button>'
      }

      if (setting.confirmVisible) {
        html_footer += '<button class="' + setting.confirmClass + '" data-bs-dismiss="modal" data-perform="confirm">' + setting.confirmText + '</button>'
      }

      html_footer += '</div>'
    }

    // Modal code
    //
    var modal_html =
      '<div class="modal fade ' + setting.type + '" id="' + id + '" tabindex="-1"' + (!setting.backdrop ? ' data-backdrop="false"' : '') + '> \
            <div class="modal-dialog ' + setting.size + '"> \
              <div class="modal-content"> \
                ' + html_header + ' \
                <div class="modal-body ' + setting.bodyExtraClass + '"> \
                  ' + setting.spinner + ' \
                </div> \
                ' + html_footer + ' \
              </div> \
            </div> \
          </div>'


    // Show modal
    $('body').append(modal_html)
    modal = new Modal($('#' + id))
    modal.show()


    // Destroy after close
    //
    if (setting.autoDestroy) {
      var myModalEl = document.getElementById(id)
      myModalEl.addEventListener('hidden.bs.modal', function (event) {
        modal.remove()
      })

    } else {
      $(setting.this).attr('data-modal-id', id)
    }


    // Load data into the modal
    //
    if (setting.url) {
      $('#' + id).find('.modal-body').load(setting.url, function () {
        //todo: a confirmer $(this).perfectScrollbar('update');
        handleCallback(id)
      })
    } else if (setting.html) {
      $('#' + id).find('.modal-body').html(setting.html)
      handleCallback(id)
    } else if (setting.target) {
      $('#' + id).find('.modal-body').html($(setting.target).html())
      handleCallback(id)
    }
  }
}

