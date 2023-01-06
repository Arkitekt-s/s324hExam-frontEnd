import {useAllP} from "../../hooks/UseAllProduct";


const GetAllProduct = () => {
    const{data:member,isLoading,error} = useAllP();

    return (
        <div>
            <h1>Products</h1>
            <table className="table table-hover ">
                <thead>
                <tr className="table-dark mt-3 mb-3">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Weight</th>
                </tr>
                </thead>
                <tbody className="table">
                {member?.map((member) => (
                    <tr key={member.id}>
                        <td>{member.id}</td>
                        <td style={{color: "#ffff", fontSize: "24px", backgroundColor: "#CE3335", margin: "20px"}}>
                            {member.name}</td>
                        <td>{member.price} DKK</td>
                        <td>{member.weight} Gram</td>


                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default GetAllProduct;