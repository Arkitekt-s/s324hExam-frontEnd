import {
    getAllP,
    getByIdP,
    createP,
    deleteByIdP,
    updateP,
    searchP


}
    from "../api/axios.config"
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useMutation, useQuery, useQueryClient} from "react-query";
import { Product} from "../api/Models";

export const useAllP = () => {
    return useQuery<Product[],Error>(
        "products",// query key
        getAllP,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}
export const usePById = (id: number) => {
    return useQuery<Product,Error>(
        ["productsById", id],// query key
        () => getByIdP(id),
        // fetching function
    )
}
//search by keyword
export const usePBykeyword = (keyword: string) => {
    return useQuery<Product[],Error>(
        ["products", keyword],// query key
        () => searchP(keyword),
        //enabled: !!keyword means if keyword is not empty then enabled is true
        {enabled: !!keyword,
        }
    )
}

//delete by id and update cache after delete is successful
export const useDeleteP = (id:number) => {
    const queryClientDelete = useQueryClient();
    return useMutation<Product,Error, number>(
        deleteByIdP,
        {
            //refresh all activities after delete
            onSuccess: () => {
                queryClientDelete.invalidateQueries("productsDelete").catch(err => { throw err})
                queryClientDelete.invalidateQueries("products").catch(err => { throw err})
                toast.success("Product deleted successfully")
            },
            onError: () => {
                toast.error("Product delete failed")
            }
        }
    )
}
//create and update cache after create is successful
export const useCreateP = () => {
    const queryClientCreate = useQueryClient();
    return useMutation<Product,Error, Product>(
        createP,
        {
            //refresh all activities after create
            onSuccess: () => {
                queryClientCreate.invalidateQueries("productsCreate").catch(err => { throw err})
                queryClientCreate.invalidateQueries("products").catch(err => { throw err})
                queryClientCreate.invalidateQueries("productssDelete").catch(err => { throw err})
                queryClientCreate.invalidateQueries("productsUpdate").catch(err => { throw err})
                toast.success("Product created successfully")

            },
            onError: () => {
                toast.error("Product create failed")
            }
        }
    )
}
//update and update cache after update is successful
export const useEditP = (id:number) => {
    const queryClientUpdate = useQueryClient();
    return useMutation<Product,Error, Product>(
        (reservation) => updateP(id,reservation),
        {
            //refresh all activities after update
            onSuccess: () => {
                queryClientUpdate.invalidateQueries("productsUpdate").catch(err => { throw err})
                queryClientUpdate.invalidateQueries(["productsById", id]).catch(err => { throw err})
                queryClientUpdate.invalidateQueries("products").catch(err => { throw err})
                toast.success("Product updated successfully")

            },
            onError: () => {
                toast.error("Product update failed")
            },

        }
    )

}