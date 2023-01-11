import {FormEvent, useState} from "react";

import {useDeleteD} from "../../hooks/UseAllDelivery";


const DeleteDelivery = () => {
    const [id, setId] = useState<number|"">("");
    const {mutateAsync, isLoading,isError} = useDeleteD (id as number);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutateAsync(id as number);
    }
    return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <input
                                type="number"
                                className="form-control"
                                id="validationDefault01"
                                placeholder="Delivery ID"
                                value={id} onChange={(e) => setId(Number(e.target.value))}
                                required/>
                        </div>
                        <div className="col-md-4 mb-3 my-6">
                            <button className="btn btn-danger" type="submit">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )


}
export default DeleteDelivery;
//