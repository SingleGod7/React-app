import Product from "../Product";
import FuniturePic from "./asserts/Funiture.png"

export default function Funiture(){
    const contentFuniture = [
        FuniturePic, null, null
    ]

    return (
        <Product content={contentFuniture} />
    )
}