import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1> Santana </h1>
            <ul class="menu">
                <li> <a href="index.html">Inicio</a> </li>
                <li> <a href="pages/promos.html">Santana mayorista</a> </li>
                <li> <a href="pages/catalogo.html">Catalogo</a> </li>
                <li> <a href="pages/faqs.html">FAQS</a> </li>
                <li> <a href="pages/nosotros.html">Nosotros</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar