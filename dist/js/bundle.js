/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\nfunction calc() {\n    \n    let calcbtn = document.querySelectorAll('.popup_calc_btn'),\n    popup_calc_button = document.querySelector('.popup_calc_button'),\n    popup_calc_profile_button = document.querySelector('.popup_calc_profile_button'),\n    popup_calc = document.querySelector('.popup_calc'),\n    close = document.querySelector('button.popup_calc_close'),\n    popup_calc_profile = document.querySelector('.popup_calc_profile'),\n    popup_calc_end = document.querySelector('.popup_calc_end'),\n    popup_calc_profile_close = document.querySelector('.popup_calc_profile_close'),\n    popup_calc_end_close = document.querySelector('.popup_calc_end_close'),\n    popup_calc_end_btn = document.getElementById('popup_calc_end_button');\n    \n\n    let formObject = {};\n    \n    function clearInput() {\n        let input = document.getElementsByTagName('input');\n        for (let i = 0; i < input.length; i++) {\n        input[i].value = '';\n        input[i].checked = false;\n        }\n    }\n    \n    document.addEventListener('click', function (e) {\n        for(let i = 0; i<calcbtn.length; i++){\n            if (e.target == calcbtn[i]){\n                popup_calc.style.display = 'block';\n            }   \n        }\n    });\n\n\n   popup_calc.addEventListener('click', function (e) {\n        if (e.target == popup_calc){\n            popup_calc.style.display = 'none';\n            clearInput();\n        } \n    });\n\n    popup_calc_profile.addEventListener('click', function (e) {\n        if (e.target == popup_calc_profile){\n            popup_calc_profile.style.display = 'none';\n            clearInput();\n        } \n    });\n\n    popup_calc_end.addEventListener('click', function (e) {\n        if (e.target == popup_calc_end){\n            popup_calc_end.style.display = 'none';\n            clearInput();\n        } \n    });\n\n    close.addEventListener('click', function ()  {\n        popup_calc.style.display = 'none';  \n        clearInput();\n    });\n\n    let icons = document.querySelectorAll('div.balcon_icons a img'),\n        preview = document.querySelector('.balcon_icons'),\n        bigimg = document.querySelectorAll('div.big_img img');\n\n    function hideBigImg(a) {\n        for (let i = a; i < bigimg.length; i++) {\n            bigimg[i].style.display = 'none';\n        }\n    }\n            \n        hideBigImg(1);\n            \n    function showBigImg(b) {\n        if (bigimg[b].style.display === 'none') {\n            bigimg[b].style.display = 'inline-block';\n        }\n    }\n\n    function smallPreview (a) {\n        for (let i = a; i < icons.length; i++) {\n            icons[i].style.transform = 'none';\n        }\n    }\n            \n    smallPreview(1);\n            \n    function bigPreview(b) {\n        if ( icons[b].style.transform === 'none') {\n            icons[b].style.transform = 'scale(1.1)';\n            icons[b].style.transition = 'all .2s ease-in-out';\n        }\n    }\n   \n    preview.addEventListener('click', function(event){\n        let target = event.target;\n        event.preventDefault();\n        if (target) {\n            for (let i = 0; i < icons.length; i++) {\n                if (target == icons[i]) {\n                    smallPreview (0);\n                    bigPreview(i);\n                    hideBigImg(0);\n                    showBigImg(i);\n                    break;\n                }   \n            }\n        }\n    });  \n    \n\n    popup_calc_button.addEventListener('click', function() { \n        popup_calc.style.display = 'none';   \n        popup_calc_profile.style.display = 'block';  \n        calc(\"calc_form1\"); \n       \n    });\n\n    popup_calc_profile_button.addEventListener('click', function(e) {\n\n        if(!coldcheckbox.checked && !warmcheckbox.checked){\n            e.preventDefault();\n        } else {\n        popup_calc_profile.style.display = 'none';   \n        popup_calc_end.style.display = 'block';  \n        calc(\"calc_form2\");\n        }\n    });\n\n    popup_calc_end_btn.addEventListener('click', function() {\n        calc(\"calc_form3\");\n    });\n\n    popup_calc_profile_close.addEventListener('click', function ()  {\n        popup_calc_profile.style.display = 'none'; \n        clearInput(); \n    });\n\n    popup_calc_end_close.addEventListener('click', function ()  {\n        popup_calc_end.style.display = 'none';  \n        clearInput();\n    });\n\n    \n   let width = document.getElementById('width'),\n       height = document.getElementById('height'); \n   \n    width.addEventListener('keyup', function() {\n        popup_calc_button.disabled = width.value && height.value && width.value != 0 && height.value != 0  ? false : \"disabled\";\n    })\n\n    height.addEventListener('keyup', function() {\n        popup_calc_button.disabled = width.value && height.value && width.value != 0 && height.value != 0 ? false : \"disabled\";\n    })\n       \n    function check_calc_input(input) {\n        let value = input.value;\n        value = value.replace(/[\\D\\s\\-]+/, \"\");\n        input.value = value; \n    };\n\n    popup_calc.addEventListener('keyup', function(event){\n        let target = event.target;\n        if (target&&target==width||target&&target==height) {\n            check_calc_input(target);\n            }\n        \n    });  \n\n    let coldcheckbox = document.querySelector('input#cold'),\n        warmcheckbox = document.querySelector('input#warm');\n    \n        \n\n    coldcheckbox.addEventListener('click', function() {\n        warmcheckbox.checked = false;       \n    }); \n      \n    warmcheckbox.addEventListener('click', function() {\n       coldcheckbox.checked = false;\n    }); \n\n\n    function calc(form_name) {\n        let form = document.forms[form_name];\n        let elements = Array.from(form.elements);\n    \n        elements.filter(element => filter_inputs(element)).forEach(input => {\n            if(input.type == \"checkbox\") {\n                formObject[input.name] = get_value_from_checkbox(input);\n            } else {\n                formObject[input.name] = input.value;\n            }\n        });\n    \n        console.log(formObject);\n    }\n    \n    function get_value_from_checkbox(checkbox) {\n        let checkboxes = document.getElementsByName(checkbox.name);\n        console.log('checkboxes:' + checkboxes)\n        for(let i=0; checkboxes.length; ++i) {\n          if(checkboxes[i].checked){\n               return checkboxes[i].value;\n          }\n        }\n    }\n    \n    function filter_inputs(element) {\n        return element.nodeName !== \"BUTTON\" && element.name !== \"\";\n    }\n\n        \n    let message = {\n        loading: 'Идет отправка',\n        success: 'Отправлено',\n        failure: 'Ошибка'\n    };\n\n    let statusMessage = document.createElement('div');\n    statusMessage.classList.add('formAlert');\n    statusMessage.classList.add('fade');\n    \n    \n     \n       \n    popup_calc_end_btn.addEventListener('click', () => {\n       \n        let popup_form = document.querySelector('form[name=\"calc_form3\"]');\n        popup_form.appendChild(statusMessage);\n        \n        \n\n        function postData(obj) {\n            return new Promise(function(resolve, reject) {\n                    \n                let request = new XMLHttpRequest();\n                request.open('POST', 'server.php');\n                request.setRequestHeader('Content-type', 'application/json; charset = utf-8');\n\n       \n                let json = JSON.stringify(obj);\n\n                console.log(json);\n                \n\n                request.addEventListener('readystatechange', () => {\n                     if (request.readyState < 4) {\n                    resolve();\n                     } else if (request.readyState === 4 && request.status == 200) {\n                    resolve();\n                     } else {\n                    reject();\n                     }\n                });\n            \n                request.send(json);\n            });\n        }   \n    \n        postData(formObject)\n            .then(()=> statusMessage.innerHTML = message.loading)\n            .then(()=> statusMessage.innerHTML = message.success)\n            .catch(()=> statusMessage.innerHTML = message.failure)\n            .then(clearInput)\n             \n    });  \n \n} \n\n\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\nfunction form() {\n\n    let message = {\n        loading: 'Идет отправка',\n        success: 'Отправлено',\n        failure: 'Ошибка'\n    };\n\n    let form = document.querySelectorAll('.main_form'),\n        statusMessage = document.createElement('div');\n        statusMessage.classList.add('formAlert');\n        statusMessage.classList.add('fade');\n        \n        \n    function sendForm(elem) {\n       \n            elem.addEventListener('submit', (event) => {\n           \n            event.preventDefault();\n            elem.appendChild(statusMessage);\n\n            let formData = new FormData(elem);\n\n            function postData(data) {\n                return new Promise(function(resolve, reject) {\n                        \n                    let request = new XMLHttpRequest();\n                    request.open('POST', 'server.php');\n                    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');\n\n           \n                    let obj = {};\n                    data.forEach((value, key) => {\n                    obj[key] = value;\n                    });\n                    let json = JSON.stringify(obj);\n                    \n\n                    request.addEventListener('readystatechange', () => {\n                         if (request.readyState < 4) {\n                        resolve();\n                         } else if (request.readyState === 4 && request.status == 200) {\n                        resolve();\n                         } else {\n                        reject();\n                         }\n                    });\n                \n                    request.send(json);\n                });\n            }  /* end postdata*/\n        \n            function clearInput() {\n                let input = elem.getElementsByTagName('input');\n            \n                for (let i = 0; i < input.length; i++) {\n                input[i].value = '';\n                 }\n            }\n\n            \n            postData(formData)\n                .then(()=> statusMessage.innerHTML = message.loading)\n                .then(()=> statusMessage.innerHTML = message.success)\n                .catch(()=> statusMessage.innerHTML = message.failure)\n                .then(clearInput)\n                 \n        });  \n    }\n\n\n   for (let i = 0; i<form.length;i++){\n    sendForm(form[i]);\n   }\n     \n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/parts/form.js?");

/***/ }),

/***/ "./src/js/parts/form_popup.js":
/*!************************************!*\
  !*** ./src/js/parts/form_popup.js ***!
  \************************************/
/*! exports provided: form_popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form_popup\", function() { return form_popup; });\nfunction form_popup() {\n\n    let message = {\n        loading: 'Идет отправка',\n        success: 'Отправлено',\n        failure: 'Ошибка'\n    };\n\n    let form = document.querySelectorAll('div.popup_form form'),\n        statusMessage = document.createElement('div');\n        statusMessage.classList.add('formAlert');\n        statusMessage.classList.add('fade');\n        \n        \n    function sendForm(elem) {\n       \n            elem.addEventListener('submit', (event) => {\n           \n            event.preventDefault();\n            elem.appendChild(statusMessage);\n\n            let formData = new FormData(elem);\n\n            function postData(data) {\n                return new Promise(function(resolve, reject) {\n                        \n                    let request = new XMLHttpRequest();\n                    request.open('POST', 'server.php');\n                    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');\n\n           \n                    let obj = {};\n                    data.forEach((value, key) => {\n                    obj[key] = value;\n                    });\n                    let json = JSON.stringify(obj);\n                    \n\n                    request.addEventListener('readystatechange', () => {\n                         if (request.readyState < 4) {\n                        resolve();\n                         } else if (request.readyState === 4 && request.status == 200) {\n                        resolve();\n                         } else {\n                        reject();\n                         }\n                    });\n                \n                    request.send(json);\n                });\n            }  /* end postdata*/\n        \n\n            function clearInput() {\n                let input = elem.getElementsByTagName('input');\n                for (let i = 0; i < input.length; i++) {\n                input[i].value = '';\n                }\n            }\n            \n            postData(formData)\n                .then(()=> statusMessage.innerHTML = message.loading)\n                .then(()=> statusMessage.innerHTML = message.success)\n                .catch(()=> statusMessage.innerHTML = message.failure)\n                .then(clearInput)\n                 \n        });  \n    }\n\n\n   for (let i = 0; i<form.length;i++){\n    sendForm(form[i]);\n   }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/form_popup.js?");

/***/ }),

/***/ "./src/js/parts/formvalid.js":
/*!***********************************!*\
  !*** ./src/js/parts/formvalid.js ***!
  \***********************************/
/*! exports provided: formvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formvalid\", function() { return formvalid; });\nfunction formvalid() {\n\n    let tel = document.querySelectorAll('form input[name=\"user_phone\"]');\n \n    function validateTel(tel) {\n        tel.addEventListener('keyup', function () {\n            tel.value = tel.value.replace(/\\D*$/,\"\");\n        });\n    }\n\n    for (let i=0; i<tel.length; i++) {\n         validateTel(tel[i])\n    }\n}\n    \n\n\n//# sourceURL=webpack:///./src/js/parts/formvalid.js?");

/***/ }),

/***/ "./src/js/parts/gallery.js":
/*!*********************************!*\
  !*** ./src/js/parts/gallery.js ***!
  \*********************************/
/*! exports provided: gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gallery\", function() { return gallery; });\nfunction gallery() {\n\n    let img_href = document.querySelectorAll('.works a');\n\n\n    for (let i = 0; i < img_href.length; i++) {\n\n        img_href[i].addEventListener('click', function (e) {\n\n            e.preventDefault();\n\n            let href = img_href[i].getAttribute('href'),\n                href_min = img_href[i].getElementsByTagName('img')[1].getAttribute('src'),\n                iOverlay, body, iImg;\n\n            if (document.querySelectorAll('.i_overlay').length == 0) {\n                iOverlay = document.createElement('div');\n                iOverlay.className = 'i_overlay';\n                iOverlay.classList.add('visible');\n\n                body = document.body;\n                body.appendChild(iOverlay);\n\n                iImg = document.createElement('img');\n                iImg.className = 'i_img';\n                iImg.classList.add('visible');\n                body.appendChild(iImg);\n            } else {\n                iOverlay = document.querySelectorAll('.i_overlay')[0];\n                iImg = document.querySelectorAll('.i_img')[0];\n                iOverlay.classList.add('visible');\n                iImg.classList.add('visible');\n            }\n\n\n            iImg.setAttribute('src', href);\n            iImg.style.backgroundImage = 'url(' + href_min + ')';\n\n\n            iOverlay.onclick = function () {\n                iOverlay.classList.remove('visible');\n                iImg.classList.remove('visible');\n            }\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/gallery.js?");

/***/ }),

/***/ "./src/js/parts/modal_popup.js":
/*!*************************************!*\
  !*** ./src/js/parts/modal_popup.js ***!
  \*************************************/
/*! exports provided: modal_popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal_popup\", function() { return modal_popup; });\nfunction modal_popup() {\n\n    let popup = document.querySelector('.popup'),\n        close = document.querySelector('button.popup_close');\n\n    document.body.addEventListener('click', function (event) {\n        if (event.target && event.target.classList.contains('phone_link')) {\n            event.preventDefault();\n            popup.style.display = 'block';\n        }\n    });\n\n    close.addEventListener('click', function () {\n        popup.style.display = 'none';\n    })\n\n    document.addEventListener('click', function (e) {\n        let popup = document.querySelector('.popup');\n        if (e.target == popup) {\n            popup.style.display = 'none';\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/modal_popup.js?");

/***/ }),

/***/ "./src/js/parts/modal_popup_engineer.js":
/*!**********************************************!*\
  !*** ./src/js/parts/modal_popup_engineer.js ***!
  \**********************************************/
/*! exports provided: modal_popup_engineer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal_popup_engineer\", function() { return modal_popup_engineer; });\nfunction modal_popup_engineer() {\n\n    let headerbtn = document.querySelector('button.header_btn'),\n    popup_engineer = document.querySelector('.popup_engineer'),\n    close = document.querySelector('button.popup_engineer_close'); \n\n    headerbtn.addEventListener('click', function() {\n        popup_engineer.style.display = 'block';   \n    })\n\n    close.addEventListener('click', function ()  {\n        popup_engineer.style.display = 'none';   \n    })\n    \n    document.addEventListener('click', function (e) {\n        let  popup_engineer = document.querySelector('.popup_engineer');\n        if (e.target == popup_engineer){\n            popup_engineer.style.display = 'none';\n        }   \n    });\n\n   \n\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/modal_popup_engineer.js?");

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\nfunction tabs() {\n    \n    let tab = document.querySelectorAll('div.no_click a'),\n        tabwrap = document.querySelectorAll('.no_click'),\n        info = document.querySelector('.decoration_slider'),\n        tabContent = document.querySelectorAll('#dec_content');\n    \n    function hideTabContent(a) {\n    for (let i = a; i < tabContent.length; i++) {\n        tabContent[i].classList.remove('show');\n        tabContent[i].classList.add('hide');\n    }\n    }\n    \n    hideTabContent(1);\n    \n    function showTabContent(b) {\n    if (tabContent[b].classList.contains('hide')) {\n        tabContent[b].classList.remove('hide');\n        tabContent[b].classList.add('show');\n    }\n    }\n    \n    function hideBorder(a) {\n        for (let i = a; i < tabwrap.length; i++) {\n            tabwrap[i].classList.remove('after_click');\n        }\n        }\n        \n    hideBorder(1);\n        \n    function showBorder(b) {\n        tabwrap[b].classList.add('after_click');\n    }\n        \n\n    info.addEventListener('click', function (event) {\n        let target = event.target;\n    \n        if (target) {\n            for (let i = 0; i < tab.length; i++) {\n                if (target == tab[i]) {\n                   hideBorder(0);\n                   showBorder(i);\n                   hideTabContent(0);\n                   showTabContent(i);\n                   break;\n                }\n            }\n        }\n    });    \n\n}\n\n\n\n \n\n//# sourceURL=webpack:///./src/js/parts/tabs.js?");

/***/ }),

/***/ "./src/js/parts/tabs_glazing.js":
/*!**************************************!*\
  !*** ./src/js/parts/tabs_glazing.js ***!
  \**************************************/
/*! exports provided: tabs_glazing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs_glazing\", function() { return tabs_glazing; });\nfunction tabs_glazing() {\n    \n    let tab = document.querySelectorAll('.glazing_block a'),\n        tabwrap = document.querySelectorAll('.glazing_block'),\n        info = document.querySelector('.glazing_slider'),\n        tabContent = document.querySelectorAll('div#tab_content');\n    \n    function hideTabContent(a) {\n    for (let i = a; i < tabContent.length; i++) {\n        tabContent[i].classList.remove('show');\n        tabContent[i].classList.add('hide');\n    }\n    }\n    \n    hideTabContent(1);\n    \n    function showTabContent(b) {\n    if (tabContent[b].classList.contains('hide')) {\n        tabContent[b].classList.remove('hide');\n        tabContent[b].classList.add('show');\n    }\n    }\n    \n    function linkdesactive(a) {\n        for (let i = a; i < tab.length; i++) {\n            tab[i].classList.remove('active');\n        }\n        }\n        \n    linkdesactive(1);\n        \n    function linkactive(b) {\n        tab[b].classList.add('active');\n    } \n\n    info.addEventListener('click', function (event) {\n        let target = event.target;\n    \n        if (target) {\n            for (let i = 0; i < tab.length; i++) {\n                if (target == tab[i]) {\n                   linkdesactive(0);\n                   linkactive(i);\n                   hideTabContent(0);\n                   showTabContent(i);\n                   \n                   break;\n                }\n            }\n        }\n    });    \n\n}\n\n\n\n \n\n//# sourceURL=webpack:///./src/js/parts/tabs_glazing.js?");

/***/ }),

/***/ "./src/js/parts/timeout.js":
/*!*********************************!*\
  !*** ./src/js/parts/timeout.js ***!
  \*********************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeout\", function() { return timeout; });\nfunction timeout() {\n\n    let popup = document.querySelector('.popup');  \n\n    setTimeout (function () {\n        popup.style.display = 'block';\n    }, 60000);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/timeout.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\nfunction timer() {\n\n    let deadline = '2019-06-04';\n\n    function getTimeRemaining(endtime) {\n        let today = new Date();\n        let y = today.getFullYear();\n        let m = today.getMonth();\n        let d = today.getDate();\n        let h = today.getHours();\n        let min = today.getMinutes();\n        let s = today.getSeconds();\n        let todayUTC = new Date(Date.UTC(y, m, d, h, min, s));\n\n        let t = Date.parse(endtime) - Date.parse(todayUTC),\n            seconds = Math.floor((t / 1000) % 60),\n            minutes = Math.floor((t / 1000 / 60) % 60),\n            hours = Math.floor((t / (1000 * 60 * 60))% 24),\n            days = Math.floor((t / (1000 * 60 * 60 * 24)));\n\n        if (t < 0) {\n                days = 0,\n                seconds = 0,\n                minutes = 0,\n                hours = 0\n        }\n        if (days < 10) days = \"0\" + days;\n        if (hours < 10) hours = \"0\" + hours;\n        if (minutes < 10) minutes = \"0\" + minutes;\n        if (seconds < 10) seconds = \"0\" + seconds;\n\n        return {\n            'total': t,\n            'days': days,\n            'hours': hours,\n            'minutes': minutes,\n            'seconds': seconds\n        };\n    }\n\n    function setClock(id, endtime) {\n        let timer = document.querySelector('.eTimer'),\n            days = timer.querySelector('.days'),\n            hours = timer.querySelector('.hours'),\n            minutes = timer.querySelector('.minutes'),\n            seconds = timer.querySelector('.seconds'),\n            timeInterval = setInterval(updateClock, 1000);\n\n\n        function updateClock() {\n            let t = getTimeRemaining(endtime);\n            days.textContent = t.days;\n            hours.textContent = t.hours;\n            minutes.textContent = t.minutes;\n            seconds.textContent = t.seconds;\n\n            if (t.total <= 0) {\n                clearInterval(timeInterval);\n            }\n        }\n    }\n    setClock('timer', deadline);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_modal_popup_engineer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/modal_popup_engineer */ \"./src/js/parts/modal_popup_engineer.js\");\n/* harmony import */ var _parts_modal_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/modal_popup */ \"./src/js/parts/modal_popup.js\");\n/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/tabs */ \"./src/js/parts/tabs.js\");\n/* harmony import */ var _parts_tabs_glazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/tabs_glazing */ \"./src/js/parts/tabs_glazing.js\");\n/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/calc */ \"./src/js/parts/calc.js\");\n/* harmony import */ var _parts_form_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/form_popup */ \"./src/js/parts/form_popup.js\");\n/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/form */ \"./src/js/parts/form.js\");\n/* harmony import */ var _parts_formvalid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/formvalid */ \"./src/js/parts/formvalid.js\");\n/* harmony import */ var _parts_timeout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/timeout */ \"./src/js/parts/timeout.js\");\n/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/timer */ \"./src/js/parts/timer.js\");\n/* harmony import */ var _parts_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/gallery */ \"./src/js/parts/gallery.js\");\n\n\n\n\n\n\n\n\n\n\n\n \n\nwindow.addEventListener('DOMContentLoaded', function () {\n\n    'use strict';\n     \n     Object(_parts_modal_popup_engineer__WEBPACK_IMPORTED_MODULE_0__[\"modal_popup_engineer\"])();\n     Object(_parts_modal_popup__WEBPACK_IMPORTED_MODULE_1__[\"modal_popup\"])();\n     Object(_parts_tabs__WEBPACK_IMPORTED_MODULE_2__[\"tabs\"])();\n     Object(_parts_tabs_glazing__WEBPACK_IMPORTED_MODULE_3__[\"tabs_glazing\"])();\n     Object(_parts_calc__WEBPACK_IMPORTED_MODULE_4__[\"calc\"])();\n     Object(_parts_form_popup__WEBPACK_IMPORTED_MODULE_5__[\"form_popup\"])();\n     Object(_parts_form__WEBPACK_IMPORTED_MODULE_6__[\"form\"])();\n     Object(_parts_formvalid__WEBPACK_IMPORTED_MODULE_7__[\"formvalid\"])();\n     Object(_parts_timeout__WEBPACK_IMPORTED_MODULE_8__[\"timeout\"])();\n     Object(_parts_timer__WEBPACK_IMPORTED_MODULE_9__[\"timer\"])();\n     Object(_parts_gallery__WEBPACK_IMPORTED_MODULE_10__[\"gallery\"])();\n});      \n    \n\n\n\n\n\n\n\n\n\n\n\n\n \n\n \n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });