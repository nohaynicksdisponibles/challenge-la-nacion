import { useEffect, useState } from "react";
import { getFoodLocal } from "../services/food";

export default function useFoodData(){
    const [statusAndData, setStatusAndData] = useState({
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: [],
    });

    useEffect(() => {
        (async function(){
            try{
                // const response = await getFood();
                const response: any = await getFoodLocal()

                setStatusAndData((prev) => {
                    return {
                        ...prev,
                        isLoading: false,
                        isSuccess: true,
                        data: response.data,
                    }
                });
            }catch{
                setStatusAndData((prev) => {
                    return {
                        ...prev,
                        isLoading: false,
                        isError: true,
                    }
                });
            }
        })()
    }, [])
 
    return statusAndData
}