module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Basket.tsx":
/*!***********************************!*\
  !*** ./src/components/Basket.tsx ***!
  \***********************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
var _jsxFileName = "I:\\BootCamp Project\\shopping-basket\\src\\components\\Basket.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  listItem: {
    padding: theme.spacing(1, 0),
    justifyContent: "flex-end"
  },
  total: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize * 2
  }
}));

const Basket = () => {
  const classes = useStyles({});
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h2",
    variant: "h6",
    color: "primary",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Shopping Basket"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "p",
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "You have ", products.filter(product => product.added).length, " items in your basket"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, products.filter(product => product.added).map(product => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: product.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemAvatar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    alt: "Product",
    src: product.imageUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: product.title,
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 23
      }
    }, "\xA3", (product.price / 100).toFixed(2)), ` — ${product.description}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "end",
    "aria-label": "delete",
    onClick: () => _store__WEBPACK_IMPORTED_MODULE_5__["store"].dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["remove"])({
      id: product.id
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    variant: "inset",
    component: "li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    className: classes.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    className: classes.total,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "\xA3", (products.filter(product => product.added).reduce((acc, current) => acc += current.price, 0) / 100).toFixed(2)))));
};



/***/ }),

/***/ "./src/components/Product.tsx":
/*!************************************!*\
  !*** ./src/components/Product.tsx ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
var _jsxFileName = "I:\\BootCamp Project\\shopping-basket\\src\\components\\Product.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 1000,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

const Product = () => {
  const classes = useStyles({});
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state);
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, products.map(product => __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default.a, {
    focusRipple: true,
    key: product.id,
    className: classes.image,
    focusVisibleClassName: classes.focusVisible,
    disabled: product.added,
    onClick: () => _store__WEBPACK_IMPORTED_MODULE_5__["store"].dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["add"])(product)),
    style: {
      width: `${100 / products.length}%`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.imageSrc,
    style: {
      backgroundImage: `url(${product.imageUrl})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "span",
    variant: "subtitle1",
    color: "inherit",
    className: classes.imageTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, product.title, __jsx("span", {
    className: classes.imageMarked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }))))));
};



/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _components_Basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Basket */ "./src/components/Basket.tsx");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Product */ "./src/components/Product.tsx");
var _jsxFileName = "I:\\BootCamp Project\\shopping-basket\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ShoppingBasket = () => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_3__["store"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 5,
    mb: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h1", {
    style: {
      color: 'salmon'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Shopping-Basket"), __jsx(_components_Product__WEBPACK_IMPORTED_MODULE_5__["Product"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 5,
    mb: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_Basket__WEBPACK_IMPORTED_MODULE_4__["Basket"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShoppingBasket);

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: add, remove, basketSlice, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basketSlice", function() { return basketSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/store/state.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const basketSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "basket",
  initialState: _state__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"],
  reducers: {
    add: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return _objectSpread(_objectSpread({}, item), {}, {
          added: true
        });
      });
    },
    remove: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return _objectSpread(_objectSpread({}, item), {}, {
          added: false
        });
      });
    }
  }
});
const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: basketSlice.reducer
});
const {
  add,
  remove
} = basketSlice.actions;


/***/ }),

/***/ "./src/store/state.ts":
/*!****************************!*\
  !*** ./src/store/state.ts ***!
  \****************************/
/*! exports provided: INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
const INITIAL_STATE = [{
  id: '123',
  title: 'HELLCAT Boys t-shirt',
  description: 'No fancy sizing charts here, one t-shirt size to rule them all',
  imageUrl: '/pic1.jpg',
  price: 399
}, {
  id: '456',
  title: 'DMDM PIG Luminous Short Sleeves  t-shirt',
  description: 'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
  imageUrl: '/pic2.webp',
  price: 499
}, {
  id: '749',
  title: 'Blue t-shirt',
  description: 'The only product on our site that might actually be worth buying',
  imageUrl: '/blue-tshirt.png',
  price: 899
}, {
  id: '719',
  title: 'Red t-shirt',
  description: 'The only product on our site that might actually be worth buying',
  imageUrl: '/red-tshirt.png',
  price: 999
}, {
  id: '289',
  title: 'orange t-shirt',
  description: 'The only product on our site that might actually be worth buying',
  imageUrl: '/pic2.webp',
  price: 799
}];


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFza2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJpbmxpbmUiLCJkaXNwbGF5IiwibGlzdEl0ZW0iLCJwYWRkaW5nIiwic3BhY2luZyIsImp1c3RpZnlDb250ZW50IiwidG90YWwiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwiZm9udFNpemUiLCJCYXNrZXQiLCJjbGFzc2VzIiwicHJvZHVjdHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZmlsdGVyIiwicHJvZHVjdCIsImFkZGVkIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJpbWFnZVVybCIsInRpdGxlIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVzY3JpcHRpb24iLCJzdG9yZSIsImRpc3BhdGNoIiwicmVtb3ZlIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudCIsImZsZXhXcmFwIiwibWluV2lkdGgiLCJpbWFnZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImJvcmRlciIsImZvY3VzVmlzaWJsZSIsImltYWdlQnV0dG9uIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJpbWFnZVNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaW1hZ2VCYWNrZHJvcCIsImJsYWNrIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiaW1hZ2VUaXRsZSIsImltYWdlTWFya2VkIiwiUHJvZHVjdCIsImFkZCIsImJhY2tncm91bmRJbWFnZSIsIlNob3BwaW5nQmFza2V0IiwiYmFza2V0U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJJTklUSUFMX1NUQVRFIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJpdGVtIiwicGF5bG9hZCIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxn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LDhDOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgVGhlbWUsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IHtcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIERpdmlkZXIsXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgQXZhdGFyLFxyXG4gIFR5cG9ncmFwaHlcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiXHJcblxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUHJvZHVjdEl0ZW0gfSBmcm9tIFwiLi4vZ2xvYmFsXCJcclxuaW1wb3J0IHsgc3RvcmUsIHJlbW92ZSB9IGZyb20gXCIuLi9zdG9yZVwiXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlclxyXG4gICAgfSxcclxuICAgIGlubGluZToge1xyXG4gICAgICBkaXNwbGF5OiBcImlubGluZVwiXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAwKSxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIlxyXG4gICAgfSxcclxuICAgIHRvdGFsOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplICogMlxyXG4gICAgfVxyXG4gIH0pXHJcbilcclxuXHJcbmNvbnN0IEJhc2tldCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHt9KVxyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQcm9kdWN0SXRlbVtdKSA9PiBzdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJwcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgIFNob3BwaW5nIEJhc2tldFxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiYm9keTFcIj5cclxuICAgICAgICBZb3UgaGF2ZSB7cHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5hZGRlZCkubGVuZ3RofSBpdGVtcyBpbiB5b3VyIGJhc2tldFxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICB7cHJvZHVjdHNcclxuICAgICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmFkZGVkKVxyXG4gICAgICAgICAgLm1hcCgocHJvZHVjdDogUHJvZHVjdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiUHJvZHVjdFwiIHNyYz17cHJvZHVjdC5pbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmcG91bmQ7eyhwcm9kdWN0LnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Ag4oCUICR7cHJvZHVjdC5kZXNjcmlwdGlvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RvcmUuZGlzcGF0Y2gocmVtb3ZlKHsgaWQ6IHByb2R1Y3QuaWQgfSkpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3RhbH0+XHJcbiAgICAgICAgICAgICZwb3VuZDtcclxuICAgICAgICAgICAgeyhcclxuICAgICAgICAgICAgICBwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuYWRkZWQpXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IChhY2MgKz0gY3VycmVudC5wcmljZSksIDApIC8gMTAwXHJcbiAgICAgICAgICAgICkudG9GaXhlZCgyKX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2tldCB9XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBUaGVtZSwgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCJcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0SXRlbSB9IGZyb20gXCIuLi9nbG9iYWxcIlxyXG5pbXBvcnQgeyBzdG9yZSwgYWRkIH0gZnJvbSBcIi4uL3N0b3JlXCJcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBtaW5XaWR0aDogMTAwMCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiJiAkaW1hZ2VNYXJrZWRcIjoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZVRpdGxlXCI6IHtcclxuICAgICAgICAgIGJvcmRlcjogXCI0cHggc29saWQgY3VycmVudENvbG9yXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb2N1c1Zpc2libGU6IHt9LFxyXG4gICAgaW1hZ2VCdXR0b246IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgfSxcclxuICAgIGltYWdlU3JjOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIlxyXG4gICAgfSxcclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIilcclxuICAgIH0sXHJcbiAgICBpbWFnZVRpdGxlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4ICR7dGhlbWUuc3BhY2luZygxKSArIDZ9cHhgXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICB3aWR0aDogMTgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgIGxlZnQ6IFwiY2FsYyg1MCUgLSA5cHgpXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIilcclxuICAgIH1cclxuICB9KVxyXG4pXHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoe30pXHJcblxyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQcm9kdWN0SXRlbVtdKSA9PiBzdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0OiBQcm9kdWN0SXRlbSkgPT4gKFxyXG4gICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICBmb2N1c1JpcHBsZVxyXG4gICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lPXtjbGFzc2VzLmZvY3VzVmlzaWJsZX1cclxuICAgICAgICAgIGRpc2FibGVkPXtwcm9kdWN0LmFkZGVkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc3RvcmUuZGlzcGF0Y2goYWRkKHByb2R1Y3QpKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHsxMDAgLyBwcm9kdWN0cy5sZW5ndGh9JWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2R1Y3QuaW1hZ2VVcmx9KWBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2R1Y3QgfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiXHJcbmltcG9ydCB7IEJhc2tldCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Jhc2tldFwiXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0XCJcclxuXHJcbmNvbnN0IFNob3BwaW5nQmFza2V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgPEJveCBtdD17NX0gbWI9ezV9PlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6J3NhbG1vbid9fT5TaG9wcGluZy1CYXNrZXQ8L2gxPlxyXG4gICAgICAgICAgPFByb2R1Y3QgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IG10PXs1fSBtYj17NX0+XHJcbiAgICAgICAgICA8QmFza2V0IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nQmFza2V0XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuaW1wb3J0IHsgSU5JVElBTF9TVEFURSB9IGZyb20gXCIuL3N0YXRlXCJcclxuXHJcbmNvbnN0IGJhc2tldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYmFza2V0XCIsXHJcbiAgaW5pdGlhbFN0YXRlOiBJTklUSUFMX1NUQVRFLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBhZGRlZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBhZGRlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7IHJlZHVjZXI6IGJhc2tldFNsaWNlLnJlZHVjZXIgfSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZCwgcmVtb3ZlIH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgeyBiYXNrZXRTbGljZSwgc3RvcmUgfVxyXG4iLCJpbXBvcnQgeyBQcm9kdWN0SXRlbSB9IGZyb20gJy4uL2dsb2JhbCdcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEU6IFByb2R1Y3RJdGVtW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6ICcxMjMnLFxyXG4gICAgdGl0bGU6ICdIRUxMQ0FUIEJveXMgdC1zaGlydCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ05vIGZhbmN5IHNpemluZyBjaGFydHMgaGVyZSwgb25lIHQtc2hpcnQgc2l6ZSB0byBydWxlIHRoZW0gYWxsJyxcclxuICAgIGltYWdlVXJsOiAnL3BpYzEuanBnJyxcclxuICAgIHByaWNlOiAzOTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNDU2JyxcclxuICAgIHRpdGxlOiAnRE1ETSBQSUcgTHVtaW5vdXMgU2hvcnQgU2xlZXZlcyAgdC1zaGlydCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1RoaXMgdW5pcXVlIHQtc2hpcnQgaXMgZ3VhcmFudGVlZCB0byBmaXQgbm9ib2R5LCBub3QgZXZlbiBuZXcgYm9ybiBiYWJpZXMnLFxyXG4gICAgaW1hZ2VVcmw6ICcvcGljMi53ZWJwJyxcclxuICAgIHByaWNlOiA0OTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNzQ5JyxcclxuICAgIHRpdGxlOiAnQmx1ZSB0LXNoaXJ0JyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG9ubHkgcHJvZHVjdCBvbiBvdXIgc2l0ZSB0aGF0IG1pZ2h0IGFjdHVhbGx5IGJlIHdvcnRoIGJ1eWluZycsXHJcbiAgICBpbWFnZVVybDogJy9ibHVlLXRzaGlydC5wbmcnLFxyXG4gICAgcHJpY2U6IDg5OVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc3MTknLFxyXG4gICAgdGl0bGU6ICdSZWQgdC1zaGlydCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBvbmx5IHByb2R1Y3Qgb24gb3VyIHNpdGUgdGhhdCBtaWdodCBhY3R1YWxseSBiZSB3b3J0aCBidXlpbmcnLFxyXG4gICAgaW1hZ2VVcmw6ICcvcmVkLXRzaGlydC5wbmcnLFxyXG4gICAgcHJpY2U6IDk5OVxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkOiAnMjg5JyxcclxuICAgIHRpdGxlOiAnb3JhbmdlIHQtc2hpcnQnLFxyXG4gICAgZGVzY3JpcHRpb246ICdUaGUgb25seSBwcm9kdWN0IG9uIG91ciBzaXRlIHRoYXQgbWlnaHQgYWN0dWFsbHkgYmUgd29ydGggYnV5aW5nJyxcclxuICAgIGltYWdlVXJsOiAnL3BpYzIud2VicCcsXHJcbiAgICBwcmljZTogNzk5XHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgeyBJTklUSUFMX1NUQVRFIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9