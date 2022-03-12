import "./productinfo.css"
import tempImage from "./cherry-stabilizer.png"
import check from "./check-icon.png"

export const ProductInfo = (props) => {
    return (
        <div className="product-info">
            <div className="product-container">
                <div className="sidebar">
                    <img src={tempImage} alt="Product" width="70%"/>
                </div>
                <div>
                    <div className="product-image">
                        <img src={tempImage} alt="Product"/>
                    </div>
                    <div className="compatibility">
                        <p><img src={check} width="6%"/>
                            <b>    Compatibility:</b> No issues found.
                        </p>
                    </div>
                </div>
                <div>
                    <p className="product-category">{props.data.category}</p>
                    <p className="product-name">{props.data.prodName}</p>
                    <div className="rating"></div>
                    <div className="purchase"></div>
                </div>
            </div>
        </div>
    );
}