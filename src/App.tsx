
const Login = () => {
    const handleLogin = () => {
        // Перенаправление на сервер для авторизации
        window.location.href = 'https://spotify-mini-back.vercel.app/authorize';
    };

    return (
        <div>
            <h1>Login to Spotify</h1>
            <button onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
};

export default Login;
