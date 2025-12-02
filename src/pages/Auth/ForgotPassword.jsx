import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import * as yup from "yup"

import { Input } from "@/components/ui/input";
import { forgotPassword } from "@/services/auth";
import { set, useForm } from "react-hook-form"
import { NavLink } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
    email: yup.string().email("email không hợp lệ").required("Email là bắt buộc")
})

function ForgotPassword() {
    const [ successMessage, setSuccessMessage ] = useState(false);
    const [loading, setLoading ] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm( {resolver: yupResolver(schema) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const res = await forgotPassword(data.email);
            setSuccessMessage(true);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }
    return (
        <Card className="w-full max-w-sm m-auto">
            <CardHeader>
                <CardTitle className="m-auto">Forgot password</CardTitle>
            </CardHeader>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-[80%] m-auto gap-2">
                    <Input autoComplete="email" type="text" placeholder="Email" {...register("email", { required: true })}/>
                </div>
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                {successMessage && <span className="text-sm">Liên kết đặt lại mật khẩu đã được gửi tới email của bạn</span>}
                <Button disabled={loading} className="block" type="submit">Đồng ý</Button>
            </form>
            <CardFooter className=" flex flex-col">
                <NavLink className="" to="/login">Đã có tài khoản</NavLink>
            </CardFooter>
        </Card>
    )
}

export default ForgotPassword;