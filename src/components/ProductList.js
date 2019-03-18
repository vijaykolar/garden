import React from 'react'

export default function ProductList(props) {
    // console.log(props)
  return (
    <div>
      Product list
      { props.onLoad }
    </div>
  )
}
