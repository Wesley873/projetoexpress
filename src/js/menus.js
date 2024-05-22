export default function menus() {
    return `
        <div>
                <div className='sidebar'>
                <div className='sidebar-header'>
                    <h3>Menu</h3>
                    <button onClick="()=>{window.history.back()})">Voltar</button>
                    <img id="icon-person" className="icon" src={iconClose} alt='icone-home' onClick={closeSidebar}/>
                    {/* <h3>X</h3> */}
                </div>
                <div className='sidebar-body'>
                    <div className='list'><Link to='/meusdados'><img id="icon-person" className="icon" src={iconPerson} alt='icone-home' />Meus dados</Link></div>
                    <div className='list'><Link to='/formaspagamento'><img id="icon-home" className="icon" src={iconAddCart} alt='icone-home' />Formas de Pagamento</Link></div>
                    <div className='list'><Link to='/historico'><img id="icon-home" className="icon" src={iconOrder} alt='icone-home' />Histórico de pedidos</Link></div>
                    <div className='list'><Link to='/configuracoes'><img id="icon-home" className="icon" src={iconConfig} alt='icone-home' />configurações</Link></div>
                </div>
            </div>
            <nav className='topbar'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logoOifical} alt='icon-lunch' className='icon' />
                        <h1>GAMER</h1>
                        {/* <img src={logoGamer2} alt='icon-lunch' className='icon-gamer' /> */}
                    </Link>
                </div>
                <div className='menu'>
                    <img src={iconMenu} alt='icon-menu' className='icon' id="menu" onClick={activeSidebar}/>
                </div>
            </nav>

            <div className="taskbar">
                <div className="icons-list">
                    <Link to='/'>
                        <img id="icon-home" className="icon" src={iconHome} alt='icone-home' />
                        <p>Inicio</p>
                    </Link>
                    <Link to='/buscar'>
                        <img id="icon-home" className="icon" src={iconSearch} alt='icone-home' />
                        <p>Buscar</p>
                    </Link>
                    <Link to='/ofertas'>
                        <img id="icon-home" className="icon" src={iconSell} alt='icone-home' />
                        <p>Ofertas</p>
                    </Link>
                    <Link to='/pedido'>
                        <img id="icon-home" className="icon" src={iconOrder} alt='icone-home' />
                        <p>Pedido</p>
                    </Link>
                </div>
            </div>
        </div>`
}