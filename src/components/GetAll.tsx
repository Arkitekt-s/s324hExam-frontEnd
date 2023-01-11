import {useAllReservations, useDeleteReservationById, useReservationsByPrice} from "../hooks/UseAllOrderFood";
import DeleteById from "./DeleteById";
import React, {FormEvent, useState} from "react";
import {useParams} from "react-router-dom";


const GetAll = () => {
    const [id, setId] = useState<number|"">("");
    const{data:reservation} = useAllReservations();
    const {mutateAsync, isLoading,isError,data} = useDeleteReservationById(id as number);


    const handleSubmit = (id: number) => {
        setId(id);
        mutateAsync(id);
    };








//sort the date time by the oldest in delivery table by map in reservation and going to delivery
    const sorted = reservation?.sort((a, b) => {
        return new Date(a.delivery.date).getTime() - new Date(b.delivery.date).getTime();
    }
    );
// calculate the total price of the order
    const totalPrice = reservation?.map((reservation) => {
        return reservation.product.price * reservation.quantity;
    }

    );
    // calculate the total weight of the order by kg
    const totalWeight = reservation?.map((reservation) => {
        return ( (reservation.product.weight  ) *( reservation.quantity));
    }
    );

    // @ts-ignore



    return (
        <div>
            <h1>All Orders</h1>
            <table className="table table-hover  mt-3">
                <thead>
                <tr className="table-dark mt-3 mb-3">
                    <th>ItemID</th>
                    <th>DeliveryID</th>
                    <th>Quantity</th>
                    <th>Product</th>
                    <th data-sorter={sorted}>Date</th>
                    <th>Address</th>
                    <th total-price={totalPrice}>Price</th>
                    <th total-weight={totalWeight}>Weight</th>


                </tr>
                </thead>
                <tbody className="table">
                {reservation?.map((reservation) => (
                    <tr key={reservation.id}>
                        <td style={{color: "#ffff", fontSize: "24px", backgroundColor: "green", margin: "20px"}}>
                            {reservation.id}</td>
                        <td style={{color: "#ffff", fontSize: "24px", backgroundColor: "#3CC7E3", margin: "20px"}}>
                            {reservation.delivery.id}</td>
                        <td>{reservation.quantity}</td>
                        <td>{reservation.product.name}</td>
                        {/*get all date with different color and size and outside color and margin top*/}
                        <td style={{color: "#ffff", fontSize: "24px", backgroundColor: "#CE3335", margin: "20px"}}>
                            {reservation.delivery.date.toString()}</td>
                        <td>{reservation.delivery.destination}</td>
                        <td >{reservation.product.price * reservation.quantity} DKK</td>
                        <td >{reservation.product.weight * reservation.quantity} Gram</td>
                        {/*// @ts-ignore*/}
                        <button className="btn btn-danger my-2" onClick={() => handleSubmit(reservation.id)}>Delete</button>
                        {/*//show the price */}



                    </tr>

                ))}

                </tbody>

            </table>



        </div>
    );
}
export default GetAll;


