


import "./delivery.css";

import React from "react";

import GetAllDelivery from "../components/Register/GetAllDelivery";
import CreatDelivery from "../components/Register/CreatDelivery";
import EditDelivery from "../components/Register/EditDelivery";
import DeleteDelivery from "../components/Register/DeleteDelivery";
import OrderFoodPrice from "../components/OrderFoodPrice";
import OrderFoodWeight from "../components/OrderFoodWeight";
import DeleteById from "../components/DeleteById";

const Delivery = () => {
    //make a nice about page with getall component and creat
    return (
        <div className="row-R">
            <div className="column-R">
                <div className="left-R">
                                <GetAllDelivery />
                    <div className="column-R">
                                <EditDelivery />
                    </div>
                            </div>

                        </div>

            <div className="column-R">
                <div className="right-right-R">
                    <CreatDelivery />

                </div>
            </div>
        </div>

    )
}
export {Delivery}