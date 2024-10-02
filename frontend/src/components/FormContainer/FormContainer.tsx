import { ReactNode } from "react"
import "./FormContainer.css";

type FormContainerProps = {
    children: ReactNode
}

export function FormContainer({ children }: FormContainerProps) {
    return (
        <div className="formContainer">
            {children}
        </div>
    )
}