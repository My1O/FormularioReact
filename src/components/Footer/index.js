import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
            <a href="https://www.aluracursos.com">
                <img src="/img/facebook.png" alt="FaceBook" />
            </a>
            <a href="https://www.aluracursos.com">
                <img src="/img/twitter.png" alt="tweeter" />
            </a>
            <a href="https://www.aluracursos.com">
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <strong className="logoTexto">Desarrolado por Alura</strong>
        <img src="/img/Logo.png" alt="org"/>


    </footer>
}

export default Footer