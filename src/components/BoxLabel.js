import "./boxlabel.css"

export const BoxLabel = (props) => {
    return (
        <div className="boxlabel">
            <div className="category">{props.category}</div>
            <div className="prodName">{props.prodName}</div>
            <div className="prodPrice">From {props.prodPrice}</div>
        </div>
    );
}
