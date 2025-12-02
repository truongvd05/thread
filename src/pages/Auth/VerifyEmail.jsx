function VerifyEmail() {
    const params = new URLSearchParams(search);
    const token = params.get("token");
    console.log(token);
    return (
        <h1>xin chao</h1>
    )
}

export default VerifyEmail;