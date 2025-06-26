import {createBrowserRouter} from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Products, loader as productsLoader } from './views/Products'
import { NewProduct, action as newProductAction } from './views/NewProduct';
import { EditProduct, loader as aditProductLoader } from './views/EditProduct';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'Productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'Productos/:id/editar', // ROA Pattern - esto es una ruta para editar un producto específico
                element: <EditProduct />,
                loader: aditProductLoader
            }
        ]
    }
])