import { useParams } from "react-router-dom"

export const Block = () => {

    const params = useParams();


    return (
        <div>Block: {params.id}</div>
    )
}