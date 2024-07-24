import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProducts } from "../services/ProductServices"

type ProductDetailsProps = {
    product: Product
}

export async function action({params}: ActionFunctionArgs) {

    if(params.id !== undefined){
        await deleteProducts(+params.id)
        return redirect('/')
    }    
}

export default function ProductDetails({product}: ProductDetailsProps) {

    const fetcher = useFetcher()
    const navigate = useNavigate()

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="POST">
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${product.availability ? ' text-black' : ' text-red-600'} rounded-lg p-2 font-bold w-full border border-blue-100 hover:cursor-pointer`}>
                        {product.availability ? 'Disponible' : 'No Disponible'}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className=" flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`productos/${product.id}/editar`)}
                        className=" bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                        > Editar
                    </button>

                    <Form
                        className=" w-full"
                        method="POST"
                        action={`productos/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if(!confirm('¿Eliminar?')){
                                e.preventDefault()
                            }
                        }}>
                            
                        <input
                            type="submit"
                            value={'Eliminar'}
                            className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                        />
                    </Form>
                </div>
            </td>
        </tr> 
    )
}