import {createBrowserRouter} from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Products, loader as productsLoader, action as updateAvilabilityAction } from './views/Products'
import { NewProduct, action as newProductAction } from './views/NewProduct';
import { EditProduct, loader as editProductLoader, action as editProductAction } from './views/EditProduct';
import { action as deleteProductsAction } from './components/ProductDetails';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvilabilityAction
            },
            {
                path: 'Productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'Productos/:id/editar', // ROA Pattern - esto es una ruta para editar un producto específico
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'Productos/:id/eliminar',
                action: deleteProductsAction

            }
        ]
    }
])