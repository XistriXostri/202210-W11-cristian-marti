import { SyntheticEvent, useState } from 'react';
import { FormDataType } from '../../../../types/data';

export function AccesForm({
    formData,
    handleAdd,
    handleNextPage,
    handlePreviousPage,
}: {
    formData: FormDataType;
    handleAdd: (formData: Partial<FormDataType>) => void;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}) {
    const initialAccessData: Partial<FormDataType> = {
        username: formData.username,
        password: formData.password,
        repeatPassword: formData.repeatPassword,
        accountType: formData.accountType,
    };

    const [accesData, setAccessData] = useState(initialAccessData);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!checkPassword()) {
            alert('The passwords not match');
            setAccessData({
                ...accesData,
                repeatPassword: '',
                password: '',
            });
            return;
        }
        handleAdd(accesData);
        handleNextPage();
    };

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setAccessData({ ...accesData, [element.name]: element.value });
    };

    const checkPassword = () => {
        if (accesData.password === accesData.repeatPassword) return true;
        return false;
    };

    return (
        <>
            <form className="acces-data" onSubmit={handleSubmit}>
                <div className="input__text">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={accesData.username}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="input__text">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={accesData.password}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="input__text">
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <input
                        type="password"
                        name="repeatPassword"
                        id="repeatPassword"
                        value={accesData.repeatPassword}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="input__text">
                    <label htmlFor="accountType">Account type</label>
                    <select
                        name="accountType"
                        id="accountType"
                        value={accesData.accountType}
                        onInput={handleInput}
                    >
                        <option value="personal">Personal</option>
                        <option value="pro">Pro</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div className="buttons">
                    <button onClick={handlePreviousPage}>Back</button>
                    <button type="submit">Next</button>
                </div>
            </form>
        </>
    );
}
