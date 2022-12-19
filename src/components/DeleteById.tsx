import {useDeleteReservationById } from "../hooks/UseAllOrderFood";
import {FormEvent, useState} from "react";

const DeleteById = () => {
    const [id, setId] = useState<number|"">("");
    const {mutateAsync, isLoading,isError} = useDeleteReservationById(id as number);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutateAsync(id as number)
            .then((response) => {
})
            .catch((error) => {

            });
        //reset form
        setId("");

    };
    return (
        <div className="form-row">
            <h1>Delete Order</h1>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <input className="form-control" type="number" value={id} onChange={(e) => setId(parseInt(e.target.value))}/>

                    <button className="btn btn-danger mt-3" type="submit">Delete</button>

                </form>
            </div>
        </div>
    )
}
export default DeleteById;