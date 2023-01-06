import {useReservationsBykeyword} from "../hooks/UseAllOrderFood";
import {FormEvent, useState} from "react";

const Search = () => {
    const [keyword, setKeyword] = useState<string>("");
    const {data, isLoading, error} = useReservationsBykeyword(keyword);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setKeyword(keyword);
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <input className="form-control-lg" type="text" placeholder="Search Van Name 🔍" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </form>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
                {data && data.length === 0 && <h1 style= {{color: "#3ECAE4"}}>No Results Found</h1>}
        {data && (
            <div style={{color: "black"}}>
                {data.map((order) => (
                    <div key={order.delivery.id}>



                        <h1 style={{color: "white",margin:"3%"}}>Delivery Id: {order.delivery.id}</h1>
                        <h2 style={{color: "white",margin:"3%"}}>{order.delivery.date.toString()}</h2>
                        <h3 style={{color: "white",margin:"3%"}}>VAN INFO</h3>


                        {/*// @ts-ignore*/}
                        <h5 style={{color: "black",margin:"3%"}}>Van Brand: {order.delivery.van.brand}</h5>
                        {/*// @ts-ignore*/}
                        <h5 style={{color: "black",margin:"3%"}}> Van model: {order.delivery.van.model}</h5>
                        {/*// @ts-ignore*/}
                        <h5 style={{color: "black",margin:"3%"}}>Van Capacity: {order.delivery.van.capacity}</h5>

                    </div>
                ))}
            </div>
        )}
    </div>
    </div>
    )
}
export default Search;