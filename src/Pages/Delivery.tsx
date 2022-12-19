


import "./delivery.css";

import React from "react";

import GetAllDelivery from "../components/Register/GetAllDelivery";
import CreatDelivery from "../components/Register/CreatDelivery";
import EditDelivery from "../components/Register/EditDelivery";
import DeleteDelivery from "../components/Register/DeleteDelivery";

const Delivery = () => {
    //make a nice about page with getall component and creat
    return (
        <div className="row-R">

            <div className="column-R">
                <div className="left-R">
                    <GetAllDelivery />
                    <EditDelivery />

                </div>
            </div>

            <div className="column-R">
                <div className="right-right-R">
                    <CreatDelivery />
                    <DeleteDelivery />


                </div>
            </div>
        </div>

    )
}
export {Delivery}