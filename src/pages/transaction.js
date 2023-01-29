import { useParams } from "react-router-dom"

export const Transaction = () => {

    const params = useParams();


    return (
        <div>Transaction: {params.id}</div>
    )
}