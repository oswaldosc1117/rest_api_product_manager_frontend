import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { action as updateAvailabilityAction, loader as productLoader } from './pages/Products'
import NewProduct, { action as newProductAction} from './pages/NewProduct'
import EditProduct, {loader as editProductLoader, action as editProductAction} from './pages/EditProduct'
import { action as deleteProductAction } from './components/ProductDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products/>,
                loader: productLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Resource Oriented Design
                element: <EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])