import { SyntheticEvent, useState } from 'react';
import { FormDataType } from '../../../../types/data';

export function PersonalForm({
    formData,
    handleAdd,
    handleNextPage,
}: {
    formData: FormDataType;
    handleAdd: (formData: Partial<FormDataType>) => void;
    handleNextPage: () => void;
}) {
    const initialPersonalData: Partial<FormDataType> = {
        name: formData.name,
        lastname: formData.lastname,
        birthDate: formData.birthDate,
        gender: formData.gender,
        email: formData.email,
        newsletter: formData.newsletter,
    };

    const [personalData, setPersonalData] = useState(initialPersonalData);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        handleAdd(personalData);
        handleNextPage();
    };

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setPersonalData({ ...personalData, [element.name]: element.value });
    };

    const handleChange = () => {
        setPersonalData({
            ...personalData,
            newsletter: !personalData.newsletter,
        });
    };

    return (
        <form className="personal-data" onSubmit={handleSubmit}>
            <div className="input__text">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={personalData.name}
                    onInput={handleInput}
                    required
                />
            </div>
            <div className="input__text">
                <label htmlFor="lastname">Last name</label>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={personalData.lastname}
                    onInput={handleInput}
                    required
                />
            </div>
            <div className="input__date">
                <label htmlFor="birthDate">Birth date</label>
                <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    value={personalData.birthDate}
                    onInput={handleInput}
                    required
                />
            </div>
            <div className="input__radio">
                <div>
                    <label htmlFor="gender">Gender</label>
                </div>
                <div className="radio__options">
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={personalData.gender === 'male'}
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={personalData.gender === 'female'}
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="female">Female</label>

                    <input
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                        checked={personalData.gender === 'other'}
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="other">Other</label>
                    <input
                        type="radio"
                        name="gender"
                        id="prefer-not-to-mention"
                        value="prefer-not-to-mention"
                        checked={
                            personalData.gender === 'prefer-not-to-mention'
                        }
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="prefer-not-to-mention">
                        Prefer not to mention
                    </label>
                </div>
            </div>
            <div className="input__text">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={personalData.email}
                    onInput={handleInput}
                    required
                />
            </div>
            <div className="input__checkbox">
                <label htmlFor="newsletter">
                    Do you want to recibe our newsletter?
                </label>
                <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    onChange={handleChange}
                />
            </div>
            <div className="button__submit">
                <button type="submit">next</button>
            </div>
        </form>
    );
}
