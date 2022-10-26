import React, {useContext} from 'react';

import { AppContext } from '../context/AppProvider';

function Header() {
    // app context
    const appContext = useContext(AppContext);

    return (
        <header>
           <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container">

                    {/* brand */}
                    <a className="navbar-brand" href="/">Cart Shop</a>

                    {/* btn menu mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* collapse menu */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a href='/' className='text-decoration-none'>
                                <i className="fa-solid fa-cart-shopping fs-5 me-2"></i>
                                <span className='cart-shop-item-count'>{appContext.products.length}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header