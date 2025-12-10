import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { userVerifyEmail } from "@/services/auth";
import { useEffect, useState } from "react";

import { Link, useSearchParams } from "react-router";

function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const token = searchParams.get("token");
    console.log(token);
    useEffect(() => {
        const Verify = async () => {
            try {
                setLoading(true)
                const res = await userVerifyEmail(token);
                console.log(res);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        Verify();
    }, [])
    return (
        <Card className="w-full max-w-sm m-auto">
            <CardHeader>
                <CardTitle className="m-auto">Xác thực Email</CardTitle>
            </CardHeader>
            <div className="w-[80%] m-auto gap-2 text-center">
                {loading && (
                    <div className="flex gap-2 items-center justify-center">
                        <p>Đang xác thực</p>
                        <i className="fa-solid fa-spinner animate-spin text-gray-400"></i>
                    </div>)}
                    {!loading && (
                        <>
                            <div className="flex gap-2 items-center justify-center mb-2">
                                <p>Xác thực thành công</p>
                                <i class="fa-solid fa-check text-green-500"></i>
                            </div>
                            <Button>
                                <Link to={`/login`}>Login</Link>
                            </Button>
                        </>
                    )}
            </div>
        </Card>
    )
}

export default VerifyEmail;