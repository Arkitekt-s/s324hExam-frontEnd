import {FormEvent, useState} from "react";

import {usePBykeyword} from "../../hooks/UseAllProduct";

const SearchProduct = () => {
    const [keyword, setKeyword] = useState<string>("");
    const {data, isLoading, error} = usePBykeyword(keyword);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setKeyword(keyword);
    }
    return (
        <div className="form-row">
            <h1>Search Product</h1>
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <input className="form-control-lg" type="text" placeholder="Search Product" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {data && data.length === 0 && <h1 style= {{color: "#3ECAE4"}}>No Results Found</h1>}
                {data && (
                    <div style={{color: "black"}}>
                        {data.map((reservation) => (
                            <div key={reservation.id}>
                                <h1 style={{color: "black"}}>{reservation.id}</h1>
                                <h2 style={{color: "black"}}>{reservation.name}</h2>
                                <p style={{color: "black"}}>ORDER INFO</p>
                                <p style={{color: "black"}}>Quantity: {reservation.weight}</p>
                                <h5 style={{color: "black"}}>{reservation.price}</h5>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )

}
export default SearchProduct;