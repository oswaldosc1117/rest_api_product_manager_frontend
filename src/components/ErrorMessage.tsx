import { PropsWithChildren } from "react";

export default function ErrorMessage({children}: PropsWithChildren) {
    return (
        <div className=" text-center my-5 text-white bg-red-600 font-bold uppercase p-3 rounded-lg">
            {children}
        </div>
    )
}
