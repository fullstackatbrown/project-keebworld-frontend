// import styled from "styled-components";
// import px2vw from "../styles/px2vw";

// export const GraySquare = styled.div`
//   display: flex;
//   margin: 10px 10px 10px 10px;
//   flex-direction: row;
//   background-color: #DADBDF;
//   border-radius: 8px;
//   box-sizing: border-box;
//   box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
//   border: 1px solid #C4C4C4;
//   @media (min-width: 768px) {
//     width: ${px2vw(320, 768)};
//     min-height: ${px2vw(200, 768)};
//     height: 100%;
//   }
//   @media (min-width: 1024px) {
//     width: ${px2vw(500)};
//     min-height: ${px2vw(300)};
//     height: 100%;
//   }
// `;

// // width: ${px2vw(320, 320)};
// // min-height: ${px2vw(200, 320)};
// // padding: ${px2vw(20)};
// // margin: ${px2vw(20)};
// // height: 100%;
import { Link } from "react-router-dom";
import "./box.css"
import tempImage from "./cherry-stabilizer.png"

export const Box = (props) => {
    return ((props.bgColor === "gray" &&
        <div className="graysquare">
            <Link to={"/product/" + props.id}> {/* display: flex; justify-content: center; align-items: center; */}
                <img src={tempImage} alt="Product" />
            </Link>
        </div>) ||
        (props.bgColor === "white" &&
        <div className="whitesquare">
            <Link to={"/product/" + props.id}>
                <img src={tempImage} alt="Product" />
            </Link>
        </div>)
    );
}