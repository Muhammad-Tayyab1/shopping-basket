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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFza2V0LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiaW5saW5lIiwiZGlzcGxheSIsImxpc3RJdGVtIiwicGFkZGluZyIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsInRvdGFsIiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0Qm9sZCIsImZvbnRTaXplIiwiQmFza2V0IiwiY2xhc3NlcyIsInByb2R1Y3RzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZpbHRlciIsInByb2R1Y3QiLCJhZGRlZCIsImxlbmd0aCIsIm1hcCIsImlkIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsInByaWNlIiwidG9GaXhlZCIsImRlc2NyaXB0aW9uIiwic3RvcmUiLCJkaXNwYXRjaCIsInJlbW92ZSIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdBO0FBRUE7QUFFQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxJQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsbUJBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBRnRDLEdBREs7QUFLWEMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRTtBQURILEdBTEc7QUFRWEMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRVgsS0FBSyxDQUFDWSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUREO0FBRVJDLGtCQUFjLEVBQUU7QUFGUixHQVJDO0FBWVhDLE9B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QUFBQSxJQUxGLENBREYsQ0FwQkYsQ0FERixFQStCRSxNQUFDLHlEQUFEO0FBQVMsV0FBTyxFQUFDLE9BQWpCO0FBQXlCLGFBQVMsRUFBQyxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JGLENBSEgsQ0FESCxFQXNDRSxNQUFDLDBEQUFEO0FBQVUsYUFBUyxFQUFFVCxPQUFPLENBQUNWLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLFdBQXBCO0FBQWdDLGFBQVMsRUFBRVUsT0FBTyxDQUFDTixLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUcsQ0FDQ08sUUFBUSxDQUNMRyxNQURILENBQ1VDLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxLQUQ3QixFQUVHWSxNQUZILENBRVUsQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLEtBQW1CRCxHQUFHLElBQUlDLE9BQU8sQ0FBQ1IsS0FGNUMsRUFFb0QsQ0FGcEQsSUFFeUQsR0FIMUQsRUFJQ0MsT0FKRCxDQUlTLENBSlQsQ0FGSCxDQURGLENBdENGLENBUEYsQ0FERjtBQTJERCxDQS9ERDs7R0FBTWQsTTtVQUNZckIsUyxFQUNDd0IsdUQ7OztLQUZiSCxNO0FBaUVOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2ZjU3OGVjZjRjYzg4MDU0MjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBUaGVtZSwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxyXG5pbXBvcnQge1xyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgRGl2aWRlcixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgTGlzdEl0ZW1BdmF0YXIsXHJcbiAgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBBdmF0YXIsXHJcbiAgVHlwb2dyYXBoeVxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCJcclxuXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBQcm9kdWN0SXRlbSB9IGZyb20gXCIuLi9nbG9iYWxcIlxyXG5pbXBvcnQgeyBzdG9yZSwgcmVtb3ZlIH0gZnJvbSBcIi4uL3N0b3JlXCJcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXHJcbiAgICB9LFxyXG4gICAgaW5saW5lOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCJcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDApLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiXHJcbiAgICB9LFxyXG4gICAgdG90YWw6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUgKiAyXHJcbiAgICB9XHJcbiAgfSlcclxuKVxyXG5cclxuY29uc3QgQmFza2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoe30pXHJcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFByb2R1Y3RJdGVtW10pID0+IHN0YXRlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgU2hvcHBpbmcgQmFza2V0XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgIFlvdSBoYXZlIHtwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmFkZGVkKS5sZW5ndGh9IGl0ZW1zIGluIHlvdXIgYmFza2V0XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHtwcm9kdWN0c1xyXG4gICAgICAgICAgLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuYWRkZWQpXHJcbiAgICAgICAgICAubWFwKChwcm9kdWN0OiBQcm9kdWN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJQcm9kdWN0XCIgc3JjPXtwcm9kdWN0LmltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZwb3VuZDt7KHByb2R1Y3QucHJpY2UgLyAxMDApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YCDigJQgJHtwcm9kdWN0LmRlc2NyaXB0aW9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdG9yZS5kaXNwYXRjaChyZW1vdmUoeyBpZDogcHJvZHVjdC5pZCB9KSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY29tcG9uZW50PVwibGlcIiAvPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvdGFsfT5cclxuICAgICAgICAgICAgJnBvdW5kO1xyXG4gICAgICAgICAgICB7KFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5hZGRlZClcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4gKGFjYyArPSBjdXJyZW50LnByaWNlKSwgMCkgLyAxMDBcclxuICAgICAgICAgICAgKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQmFza2V0IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==