import { Link, Form, useActionData, redirect  } from "react-router-dom";
import type {ActionFunctionArgs} from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";
import { ProductForm } from "../components/ProductForm";


export async function action({ request } :ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());

    let error = '';
    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios';
    }
    if (error.length) {
        return error 
    }

    await addProduct(data)

    return redirect('/')
}




export const NewProduct = () => {

    const error = useActionData() as string


    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Registrar producto</h2>
                <Link
                    to={"/"}
                    className="rounded-md bg-sky-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-sky-500"
                >
                    Volver a Productos
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}


            <Form
                className="mt-10"
                method="post"
            >
                <ProductForm
                    
                />
                <input
                    type="submit"
                    className="mt-5 w-full bg-sky-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Registrar Producto"
                />
            </Form>
        </>
    )
}
