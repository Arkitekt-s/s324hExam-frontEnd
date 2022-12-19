import {FormEvent, useState} from "react";
import {useReservationsByPrice} from "../hooks/UseAllOrderFood";

const OrderFoodPrice = () => {
    const[id,setId] = useState<number|"">(9);
    const{data:orderPrice,isLoading,error} = useReservationsByPrice(id as number);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setId(id);
    }
    return (
        <div className="form-row">
            <h4>Total Price By Delivery Id</h4>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-3 mt-3" type="number" value={id} onChange={(e) => setId(parseInt(e.target.value))}/>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {orderPrice && (
                    <div>
                        <div key={orderPrice.id}>
                        <h1>{orderPrice.toString()} DKK</h1>
                        </div>
        </div>
    )}
            </div>
        </div>
    )
}
export default OrderFoodPrice;

