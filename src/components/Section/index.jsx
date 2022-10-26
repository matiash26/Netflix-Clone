import "./style.css"
export function Section(props) {
    return (
        <section className="section-container">
            <div className={`section-size ${props.row ? props.row : ""}`}>
                <div className="section-content">
                    {props.children}
                    <img src={props.backimg} />
                </div>
                <div className="description">
                    <h1>{props.title}.</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    )
}