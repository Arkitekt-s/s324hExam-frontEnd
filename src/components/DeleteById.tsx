import {useDeleteReservationById } from "../hooks/UseAllOrderFood";
import {FormEvent, useState} from "react";
import {useParams} from "react-router-dom";

const DeleteById = () => {

    const [id, setId] = useState<number|"">("");
    const {mutateAsync, isLoading,isError,data} = useDeleteReservationById(id as number);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        //mutateAsync means that the data is send to the server and the server will delete the data
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

            <div className="col-md-8 mb-3 ">
                <form onSubmit={handleSubmit}>

                    <input className="form-control mt-3" type="number"
                            placeholder="Delete Item "
                            value={id}
                            onChange={(e) => setId(Number(e.target.value))}
                    />
                    {/*//margin left 5rem for delete*/}
                    <button className="btn btn-danger mt-3 ml-5" type="submit">Delete</button>


                </form>
            </div>
        </div>
    )
}
export default DeleteById;