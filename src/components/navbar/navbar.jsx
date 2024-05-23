import Cartwidget from "../cartwidget/cartwidget"

const Navbar = () => {
    return (
        <header>
            <nav class="navbar">
                <div class="brand">
                    Swiftly
                </div>
                <ul class="nav-items">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Eras</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><Cartwidget /></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar