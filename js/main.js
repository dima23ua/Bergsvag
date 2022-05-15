/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {



        /***/
      }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
      }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
          /* harmony export */
        });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
          windowEl: window,
          documentEl: document,
          htmlEl: document.documentElement,
          bodyEl: document.body
        });

        /***/
      }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);


        /***/
      }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");



        (function () {
          var _document, _document2, _document3, _document4;

          var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
          var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
          var menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
          var overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
          burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function (e) {
            burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
            menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');

            if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
              burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
              burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
              (0, _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
            } else {
              burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
              burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
              (0, _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
            }
          });
          overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', function () {
            burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
            burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
            burger.classList.remove('burger--active');
            menu.classList.remove('menu--active');
            (0, _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
          });
          menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(function (el) {
            el.addEventListener('click', function () {
              burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
              burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
              burger.classList.remove('burger--active');
              menu.classList.remove('menu--active');
              (0, _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
            });
          });
        })();

        /***/
      }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
          /* harmony export */
        });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

        var disableScroll = function disableScroll() {
          var _document;

          var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
          var pagePosition = window.scrollY;
          var paddingOffset = "".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
          fixBlocks.forEach(function (el) {
            el.style.paddingRight = paddingOffset;
          });
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
        };

        /***/
      }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
          /* harmony export */
        });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

        var enableScroll = function enableScroll() {
          var _document;

          var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
          var body = document.body;
          var pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
          fixBlocks.forEach(function (el) {
            el.style.paddingRight = '0px';
          });
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
          window.scroll({
            top: pagePosition,
            left: 0
          });
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
          _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
        };

        /***/
      }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

        /**
         * Applies the :focus-visible polyfill at the given scope.
         * A scope in this case is either the top-level Document or a Shadow Root.
         *
         * @param {(Document|ShadowRoot)} scope
         * @see https://github.com/WICG/focus-visible
         */
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            'datetime-local': true
          };
          /**
           * Helper function for legacy browsers and iframes which sometimes focus
           * elements like document, body, and non-interactive SVG.
           * @param {Element} el
           */

          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
              return true;
            }

            return false;
          }
          /**
           * Computes whether the given element should automatically trigger the
           * `focus-visible` class being added, i.e. whether it should always match
           * `:focus-visible` when focused.
           * @param {Element} el
           * @return {boolean}
           */


          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;

            if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }

            if (tagName === 'TEXTAREA' && !el.readOnly) {
              return true;
            }

            if (el.isContentEditable) {
              return true;
            }

            return false;
          }
          /**
           * Add the `focus-visible` class to the given element if it was not added by
           * the author.
           * @param {Element} el
           */


          function addFocusVisibleClass(el) {
            if (el.classList.contains('focus-visible')) {
              return;
            }

            el.classList.add('focus-visible');
            el.setAttribute('data-focus-visible-added', '');
          }
          /**
           * Remove the `focus-visible` class from the given element if it was not
           * originally added by the author.
           * @param {Element} el
           */


          function removeFocusVisibleClass(el) {
            if (!el.hasAttribute('data-focus-visible-added')) {
              return;
            }

            el.classList.remove('focus-visible');
            el.removeAttribute('data-focus-visible-added');
          }
          /**
           * If the most recent user interaction was via the keyboard;
           * and the key press did not include a meta, alt/option, or control key;
           * then the modality is keyboard. Otherwise, the modality is not keyboard.
           * Apply `focus-visible` to any current active element and keep track
           * of our keyboard modality state with `hadKeyboardEvent`.
           * @param {KeyboardEvent} e
           */


          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }

            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleClass(scope.activeElement);
            }

            hadKeyboardEvent = true;
          }
          /**
           * If at any point a user clicks with a pointing device, ensure that we change
           * the modality away from keyboard.
           * This avoids the situation where a user presses a key on an already focused
           * element, and then clicks on a different element, focusing it with a
           * pointing device, while we still think we're in keyboard modality.
           * @param {Event} e
           */


          function onPointerDown(e) {
            hadKeyboardEvent = false;
          }
          /**
           * On `focus`, add the `focus-visible` class to the target if:
           * - the target received focus as a result of keyboard navigation, or
           * - the event target is an element that will likely require interaction
           *   via the keyboard (e.g. a text box)
           * @param {Event} e
           */


          function onFocus(e) {
            // Prevent IE from focusing the document or HTML element.
            if (!isValidFocusTarget(e.target)) {
              return;
            }

            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleClass(e.target);
            }
          }
          /**
           * On `blur`, remove the `focus-visible` class from the target.
           * @param {Event} e
           */


          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }

            if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
              // To detect a tab/window switch, we look for a blur event followed
              // rapidly by a visibility change.
              // If we don't see a visibility change within 100ms, it's probably a
              // regular focus change.
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleClass(e.target);
            }
          }
          /**
           * If the user changes tabs, keep track of whether or not the previously
           * focused element had .focus-visible.
           * @param {Event} e
           */


          function onVisibilityChange(e) {
            if (document.visibilityState === 'hidden') {
              // If the tab becomes active again, the browser will handle calling focus
              // on the element (Safari actually calls it twice).
              // If this tab change caused a blur on an element with focus-visible,
              // re-apply the class when the user switches back to the tab.
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }

              addInitialPointerMoveListeners();
            }
          }
          /**
           * Add a group of listeners to detect usage of any pointing devices.
           * These listeners will be added when the polyfill first loads, and anytime
           * the window is blurred, so that they are active when the window regains
           * focus.
           */


          function addInitialPointerMoveListeners() {
            document.addEventListener('mousemove', onInitialPointerMove);
            document.addEventListener('mousedown', onInitialPointerMove);
            document.addEventListener('mouseup', onInitialPointerMove);
            document.addEventListener('pointermove', onInitialPointerMove);
            document.addEventListener('pointerdown', onInitialPointerMove);
            document.addEventListener('pointerup', onInitialPointerMove);
            document.addEventListener('touchmove', onInitialPointerMove);
            document.addEventListener('touchstart', onInitialPointerMove);
            document.addEventListener('touchend', onInitialPointerMove);
          }

          function removeInitialPointerMoveListeners() {
            document.removeEventListener('mousemove', onInitialPointerMove);
            document.removeEventListener('mousedown', onInitialPointerMove);
            document.removeEventListener('mouseup', onInitialPointerMove);
            document.removeEventListener('pointermove', onInitialPointerMove);
            document.removeEventListener('pointerdown', onInitialPointerMove);
            document.removeEventListener('pointerup', onInitialPointerMove);
            document.removeEventListener('touchmove', onInitialPointerMove);
            document.removeEventListener('touchstart', onInitialPointerMove);
            document.removeEventListener('touchend', onInitialPointerMove);
          }
          /**
           * When the polfyill first loads, assume the user is in keyboard modality.
           * If any event is received from a pointing device (e.g. mouse, pointer,
           * touch), turn off keyboard modality.
           * This accounts for situations where focus enters the page from the URL bar.
           * @param {Event} e
           */


          function onInitialPointerMove(e) {
            // Work around a Safari quirk that fires a mousemove on <html> whenever the
            // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
              return;
            }

            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          } // For some kinds of state, we are interested in changes at the global scope
          // only. For example, global pointer input, global key presses and global
          // visibility change should affect the state at every scope:


          document.addEventListener('keydown', onKeyDown, true);
          document.addEventListener('mousedown', onPointerDown, true);
          document.addEventListener('pointerdown', onPointerDown, true);
          document.addEventListener('touchstart', onPointerDown, true);
          document.addEventListener('visibilitychange', onVisibilityChange, true);
          addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
          // scope. This is because focus / blur events that originate from within a
          // shadow root are not re-dispatched from the host element if it was already
          // the active element in its own scope:

          scope.addEventListener('focus', onFocus, true);
          scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
          // DocumentFragment and also has a host property. This check covers native
          // implementation and polyfill implementation transparently. If we only cared
          // about the native implementation, we could just check if the scope was
          // an instance of a ShadowRoot.

          if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
            // Since a ShadowRoot is a special kind of DocumentFragment, it does not
            // have a root element to add a class to. So, we add this attribute to the
            // host element instead:
            scope.host.setAttribute('data-js-focus-visible', '');
          } else if (scope.nodeType === Node.DOCUMENT_NODE) {
            document.documentElement.classList.add('js-focus-visible');
            document.documentElement.setAttribute('data-js-focus-visible', '');
          }
        } // It is important to wrap all references to global window and document in
        // these checks to support server-side rendering use cases
        // @see https://github.com/WICG/focus-visible/issues/199


        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
          // Make the polyfill helper globally available. This can be used as a signal
          // to interested libraries that wish to coordinate with the polyfill for e.g.,
          // applying the polyfill to a shadow root:
          window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
          // polyfill was loaded lazily:

          var event;

          try {
            event = new CustomEvent('focus-visible-polyfill-ready');
          } catch (error) {
            // IE11 does not support using CustomEvent as a constructor directly:
            event = document.createEvent('CustomEvent');
            event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
          }

          window.dispatchEvent(event);
        }

        if (typeof document !== 'undefined') {
          // Apply the polyfill to the global document, so that no JavaScript
          // coordination is required to use the polyfill in the top-level document:
          applyFocusVisiblePolyfill(document);
        }

        /***/
      })

    /******/
  });


/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    /*!************************!*\
      !*** ./src/js/main.js ***!
      \************************/
    __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);



    // Динамический адаптив

    function DynamicAdapt(type) {
      this.type = type;
    }

    DynamicAdapt.prototype.init = function () {
      var _this2 = this;

      var _this = this; // массив объектов


      this.оbjects = [];
      this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

      this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

      for (var i = 0; i < this.nodes.length; i++) {
        var node = this.nodes[i];
        var data = node.dataset.da.trim();
        var dataArray = data.split(",");
        var оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
      }

      this.arraySort(this.оbjects); // массив уникальных медиа-запросов

      this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
      }, this);
      this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
      }); // навешивание слушателя на медиа-запрос
      // и вызов обработчика при первом запуске

      var _loop = function _loop(_i) {
        var media = _this2.mediaQueries[_i];
        var mediaSplit = String.prototype.split.call(media, ',');
        var matchMedia = window.matchMedia(mediaSplit[0]);
        var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

        var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
          return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
          _this.mediaHandler(matchMedia, оbjectsFilter);
        });

        _this2.mediaHandler(matchMedia, оbjectsFilter);
      };

      for (var _i = 0; _i < this.mediaQueries.length; _i++) {
        _loop(_i);
      }
    };

    DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
      if (matchMedia.matches) {
        for (var i = 0; i < оbjects.length; i++) {
          var оbject = оbjects[i];
          оbject.index = this.indexInParent(оbject.parent, оbject.element);
          this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
      } else {
        for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
          var _оbject = оbjects[_i2];

          if (_оbject.element.classList.contains(this.daClassname)) {
            this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
          }
        }
      }
    }; // Функция перемещения


    DynamicAdapt.prototype.moveTo = function (place, element, destination) {
      element.classList.add(this.daClassname);

      if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
      }

      if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
      }

      destination.children[place].insertAdjacentElement('beforebegin', element);
    }; // Функция возврата


    DynamicAdapt.prototype.moveBack = function (parent, element, index) {
      element.classList.remove(this.daClassname);

      if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
      } else {
        parent.insertAdjacentElement('beforeend', element);
      }
    }; // Функция получения индекса внутри родителя


    DynamicAdapt.prototype.indexInParent = function (parent, element) {
      var array = Array.prototype.slice.call(parent.children);
      return Array.prototype.indexOf.call(array, element);
    }; // Функция сортировки массива по breakpoint и place


    DynamicAdapt.prototype.arraySort = function (arr) {
      if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }

            if (a.place === "first" || b.place === "last") {
              return -1;
            }

            if (a.place === "last" || b.place === "first") {
              return 1;
            }

            return a.place - b.place;
          }

          return a.breakpoint - b.breakpoint;
        });
      } else {
        Array.prototype.sort.call(arr, function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }

            if (a.place === "first" || b.place === "last") {
              return 1;
            }

            if (a.place === "last" || b.place === "first") {
              return -1;
            }

            return b.place - a.place;
          }

          return b.breakpoint - a.breakpoint;
        });
        return;
      }
    };

    var da = new DynamicAdapt("max");
    da.init(); //tabs

    var tabTitle = document.querySelectorAll('.tab-title__title');
    var tabContent = document.querySelectorAll('.tab-content__content');
    tabTitle.forEach(function (elem) {
      elem.addEventListener('click', activeTab);
    });

    function activeTab() {
      tabTitle.forEach(function (elem) {
        elem.classList.remove('active');
      });
      this.classList.add('active');
      var tabName = this.getAttribute('data-tab');
      activeTabContent(tabName);
    }

    function activeTabContent(tabName) {
      tabContent.forEach(function (item) {
        if (item.classList.contains(tabName)) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    let myMap;
    let shop;
    let veterinaryClinic;
    let coffeeHouse;
    let museum;

    function initMap() {
      //Map 
      myMap = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 55.67704826915785, lng: 12.468663220060767 },
        zoom: 15,
      });

      shop = new google.maps.Map(document.getElementById("shopping"), {
        center: { lat: 55.67704826915783, lng: 12.468665420060767 },
        zoom: 15,
      });

      veterinaryClinic = new google.maps.Map(document.getElementById("veterinary"), {
        center: { lat: 55.68164424316543, lng: 12.467762087256531 },
        zoom: 15,
      });

      coffeeHouse = new google.maps.Map(document.getElementById("coffee"), {
        center: { lat: 55.67745823738635, lng: 12.464457605803254 },
        zoom: 15,
      });

      museum = new google.maps.Map(document.getElementById("museum"), {
        center: { lat: 55.67704826915785, lng: 12.468663220060767 },
        zoom: 15,
      });


      //Мarkers - myMap
      let marker = new google.maps.Marker({
        position: { lat: 55.67830171805622, lng: 12.464682113465866 },
        map: myMap,
        title: 'Дом',
        icon: 'img/home.png'
      });
      let apt = new google.maps.Marker({
        position: { lat: 55.68012112769776, lng: 12.465723540674636 },
        map: myMap,
        icon: 'img/paw.png'
      });

      // Markers - Shopping Mall
      let shopMap = new google.maps.Marker({
        position: { lat: 55.6797576740216, lng: 12.455196928218944 },
        map: shop,
        title: 'Дом',
        icon: 'img/home.png'
      });
      let shopid = new google.maps.Marker({
        position: { lat: 55.671109568055136, lng: 12.463487330411772 },
        map: shop,
        icon: 'img/paw.png'
      });

      //Markers - Veterymary Clinic
      let veterinaryClean = new google.maps.Marker({
        position: { lat: 55.6832410984162, lng: 12.474628542224378 },
        map: veterinaryClinic,
        title: 'Дом',
        icon: 'img/home.png'
      });
      let veterinaryRow = new google.maps.Marker({
        position: { lat: 55.68234717490897, lng: 12.466454407238341 },
        map: veterinaryClinic,
        title: 'Лапа',
        icon: 'img/paw.png'
      });

      //CoffeeHouse Map
      let cafe = new google.maps.Marker({
        position: { lat: 55.67564335578982, lng: 12.463899706337118 },
        map: coffeeHouse,
        title: 'Дом',
        icon: 'img/home.png'
      });
      let housecafe = new google.maps.Marker({
        position: { lat: 55.68387014470476, lng: 12.464994047597619 },
        map: coffeeHouse,
        title: 'Дом',
        icon: 'img/paw.png'
      });

      //Museums Map
      let mus = new google.maps.Marker({
        position: { lat: 55.67830171805622, lng: 12.464682113465866 },
        map: museum,
        title: 'Дом',
        icon: 'img/home.png'
      });
    }
    window.initMap = initMap;


    //Sliders
    new Swiper('.tab-slider', {

      clickable: 'true',
      spaceBetween: 50,
      slidesPerView: '2.5',
      speed: 1500,
      watchOverflow: true,
    }); //Sliders



    //Sliders
    new Swiper('.slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      clickable: 'true',
      spaceBetween: 50,
      slidesPerView: '2.5',
      speed: 1500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      }
    }); 

    //Sliders

    new Swiper('.down', {
      navigation: {
        nextEl: '.swiper-button-next-down',
        prevEl: '.swiper-button-prev-down'
      },
      clickable: 'true',
      spaceBetween: 50,
      slidesPerView: '1.95',
      speed: 1500,
      pagination: {
        el: '.swiper-pagination-down',
        clickable: true,
        type: 'fraction',
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar-down',
        draggable: true
      }
    });
  })();

  /******/
})()
  ;
//# sourceMappingURL=main.js.map