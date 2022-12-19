import {
    getAll,
    getById,
    create,
    deleteById,
    update,
    search, getByPrice,


}
    from "../api/axios.config"
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useMutation, useQuery, useQueryClient} from "react-query";
import {OrderFood} from "../api/Models";


export const useAllReservations = () => {
    return useQuery<OrderFood[],Error>(
        "reservations",// query key
        getAll,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}
export const useReservationById = (id: number) => {
    return useQuery<OrderFood,Error>(
        ["reservationById", id],// query key
        () => getById(id),
        // fetching function
    )
}
//get by price
export const useReservationsByPrice = (id: number) => {
    return useQuery<OrderFood,Error>(
        ["price", id],// query key
        () => getByPrice(id),

    )
        }
//search by keyword
export const useReservationsBykeyword = (keyword: string) => {
    return useQuery<OrderFood[],Error>(
        ["reservations", keyword],// query key
        () => search(keyword),
        //enabled: !!keyword means if keyword is not empty then enabled is true
        {enabled: !!keyword,
        }
    )
}

//delete by id and update cache after delete is successful
export const useDeleteReservationById = (id:number) => {
    const queryClientDelete = useQueryClient();
    return useMutation<OrderFood,Error, number>(
        deleteById,
        {
            //refresh all activities after delete
            onSuccess: () => {
                queryClientDelete.invalidateQueries("reservationsDelete").catch(err => { throw err})
                queryClientDelete.invalidateQueries("reservations").catch(err => { throw err})
                queryClientDelete.invalidateQueries("price").catch(err => { throw err})
                toast.success("Reservation deleted successfully")
            },
            onError: () => {
                toast.error("Reservation delete failed")
            }
        }
    )
}
//create and update cache after create is successful
export const useCreateReservation = () => {
    const queryClientCreate = useQueryClient();
    return useMutation<OrderFood,Error, OrderFood>(
        create,
        {
            //refresh all activities after create
            onSuccess: () => {
                queryClientCreate.invalidateQueries("reservationsCreate").catch(err => { throw err})
                queryClientCreate.invalidateQueries("reservations").catch(err => { throw err})
                queryClientCreate.invalidateQueries("reservationsDelete").catch(err => { throw err})
                queryClientCreate.invalidateQueries("reservationsUpdate").catch(err => { throw err})
                toast.success("Reservation created successfully")

            },
            onError: () => {
                toast.error("Reservation create failed")
            }
        }
    )
}
//update and update cache after update is successful
export const useUpdateReservation = (id:number) => {
    const queryClientUpdate = useQueryClient();
return useMutation<OrderFood,Error, OrderFood>(
    (reservation) => update(id,reservation),
    {
        //refresh all activities after update
        onSuccess: () => {
            queryClientUpdate.invalidateQueries("reservationsUpdate").catch(err => { throw err})
            queryClientUpdate.invalidateQueries(["reservationById", id]).catch(err => { throw err})
            queryClientUpdate.invalidateQueries("reservations").catch(err => { throw err})
            toast.success("Reservation updated successfully")

        },
        onError: () => {
            toast.error("Reservation update failed")
        },

    }
)

}


