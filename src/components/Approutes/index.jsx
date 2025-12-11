import { HashRouter, Route, Routes } from "react-router-dom";

import { lazy } from 'react';

import DefaultLayout from "../../layouts/DefaultLayout";

const Login = lazy(() => import("@/pages/Auth/Login"))
const ForgotPassword = lazy(() => import("@/pages/Auth/ForgotPassword"))
const ResetPassword = lazy(() => import("@/pages/Auth/ResetPassword"))
const Register = lazy(() => import("@/pages/Auth/Register"))
const VerifyEmail = lazy(() => import("@/pages/Auth/VerifyEmail"))
const Heart = lazy(() => import("@/pages/Heart"))
const Search = lazy(() => import("@/pages/Search"))
const User = lazy(() => import("@/pages/User"))
const Embeb = lazy(() => import("@/pages/Embed"))

import Home from "@/pages/Home";
import AuthLayout from "@/pages/Auth/AuthLayout";
import PostPage from "@/pages/PostPage.jsx";
import EmbedLayout from "@/layouts/EmbedLayout";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/heart" element={<Heart/>}/>
                    <Route path="/user" element={<User/>}/>
                    <Route path="/post/:id" element={<PostPage/>}/>
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/verify-email" element={<VerifyEmail/>}/>
                </Route>
                <Route element={<EmbedLayout/>}>
                    <Route path="/:username/post/:postId/embed" element={<Embeb/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;