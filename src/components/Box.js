import { Link } from "react-router-dom";
import "./box.css"
import tempImage from "./cherry-stabilizer.png"

export const Box = (props) => {
    return ((props.bgColor === "gray" &&
        <div className="graysquare">
            <Link to={"/product/" + props.id}>
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