import {FormEvent, useState} from "react";
import {usePById} from "../../hooks/UseAllProduct";

const GetByIdProduct = () => {
    const[id,setId] = useState<number|"">(1);
    const{data:reservation, isLoading,error} = usePById (id as number);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setId(id);
    }
    return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <h1>Get FOOD ORDER ALL INFO </h1>
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-3 mt-3" type="number" value={id} onChange={(e) => setId(parseInt(e.target.value))}/>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {reservation && (
                    <div>
                        <div key={reservation.id}>
                            <h6>{reservation.id}</h6>
                            <h6 style={{margin:"3%"}}>Product</h6>
                            <h5 style={{color: "#fff", fontSize: "20px",margin: "3%"}}>Product Id Number: {reservation.id}</h5>
                            <h6>{reservation.name}</h6>
                            <h6>{reservation.price}</h6>
                            <h6>{reservation.weight}</h6>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )


}
export default GetByIdProduct;