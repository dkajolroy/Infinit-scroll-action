"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var InfiniteScrollAction = function (props) {
    var callback = props.callback, ifApiCallPastChangeableDataLength = props.ifApiCallPastChangeableDataLength, bottomToActionPosition = props.bottomToActionPosition;
    var minus = bottomToActionPosition || 5;
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', function () {
            var _a = document.documentElement, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight;
            if (scrollTop + clientHeight > scrollHeight - minus) {
                callback();
            }
        });
    }, [ifApiCallPastChangeableDataLength]);
    return react_1["default"].createElement(react_1["default"].Fragment, null, props.children);
};
exports["default"] = InfiniteScrollAction;
//# sourceMappingURL=InfiniteScrollAction.js.map