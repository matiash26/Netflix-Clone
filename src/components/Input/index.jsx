import { FiChevronRight } from "react-icons/fi"
import "./style.css"
export function Input() {
    return (
        <div className="btn-input">
            <input type="email" placeholder="Email" required/>
            <button>Vamos lá <FiChevronRight /></button>
        </div>
    )
}