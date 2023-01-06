//creat about page with getall component and creat

import GetAll from "../components/GetAll";
import Creat from "../components/Creat";
import "./orderproduct.css";
import GetById from "../components/GetById";
import DeleteById from "../components/DeleteById";
import React from "react";
import {EditById }from "../components/EditById";
import OrderFoodPrice from "../components/OrderFoodPrice";
import OrderFoodWeight from "../components/OrderFoodWeight";
import DeleteDelivery from "../components/Register/DeleteDelivery";

const OrderProduct = () => {
    //make a nice about page with getall component and creat
    return (
        <div className="row">

        <div className="column">
            <div className="left">

                <table>
                    <thead>
                    <tr>
                    <th>Total Price DeliveryID</th>
                    <th>Total Weight DeliveryID</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <OrderFoodPrice/>
                        </td>
                        <td>
                            <OrderFoodWeight/>
                        </td>






                    </tr>
                    </tbody>
                </table>
                <GetAll />


            </div>
            <div className="column">
                <div className="middle">
                    <GetById />


                </div>
            </div>
            </div>




            <div className="column">
            <div className="right-right">

                <Creat />
                <EditById/>



                </div>
        </div>
        </div>

    )
}
export {OrderProduct}

