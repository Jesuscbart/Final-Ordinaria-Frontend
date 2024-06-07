
const Logout = () => {
    const onLogOut = () => {
        // Elimino la cookie
        document.cookie = "auth=;   path=/;";

        // Redirige al login
        window.location.href = "/login";
    };

    return <a onClick={onLogOut} className="logout-button">Logout</a>
}

export default Logout;