import {useUpdateReservation} from "../hooks/UseAllOrderFood";
import {FormEvent, useRef, useState} from "react";
import * as React from 'react';
// @ts-ignore
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {Delivery, OrderFood, Product} from "../api/Models";


export const EditById = () => {

    const [id, setId] = useState<number | "">("");
    const {data: reservation ,mutateAsync, isLoading,isError} = useUpdateReservation(id as number);

    const [delivery, setDelivery] = useState<Delivery|null>(null);
    const [product, setProduct] = useState<Product|null>(null);
    const[quantity, setQuantity] = useState<number| "">("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        mutateAsync({
            quantity: quantity,
            id: id,
            delivery: delivery as Delivery,
            product: product as Product
        }as OrderFood)
            .then((response) => {

            })
            .catch((error) => {

            });
        //reset form
        setId("");
        setQuantity("");
        //  clear input field value

    }

    return (
        <div className="form-row">
            <h1>Edit Order</h1>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <h6 style={{margin:"3%",color:"black"}}>Id</h6>
                <input className="form-control mt-3" type="number"
                       placeholder="Id"
                       value={id}
                       onChange={(e) => setId(Number(e.target.value))}
                       />
                    <h6 style={{margin:"3%",color:"black"}}>Quantity</h6>
                    <input className="form-control mt-3" type="number"
                           placeholder="Quantity"
                           value={quantity}
                           onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <h6 style={{margin:"3%",color:"black"}}>Delivery Id</h6>
                    <input className="form-control mt-3" type="number"
                           placeholder="Delivery ID"
                           value={delivery?.id}
                           onChange={(e) => setDelivery({
                               id: Number(e.target.value),
                               warehouse: "",
                               destination: "",
                               date: new Date(),
                           })}


                    />
                    <h6 style={{margin:"3%",color:"black"}}>Product Id</h6>
                    <input className="form-control mt-3" type="number"
                           placeholder="Product ID"
                           value={product?.id}
                           onChange={(e) => setProduct({
                                   id: Number(e.target.value),
                                   name: "",
                                   price: 0,
                                   weight: 0,
                               }
                           )}

                    />
                    <button className="btn btn-primary mt-3" type="submit">Edit</button>
                </form>
            </div>
        </div>
    )
}
































//