import {useUpdateD} from "../../hooks/UseAllDelivery";
import {FormEvent, useState} from "react";
import {Delivery, Van} from "../../api/Models";
import * as React from "react";


// @ts-ignore
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EditDelivery = () => {
    const [id, setId] = useState<number | "">("");
    const{data:delivery,mutateAsync,isLoading} = useUpdateD(id as number);
    const [date, setDate] = useState(new Date());

    const [destination, setDestination] = useState<string | "">("");
    const [warehouse, setWarehouse] = useState<string | "">("");
    const [van, setVan] = useState<Van|null>(null);



    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutateAsync({
            id: id,
            date: date,
            destination: destination,
            warehouse: warehouse,
            van: van as Van
        }  as Delivery)
            .then((response) => {

            })
            .catch((error) => {

            })


    }
    let handleDateChange = (date: Date) => {
        setDate(date);

    }





    return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <h1>Edit Delivery</h1>
                    <input className="form-control mt-3" type="number"
                            placeholder="Id"
                            value={id}
                           onChange={(e) => setId(parseInt(e.target.value))} required/>

                    <DatePicker
                        selected={date}
                        onChange={handleDateChange}
                        dateFormat="yyyy/MM/dd"
                    ></DatePicker>
                    <input className="form-control mt-3" type="text"
                            placeholder="Destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                    required/>
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
                    <button className="btn btn-primary mt-3" type="submit">Submit</button>


                </form>
            </div>
        </div>
    )
}

export default EditDelivery;

