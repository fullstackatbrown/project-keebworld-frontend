import {ProductInfo} from '../components/ProductInfo'
import {Recommendations} from '../components/Recommendations'
import {Reviews} from '../components/Reviews'
import { useParams } from "react-router-dom";

function SingleProduct() {
    const { prodId } = useParams();

    const data = productData.find((product) => product.id === prodId);

    return (
        <div>
            <ProductInfo id={prodId} data={data.info}/>
            <Recommendations id={prodId} data={data.info}/>
            <Reviews id={prodId} data={data.info}/>
        </div>
    );
}

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

export default SingleProduct;