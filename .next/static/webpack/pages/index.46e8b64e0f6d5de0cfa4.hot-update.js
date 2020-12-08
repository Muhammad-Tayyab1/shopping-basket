webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Product.tsx":
/*!************************************!*\
  !*** ./src/components/Product.tsx ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
var _jsxFileName = "I:\\BootCamp Project\\shopping-basket\\src\\components\\Product.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 600,
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
  _s();

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
  }, products.map(product => __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

_s(Product, "nLvP5CBg0PeomXjAPCUt4IvsPsg=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Product;


var _c;

$RefreshReg$(_c, "Product");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1pbldpZHRoIiwid2lkdGgiLCJpbWFnZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImJvcmRlciIsImZvY3VzVmlzaWJsZSIsImltYWdlQnV0dG9uIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJpbWFnZVNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaW1hZ2VCYWNrZHJvcCIsImJhY2tncm91bmRDb2xvciIsImJsYWNrIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiaW1hZ2VUaXRsZSIsInBhZGRpbmciLCJzcGFjaW5nIiwiaW1hZ2VNYXJrZWQiLCJQcm9kdWN0IiwiY2xhc3NlcyIsInByb2R1Y3RzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImFkZGVkIiwic3RvcmUiLCJkaXNwYXRjaCIsImFkZCIsImxlbmd0aCIsImJhY2tncm91bmRJbWFnZSIsImltYWdlVXJsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELElBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxZQUFRLEVBQUUsTUFGTjtBQUdKQyxZQUFRLEVBQUUs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O0FBQUE7QUFBQSxJQVBGLENBREYsQ0FsQkYsQ0FERCxDQURILENBREY7QUFvQ0QsQ0F6Q0Q7O0dBQU1DLE87VUFDWTFDLFMsRUFFQzZDLHVEOzs7S0FIYkgsTztBQTJDTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NmU4YjY0ZTBmNmQ1ZGUwY2ZhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIlxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RJdGVtIH0gZnJvbSBcIi4uL2dsb2JhbFwiXHJcbmltcG9ydCB7IHN0b3JlLCBhZGQgfSBmcm9tIFwiLi4vc3RvcmVcIlxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIG1pbldpZHRoOiA2MDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgICAgaGVpZ2h0OiAxMDBcclxuICAgICAgfSxcclxuICAgICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjE1XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlTWFya2VkXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiJiAkaW1hZ2VUaXRsZVwiOiB7XHJcbiAgICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkIGN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9jdXNWaXNpYmxlOiB7fSxcclxuICAgIGltYWdlQnV0dG9uOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgNDAlXCJcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VUaXRsZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4ICR7dGhlbWUuc3BhY2luZyg0KX1weCAke3RoZW1lLnNwYWNpbmcoMSkgKyA2fXB4YFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgIGhlaWdodDogMyxcclxuICAgICAgd2lkdGg6IDE4LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBib3R0b206IC0yLFxyXG4gICAgICBsZWZ0OiBcImNhbGMoNTAlIC0gOXB4KVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpXHJcbiAgICB9XHJcbiAgfSlcclxuKVxyXG5cclxuY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHt9KVxyXG5cclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUHJvZHVjdEl0ZW1bXSkgPT4gc3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdDogUHJvZHVjdEl0ZW0pID0+IChcclxuICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICAgICAgICBkaXNhYmxlZD17cHJvZHVjdC5hZGRlZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0b3JlLmRpc3BhdGNoKGFkZChwcm9kdWN0KSl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7MTAwIC8gcHJvZHVjdHMubGVuZ3RofSVgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9kdWN0LmltYWdlVXJsfSlgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9kdWN0IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==