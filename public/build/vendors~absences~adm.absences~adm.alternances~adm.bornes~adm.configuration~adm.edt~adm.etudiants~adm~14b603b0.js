// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0'], {

  /***/ './node_modules/core-js/internals/a-possible-prototype.js':
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js')

    module.exports = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError('Can\'t set ' + String(it) + ' as a prototype')
      }
      return it
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/html.js':
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/html.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ './node_modules/core-js/internals/get-built-in.js')

    module.exports = getBuiltIn('document', 'documentElement')


    /***/
  }),

  /***/ './node_modules/core-js/internals/inherit-if-required.js':
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js')
    var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ './node_modules/core-js/internals/object-set-prototype-of.js')

// makes subclassing work correct for wrapped built-ins
    module.exports = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype
      if (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf &&
        // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        typeof (NewTarget = dummy.constructor) == 'function' &&
        NewTarget !== Wrapper &&
        isObject(NewTargetPrototype = NewTarget.prototype) &&
        NewTargetPrototype !== Wrapper.prototype
      ) setPrototypeOf($this, NewTargetPrototype)
      return $this
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/object-create.js':
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/object-create.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js')
    var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ './node_modules/core-js/internals/object-define-properties.js')
    var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ './node_modules/core-js/internals/enum-bug-keys.js')
    var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ './node_modules/core-js/internals/hidden-keys.js')
    var html = __webpack_require__(/*! ../internals/html */ './node_modules/core-js/internals/html.js')
    var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ './node_modules/core-js/internals/document-create-element.js')
    var sharedKey = __webpack_require__(/*! ../internals/shared-key */ './node_modules/core-js/internals/shared-key.js')

    var GT = '>'
    var LT = '<'
    var PROTOTYPE = 'prototype'
    var SCRIPT = 'script'
    var IE_PROTO = sharedKey('IE_PROTO')

    var EmptyConstructor = function () { /* empty */
    }

    var scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
    }

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''))
      activeXDocument.close()
      var temp = activeXDocument.parentWindow.Object
      activeXDocument = null // avoid memory leak
      return temp
    }

// Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe')
      var JS = 'java' + SCRIPT + ':'
      var iframeDocument
      iframe.style.display = 'none'
      html.appendChild(iframe)
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS)
      iframeDocument = iframe.contentWindow.document
      iframeDocument.open()
      iframeDocument.write(scriptTag('document.F=Object'))
      iframeDocument.close()
      return iframeDocument.F
    }

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
    var activeXDocument
    var NullProtoObject = function () {
      try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile')
      } catch (error) { /* ignore */
      }
      NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame()
      var length = enumBugKeys.length
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
      return NullProtoObject()
    }

    hiddenKeys[IE_PROTO] = true

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
    module.exports = Object.create || function create (O, Properties) {
      var result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : defineProperties(result, Properties)
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/object-define-properties.js':
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-properties.js ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js')
    var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js')
    var anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js')
    var objectKeys = __webpack_require__(/*! ../internals/object-keys */ './node_modules/core-js/internals/object-keys.js')

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
    module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties (O, Properties) {
      anObject(O)
      var keys = objectKeys(Properties)
      var length = keys.length
      var index = 0
      var key
      while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key])
      return O
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/object-keys.js':
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ './node_modules/core-js/internals/object-keys-internal.js')
    var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ './node_modules/core-js/internals/enum-bug-keys.js')

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/object-set-prototype-of.js':
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js')
    var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ './node_modules/core-js/internals/a-possible-prototype.js')

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false
      var test = {}
      var setter
      try {
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set
        setter.call(test, [])
        CORRECT_SETTER = test instanceof Array
      } catch (error) { /* empty */
      }
      return function setPrototypeOf (O, proto) {
        anObject(O)
        aPossiblePrototype(proto)
        if (CORRECT_SETTER) setter.call(O, proto)
        else O.__proto__ = proto
        return O
      }
    }() : undefined)


    /***/
  }),

  /***/ './node_modules/core-js/internals/string-trim.js':
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/string-trim.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js')
    var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ './node_modules/core-js/internals/whitespaces.js')

    var whitespace = '[' + whitespaces + ']'
    var ltrim = RegExp('^' + whitespace + whitespace + '*')
    var rtrim = RegExp(whitespace + whitespace + '*$')

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
    var createMethod = function (TYPE) {
      return function ($this) {
        var string = String(requireObjectCoercible($this))
        if (TYPE & 1) string = string.replace(ltrim, '')
        if (TYPE & 2) string = string.replace(rtrim, '')
        return string
      }
    }

    module.exports = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
      start: createMethod(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
      end: createMethod(2),
      // `String.prototype.trim` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.trim
      trim: createMethod(3)
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/to-object.js':
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-object.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js')

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument))
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/whitespaces.js':
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/whitespaces.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
    module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'


    /***/
  }),

  /***/ './node_modules/core-js/modules/es.string.replace.js':
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.replace.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ './node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js')
    var anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js')
    var toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js')
    var toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js')
    var toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js')
    var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js')
    var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ './node_modules/core-js/internals/advance-string-index.js')
    var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ './node_modules/core-js/internals/regexp-exec-abstract.js')

    var max = Math.max
    var min = Math.min
    var floor = Math.floor
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g

    var maybeToString = function (it) {
      return it === undefined ? it : String(it)
    }

// @@replace logic
    fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0
      var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0'

      return [
        // `String.prototype.replace` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
        function replace (searchValue, replaceValue) {
          var O = requireObjectCoercible(this)
          var replacer = searchValue == undefined ? undefined : searchValue[REPLACE]
          return replacer !== undefined
            ? replacer.call(searchValue, O, replaceValue)
            : nativeReplace.call(String(O), searchValue, replaceValue)
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
        function (regexp, replaceValue) {
          if (
            (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
            (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
          ) {
            var res = maybeCallNative(nativeReplace, regexp, this, replaceValue)
            if (res.done) return res.value
          }

          var rx = anObject(regexp)
          var S = String(this)

          var functionalReplace = typeof replaceValue === 'function'
          if (!functionalReplace) replaceValue = String(replaceValue)

          var global = rx.global
          if (global) {
            var fullUnicode = rx.unicode
            rx.lastIndex = 0
          }
          var results = []
          while (true) {
            var result = regExpExec(rx, S)
            if (result === null) break

            results.push(result)
            if (!global) break

            var matchStr = String(result[0])
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)
          }

          var accumulatedResult = ''
          var nextSourcePosition = 0
          for (var i = 0; i < results.length; i++) {
            result = results[i]

            var matched = String(result[0])
            var position = max(min(toInteger(result.index), S.length), 0)
            var captures = []
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]))
            var namedCaptures = result.groups
            if (functionalReplace) {
              var replacerArgs = [matched].concat(captures, position, S)
              if (namedCaptures !== undefined) replacerArgs.push(namedCaptures)
              var replacement = String(replaceValue.apply(undefined, replacerArgs))
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue)
            }
            if (position >= nextSourcePosition) {
              accumulatedResult += S.slice(nextSourcePosition, position) + replacement
              nextSourcePosition = position + matched.length
            }
          }
          return accumulatedResult + S.slice(nextSourcePosition)
        }
      ]

      // https://tc39.github.io/ecma262/#sec-getsubstitution
      function getSubstitution (matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length
        var m = captures.length
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED
        if (namedCaptures !== undefined) {
          namedCaptures = toObject(namedCaptures)
          symbols = SUBSTITUTION_SYMBOLS
        }
        return nativeReplace.call(replacement, symbols, function (match, ch) {
          var capture
          switch (ch.charAt(0)) {
            case '$':
              return '$'
            case '&':
              return matched
            case '`':
              return str.slice(0, position)
            case '\'':
              return str.slice(tailPos)
            case '<':
              capture = namedCaptures[ch.slice(1, -1)]
              break
            default: // \d\d?
              var n = +ch
              if (n === 0) return match
              if (n > m) {
                var f = floor(n / 10)
                if (f === 0) return match
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1)
                return match
              }
              capture = captures[n - 1]
          }
          return capture === undefined ? '' : capture
        })
      }
    })


    /***/
  })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCOztBQUVwRDs7Ozs7Ozs7Ozs7O0FDRkEsZUFBZSxtQkFB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsImZpbGUiOiJ2ZW5kb3JzfmFic2VuY2VzfmFkbS5hYnNlbmNlc35hZG0uYWx0ZXJuYW5jZXN+YWRtLmJvcm5lc35hZG0uY29uZmlndXJhdGlvbn5hZG0uZWR0fmFkbS5ldHVkaWFudHN+YWRtfjE0YjYwM2IwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IGFjdGl2ZVhEb2N1bWVudCA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmJ2BdfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChSRVBMQUNFLCBuYXRpdmVSZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUsIHJlYXNvbikge1xuICB2YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSByZWFzb24uUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU7XG4gIHZhciBSRVBMQUNFX0tFRVBTXyQwID0gcmVhc29uLlJFUExBQ0VfS0VFUFNfJDA7XG4gIHZhciBVTlNBRkVfU1VCU1RJVFVURSA9IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID8gJyQnIDogJyQwJztcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgJiYgUkVQTEFDRV9LRUVQU18kMCkgfHxcbiAgICAgICAgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdzdHJpbmcnICYmIHJlcGxhY2VWYWx1ZS5pbmRleE9mKFVOU0FGRV9TVUJTVElUVVRFKSA9PT0gLTEpXG4gICAgICApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
