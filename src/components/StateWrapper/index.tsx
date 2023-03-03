import { PropsWithChildren } from "react"

interface IStateWrapper{
    isLoading?: boolean,
    isError?: boolean,
    isSuccess?: boolean,
}

export function StateWrapper({isLoading, isError, isSuccess, children}: PropsWithChildren<IStateWrapper>){
    return(
        <>
            {isLoading && <p>CARGANDO...</p>}
            {isError && <p>ERROR</p>}
            {isSuccess && children}
        </>
    )
}