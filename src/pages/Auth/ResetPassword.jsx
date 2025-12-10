import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import * as yup from "yup"

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form"
import { NavLink, useNavigate, useSearchParams } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { userResetPassWord } from "@/services/auth";

const schema = yup.object({
    password: yup.string().required("Vui lòng nhập mật khẩu"),
    password_confirmation: yup.string().oneOf([yup.ref("password")], "Mật khẩu không trùng khớp").required("Vui lòng nhậpt lại mật khẩu")
})

function ResetPassword() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const token = searchParams.get("token");
    const email = localStorage.getItem("email")
    const {
            register,
            handleSubmit,
            watch,
            setError,
            formState: { errors },
        } = useForm({resolver: yupResolver(schema)});

        const onSubmit = async (message) => {
            setLoading(true)
            const data = {
                token,
                email,
                ...message,
            }
            try {
                const res = await userResetPassWord(data);
                if(res.success) {
                    setSuccess(true)
                    setTimeout(() => {
                        navigate("/login")
                    }, 5000)
                }
            } catch (err) {
                const errors = err?.errors || {};
            if (Object.keys(errors).length) {
                Object.entries(errors).forEach(([field, message]) => {
                    setError(field, { type: "manual", message });
                });
            } else {
                setError("email", { type: "manual", message: err?.message || "Đăng ký thất bại" });
            }
            } finally {
                setLoading(false);
                setSuccess(false);
            }
        }
    return (
        <Card className="w-full max-w-sm m-auto">
            <CardHeader>
                <CardTitle className="m-auto">Reset Password</CardTitle>
            </CardHeader>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-[80%] m-auto gap-2">
                    <Input type="password" placeholder="Mật khẩu mới" {...register("password", { required: true })}/>
                    {errors.password && <span className="text-sm text-red-600">{errors?.password.message}</span>}
                    <Input type="password" placeholder="Xác nhận mật khẩu" {...register("password_confirmation", { required: true })}/>
                    {errors.password_confirmation && <span className="text-sm text-red-600">{errors?.password_confirmation.message}</span>}
                </div>
                {loading && <i class="fa-solid fa-spinner animate-spin text-gray-400"></i>}
                {success && <span className="text-sm text-green-500">Đổi mật khẩu thành công</span>}
                <Button className="block" type="submit">Đồng ý</Button>
            </form>
            <CardFooter className=" flex flex-col">
                <NavLink className="" to="/login">Đã có tài khoản</NavLink>
            </CardFooter>
        </Card>
    )
}

export default ResetPassword;