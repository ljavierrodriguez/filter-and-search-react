import { useContext, useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import injectContext, { Context } from "./store/appContext";

const App = () => {
    const { store, actions } = useContext(Context);
    const [search, setSearch] = useState('');
    const [orderBy, setOrderBy] = useState('id');
    const [products, setProducts] = useState([])

    useEffect(() => {
        //actions.getProducts();
        setProducts(store.products);
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Search setSearch={setSearch} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <label>Order By</label>
                            <div className="col-md-12">
                                {/* <input type="checkbox" onChange={() => setOrderBy('id')} checked={orderBy === 'id' ? true : false} /> Id <br /> */}
                                <input type="checkbox" onChange={() => setOrderBy('name')} checked={orderBy === 'name' ? true : false} /> Name <br />
                                <input type="checkbox" onChange={() => setOrderBy('price')} checked={orderBy === 'price' ? true : false} /> Price <br />
                                <input type="checkbox" onChange={() => setOrderBy('category')} checked={orderBy === 'category' ? true : false} /> Category
                            </div>
                            <a href="/#" className="text-muted" onClick={(e) => {
                                e.preventDefault();
                                setOrderBy('id')
                            }}>Remove Order</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        Product List
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ProductList orderBy={orderBy} products={products} search={search} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default injectContext(App);