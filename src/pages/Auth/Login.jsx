import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth";
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setUser } from "@/feartures/User/userSlice";
import { fetchFeed } from "@/feartures/feed/feedActions";

const schema = yup.object({
    login: yup.string().required("Vui lòng nhập Email"),
    password: yup.string().required("Vui lòng nhập mật khẩu")
})

function Login() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const res = await loginUser(data)
            localStorage.setItem("access_token", res.access_token)
            localStorage.setItem("refresh_token", res.refresh_token)
            dispatch(setUser(res.user));
            clearErrors("err")
            navigate("/home")
            dispatch(fetchFeed({
                type: "for_you",
                page: 1,
                per_page: 5
            }))
        } catch (err) {
            console.log(err);
            setError("err", {
                type: "manual",
                message: "Sai tài khoản hoặc mật khẩu"
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <Card className="w-full max-w-sm m-auto">
            <CardHeader>
                <CardTitle className="m-auto">Log in with your Instagram account</CardTitle>
            </CardHeader>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-[80%] m-auto gap-2">
                    <Input type="email" autoComplete="username" placeholder="Email" {...register("login", {required: true})}/>
                    {errors.login && <span className="text-red-500 text-sm">{errors.login.message}</span>}
                    <Input type="password" autoComplete="current-password" placeholder="password" {...register("password", { required: true })}/>
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>
                {errors.err && <span className="text-red-500 text-sm">{errors.err.message}</span>}
                <Button disabled={loading} className="block" type="submit">submit</Button>
            </form>
            <CardFooter className=" flex flex-col">
                <NavLink className="" to="/forgot-password">Forgot PassWord?</NavLink>
                <p>Bạn chưa có tài khoản? <NavLink to="/register" >Đăng ký</NavLink></p>
            </CardFooter>
        </Card>
    )
}

export default Login;