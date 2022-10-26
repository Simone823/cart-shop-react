import React, {useContext} from 'react'

// app context
import { AppContext } from '../context/AppProvider'

function Products() {

    // appContext
    const appContext = useContext(AppContext);

    // console.log(appContext.products);

    return (
        // section products
        <section id='products' className='h-100'>
            <div className='container h-100'>
                <div className='row h-100'>

                    {
                    appContext.isLoading === false && appContext.isError === false ? (
                        // map products
                        appContext.products.map((product, index) => {
                            return(
                                <div className='col-12 d-flex wrapper-products mb-4 justify-content-between align-items-center' key={product._id}>        
                                    {/* product image */}
                                    <div className="col-lg-2 d-flex justify-content-center flex-shrink-0">
                                        <figure className='product-img shadow'>
                                            <img src={product.image}  alt={product.name}/>
                                        </figure>
                                    </div>

                                    {/* product name */}
                                    <div className="col-lg-2">
                                        <h6>{product.name}</h6>
                                    </div>

                                    {/* product quantity */}
                                    <div className="col-lg-2 d-flex justify-content-center">
                                        <div className='buttons text-center'>
                                            {/* btn increment quatity */}
                                            <button onClick={appContext.decrementQuantity(product._id)} type='button' className='bg-transparent border-0 fs-4'>
                                                -
                                            </button>

                                            {/* product quantity */}
                                            <p className='mb-0'>{product.quantity}</p>

                                            {/* btn increment quatity */}
                                            <button onClick={appContext.incrementQuantity(product._id)} type='button' className='bg-transparent border-0 fs-4'>
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* product price */}
                                    <div className="col-lg-2 d-flex justify-content-center">
                                        <p className='text-end mb-0'>{(product.price * product.quantity).toFixed(2)} &euro;</p>
                                    </div>

                                    {/* btn delete product */}
                                    <div className="col-lg-2 d-flex justify-content-center">
                                        <button onClick={appContext.deleteProduct(product._id)} className='delete-product border-0 text-danger bg-transparent'>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            )
                        })

                    ) : appContext.isLoading === false && appContext.isError === true ? (
                        <div className='row h-100 align-items-center justify-content-center text-center'>
                            <div className='col-12'>
                                <h4>Errore...</h4>
                            </div>
                        </div>
                    ) : (
                        <div className='row h-100 align-items-center justify-content-center text-center'>
                            <div className='col-12'>
                                <h4>Loading...</h4>
                            </div>
                        </div>
                    )
                }

                </div>
            </div>
        </section>
    )
}

export default Products