import {useReservationById} from "../hooks/UseAllOrderFood";
import {FormEvent, useState} from "react";

const GetById = () => {
    const[id,setId] = useState<number|"">(1);
    const{data:reservation, isLoading,error} = useReservationById(id as number);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setId(id);
    }

    return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <h1>ORDER INFO </h1>
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-3 mt-3" type="number" value={id} onChange={(e) => setId(parseInt(e.target.value))}/>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {reservation && (
                    <div>
                        <div key={reservation.id}>
                            <h6>{reservation.id}</h6>
                            <p>{reservation.delivery.date.toString()}</p>
                            <h5 style={{color: "#fff", fontSize: "20px",  marginTop: "10px"}}>Delivery Id Number: {reservation.delivery?.id}</h5>
                            <h6>{reservation.delivery.destination}</h6>
                            <h6>{reservation.delivery.warehouse}</h6>
                            <h6>van ID: {reservation.delivery.van?.id}</h6>
                            <h6>van capacity{reservation.delivery.van?.capacity}</h6>
                            <h6>van brand: {reservation.delivery.van?.brand}</h6>
                            <h6>Product</h6>
                            <h5 style={{color: "#fff", fontSize: "20px",marginTop: "10px"}}>Product Id Number: {reservation.product?.id}</h5>
                            <h6>{reservation.product?.name}</h6>
                            <h6>{reservation.product?.price}</h6>
                            <h6>{reservation.product?.weight}</h6>


                        </div>
                    </div>
                )}
            </div>
        </div>
    )


}
export default GetById;