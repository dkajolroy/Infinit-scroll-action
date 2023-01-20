### Features

- Scroll to loadmore api call;
- Scroll to action function specific position your web ;

### Installation

`$npm i infinite-scroll-action`

### React js

```javascript
import InfiniteScrollAction from 'infinite-scroll-action'
import { useEffect, useState } from 'react'

function App() {
  const [product, setProduct] = useState([])
  const [limit, setLimit] = useState(20)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=0`)
      const data = await res.json()
      setProduct(data.products)
      setLoading(false)
    }
    apiCall()
  }, [limit])

  const callback = () => {
    setLimit(limit + 10)
  }

  return (
    <div className='App'>
      <InfiniteScrollAction
        // If use this API call to past this realtime get data length else don't need
        ifApiCallPastChangeableDataLength={product.length}
        //Function call from bottom to top pixel position
        bottomToActionPosition={20}
        callback={callback}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {!product.length && loading ? (
            <div
              style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h4>First time Loading........</h4>
            </div>
          ) : (
            product.map((item) => (
              <div key={item.id} style={{ width: '20%' }}>
                <div
                  style={{
                    background: 'tomato',
                    height: '200px',
                    margin: '5px',
                  }}
                >
                  <h4>{item.title}</h4>
                  <h4>{item.id}</h4>
                </div>
              </div>
            ))
          )}

          {/* GET More Data -scroll- Loading  */}
          {product.length && loading ? (
            <div
              style={{
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h4>Get more -- Loading........</h4>
            </div>
          ) : null}
        </div>
      </InfiniteScrollAction>
    </div>
  )
}

export default App
```

###Props

| Props                             | Data type | Required |
| --------------------------------- | --------- | -------- |
| callback                          | function  | yes      |
| bottomToActionPosition            | number    | no       |
| ifApiCallPastChangeableDataLength | number    | no       |

###End>>=====@=====<<End
