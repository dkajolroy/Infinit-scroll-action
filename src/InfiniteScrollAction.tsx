import React, { useEffect } from 'react'
interface Props {
  children: React.ReactNode
  callback: () => void
  bottomToActionPosition?: number
  ifApiCallPastChangeableDataLength?: number
}
const InfiniteScrollAction = (props: Props) => {
  const { callback, ifApiCallPastChangeableDataLength, bottomToActionPosition } = props
  const minus = bottomToActionPosition || 5
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement
      if (scrollTop + clientHeight > scrollHeight - minus) {
        callback()
      }
    })
  }, [ifApiCallPastChangeableDataLength])

  return <React.Fragment>{props.children}</React.Fragment>
}

export default InfiniteScrollAction
