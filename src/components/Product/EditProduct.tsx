import { useEditP} from "../../hooks/UseAllProduct";
import {FormEvent, useState} from "react";
import {Product} from "../../api/Models";

const EditProduct = () => {
    const[id, setId] = useState<number | "">("");
    const {data: delivery ,mutateAsync, isLoading,isError} = useEditP(id as number);
    const [name, setName] = useState<string | "">("");
    const [price, setPrice] = useState<number | 0>(0);
    const [weight, setWeight] = useState<number | 0>(0);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutateAsync({
            id: id,
            name: name,
            price: price,
            weight: weight,
        } as Product).then((response) => {

        }
        )
            .catch((error) => {

            })
    }
    return (
        <div className="form-row">
            <h1>Edit Product</h1>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <input className="form-control mt-3" type="number"
                            placeholder="ID"
                            value={id}
                            onChange={(e) => setId(Number(e.target.value))}
                    />
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
                    <button className="btn btn-primary mt-3" type="submit">Edit</button>
                </form>
            </div>
        </div>
    );


}
export default EditProduct