import React from 'react';
interface Props {
    children: React.ReactNode;
    callback: () => void;
    bottomToActionPosition?: number;
    ifApiCallPastChangeableDataLength?: number;
}
declare const InfiniteScrollAction: (props: Props) => JSX.Element;
export default InfiniteScrollAction;
