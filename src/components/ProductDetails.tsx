import { Form, Link, type ActionFunctionArgs, redirect } from "react-router-dom"
import type { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"

type ProductDetailsProps = {
    product: Product
}

export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deleteProduct(+params.id);
        return redirect('/');
    }
}


export const ProductDetails = ({ product }: ProductDetailsProps) => {

    const isAvailable = product.availability;

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <form method="post">
                    <button
                        type="button"
                        name="availability"
                        value={product.availability.toString()}
                        className={`${isAvailable ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full text-center border border-gray-300 hover:cursor-pointer`}
                    >
                        {isAvailable ? "Disponible" : "No disponible"}
                    </button>

                </form>

            </td>

            <td className="p-3 text-base text-gray-800">
                <div className="flex gap-2 items-center">
                    <Link
                        to={`/Productos/${product.id}/editar`}
                        className="w-full px-3 py-1.5 bg-sky-600 text-white rounded-lg text-center text-sm font-semibold uppercase shadow hover:bg-sky-500 transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Editar
                    </Link>

                    <Form
                        className="w-full"
                        method="post"
                        action={`/Productos/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if (!confirm('¿Estás seguro de eliminar este producto?')) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value="Eliminar"
                            className="w-full px-3 py-1.5 bg-red-600 text-white rounded-lg text-center text-sm font-semibold uppercase shadow hover:bg-red-500 transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                        />
                    </Form>
                </div>
            </td>

        </tr>
    )
}
