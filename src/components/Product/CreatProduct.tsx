
import {useCreateP} from "../../hooks/UseAllProduct";
import {FormEvent, useState} from "react";
import {Product} from "../../api/Models";

const CreatProduct = () => {
    //mute
    const {data: delivery ,mutateAsync, isLoading,isError} = useCreateP();
    const [name, setName] = useState<string | "">("");
    const [price, setPrice] = useState<number | 0>(0);
    const [weight, setWeight] = useState<number | 0>(0);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutateAsync({name, price, weight} as Product);
    }
    return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <h1 style={{margin:"3%",color:"white"}}>Create Product</h1>
                    <h6 style={{color: "#000",margin:"10px"}}>Product Name</h6>
                    <input className="form-control mt-3" type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    required/>
                    <h6 style={{color: "#000",margin:"10px"}}>Price</h6>
                    <input className="form-control mt-3" type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                    required/>
                    <h6 style={{color: "#000",margin:"10px"}}>Weight</h6>
                    <input className="form-control mt-3" type="number"
                            placeholder="Weight"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                    required/>
                    <button className="btn btn-primary mt-3" type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}
export default CreatProduct