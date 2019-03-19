import React from 'react'

class ProductList extends React.Component {
  render() {

      return (
        <div>
          Product list
          { this.props.pictureLoad }
        </div>
      );
  }
}

export default ProductList;