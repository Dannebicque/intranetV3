// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/jqueryui/jquery-ui.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/06/2021 10:29

(function (factory) {
  if (typeof define === 'function' && define.amd) {

    // AMD. Register as an anonymous module.
    define(['jquery'], factory)
  } else {

    // Browser globals
    factory(jQuery)
  }
}(function ($) {

  $.ui = $.ui || {}

  var version = $.ui.version = '1.12.1'


  /*!
   * jQuery UI Widget 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/


  var widgetUuid = 0
  var widgetSlice = Array.prototype.slice

  $.cleanData = (function (orig) {
    return function (elems) {
      var events, elem, i
      for (i = 0; (elem = elems[i]) != null; i++) {
        try {

          // Only trigger remove when necessary to save time
          events = $._data(elem, 'events')
          if (events && events.remove) {
            $(elem).triggerHandler('remove')
          }

          // Http://bugs.jquery.com/ticket/8235
        } catch (e) {
        }
      }
      orig(elems)
    }
  })($.cleanData)

  $.widget = function (name, base, prototype) {
    var existingConstructor, constructor, basePrototype

    // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    var proxiedPrototype = {}

    var namespace = name.split('.')[0]
    name = name.split('.')[1]
    var fullName = namespace + '-' + name

    if (!prototype) {
      prototype = base
      base = $.Widget
    }

    if ($.isArray(prototype)) {
      prototype = $.extend.apply(null, [{}].concat(prototype))
    }

    // Create selector for plugin
    $.expr[':'][fullName.toLowerCase()] = function (elem) {
      return !!$.data(elem, fullName)
    }

    $[namespace] = $[namespace] || {}
    existingConstructor = $[namespace][name]
    constructor = $[namespace][name] = function (options, element) {

      // Allow instantiation without "new" keyword
      if (!this._createWidget) {
        return new constructor(options, element)
      }

      // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if (arguments.length) {
        this._createWidget(options, element)
      }
    }

    // Extend with the existing constructor to carry over any static properties
    $.extend(constructor, existingConstructor, {
      version: prototype.version,

      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend({}, prototype),

      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    })

    basePrototype = new base()

    // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend({}, basePrototype.options)
    $.each(prototype, function (prop, value) {
      if (!$.isFunction(value)) {
        proxiedPrototype[prop] = value
        return
      }
      proxiedPrototype[prop] = (function () {
        function _super () {
          return base.prototype[prop].apply(this, arguments)
        }

        function _superApply (args) {
          return base.prototype[prop].apply(this, args)
        }

        return function () {
          var __super = this._super
          var __superApply = this._superApply
          var returnValue

          this._super = _super
          this._superApply = _superApply

          returnValue = value.apply(this, arguments)

          this._super = __super
          this._superApply = __superApply

          return returnValue
        }
      })()
    })
    constructor.prototype = $.widget.extend(basePrototype, {

      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    })

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if (existingConstructor) {
      $.each(existingConstructor._childConstructors, function (i, child) {
        var childPrototype = child.prototype

        // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget(childPrototype.namespace + '.' + childPrototype.widgetName, constructor,
          child._proto)
      })

      // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors
    } else {
      base._childConstructors.push(constructor)
    }

    $.widget.bridge(name, constructor)

    return constructor
  }

  $.widget.extend = function (target) {
    var input = widgetSlice.call(arguments, 1)
    var inputIndex = 0
    var inputLength = input.length
    var key
    var value

    for (; inputIndex < inputLength; inputIndex++) {
      for (key in input[inputIndex]) {
        value = input[inputIndex][key]
        if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {

          // Clone objects
          if ($.isPlainObject(value)) {
            target[key] = $.isPlainObject(target[key]) ?
              $.widget.extend({}, target[key], value) :

              // Don't extend strings, arrays, etc. with objects
              $.widget.extend({}, value)

            // Copy everything else by reference
          } else {
            target[key] = value
          }
        }
      }
    }
    return target
  }

  $.widget.bridge = function (name, object) {
    var fullName = object.prototype.widgetFullName || name
    $.fn[name] = function (options) {
      var isMethodCall = typeof options === 'string'
      var args = widgetSlice.call(arguments, 1)
      var returnValue = this

      if (isMethodCall) {

        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if (!this.length && options === 'instance') {
          returnValue = undefined
        } else {
          this.each(function () {
            var methodValue
            var instance = $.data(this, fullName)

            if (options === 'instance') {
              returnValue = instance
              return false
            }

            if (!instance) {
              return $.error('cannot call methods on ' + name +
                ' prior to initialization; ' +
                'attempted to call method \'' + options + '\'')
            }

            if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
              return $.error('no such method \'' + options + '\' for ' + name +
                ' widget instance')
            }

            methodValue = instance[options].apply(instance, args)

            if (methodValue !== instance && methodValue !== undefined) {
              returnValue = methodValue && methodValue.jquery ?
                returnValue.pushStack(methodValue.get()) :
                methodValue
              return false
            }
          })
        }
      } else {

        // Allow multiple hashes to be passed on init
        if (args.length) {
          options = $.widget.extend.apply(null, [options].concat(args))
        }

        this.each(function () {
          var instance = $.data(this, fullName)
          if (instance) {
            instance.option(options || {})
            if (instance._init) {
              instance._init()
            }
          } else {
            $.data(this, fullName, new object(options, this))
          }
        })
      }

      return returnValue
    }
  }

  $.Widget = function ( /* options, element */) {
  }
  $.Widget._childConstructors = []

  $.Widget.prototype = {
    widgetName: 'widget',
    widgetEventPrefix: '',
    defaultElement: '<div>',

    options: {
      classes: {},
      disabled: false,

      // Callbacks
      create: null
    },

    _createWidget: function (options, element) {
      element = $(element || this.defaultElement || this)[0]
      this.element = $(element)
      this.uuid = widgetUuid++
      this.eventNamespace = '.' + this.widgetName + this.uuid

      this.bindings = $()
      this.hoverable = $()
      this.focusable = $()
      this.classesElementLookup = {}

      if (element !== this) {
        $.data(element, this.widgetFullName, this)
        this._on(true, this.element, {
          remove: function (event) {
            if (event.target === element) {
              this.destroy()
            }
          }
        })
        this.document = $(element.style ?

          // Element within the document
          element.ownerDocument :

          // Element is window or document
          element.document || element)
        this.window = $(this.document[0].defaultView || this.document[0].parentWindow)
      }

      this.options = $.widget.extend({},
        this.options,
        this._getCreateOptions(),
        options)

      this._create()

      if (this.options.disabled) {
        this._setOptionDisabled(this.options.disabled)
      }

      this._trigger('create', null, this._getCreateEventData())
      this._init()
    },

    _getCreateOptions: function () {
      return {}
    },

    _getCreateEventData: $.noop,

    _create: $.noop,

    _init: $.noop,

    destroy: function () {
      var that = this

      this._destroy()
      $.each(this.classesElementLookup, function (key, value) {
        that._removeClass(value, key)
      })

      // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()
      this.element
        .off(this.eventNamespace)
        .removeData(this.widgetFullName)
      this.widget()
        .off(this.eventNamespace)
        .removeAttr('aria-disabled')

      // Clean up events and states
      this.bindings.off(this.eventNamespace)
    },

    _destroy: $.noop,

    widget: function () {
      return this.element
    },

    option: function (key, value) {
      var options = key
      var parts
      var curOption
      var i

      if (arguments.length === 0) {

        // Don't return a reference to the internal hash
        return $.widget.extend({}, this.options)
      }

      if (typeof key === 'string') {

        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {}
        parts = key.split('.')
        key = parts.shift()
        if (parts.length) {
          curOption = options[key] = $.widget.extend({}, this.options[key])
          for (i = 0; i < parts.length - 1; i++) {
            curOption[parts[i]] = curOption[parts[i]] || {}
            curOption = curOption[parts[i]]
          }
          key = parts.pop()
          if (arguments.length === 1) {
            return curOption[key] === undefined ? null : curOption[key]
          }
          curOption[key] = value
        } else {
          if (arguments.length === 1) {
            return this.options[key] === undefined ? null : this.options[key]
          }
          options[key] = value
        }
      }

      this._setOptions(options)

      return this
    },

    _setOptions: function (options) {
      var key

      for (key in options) {
        this._setOption(key, options[key])
      }

      return this
    },

    _setOption: function (key, value) {
      if (key === 'classes') {
        this._setOptionClasses(value)
      }

      this.options[key] = value

      if (key === 'disabled') {
        this._setOptionDisabled(value)
      }

      return this
    },

    _setOptionClasses: function (value) {
      var classKey, elements, currentElements

      for (classKey in value) {
        currentElements = this.classesElementLookup[classKey]
        if (value[classKey] === this.options.classes[classKey] ||
          !currentElements ||
          !currentElements.length) {
          continue
        }

        // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.
        elements = $(currentElements.get())
        this._removeClass(currentElements, classKey)

        // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().
        elements.addClass(this._classes({
          element: elements,
          keys: classKey,
          classes: value,
          add: true
        }))
      }
    },

    _setOptionDisabled: function (value) {
      this._toggleClass(this.widget(), this.widgetFullName + '-disabled', null, !!value)

      // If the widget is becoming disabled, then nothing is interactive
      if (value) {
        this._removeClass(this.hoverable, null, 'ui-state-hover')
        this._removeClass(this.focusable, null, 'ui-state-focus')
      }
    },

    enable: function () {
      return this._setOptions({disabled: false})
    },

    disable: function () {
      return this._setOptions({disabled: true})
    },

    _classes: function (options) {
      var full = []
      var that = this

      options = $.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, options)

      function processClassString (classes, checkOption) {
        var current, i
        for (i = 0; i < classes.length; i++) {
          current = that.classesElementLookup[classes[i]] || $()
          if (options.add) {
            current = $($.unique(current.get().concat(options.element.get())))
          } else {
            current = $(current.not(options.element).get())
          }
          that.classesElementLookup[classes[i]] = current
          full.push(classes[i])
          if (checkOption && options.classes[classes[i]]) {
            full.push(options.classes[classes[i]])
          }
        }
      }

      this._on(options.element, {
        'remove': '_untrackClassesElement'
      })

      if (options.keys) {
        processClassString(options.keys.match(/\S+/g) || [], true)
      }
      if (options.extra) {
        processClassString(options.extra.match(/\S+/g) || [])
      }

      return full.join(' ')
    },

    _untrackClassesElement: function (event) {
      var that = this
      $.each(that.classesElementLookup, function (key, value) {
        if ($.inArray(event.target, value) !== -1) {
          that.classesElementLookup[key] = $(value.not(event.target).get())
        }
      })
    },

    _removeClass: function (element, keys, extra) {
      return this._toggleClass(element, keys, extra, false)
    },

    _addClass: function (element, keys, extra) {
      return this._toggleClass(element, keys, extra, true)
    },

    _toggleClass: function (element, keys, extra, add) {
      add = (typeof add === 'boolean') ? add : extra
      var shift = (typeof element === 'string' || element === null),
        options = {
          extra: shift ? keys : extra,
          keys: shift ? element : keys,
          element: shift ? this.element : element,
          add: add
        }
      options.element.toggleClass(this._classes(options), add)
      return this
    },

    _on: function (suppressDisabledCheck, element, handlers) {
      var delegateElement
      var instance = this

      // No suppressDisabledCheck flag, shuffle arguments
      if (typeof suppressDisabledCheck !== 'boolean') {
        handlers = element
        element = suppressDisabledCheck
        suppressDisabledCheck = false
      }

      // No element argument, shuffle and use this.element
      if (!handlers) {
        handlers = element
        element = this.element
        delegateElement = this.widget()
      } else {
        element = delegateElement = $(element)
        this.bindings = this.bindings.add(element)
      }

      $.each(handlers, function (event, handler) {
        function handlerProxy () {

          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if (!suppressDisabledCheck &&
            (instance.options.disabled === true ||
              $(this).hasClass('ui-state-disabled'))) {
            return
          }
          return (typeof handler === 'string' ? instance[handler] : handler)
            .apply(instance, arguments)
        }

        // Copy the guid so direct unbinding works
        if (typeof handler !== 'string') {
          handlerProxy.guid = handler.guid =
            handler.guid || handlerProxy.guid || $.guid++
        }

        var match = event.match(/^([\w:-]*)\s*(.*)$/)
        var eventName = match[1] + instance.eventNamespace
        var selector = match[2]

        if (selector) {
          delegateElement.on(eventName, selector, handlerProxy)
        } else {
          element.on(eventName, handlerProxy)
        }
      })
    },

    _off: function (element, eventName) {
      eventName = (eventName || '').split(' ').join(this.eventNamespace + ' ') +
        this.eventNamespace
      element.off(eventName).off(eventName)

      // Clear the stack to avoid memory leaks (#10056)
      this.bindings = $(this.bindings.not(element).get())
      this.focusable = $(this.focusable.not(element).get())
      this.hoverable = $(this.hoverable.not(element).get())
    },

    _delay: function (handler, delay) {
      function handlerProxy () {
        return (typeof handler === 'string' ? instance[handler] : handler)
          .apply(instance, arguments)
      }

      var instance = this
      return setTimeout(handlerProxy, delay || 0)
    },

    _hoverable: function (element) {
      this.hoverable = this.hoverable.add(element)
      this._on(element, {
        mouseenter: function (event) {
          this._addClass($(event.currentTarget), null, 'ui-state-hover')
        },
        mouseleave: function (event) {
          this._removeClass($(event.currentTarget), null, 'ui-state-hover')
        }
      })
    },

    _focusable: function (element) {
      this.focusable = this.focusable.add(element)
      this._on(element, {
        focusin: function (event) {
          this._addClass($(event.currentTarget), null, 'ui-state-focus')
        },
        focusout: function (event) {
          this._removeClass($(event.currentTarget), null, 'ui-state-focus')
        }
      })
    },

    _trigger: function (type, event, data) {
      var prop, orig
      var callback = this.options[type]

      data = data || {}
      event = $.Event(event)
      event.type = (type === this.widgetEventPrefix ?
        type :
        this.widgetEventPrefix + type).toLowerCase()

      // The original event may come from any element
      // so we need to reset the target on the new event
      event.target = this.element[0]

      // Copy original event properties over to the new event
      orig = event.originalEvent
      if (orig) {
        for (prop in orig) {
          if (!(prop in event)) {
            event[prop] = orig[prop]
          }
        }
      }

      this.element.trigger(event, data)
      return !($.isFunction(callback) &&
        callback.apply(this.element[0], [event].concat(data)) === false ||
        event.isDefaultPrevented())
    }
  }

  $.each({show: 'fadeIn', hide: 'fadeOut'}, function (method, defaultEffect) {
    $.Widget.prototype['_' + method] = function (element, options, callback) {
      if (typeof options === 'string') {
        options = {effect: options}
      }

      var hasOptions
      var effectName = !options ?
        method :
        options === true || typeof options === 'number' ?
          defaultEffect :
          options.effect || defaultEffect

      options = options || {}
      if (typeof options === 'number') {
        options = {duration: options}
      }

      hasOptions = !$.isEmptyObject(options)
      options.complete = callback

      if (options.delay) {
        element.delay(options.delay)
      }

      if (hasOptions && $.effects && $.effects.effect[effectName]) {
        element[method](options)
      } else if (effectName !== method && element[effectName]) {
        element[effectName](options.duration, options.easing, callback)
      } else {
        element.queue(function (next) {
          $(this)[method]()
          if (callback) {
            callback.call(element[0])
          }
          next()
        })
      }
    }
  })

  var widget = $.widget


// This file is deprecated
  var ie = $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())

  /*!
   * jQuery UI Mouse 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/


  var mouseHandled = false
  $(document).on('mouseup', function () {
    mouseHandled = false
  })

  var widgetsMouse = $.widget('ui.mouse', {
    version: '1.12.1',
    options: {
      cancel: 'input, textarea, button, select, option',
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var that = this

      this.element
        .on('mousedown.' + this.widgetName, function (event) {
          return that._mouseDown(event)
        })
        .on('click.' + this.widgetName, function (event) {
          if (true === $.data(event.target, that.widgetName + '.preventClickEvent')) {
            $.removeData(event.target, that.widgetName + '.preventClickEvent')
            event.stopImmediatePropagation()
            return false
          }
        })

      this.started = false
    },

    // TODO: make sure destroying one instance of mouse doesn't mess with
    // other instances of mouse
    _mouseDestroy: function () {
      this.element.off('.' + this.widgetName)
      if (this._mouseMoveDelegate) {
        this.document
          .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .off('mouseup.' + this.widgetName, this._mouseUpDelegate)
      }
    },

    _mouseDown: function (event) {

      // don't let more than one widget handle mouseStart
      if (mouseHandled) {
        return
      }

      this._mouseMoved = false;

      // We may have missed mouseup (out of window)
      (this._mouseStarted && this._mouseUp(event))

      this._mouseDownEvent = event

      var that = this,
        btnIsLeft = (event.which === 1),

        // event.target.nodeName works around a bug in IE 8 with
        // disabled inputs (#7620)
        elIsCancel = (typeof this.options.cancel === 'string' && event.target.nodeName ?
          $(event.target).closest(this.options.cancel).length : false)
      if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
        return true
      }

      this.mouseDelayMet = !this.options.delay
      if (!this.mouseDelayMet) {
        this._mouseDelayTimer = setTimeout(function () {
          that.mouseDelayMet = true
        }, this.options.delay)
      }

      if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
        this._mouseStarted = (this._mouseStart(event) !== false)
        if (!this._mouseStarted) {
          event.preventDefault()
          return true
        }
      }

      // Click event may never have fired (Gecko & Opera)
      if (true === $.data(event.target, this.widgetName + '.preventClickEvent')) {
        $.removeData(event.target, this.widgetName + '.preventClickEvent')
      }

      // These delegates are required to keep context
      this._mouseMoveDelegate = function (event) {
        return that._mouseMove(event)
      }
      this._mouseUpDelegate = function (event) {
        return that._mouseUp(event)
      }

      this.document
        .on('mousemove.' + this.widgetName, this._mouseMoveDelegate)
        .on('mouseup.' + this.widgetName, this._mouseUpDelegate)

      event.preventDefault()

      mouseHandled = true
      return true
    },

    _mouseMove: function (event) {

      // Only check for mouseups outside the document if you've moved inside the document
      // at least once. This prevents the firing of mouseup in the case of IE<9, which will
      // fire a mousemove event if content is placed under the cursor. See #7778
      // Support: IE <9
      if (this._mouseMoved) {

        // IE mouseup check - mouseup happened when mouse was out of window
        if ($.ui.ie && (!document.documentMode || document.documentMode < 9) &&
          !event.button) {
          return this._mouseUp(event)

          // Iframe mouseup check - mouseup occurred in another document
        } else if (!event.which) {

          // Support: Safari <=8 - 9
          // Safari sets which to 0 if you press any of the following keys
          // during a drag (#14461)
          if (event.originalEvent.altKey || event.originalEvent.ctrlKey ||
            event.originalEvent.metaKey || event.originalEvent.shiftKey) {
            this.ignoreMissingWhich = true
          } else if (!this.ignoreMissingWhich) {
            return this._mouseUp(event)
          }
        }
      }

      if (event.which || event.button) {
        this._mouseMoved = true
      }

      if (this._mouseStarted) {
        this._mouseDrag(event)
        return event.preventDefault()
      }

      if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
        this._mouseStarted =
          (this._mouseStart(this._mouseDownEvent, event) !== false);
        (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event))
      }

      return !this._mouseStarted
    },

    _mouseUp: function (event) {
      this.document
        .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
        .off('mouseup.' + this.widgetName, this._mouseUpDelegate)

      if (this._mouseStarted) {
        this._mouseStarted = false

        if (event.target === this._mouseDownEvent.target) {
          $.data(event.target, this.widgetName + '.preventClickEvent', true)
        }

        this._mouseStop(event)
      }

      if (this._mouseDelayTimer) {
        clearTimeout(this._mouseDelayTimer)
        delete this._mouseDelayTimer
      }

      this.ignoreMissingWhich = false
      mouseHandled = false
      event.preventDefault()
    },

    _mouseDistanceMet: function (event) {
      return (Math.max(
          Math.abs(this._mouseDownEvent.pageX - event.pageX),
          Math.abs(this._mouseDownEvent.pageY - event.pageY)
        ) >= this.options.distance
      )
    },

    _mouseDelayMet: function ( /* event */) {
      return this.mouseDelayMet
    },

    // These are placeholder methods, to be overriden by extending plugin
    _mouseStart: function ( /* event */) {
    },
    _mouseDrag: function ( /* event */) {
    },
    _mouseStop: function ( /* event */) {
    },
    _mouseCapture: function ( /* event */) {
      return true
    }
  })


  /*!
   * jQuery UI Selectable 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

//>>label: Selectable
//>>group: Interactions
//>>description: Allows groups of elements to be selected with the mouse.
//>>docs: http://api.jqueryui.com/selectable/
//>>demos: http://jqueryui.com/selectable/
//>>css.structure: ../../themes/base/selectable.css


  var widgetsSelectable = $.widget('ui.selectable', $.ui.mouse, {
    version: '1.12.1',
    options: {
      appendTo: 'body',
      autoRefresh: true,
      distance: 0,
      filter: '*',
      tolerance: 'touch',

      // Callbacks
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function () {
      var that = this

      this._addClass('ui-selectable')

      this.dragged = false

      // Cache selectee children based on filter
      this.refresh = function () {
        that.elementPos = $(that.element[0]).offset()
        that.selectees = $(that.options.filter, that.element[0])
        that._addClass(that.selectees, 'ui-selectee')
        that.selectees.each(function () {
          var $this = $(this),
            selecteeOffset = $this.offset(),
            pos = {
              left: selecteeOffset.left - that.elementPos.left,
              top: selecteeOffset.top - that.elementPos.top
            }
          $.data(this, 'selectable-item', {
            element: this,
            $element: $this,
            left: pos.left,
            top: pos.top,
            right: pos.left + $this.outerWidth(),
            bottom: pos.top + $this.outerHeight(),
            startselected: false,
            selected: $this.hasClass('ui-selected'),
            selecting: $this.hasClass('ui-selecting'),
            unselecting: $this.hasClass('ui-unselecting')
          })
        })
      }
      this.refresh()

      this._mouseInit()

      this.helper = $('<div>')
      this._addClass(this.helper, 'ui-selectable-helper')
    },

    _destroy: function () {
      this.selectees.removeData('selectable-item')
      this._mouseDestroy()
    },

    _mouseStart: function (event) {
      var that = this,
        options = this.options

      this.opos = [event.pageX, event.pageY]
      this.elementPos = $(this.element[0]).offset()

      if (this.options.disabled) {
        return
      }

      this.selectees = $(options.filter, this.element[0])

      this._trigger('start', event)

      $(options.appendTo).append(this.helper)

      // position helper (lasso)
      this.helper.css({
        'left': event.pageX,
        'top': event.pageY,
        'width': 0,
        'height': 0
      })

      if (options.autoRefresh) {
        this.refresh()
      }

      this.selectees.filter('.ui-selected').each(function () {
        var selectee = $.data(this, 'selectable-item')
        selectee.startselected = true
        if (!event.metaKey && !event.ctrlKey) {
          that._removeClass(selectee.$element, 'ui-selected')
          selectee.selected = false
          that._addClass(selectee.$element, 'ui-unselecting')
          selectee.unselecting = true

          // selectable UNSELECTING callback
          that._trigger('unselecting', event, {
            unselecting: selectee.element
          })
        }
      })

      $(event.target).parents().addBack().each(function () {
        var doSelect,
          selectee = $.data(this, 'selectable-item')
        if (selectee) {
          doSelect = (!event.metaKey && !event.ctrlKey) ||
            !selectee.$element.hasClass('ui-selected')
          that._removeClass(selectee.$element, doSelect ? 'ui-unselecting' : 'ui-selected')
            ._addClass(selectee.$element, doSelect ? 'ui-selecting' : 'ui-unselecting')
          selectee.unselecting = !doSelect
          selectee.selecting = doSelect
          selectee.selected = doSelect

          // selectable (UN)SELECTING callback
          if (doSelect) {
            that._trigger('selecting', event, {
              selecting: selectee.element
            })
          } else {
            that._trigger('unselecting', event, {
              unselecting: selectee.element
            })
          }
          return false
        }
      })

    },

    _mouseDrag: function (event) {

      this.dragged = true

      if (this.options.disabled) {
        return
      }

      var tmp,
        that = this,
        options = this.options,
        x1 = this.opos[0],
        y1 = this.opos[1],
        x2 = event.pageX,
        y2 = event.pageY

      if (x1 > x2) {
        tmp = x2
        x2 = x1
        x1 = tmp
      }
      if (y1 > y2) {
        tmp = y2
        y2 = y1
        y1 = tmp
      }
      this.helper.css({left: x1, top: y1, width: x2 - x1, height: y2 - y1})

      this.selectees.each(function () {
        var selectee = $.data(this, 'selectable-item'),
          hit = false,
          offset = {}

        //prevent helper from being selected if appendTo: selectable
        if (!selectee || selectee.element === that.element[0]) {
          return
        }

        offset.left = selectee.left + that.elementPos.left
        offset.right = selectee.right + that.elementPos.left
        offset.top = selectee.top + that.elementPos.top
        offset.bottom = selectee.bottom + that.elementPos.top

        if (options.tolerance === 'touch') {
          hit = (!(offset.left > x2 || offset.right < x1 || offset.top > y2 ||
            offset.bottom < y1))
        } else if (options.tolerance === 'fit') {
          hit = (offset.left > x1 && offset.right < x2 && offset.top > y1 &&
            offset.bottom < y2)
        }

        if (hit) {

          // SELECT
          if (selectee.selected) {
            that._removeClass(selectee.$element, 'ui-selected')
            selectee.selected = false
          }
          if (selectee.unselecting) {
            that._removeClass(selectee.$element, 'ui-unselecting')
            selectee.unselecting = false
          }
          if (!selectee.selecting) {
            that._addClass(selectee.$element, 'ui-selecting')
            selectee.selecting = true

            // selectable SELECTING callback
            that._trigger('selecting', event, {
              selecting: selectee.element
            })
          }
        } else {

          // UNSELECT
          if (selectee.selecting) {
            if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
              that._removeClass(selectee.$element, 'ui-selecting')
              selectee.selecting = false
              that._addClass(selectee.$element, 'ui-selected')
              selectee.selected = true
            } else {
              that._removeClass(selectee.$element, 'ui-selecting')
              selectee.selecting = false
              if (selectee.startselected) {
                that._addClass(selectee.$element, 'ui-unselecting')
                selectee.unselecting = true
              }

              // selectable UNSELECTING callback
              that._trigger('unselecting', event, {
                unselecting: selectee.element
              })
            }
          }
          if (selectee.selected) {
            if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
              that._removeClass(selectee.$element, 'ui-selected')
              selectee.selected = false

              that._addClass(selectee.$element, 'ui-unselecting')
              selectee.unselecting = true

              // selectable UNSELECTING callback
              that._trigger('unselecting', event, {
                unselecting: selectee.element
              })
            }
          }
        }
      })

      return false
    },

    _mouseStop: function (event) {
      var that = this

      this.dragged = false

      $('.ui-unselecting', this.element[0]).each(function () {
        var selectee = $.data(this, 'selectable-item')
        that._removeClass(selectee.$element, 'ui-unselecting')
        selectee.unselecting = false
        selectee.startselected = false
        that._trigger('unselected', event, {
          unselected: selectee.element
        })
      })
      $('.ui-selecting', this.element[0]).each(function () {
        var selectee = $.data(this, 'selectable-item')
        that._removeClass(selectee.$element, 'ui-selecting')
          ._addClass(selectee.$element, 'ui-selected')
        selectee.selecting = false
        selectee.selected = true
        selectee.startselected = true
        that._trigger('selected', event, {
          selected: selectee.element
        })
      })
      this._trigger('stop', event)

      this.helper.remove()

      return false
    }

  })


}))
