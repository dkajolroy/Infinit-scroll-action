import React, { useEffect } from 'react';
var InfiniteScrollAction = function (props) {
    var callback = props.callback, ifApiCallPastChangeableDataLength = props.ifApiCallPastChangeableDataLength, bottomToActionPosition = props.bottomToActionPosition;
    var minus = bottomToActionPosition || 5;
    useEffect(function () {
        window.addEventListener('scroll', function () {
            var _a = document.documentElement, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight;
            if (scrollTop + clientHeight > scrollHeight - minus) {
                callback();
            }
        });
    }, [ifApiCallPastChangeableDataLength]);
    return React.createElement(React.Fragment, null, props.children);
};
export default InfiniteScrollAction;
//# sourceMappingURL=InfiniteScrollAction.js.map