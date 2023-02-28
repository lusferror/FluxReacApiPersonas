import { BrowserRouter , Route , Routes } from 'react-router-dom';
import App from './views/App';
import injectContext from './store/appContext';

const Layout = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App/>} path='/' />
                <Route element={<Personas/>} path='/todo_list' />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(Layout);