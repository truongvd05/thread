import { HashRouter, Route, Routes } from "react-router";
import DefaultLayout from "../../layout/DefaultLayout";
import Home from "@/pages/Home";
import Heart from "@/pages/Heart";
import Search from "@/pages/Search";
import User from "@/pages/User";
import Login from "@/pages/Auth/Login";
import AuthLayout from "@/pages/Auth/AuthLayout";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import Register from "@/pages/Auth/Register";
import ResetPassword from "@/pages/Auth/ResetPassword";
import VerifyEmail from "@/pages/Auth/VerifyEmail";
import PrivateRoute from "../routes/PrivateRoute";
import PostPage from "@/pages/PostPage.jsx";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Search" element={<Search/>}/>
                    <Route path="/Heart" element={<Heart/>}/>
                    <Route path="/User" element={<User/>}/>
                    <Route path="/post/:id" element={<PostPage/>}/>
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/verify-email" element={<VerifyEmail/>}/>
                </Route>
                <Route element={<PrivateRoute/>}>
                    
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;