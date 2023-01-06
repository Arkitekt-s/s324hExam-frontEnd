import {
    getAllD,
    createD,
    deleteByIdD,
    updateD,

}
    from "../api/axios.config"
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useMutation, useQuery, useQueryClient} from "react-query";
import {Delivery} from "../api/Models";


export const useAllD= () => {
    return useQuery<Delivery[],Error>(
        "members",// query key
        getAllD,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}
export const useDeleteD = (id:number) => {
    const queryClientDelete = useQueryClient();
    return useMutation<Delivery,Error, number>(
        deleteByIdD,
        {
            //refresh all activities after delete
            onSuccess: () => {
                queryClientDelete.invalidateQueries("members").catch(err => { throw err})
                toast.success("Delivery deleted successfully")
            },
            onError: () => {
                toast.error("Delivery delete failed")
            }
        }
    )
}
export const useCreateD = () => {
    const queryClientCreate = useQueryClient();
    return useMutation<Delivery,Error, Delivery>(
        createD,
        {
            //refresh all activities after create
            onSuccess: () => {
                queryClientCreate.invalidateQueries("members").catch(err => { throw err})

                toast.success("Delivery created successfully")

            },
            onError: () => {
                toast.error("Delivery create failed")
            }
        }
    )
}
export const useUpdateD = (id:number) => {
    const queryClientUpdate = useQueryClient();
    return useMutation<Delivery,Error, Delivery>(
        (member) => updateD(id,member),
        {
            //refresh all activities after update
            onSuccess: () => {
                queryClientUpdate.invalidateQueries("memberUpdate").catch(err => { throw err})
                queryClientUpdate.invalidateQueries("members").catch(err => { throw err})
                toast.success("Delivery updated successfully")

            },
            onError: () => {
                toast.error("Delivery update failed")
            },

        }
    )

}


