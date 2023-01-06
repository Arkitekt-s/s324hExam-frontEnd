import axios from "axios";
import {OrderFood, Delivery, Product} from "./Models";

const apiUrl = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
});

//get all OrderFood fetch from server from crud(get-post-put-delete)api
//its better error handling and automatically creat jason file
const getAll=async():Promise<[OrderFood]>=>{
    const response=await apiUrl.get("/orders");
    return response.data;

}



//get all Delivery
const getAllD=async():Promise<[Delivery]>=>{
    const response=await apiUrl.get("/deliveries");
    return response.data;

}
//get all Products
const getAllP=async():Promise<[Product]>=>{
    const response=await apiUrl.get("/products");
    return response.data;

}



//get by id OrderFood
const getById=async(id:number):Promise<OrderFood>=>{
    const response=await apiUrl.get(`/orders/${id}`);
    return response.data;
}
//get price by id orderfood
const getByPrice=async(id:number):Promise<OrderFood>=>{
    const response=await apiUrl.get(`/orders/${id}/price`);
    return response.data;
}
//get Weight by id orderfood
const getByWeight=async(id:number):Promise<OrderFood>=>{
    const response=await apiUrl.get(`/orders/${id}/Weight`);
    return response.data;
}

//get by id product
const getByIdP=async(id:number):Promise<Product>=>{
    const response=await apiUrl.get(`/products/${id}`);
    return response.data;
}



//create orderFood
const create=async(data:OrderFood):Promise<OrderFood>=>{
    const response=await apiUrl.post("/orders",data);
    return response.data;
}
//create delivery
const createD=async(data:Delivery):Promise<Delivery>=>{
    const response=await apiUrl.post("/deliveries",data);
    return response.data;
}
//creats Product
const createP=async(data:Product):Promise<Product>=>{
    const response=await apiUrl.post("/products",data);
    return response.data;
}

//delete food order
const deleteById=async(id:number):Promise<OrderFood>=>{
    const response=await apiUrl.delete(`/orders/${id}`);
    return response.data;
}
//delete Product
const deleteByIdP=async(id:number):Promise<Product>=>{
    const response=await apiUrl.delete(`/products/${id}`);
    return response.data;
}
//delete by delivery id and update cache after delete is successful
const deleteByIdD=async(id:number):Promise<Delivery>=>{
    const response=await apiUrl.delete(`/deliveries/${id}`);
    return response.data;
}
//update product
const updateP=async(id:number,data:Product):Promise<Product>=>{
    const response=await apiUrl.put(`/products/${id}`,data);
    return response.data;
}

//update orderfood
const update=async(id:number,data:OrderFood):Promise<OrderFood>=>{
    const response=await apiUrl.put(`/orders/${id}`,data);
    return response.data;
}
//update delivery
const updateD=async(id:number,data:Delivery):Promise<Delivery>=>{
    const response=await apiUrl.put(`/deliveries/${id}`,data);
    return response.data;
}
//search by keyword
const search= async (keyword: string): Promise<[OrderFood]> => {
    const response = await apiUrl.get(`/orders?keyword=${keyword}`);
    return response.data;
}
//search by keyword product
const searchP= async (keyword: string): Promise<[Product]> => {
    const response = await apiUrl.get(`/products?keyword=${keyword}`);
    return response.data;
}

export{
    getAll,
    getAllD,getAllP,
    getById,getByIdP,
    create,createP,
    createD,
    deleteById,deleteByIdP,
    deleteByIdD,
    update,updateP,
    updateD,
    search,searchP,
    getByPrice,
    getByWeight

}

