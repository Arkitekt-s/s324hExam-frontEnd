import {useCreateReservation} from "../hooks/UseAllOrderFood";
import {FormEvent, useState} from "react";
import {Delivery, OrderFood, Product} from "../api/Models";
import * as React from 'react';




const Creat = () => {
    const {data: reservation ,mutateAsync, isLoading,isError} = useCreateReservation();

const [delivery, setDelivery] = useState<Delivery|null>(null);
const [product, setProduct] = useState<Product|null>(null);
const[quantity, setQuantity] = useState<number| "">("");


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutateAsync({
            quantity: quantity,
            delivery: delivery as Delivery,
            product: product as Product

        }as OrderFood)
            .then((response) => {

            })
            .catch((error) => {

            });
 //clear all input value in form




    };



    return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <h1>Order Food</h1>
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
                    <button className="btn btn-success mt-3" type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};
export default Creat;





