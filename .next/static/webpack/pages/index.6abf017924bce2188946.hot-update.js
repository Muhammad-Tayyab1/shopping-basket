webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Basket.tsx":
/*!***********************************!*\
  !*** ./src/components/Basket.tsx ***!
  \***********************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
var _jsxFileName = "I:\\BootCamp Project\\shopping-basket\\src\\components\\Basket.tsx",
    _s = $RefreshSig$();

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
  _s();

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
  }, "Basket"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
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

_s(Basket, "nLvP5CBg0PeomXjAPCUt4IvsPsg=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Basket;


var _c;

$RefreshReg$(_c, "Basket");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFza2V0LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiaW5saW5lIiwiZGlzcGxheSIsImxpc3RJdGVtIiwicGFkZGluZyIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsInRvdGFsIiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0Qm9sZCIsImZvbnRTaXplIiwiQmFza2V0IiwiY2xhc3NlcyIsInByb2R1Y3RzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZpbHRlciIsInByb2R1Y3QiLCJhZGRlZCIsImxlbmd0aCIsIm1hcCIsImlkIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsInByaWNlIiwidG9GaXhlZCIsImRlc2NyaXB0aW9uIiwic3RvcmUiLCJkaXNwYXRjaCIsInJlbW92ZSIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdBO0FBRUE7QUFFQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxJQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsbUJBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBRnRDLEdBREs7QUFLWEMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRTtBQURILEdBTEc7QUFRWEMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRVgsS0FBSyxDQUFDWSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUREO0FBRVJDLGtCQUFjLEVBQUU7QUFGUixHQVJDO0FBWVhDLE9B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QUFBLElBTEYsQ0FERixDQXBCRixDQURGLEVBK0JFLE1BQUMseURBQUQ7QUFBUyxXQUFPLEVBQUMsT0FBakI7QUFBeUIsYUFBUyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkYsQ0FISCxDQURILEVBc0NFLE1BQUMsMERBQUQ7QUFBVSxhQUFTLEVBQUVULE9BQU8sQ0FBQ1YsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsV0FBcEI7QUFBZ0MsYUFBUyxFQUFFVSxPQUFPLENBQUNOLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFRyxDQUNDTyxRQUFRLENBQ0xHLE1BREgsQ0FDVUMsT0FBTyxJQUFJQSxPQUFPLENBQUNDLEtBRDdCLEVBRUdZLE1BRkgsQ0FFVSxDQUFDQyxHQUFELEVBQU1DLE9BQU4sS0FBbUJELEdBQUcsSUFBSUMsT0FBTyxDQUFDUixLQUY1QyxFQUVvRCxDQUZwRCxJQUV5RCxHQUgxRCxFQUlDQyxPQUpELENBSVMsQ0FKVCxDQUZILENBREYsQ0F0Q0YsQ0FQRixDQURGO0FBMkRELENBL0REOztHQUFNZCxNO1VBQ1lyQixTLEVBQ0N3Qix1RDs7O0tBRmJILE07QUFpRU4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmFiZjAxNzkyNGJjZTIxODg5NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIFRoZW1lLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXHJcbmltcG9ydCB7XHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBEaXZpZGVyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBMaXN0SXRlbUF2YXRhcixcclxuICBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbixcclxuICBJY29uQnV0dG9uLFxyXG4gIEF2YXRhcixcclxuICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIlxyXG5cclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFByb2R1Y3RJdGVtIH0gZnJvbSBcIi4uL2dsb2JhbFwiXHJcbmltcG9ydCB7IHN0b3JlLCByZW1vdmUgfSBmcm9tIFwiLi4vc3RvcmVcIlxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcclxuICAgIH0sXHJcbiAgICBpbmxpbmU6IHtcclxuICAgICAgZGlzcGxheTogXCJpbmxpbmVcIlxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMCksXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCJcclxuICAgIH0sXHJcbiAgICB0b3RhbDoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSAqIDJcclxuICAgIH1cclxuICB9KVxyXG4pXHJcblxyXG5jb25zdCBCYXNrZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7fSlcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUHJvZHVjdEl0ZW1bXSkgPT4gc3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwicHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICBCYXNrZXRcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgWW91IGhhdmUge3Byb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuYWRkZWQpLmxlbmd0aH0gaXRlbXMgaW4geW91ciBiYXNrZXRcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAge3Byb2R1Y3RzXHJcbiAgICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5hZGRlZClcclxuICAgICAgICAgIC5tYXAoKHByb2R1Y3Q6IFByb2R1Y3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlByb2R1Y3RcIiBzcmM9e3Byb2R1Y3QuaW1hZ2VVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJnBvdW5kO3socHJvZHVjdC5wcmljZSAvIDEwMCkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgIOKAlCAke3Byb2R1Y3QuZGVzY3JpcHRpb259YH1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0b3JlLmRpc3BhdGNoKHJlbW92ZSh7IGlkOiBwcm9kdWN0LmlkIH0pKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjbGFzc05hbWU9e2NsYXNzZXMudG90YWx9PlxyXG4gICAgICAgICAgICAmcG91bmQ7XHJcbiAgICAgICAgICAgIHsoXHJcbiAgICAgICAgICAgICAgcHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmFkZGVkKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiAoYWNjICs9IGN1cnJlbnQucHJpY2UpLCAwKSAvIDEwMFxyXG4gICAgICAgICAgICApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBCYXNrZXQgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9