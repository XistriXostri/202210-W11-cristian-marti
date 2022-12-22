import { useEffect, useState } from 'react';
import { getFormData, saveData } from '../../../data/mock.service';
import { FormDataType } from '../../../types/data';
import { LoginData } from '../components/login.data/login.data';
import { LoginForm } from '../components/login.form/login.form';

export function LoginPage() {
    const initialState: FormDataType = {
        name: '',
        lastname: '',
        birthDate: '',
        gender: '',
        email: '',
        newsletter: false,
        username: '',
        repeatPassword: '',
        password: '',
        accountType: '',
    };

    const [formData, setFormData] = useState(initialState);
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [loginMatch, setLoginMatch] = useState(false);

    const handleLogin = (data: Partial<FormDataType>) => {
        setLoginData({ ...loginData, ...data });
        if (
            loginData.username === formData.username &&
            loginData.password === formData.password
        ) {
            return setLoginMatch(true);
        }
        return alert('Incorrect username or password');
    };

    const handleLoad = async () => {
        const data = await getFormData();
        setFormData(data);
    };

    useEffect(() => {
        handleLoad();
    }, []);

    useEffect(() => {
        saveData(formData);
    }, [formData]);

    return (
        <>
            {!loginMatch ? (
                <LoginForm
                    formData={formData}
                    handleLogin={handleLogin}
                ></LoginForm>
            ) : (
                <LoginData formData={formData}></LoginData>
            )}
        </>
    );
}
