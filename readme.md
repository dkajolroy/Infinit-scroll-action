### Features

- Scroll to loadmore api call;
- Scroll to action function specific position your web ;

####React js

```javascript
//Import InfiniteScrollAction components first

export default App(){
	const callback=()=>{
	   console.log("This is called !")
	}
	return(
	  <InfiniteScrollAction
			  //action callback function bottom from 150px up.
			  bottomToActionPosition={150}
			  //call to more data length ! if this conponent use to api call.
			  getDataLength={product.length}
			  //This function will act on the scrolling position 150px above the bottom
			  callback={callback}>

			  <div className="row gy-3">
				  {product.map((item, index) => {
					  return <Product item={item} key={index} />;
				  })}
			  </div>
			  {
				  product&&isLoading?
					  <div
						  style={{
							  display: "flex",
							  width: "100%",
							  justifyContent: "center",
						  }}
					  >
						  <Spinner />
					  </div>:null
			  }
		  </InfiniteScrollAction>
	  )}
```

###Props

| Props                  | Data type | Required |
| ---------------------- | --------- | -------- |
| callback               | function  | yes      |
| bottomToActionPosition | number    | no       |
| getDataLength          | number    | yes      |

###End>>=====@=====<<End
