import React from 'react';
import { ProductHeader } from '../components/ProductHeader';
import { Box } from "../components/Box"
import { BoxLabel } from '../components/BoxLabel';
import './products.css'

const productData = [
  {
    id: "0",
    info: {
      category: "Stabilizers",
      prodName: "Cherry Blue PCP Mount 3-Pin Switches (10 pcs)",
      prodPrice: "$3.99"
    }
  },
  {
    id: "1",
    info: {
      category: "Stabilizers",
      prodName: "Cherry Black PCP Mount 5-Pin Switches (10 pcs)",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "2",
    info: {
      category: "Stabilizers",
      prodName: "GATERON RED 3-pin SWITCHES (10 switches)",
      prodPrice: "$3.99"
    }
  },
  {
    id: "3",
    info: {
      category: "Stabilizers",
      prodName: "Cherry Black PCP Mount 5-Pin Switches (10 pcs)",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "4",
    info: {
      category: "Stabilizers",
      prodName: "Guava Stabilizer",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "5",
    info: {
      category: "Stabilizers",
      prodName: "Apple Stabilizer",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "6",
    info: {
      category: "Stabilizers",
      prodName: "Lime Stabilizer",
      prodPrice: "$3.99"
    }    
  },
  {
    id: "7",
    info: {
      category: "Stabilizers",
      prodName: "Pear Stabilizer",
      prodPrice: "$3.99"
    }    
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
            <div className="container">
              {productData.map(box => (
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

export default Stabilizers;