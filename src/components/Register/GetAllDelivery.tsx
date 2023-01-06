import {useAllD, useDeleteD} from "../../hooks/UseAllDelivery";
import DeleteDelivery from "./DeleteDelivery";
import React, {useState} from "react";



const GetAllDelivery = () => {
    const{data:member} = useAllD();
    //delete a member in table
    const [id, setId] = useState<number|"">("");
    const {mutateAsync, isLoading,isError} = useDeleteD (id as number);
    const handleSubmit = (id: number) => {
        setId(id);
        mutateAsync(id);
    };

        //sort the date time by the oldest
        const sorted = member?.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });


    return (
        <div>
            <h1>All Delivery</h1>
            <table className="table table-hover ">
                <thead>
                <tr className="table-dark mt-3 mb-3">
                    <th>DeliveryID</th>
                    <th data-sorter={sorted}>Date</th>
                    <th>Destination</th>
                    <th>Warehouse</th>
                    <th>Van Id</th>
                    <th>Van Brand</th>
                    <th>Van Capacity</th>

                </tr>
                </thead>
                <tbody className="table">
                {member?.map((member) => (
                    <tr key={member.id}>
                        <td style={{color: "#ffff", fontSize: "24px", backgroundColor: "#3CC7E3", margin: "20px"}}>{member.id}</td>
                        <td style={{color: "#ffff", fontSize: "24px", backgroundColor: "#CE3335", margin: "20px"}}>
                            {member.date.toString()}</td>
                        <td>{member.destination}</td>
                        <td>{member.warehouse}</td>
                        <td>{member.van?.id}</td>
                        <td>{member.van?.brand}</td>
                        <td>{member.van?.capacity}</td>
                        {/*// @ts-ignore*/}
                        <button className="btn btn-danger" onClick={() => handleSubmit(member.id)}>Delete</button>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default GetAllDelivery;
//