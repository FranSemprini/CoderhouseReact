import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { NavBar } from '../components/NavBar/NavBar'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Categories } from '../components/Categories/Categories';
import { CartContainer } from '../components/CartContainer/CartContainer';
import { CartCheckout } from '../CartCheckut/CartCheckout';
import { LoginScr } from '../components/loginSrc/loginScr'
export const AppRouter = () => {

    const { user } = useLoginContext()

    return (
        <BrowserRouter>
            {
                user.logged ?
                    <>
                        <NavBar />
                        <div className='app__container'>
                            <Categories />
                            <Routes>
                                <Route path='*' element={<Navigate to="/" />} />
                                <Route path='/' element={<ItemListContainer />} />
                                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                                <Route path='/categories/:categoryId' element={<ItemListContainer />} />
                                <Route path='/cart' element={<CartContainer />} />
                                <Route path='/checkout' element={<CartCheckout />} />
                            </Routes>
                        </div>
                    </>
                    : <>
                        <Routes>
                            <Route path='/login' element={<LoginScr />} />
                            <Route path='*' element={<Navigate to="/login" />} />
                        </Routes>
                    </>
            }
        </BrowserRouter>
    )

}