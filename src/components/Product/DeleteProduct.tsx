import {FormEvent, useState} from "react";
import {useDeleteP} from "../../hooks/UseAllProduct";

const DeleteProduct = () => {
    const [id, setId] = useState<number|"">("");
    const {mutateAsync, isLoading,isError} = useDeleteP (id as number);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutateAsync(id as number);
    }
    return (
        <div className="form-row">
            <h1 >Delete Product</h1>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <h6 style={{color: "#000",margin:"10px"}}>Id</h6>
                            <input type="number" className="form-control" id="validationDefault01" value={id} onChange={(e) => setId(Number(e.target.value))} required/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <button className="btn btn-danger" type="submit">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )


}
export default DeleteProduct;