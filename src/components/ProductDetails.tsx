import { Link } from "react-router-dom"
import type { Product } from "../types"
import { formatCurrency } from "../utils"

type ProductDetailsProps = {
    product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {

    const isAvailable = product.availability ? "Disponible" : "No disponible";

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <Link
                        to={`/Productos/${product.id}/editar`}
                        className="bg-sky-600 text-white rounded-lg w-full  text-center font-bold uppercase shadow-md hover:bg-sky-500 transition-colors"
                    >Editar</Link>
                </div>
            </td>
        </tr>
    )
}
