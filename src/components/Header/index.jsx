import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./style.css"
export function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><img src={Logo}/></Link>
                <div className="menu">
                    <select name="lang" className="lang">
                        <option value="pt-br">Português</option>
                        <option value="en">Inglês</option>
                    </select>
                    <Link to="/login">Entrar</Link>
                </div>
            </nav>
        </header>
    )
}