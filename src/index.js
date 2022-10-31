import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "antd/dist/antd.css";
import { Provider } from 'react-redux'
import { store } from './redux/configStore'
import { createBrowserHistory } from 'history'
import { Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import New from './pages/New/New';

export const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <HistoryRouter history={history}>
            <Routes>
                <Route path="" element={<HomeTemplate />}>
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="new" element={<New />}></Route>
                    {/* <Route path="detail">
                        <Route path=":id" element={<Abc />}></Route>
                    </Route> */}
                    <Route path="*" element={<Navigate to={''} />}></Route>
                </Route>
            </Routes>
        </HistoryRouter>
    </Provider>
)
