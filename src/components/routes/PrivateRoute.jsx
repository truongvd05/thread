function PrivateRoute() {
    const user = useSelector((state) => state.user.data);
    return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;