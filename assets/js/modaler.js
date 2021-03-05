// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/modaler.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/03/2021 16:31

// =====================
// Modaler
// =====================
//
+function ($) {

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

  function guid (len) {
    if (len == undefined) {
      len = 5
    }
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, len)
  }


  modaler = function (options) {
    var setting = $.extend({}, configModaler, options)

    if (setting.modalId) {
      $('#' + setting.modalId).modal('show')
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
        $('#' + id).on('hide.bs.modal', function (e) {
          setting.onHide()
        })
      }

      if (setting.onHidden) {
        $('#' + id).on('hidden.bs.modal', function (e) {
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

        $('#' + id).modal('show')
        $('#' + id).one('shown.bs.modal', function (e) {
          //todo: a confirmer $('#'+ id).find('.modal-body').perfectScrollbar('update');
        })


        // Destroy after close
        //
        if (setting.autoDestroy) {
          $('#' + id).on('hidden.bs.modal', function () {
            $('#' + id).remove()
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
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button> \
          </div>'
      }


      // Footer code
      //
      var html_footer = ''
      if (setting.footerVisible) {
        html_footer += '<div class="modal-footer">'

        if (setting.cancelVisible) {
          html_footer += '<button class="' + setting.cancelClass + '" data-dismiss="modal" data-perform="cancel">' + setting.cancelText + '</button>'
        }

        if (setting.confirmVisible) {
          html_footer += '<button class="' + setting.confirmClass + '" data-dismiss="modal" data-perform="confirm">' + setting.confirmText + '</button>'
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
      $('#' + id).modal('show')


      // Destroy after close
      //
      if (setting.autoDestroy) {
        $('#' + id).on('hidden.bs.modal', function () {
          $('#' + id).remove()
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
}(jQuery)
