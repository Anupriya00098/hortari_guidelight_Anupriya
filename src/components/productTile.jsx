import React from "react";
export default function productTile(addToCart,products) {
    return (
       
        <div className="col-3">
            <div className="card mb-3" style={{"maxWidth": "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="1.jpg" className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{products.title}</h5>
                            <h5>{products.price}</h5>
                            <button type="button" className="btn btn-primary btn-lg" onClick={() =>{
                              addToCart(products)
                              
                            }

                            }>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}