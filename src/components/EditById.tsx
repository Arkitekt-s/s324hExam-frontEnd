import {useUpdateReservation} from "../hooks/UseAllOrderFood";
import {FormEvent, useState} from "react";
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



    }

    return (
        <div className="form-row">
            <h1>Edit Order</h1>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                <input className="form-control mt-3" type="number"
                               placeholder="Id"
                               value={id}
                               onChange={(e) => setId(Number(e.target.value))}
                       />
                    <input className="form-control mt-3" type="number"
                           placeholder="Quantity"
                           value={reservation?.quantity}
                           onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <input className="form-control mt-3" type="number"
                           placeholder="Delivery ID"
                           value={reservation?.delivery.id}
                           onChange={(e) => setDelivery({
                               id: Number(e.target.value),
                               warehouse: "",
                               destination: "",
                               date: new Date(),
                           })}

                    />
                    <input className="form-control mt-3" type="number"
                           placeholder="Product ID"
                           value={reservation?.product.id}
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