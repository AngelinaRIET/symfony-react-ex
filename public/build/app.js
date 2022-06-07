"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Agenda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Agenda */ "./assets/components/Agenda.jsx");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)




react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Agenda__WEBPACK_IMPORTED_MODULE_3__["default"], null), // Quel est le premier composant ?
document.getElementById('root') // Où démarrer React dans le DOM ?
);

/***/ }),

/***/ "./assets/components/Agenda.jsx":
/*!**************************************!*\
  !*** ./assets/components/Agenda.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Card */ "./assets/components/Card.jsx");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Chargement des dépendances (librairie React ici)

 //API OpenData de la région Ile-de-France : 
//https://data.iledefrance.fr/explore/dataset/evenements-publics-cibul/api
//URL finale à appeler en HTTP GET, récupère 36 résultats (paramètre rows)
// Employee collection via fetch
// Once the data is collected, we update our state with the new data

function Agenda() {
  //le but  de cette fonction est d'aller chercher les infos dans l'API.
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      contentApi = _useState2[0],
      setContentApi = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      searchTxt = _useState4[0],
      setSearchTxt = _useState4[1];

  function changeText(event) {
    setSearchTxt(event.currentTarget.value);
  }

  var url = "https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&q=" + searchTxt;
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    window.fetch(url).then(function (httpResponse) {
      // elle reçoit l'HHTP response elle le renvoit au 2e then.
      return httpResponse.json();
    }).then(function (body) {
      // là je récupère le corps de la réponse.
      // on a déclaré la variable content API dans un tableau vide grâce à useState et grâce à 
      //setContentApi on modifie le contenu et on ajoute le records au body.)*/
      setContentApi(body.records);
      console.log(body);
    });
  }, [searchTxt]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "text",
    onChange: changeText,
    value: searchTxt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("section", {
    className: "card-list row"
  }, contentApi.map(function (element, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: i,
      data: element
    });
  })));
} // Once the data is collected, we update our state with the new data


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Agenda);

/***/ }),

/***/ "./assets/components/Card.jsx":
/*!************************************!*\
  !*** ./assets/components/Card.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    className: "card-img-top",
    src: props.data.fields.image,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", {
    className: "card-title"
  }, props.data.fields.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card-text"
  }, props.data.fields.description)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-bfeb49"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQUMsNkNBQUEsZUFDRSwyREFBQywwREFBRCxPQURGLEVBQ3FDO0FBQ2pDRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSixDQUVzQztBQUZ0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtDQUtBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBR0EsU0FBU0gsTUFBVCxHQUFrQjtFQUVkO0VBQ0EsZ0JBQW9DSyxnREFBUSxDQUFDLEVBQUQsQ0FBNUM7RUFBQTtFQUFBLElBQU9FLFVBQVA7RUFBQSxJQUFtQkMsYUFBbkI7O0VBQ0EsaUJBQWtDSCxnREFBUSxDQUFDLEVBQUQsQ0FBMUM7RUFBQTtFQUFBLElBQU9JLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBRUEsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7SUFDdkJGLFlBQVksQ0FBQ0UsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyxLQUFyQixDQUFaO0VBQ0g7O0VBRUQsSUFBTUMsR0FBRyxHQUFHLDJQQUEyUE4sU0FBdlE7RUFHQUwsaURBQVMsQ0FBQyxZQUFNO0lBQ1pZLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRixHQUFiLEVBQ0tHLElBREwsQ0FDVSxVQUFVQyxZQUFWLEVBQXdCO01BQUU7TUFFNUIsT0FBT0EsWUFBWSxDQUFDQyxJQUFiLEVBQVA7SUFDSCxDQUpMLEVBS0tGLElBTEwsQ0FLVSxVQUFBRyxJQUFJLEVBQUk7TUFBRTtNQUNaO01BQ0E7TUFDQWIsYUFBYSxDQUFDYSxJQUFJLENBQUNDLE9BQU4sQ0FBYjtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtJQUNILENBVkw7RUFXSCxDQVpRLEVBWU4sQ0FBQ1osU0FBRCxDQVpNLENBQVQ7RUFjQSxvQkFDSSx5SUFDSTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQW1CLFFBQVEsRUFBRUUsVUFBN0I7SUFBeUMsS0FBSyxFQUFFRjtFQUFoRCxFQURKLGVBRUk7SUFBUyxTQUFTLEVBQUM7RUFBbkIsR0FDS0YsVUFBVSxDQUFDa0IsR0FBWCxDQUFlLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtJQUM1QixvQkFBTyw0REFBQyw4Q0FBRDtNQUFNLEdBQUcsRUFBRUEsQ0FBWDtNQUFjLElBQUksRUFBRUQ7SUFBcEIsRUFBUDtFQUNILENBRkEsQ0FETCxDQUZKLENBREo7QUFVSCxFQUVEOzs7QUFLQSxpRUFBZTFCLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUEsU0FBU00sSUFBVCxDQUFjc0IsS0FBZCxFQUFxQjtFQUNqQixvQkFFSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUssU0FBUyxFQUFDLGNBQWY7SUFBOEIsR0FBRyxFQUFFQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkMsS0FBckQ7SUFBNEQsR0FBRyxFQUFDO0VBQWhFLEVBREosZUFFSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsR0FBNEJILEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxNQUFYLENBQWtCRSxLQUE5QyxDQURKLGVBRUk7SUFBRyxTQUFTLEVBQUM7RUFBYixHQUEwQkosS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQVgsQ0FBa0JHLFdBQTVDLENBRkosQ0FGSixDQUZKO0FBYUg7O0FBRUQsaUVBQWUzQixJQUFmOzs7Ozs7Ozs7OztBQ2xCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQWdlbmRhLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmltcG9ydCBSZWFjdCAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBZ2VuZGEgZnJvbSAnLi9jb21wb25lbnRzL0FnZW5kYSc7XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QWdlbmRhLz4gLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFF1ZWwgZXN0IGxlIHByZW1pZXIgY29tcG9zYW50ID9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpICAgLy8gT8O5IGTDqW1hcnJlciBSZWFjdCBkYW5zIGxlIERPTSA/XG4pO1xuIiwiLy8gQ2hhcmdlbWVudCBkZXMgZMOpcGVuZGFuY2VzIChsaWJyYWlyaWUgUmVhY3QgaWNpKVxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5cblxuXG4vL0FQSSBPcGVuRGF0YSBkZSBsYSByw6lnaW9uIElsZS1kZS1GcmFuY2UgOiBcbi8vaHR0cHM6Ly9kYXRhLmlsZWRlZnJhbmNlLmZyL2V4cGxvcmUvZGF0YXNldC9ldmVuZW1lbnRzLXB1YmxpY3MtY2lidWwvYXBpXG4vL1VSTCBmaW5hbGUgw6AgYXBwZWxlciBlbiBIVFRQIEdFVCwgcsOpY3Vww6hyZSAzNiByw6lzdWx0YXRzIChwYXJhbcOodHJlIHJvd3MpXG5cblxuLy8gRW1wbG95ZWUgY29sbGVjdGlvbiB2aWEgZmV0Y2hcblxuLy8gT25jZSB0aGUgZGF0YSBpcyBjb2xsZWN0ZWQsIHdlIHVwZGF0ZSBvdXIgc3RhdGUgd2l0aCB0aGUgbmV3IGRhdGFcblxuXG5mdW5jdGlvbiBBZ2VuZGEoKSB7XG5cbiAgICAvL2xlIGJ1dCAgZGUgY2V0dGUgZm9uY3Rpb24gZXN0IGQnYWxsZXIgY2hlcmNoZXIgbGVzIGluZm9zIGRhbnMgbCdBUEkuXG4gICAgY29uc3QgW2NvbnRlbnRBcGksIHNldENvbnRlbnRBcGldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWFyY2hUeHQsIHNldFNlYXJjaFR4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZVRleHQoZXZlbnQpIHtcbiAgICAgICAgc2V0U2VhcmNoVHh0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9kYXRhLmlsZWRlZnJhbmNlLmZyL2FwaS9yZWNvcmRzLzEuMC9zZWFyY2gvP2RhdGFzZXQ9ZXZlbmVtZW50cy1wdWJsaWNzLWNpYnVsJnE9JmZhY2V0PXRhZ3MmZmFjZXQ9cGxhY2VuYW1lJmZhY2V0PWRlcGFydG1lbnQmZmFjZXQ9cmVnaW9uJmZhY2V0PWNpdHkmZmFjZXQ9ZGF0ZV9zdGFydCZmYWNldD1kYXRlX2VuZCZmYWNldD1wcmljaW5nX2luZm8mZmFjZXQ9dXBkYXRlZF9hdCZmYWNldD1jaXR5X2Rpc3RyaWN0JnE9XCIgKyBzZWFyY2hUeHQ7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5mZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaHR0cFJlc3BvbnNlKSB7IC8vIGVsbGUgcmXDp29pdCBsJ0hIVFAgcmVzcG9uc2UgZWxsZSBsZSByZW52b2l0IGF1IDJlIHRoZW4uXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaHR0cFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihib2R5ID0+IHsgLy8gbMOgIGplIHLDqWN1cMOocmUgbGUgY29ycHMgZGUgbGEgcsOpcG9uc2UuXG4gICAgICAgICAgICAgICAgLy8gb24gYSBkw6ljbGFyw6kgbGEgdmFyaWFibGUgY29udGVudCBBUEkgZGFucyB1biB0YWJsZWF1IHZpZGUgZ3LDomNlIMOgIHVzZVN0YXRlIGV0IGdyw6JjZSDDoCBcbiAgICAgICAgICAgICAgICAvL3NldENvbnRlbnRBcGkgb24gbW9kaWZpZSBsZSBjb250ZW51IGV0IG9uIGFqb3V0ZSBsZSByZWNvcmRzIGF1IGJvZHkuKSovXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudEFwaShib2R5LnJlY29yZHMpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9keSlcbiAgICAgICAgICAgIH0pXG4gICAgfSwgW3NlYXJjaFR4dF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtjaGFuZ2VUZXh0fSB2YWx1ZT17c2VhcmNoVHh0fSAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1saXN0IHJvd1wiPlxuICAgICAgICAgICAgICAgIHtjb250ZW50QXBpLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtpfSBkYXRhPXtlbGVtZW50fSAvPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG4vLyBPbmNlIHRoZSBkYXRhIGlzIGNvbGxlY3RlZCwgd2UgdXBkYXRlIG91ciBzdGF0ZSB3aXRoIHRoZSBuZXcgZGF0YVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBBZ2VuZGE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtM1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Byb3BzLmRhdGEuZmllbGRzLmltYWdlfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb3BzLmRhdGEuZmllbGRzLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb3BzLmRhdGEuZmllbGRzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBZ2VuZGEiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiY29udGVudEFwaSIsInNldENvbnRlbnRBcGkiLCJzZWFyY2hUeHQiLCJzZXRTZWFyY2hUeHQiLCJjaGFuZ2VUZXh0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJodHRwUmVzcG9uc2UiLCJqc29uIiwiYm9keSIsInJlY29yZHMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZWxlbWVudCIsImkiLCJwcm9wcyIsImRhdGEiLCJmaWVsZHMiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9