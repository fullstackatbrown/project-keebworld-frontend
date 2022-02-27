import React from 'react';
import { ProductHeader } from '../components/ProductHeader';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import './products.css'

const productData = [
  {
    id: Math.random(),
    bgColor: "#DADBDF",
    border: "1px solid #C4C4C4",
    borderRadius: "8px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)"
  },
  {
    id: Math.random(),
    bgColor: "#DADBDF",
    border: "1px solid #C4C4C4",
    borderRadius: "8px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)"
  },
  {
    id: Math.random(),
    bgColor: "#DADBDF",
    border: "1px solid #C4C4C4",
    borderRadius: "8px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)"
  },
  {
    id: Math.random(),
    bgColor: "#DADBDF",
    border: "1px solid #C4C4C4",
    borderRadius: "8px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)"
  }
];

function Stabilizers(props) {
    return (
        <div>
            <div className='product'>
                <ProductHeader
                    productName="STABILIZERS" 
                    productCount="0" 
                    productDescription="Lorem ipsum"
                />
            </div>
            {/* <div className='filters'>
                <div>Vendor</div>
                <div>Brand Size</div>
                <div>Compatibility</div>
                <div>Price Tags</div>
            </div> */}
            <Container>
            {productData.map(box => (
                <Box 
                    key={box.id} 
                    bgColor={box.bgColor} 
                    borderRadius={box.borderRadius}
                    border={box.border}
                    boxShadow={box.boxShadow}
                    boxSizing={box.boxSizing}
                >
                </Box>
            ))}
            </Container>
        </div>
    )
}

export default Stabilizers;