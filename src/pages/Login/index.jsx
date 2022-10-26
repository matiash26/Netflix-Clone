import "./style.css"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
function Login() {
    return (
        <div className="login-container">
            <Header />
            <main>
                <form id="form">
                    <h1>Entrar</h1>
                    <input class="input" type="email" placeholder="Email ou número de telefone" />
                    <input class="input" type="pwd" placeholder="Senha" />
                    <input class="input"type="submit" value="Entrar" />
                    <div className="remember-me">
                        <label htmlFor="remember" id="remember">
                            Lembre-se de mim
                            <input type="checkbox" name="remember" id="remember" />
                        </label>
                        <a href="#">Precisa de ajuda?</a>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>
    )
}
export default Login;