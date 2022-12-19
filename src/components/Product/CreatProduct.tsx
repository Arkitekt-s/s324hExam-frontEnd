
import {useCreateP} from "../../hooks/UseAllProduct";
import {FormEvent, useState} from "react";
import {Product} from "../../api/Models";

const CreatProduct = () => {
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
                    <h1>Create Product</h1>
                    <input className="form-control mt-3" type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    />
                    <input className="form-control mt-3" type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <input className="form-control mt-3" type="number"
                            placeholder="Weight"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                    />
                    <button className="btn btn-primary mt-3" type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}
export default CreatProduct