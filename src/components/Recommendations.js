import "./recommendations.css"
import {Box} from "../components/Box"
import {BoxLabel} from "../components/BoxLabel"

export const Recommendations = () => {
    return (
        <div className="recommendations">
            <p className="recs-header"> You may also like </p>
            <hr/>
            <div className="container">
              {recData.map(box => (
                <div>
                  <Box id={box.id} bgColor="white"/>
                  <BoxLabel 
                    category={box.info.category}
                    prodName={box.info.prodName}
                    prodPrice={box.info.prodPrice}
                  />
                </div>
              ))}
            </div>
        </div>
    );
}

const recData = [
    {
      id: "0",
      info: {
        category: "Stabilizers",
        prodName: "Cherry Red PCP Mount 3-Pin Switches (10 pcs)",
        prodPrice: "$3.99"
      }
    },
    {
      id: "1",
      info: {
        category: "Stabilizers",
        prodName: "Cherry Black PCP Mount 3-Pin Switches (10 pcs)",
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
        prodName: "NOVELKEYS X KAILH BOX HEAVY SWITCHES (10 switches)",
        prodPrice: "$3.99"
      }    
    }
  ];