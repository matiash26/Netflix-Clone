import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Asking } from "../../components/Asking"
import { Footer } from "../../components/Footer";

import tv from "../../assets/tv.png"
import phone from "../../assets/phone.jpg"
import picture from "../../assets/picture.png"
import macbook from "../../assets/macbook.png"
import stranger from "../../assets/stranger.png"
import "./style.css"
function Home() {
    window.addEventListener("load", AnswerEvent)

    function AnswerEvent() {
    }
    return (
        <div className="Container">
            <div className="Container-header">
                <Header />
                <main>
                    <section className="plans">
                        <h1>Filmes, séries e muito mais. Sem limites.</h1>
                        <h2>Assista onde quiser. Cancele quando quiser.</h2>
                        <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                        <Input />
                    </section>
                </main>
            </div>
            <Section
                backimg={tv}
                title="Aproveite na TV."
                description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, 
            aparelhos de Blu-ray e outros dispositivos."
                row="row-reverse" />

            <Section
                backimg={phone}
                title="Baixe séries para assistir offline."
                description="Salve seus títulos favoritos e sempre tenha algo para assistir." >
                <div className="stranger">
                    <img src={stranger} />
                    <div className="stranger-title">
                        <h4>Stranger Things</h4>
                        <p>Download em andamento...</p>
                    </div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" />
                </div>
            </Section>

            <Section
                backimg={macbook}
                title="Assista quando quiser."
                description="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
                row="row-reverse" />

            <Section
                backimg={picture}
                title="Crie perfis para crianças."
                description="Deixe as crianças se aventurarem
            com seus personagens favoritos em um espaço feito só 
            para elas, sem pagar a mais por isso."/>

            <section className="asking">
                <h1>Perguntas frequentes</h1>
                <ul>
                    <Asking ask="O que é a Netflix?">
                        <p>
                            A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                            filmes e documentários premiados em milhares de aparelhos conectados à internet.<br /><br />
                            Você pode assistir a quantos filmes e séries quiser, quando e onde quiser,
                            sem comerciais – tudo por um preço mensal bem acessível.
                            Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                        </p>
                    </Asking>
                    <Asking ask="Quanto custa a Netflix?">
                        <p>Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming
                            por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato
                            nem taxas extras.
                        </p>
                    </Asking>
                    <Asking ask="Onde posso Assistir?">
                        <p>
                            Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para
                            começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível
                            com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e
                            videogames.<br /><br />Você também pode baixar a sua série favorita com o aplicativo Netflix
                            para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar
                            de conexão com a Internet. Leve a Netflix com você para qualquer lugar.
                        </p>
                    </Asking>
                    <Asking ask="Como faço para cancelar?">
                        <p>
                            A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet
                            com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura
                            a qualquer momento.
                        </p>
                    </Asking>
                    <Asking ask="O que eu posso assistir na Netflix?">
                        <p>
                            A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais.
                            Assista o quanto quiser, quando quiser.
                        </p>
                    </Asking>
                    <Asking ask="A Netflix é adequada para crianças?">
                        <p>
                            A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço
                            com séries e filmes familiares sob a supervisão dos responsáveis.O recurso de controle parental, incluso nos perfis
                            para crianças e protegido por PIN, permite restringir a classificação etária do conteúdoque as crianças podem ver e bloquear
                            títulos específicos que você não quer que elas assistam.
                        </p>
                    </Asking>
                </ul>
                <div>
                    <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                    <Input />
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Home;