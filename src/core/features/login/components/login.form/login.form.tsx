import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormDataType } from '../../../../types/data';

export function LoginForm({
    formData,
    handleLogin,
}: {
    formData: FormDataType;
    handleLogin: (data: Partial<FormDataType>) => void;
}) {
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        handleLogin(loginData);
    };

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setLoginData({ ...loginData, [element.name]: element.value });
    };

    return (
        <>
            <form className="login__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginData.username}
                    onInput={handleInput}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onInput={handleInput}
                    required
                />
                <button type="submit" title="login" name="login">
                    Login
                </button>
            </form>
            <div className="forgot-form">
                <p>
                    Not registered?{' '}
                    <Link to={'/register'}>Create an account</Link>
                </p>
            </div>
        </>
    );
}
