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
import { NavLink } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    password: yup.string().required("Vui lòng nhập mật khẩu"),
    password_confirmation: yup.string().oneOf([yup.ref("password")], "Mật khẩu không trùng khớp").required("Vui lòng nhậpt lại mật khẩu")
})

function ResetPassword() {
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm({resolver: yupResolver(schema)});
        const onSubmit = (data) => console.log(data)
    return (
        <Card className="w-full max-w-sm m-auto">
            <CardHeader>
                <CardTitle className="m-auto">Reset Password</CardTitle>
            </CardHeader>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-[80%] m-auto gap-2">
                    <Input type="password" placeholder="Mật khẩu mới" {...register("password", { required: true })}/>
                    {errors.password && <span>{errors.password.message}</span>}
                    <Input type="password_confirmation" placeholder="Xác nhận mật khẩu" {...register("password_confirmation", { required: true })}/>
                    {errors.password && <span>{errors.password_confirmation.message}</span>}
                </div>
                <Button className="block" type="submit">Đồng ý</Button>
            </form>
            <CardFooter className=" flex flex-col">
                <NavLink className="" to="/login">Đã có tài khoản</NavLink>
            </CardFooter>
        </Card>
    )
}

export default ResetPassword;