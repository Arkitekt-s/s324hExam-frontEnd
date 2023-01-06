import {FormEvent, useState} from "react";
import {useReservationsByPrice, useReservationsByWeight} from "../hooks/UseAllOrderFood";

const OrderFoodWeight = () => {
    const[id,setId] = useState<number|"">(0);
    const{data:orderWeight,isLoading,error} = useReservationsByWeight(id as number);
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
                {orderWeight && (
                    <div>
                        <div key={orderWeight.id}>
                            <h4 style={{color:"green"}}>{orderWeight.toString()} Gram</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default OrderFoodWeight;