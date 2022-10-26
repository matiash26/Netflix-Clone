import { HiOutlinePlus } from "react-icons/hi"
import "./style.css"
export function Asking({ ask, children }) {
    window.addEventListener("load", AnswerEvent)

    function AnswerEvent() {
        document.querySelectorAll(".ask-container").forEach(answer => {
            answer.onclick = (e) => {
                e.currentTarget.classList.toggle("close")
            }
        })
    }
    return (
        <li className="ask-container close">
            <div>
                <h1>{ask}</h1>
                <HiOutlinePlus />
            </div>
            <div className="answer">
                {children}
            </div>
        </li>
    )
}