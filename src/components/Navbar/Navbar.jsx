import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <h2>Categorías de juegos</h2>
            <div>
                <button>Acción</button>
                <button>Aventura</button>
                <button>Terror</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar