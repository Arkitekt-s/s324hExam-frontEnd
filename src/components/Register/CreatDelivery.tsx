
import {FormEvent, useState} from "react";
import * as React from 'react';


import {useCreateD, useDeleteD} from "../../hooks/UseAllDelivery";
import {Delivery, Van} from "../../api/Models";
// @ts-ignore
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const CreatDelivery = () => {
    const {data: delivery ,mutateAsync, isLoading,isError} = useCreateD();


    const [date, setDate] = useState(new Date());
    const [destination, setDestination] = useState<string | "">("");
    const [warehouse, setWarehouse] = useState<string | "">("");
    const [van, setVan] = useState<Van|null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutateAsync({
            date: date,
            destination: destination,
            warehouse: warehouse,
            van: van as Van
        }  as Delivery)
        .then((response) => {


        }
        )
            .catch((error) => {

            });


    }
    let handleDateChange = (date: Date) => {
        setDate(date);

    };
    return (
        <div className="form-row">
            <h1 style={{margin:"3%",color:"white"}}>Create Delivery</h1>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>


                    <DatePicker
                        className="form-control datepicker"
                        selected={date}
                        onChange={handleDateChange}
                        dateFormat="yyyy/MM/dd"
                    ></DatePicker>

                    <input className="form-control mt-3" type="text"
                            placeholder="Destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                    />
                    <input className="form-control mt-3" type="text"
                            placeholder="Warehouse"
                            value={warehouse}
                            onChange={(e) => setWarehouse(e.target.value)}
                    />
                    <input className="form-control mt-3" type="number"
                            placeholder="Van ID"
                            value={van?.id}
                            onChange={(e) => setVan({
                                capacity: 0,
                                model: "",
                                brand: "",
                                id:parseInt(e.target.value)

                            })}
                    required/>
                    <button className="btn btn-success mt-3" type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreatDelivery;
