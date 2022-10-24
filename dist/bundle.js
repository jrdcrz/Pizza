/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (() => {

const loadPage = (() => {
    const contentId = document.querySelector('#content');

    const nav = document.createElement("header");

    nav.innerHTML = `
    <nav>
        <h2>Good Guys Pizza</h2>

        <a href="#" class="drop">
        <span class="line line1"></span>
        <span class="line line3"></span>
        <span class="line line2"></span>
        </a>
        
        <ul class="links">
        <li data-selection-target="#home" class="selection red">Home</li>
        <li data-selection-target="#menu" class="selection">Menu</li>
        <li data-selection-target="#contact" class="selection">Contact</li>
        </ul>
    </nav>
    `;
    contentId.appendChild(nav);
})();

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
const homePage = (() => {

    const contentId = document.querySelector("#content");

    const home = document.createElement('div');
    home.classList.add("selection-content")
    home.innerHTML = `
    <div id="home" class="active" data-selection-content>
        <div class="sub-content">
            <div class="info-graph">
            <h1>Eat Chill Sleep</h1>
            <h2>If it ain't hot, It's free</h2>
            <div class="order-btn">
            <a data-selection-target="#menu" class="order">Order Now</a>
            </div>
            </div>

            <div class="shop-info">
            <p>Makati, Metro Manila</p>
            <p>0912-345-6789</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.033103895454!2d121.03722421494919!3d14.540099189841033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8e75592adcb%3A0x34667b329191ab3d!2s47-41%20Tamarind%20Rd%2C%20Makati%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1665991550029!5m2!1sen!2sph" 
            width="300" 
            height="250" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>

        </div>
    </div>`;

    contentId.appendChild(home);
})();



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
const menuPage = (() => {
    const contentId = document.querySelector("#content");

    const menu = document.createElement('div');
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-selection-content", "");
    menu.innerHTML = `
    <div class="sub-content">
        <h1>Menu</h1>

            <div class="menu-content">
                <img src="./images/images.jpeg">

                <div class="item-content">
                <h4>Pepperoni: PHP <span>499.75</span></h4>
                    <p>Pepperoni is one of our regular pizza orders</p>
                </div>
            </div>

            <div class="menu-content">
                
                <img src="./images/italian margherita.jpeg">

                <div class="item-content">
                <h4>Margherita: PHP <span>429.75</span></h4>
                    <p>Margherita is for our cheese overload pizzas</p>
                </div>
                
            </div>
            
            <div class="menu-content">
                
                <img src="./images/chicken.jpeg">

                <div class="item-content">
                <h4>Chicken (good for 4): PHP <span>399.75</span></h4>
                <h4>Chicken (good for 8): PHP <span>599.75</span></h4>
                    <p>Bucket of Chicken Barkada set</p>
                </div>
                
            </div>

    </div>`

    contentId.appendChild(menu);
})();



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
const contactPage = (() => {

    const contentId = document.querySelector("#content");

    const contact = document.createElement('div');
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-selection-content", "");
    contact.innerHTML = `
    <div class="sub-content">
        <h1>Contact Us!</h1>

            <div class="contact-box">
                <div class="contact-form>
                    <p>Makati Metro Manila</p>
                    <p>0912-345-6789</p>

                    <form action="#" method="post">
                        <label for"first_name">First Name:</label>
                        <input type="tex"
                                id="first_name"
                                placeholder="First Name"
                                required>
                        <label for"last_name">Last Name:</label>
                        <input type="text"
                                id="last_name"
                                placeholder="Last Name"
                                required>
                        <label for"email">Email:</label>
                        <input type="email"
                                id="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                placeholder="Email Address"
                                required>
                        <label for"phone">Phone Number:</label>
                        <input type="tel"
                                id="phone"
                                pattern="(\d{2}\)|(\{4})-?(\{3})-?(\{4})$"
                                Placeholder="Phone Number"
                                required>
                        <textarea type="input" placeholder="Write a comment"></textarea>
                        <input type="submit">
                    </form>
                    
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.033103895454!2d121.03722421494919!3d14.540099189841033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8e75592adcb%3A0x34667b329191ab3d!2s47-41%20Tamarind%20Rd%2C%20Makati%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1665991550029!5m2!1sen!2sph" 
                    width="300" 
                    height="250" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
    </div>`

    contentId.appendChild(contact);
})();



/***/ })
/******/ 	]);
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
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_load__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





const selections = document.querySelectorAll("[data-selection-target]");
const selectionContent = document.querySelectorAll("[data-selection-content]");
const list = document.querySelector(".drop");

list.addEventListener("click", () =>{
    document.querySelector(".links").classList.toggle("active");
    list.classList.toggle("toggle");
});

selections.forEach((selection) => {
    selection.addEventListener("click", () => {
        const target = document.querySelector(selection.dataset.selectionTarget);
        selectionContent.forEach((selectionContents) => {
            selectionContents.classList.remove("active");
        });
        selections.forEach((selection) => {
            selection.classList.remove("red");
        });
        selection.classList.add("red");
        target.classList.add("active");
    })
})

document.querySelector(".order").addEventListener("click", () => {
    document.querySelector(`[data-selection-target="#menu"]`).classList.add("red");
});

document.querySelector(`[type="submit"]`).addEventListener("click", () => {
    document.querySelector("form").reset();
});


})();

/******/ })()
;