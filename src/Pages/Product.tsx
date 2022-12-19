import GetAllDelivery from "../components/Register/GetAllDelivery";
import DeleteDelivery from "../components/Register/DeleteDelivery";
import EditDelivery from "../components/Register/EditDelivery";
import CreatDelivery from "../components/Register/CreatDelivery";
import "./delivery.css";
import React from "react";
import GetAllProduct from "../components/Product/GetAllProduct";
import DeleteProduct from "../components/Product/DeleteProduct";
import EditProduct from "../components/Product/EditProduct";
import CreatProduct from "../components/Product/CreatProduct";
import SearchProduct from "../components/Product/SearchProduct";

const Product = () => {
    return (
        <div className="row-R">

            <div className="column-R">
                <div className="left-R">
                    <GetAllProduct />
                    <EditProduct />

                </div>
            </div>

            <div className="column-R">
                <div className="right-right-R">
                    <SearchProduct />
                    <CreatProduct />
                    <DeleteProduct />

                </div>
            </div>
        </div>
    )
}
export {Product}