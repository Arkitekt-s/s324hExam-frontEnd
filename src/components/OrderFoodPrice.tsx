import {FormEvent, useState} from "react";
import {useReservationsByPrice, useReservationsByWeight} from "../hooks/UseAllOrderFood";

const OrderFoodPrice = () => {
    const[id,setId] = useState<number|"">(0);
    const{data:orderPrice,isLoading,error} = useReservationsByPrice(id as number);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setId(id);
    }
    return (
        <div className="form-row">

            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-3 mt-3" type="number" value={id} onChange={(e) => setId(parseInt(e.target.value))}/>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {orderPrice && (
                    <div>
                        <div key={orderPrice.id}>
                        <h4 style={{color:"green"}}>{orderPrice.toString()} DKK</h4>
                        </div>
        </div>
    )}
            </div>
        </div>
    )
}
export default OrderFoodPrice;

