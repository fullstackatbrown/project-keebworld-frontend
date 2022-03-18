import React from 'react';
import { ProductHeader } from '../components/ProductHeader';
import { Box } from "../components/Box"
import { BoxLabel } from '../components/BoxLabel';
import './products.css'



function Products(props) {
    return (
        <div>
            <div className='product'>
                <ProductHeader
                    productName={props.prodName} 
                    productCount={props.prodCount}
                    productDescription={props.productDescription}
                />
            </div>
            <div className="container">
              {props.prodData.map(box => (
                <div>
                  <Box id={box.id} bgColor="gray"/>
                  <BoxLabel 
                    category={box.info.category}
                    prodName={box.info.prodName}
                    prodPrice={box.info.prodPrice}
                  />
                </div>
              ))}
            </div>
            <div className="addHeight"/>
        </div>
    )
}

export default Products;