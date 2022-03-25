import "./productinfo.css"
import tempImage from "./cherry-stabilizer.png"
import check from "./check-icon.png"
import star from "./star.png"
import star_unfilled from "./star_unfilled.png"

export const ProductInfo = (props) => {
    return (
        <div className="product-info">
            <div className="product-container">
                <div className="sidebar">
                    <img src={tempImage} alt="Product" width="70%"/>
                </div>
                <div className="product-image-and-compatibility">
                    <div className="product-image">
                        <img src={tempImage} alt="Product"/>
                    </div>
                    <div className="compatibility">
                        <p><img src={check} width="6%"/>
                            <b>    Compatibility:</b> No issues found.
                        </p>
                    </div>
                </div>
                <div className="product-text">
                    <p className="product-category">{props.data.category}</p>
                    <p className="product-name">{props.data.prodName}</p>
                    <div className="rating">
                        <img src={star} width="16%"/>
                        <img src={star} width="16%"/>
                        <img src={star} width="16%"/>
                        <img src={star} width="16%"/>
                        <img src={star_unfilled} width="16%"/>
                        <div className="rating-num">4.0</div>
                    </div>
                    <div className="purchase">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Vendor</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Availability</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col"></th>
                                    <th scope="col">Purchase Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Novel Keys</th>
                                    <td>$3.99</td>
                                    <td>In stock</td>
                                    <td>1</td>
                                    <td></td>
                                    <td><button type="button" class="btn btn-primary">
                                        Buy
                                    </button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Amazon</th>
                                    <td>$4.99</td>
                                    <td>In stock</td>
                                    <td>1</td>
                                    <td></td>
                                    <td><button type="button" class="btn btn-primary">
                                        Buy
                                    </button></td>
                                </tr>
                                <tr>
                                    <th scope="row">KBDfans</th>
                                    <td>$4.95</td>
                                    <td>Out of stock</td>
                                    <td>1</td>
                                    <td></td>
                                    <td><button type="button" class="btn btn-primary">
                                        Buy
                                    </button></td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                    <div className="product-description">
                        <b>Description</b>
                        <p className="inside-product-description">
                        These are your Classic Cherry MX switches. These switches feature all black housings and are available in 5 different choices of weight and tactility. They are Plate mount and compatible with Cherry MX boards.
                        </p>
                    </div>
                    <div className="product-specifications">
                        <b>Specifications</b>
                        <div class="bullet-points">
                            <ul className="inside-product-specifications">
                                <li>Tactile and clicky</li>
                                <li>50 cN operating force</li>
                                <li>2.2 mm pre travel</li>
                            </ul>
                            <ul className="inside-product-specifications">
                                <li>4.0 mm total travel</li>
                                <li>Plate mount 3-pin</li>
                                <li>MX stem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}