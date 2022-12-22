import { useEffect, useState } from 'react';
import { getFormData, saveData } from '../../../data/mock.service';
import { FormDataType } from '../../../types/data';
import { AccesForm } from '../components/acces.form/acces.form';
import { ConfirmForm } from '../components/confirm.form/confirm.form';
import { PersonalForm } from '../components/personal.form/personal.form';

export function FormPage() {
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
    const [formPage, setFormPage] = useState(0);

    const handleAdd = (data: Partial<FormDataType>) => {
        setFormData({ ...formData, ...data });
    };

    const handleNextPage = () => {
        setFormPage(formPage + 1);
    };

    const handlePreviousPage = () => {
        setFormPage(formPage - 1);
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
            {formPage === 0 ? (
                <PersonalForm
                    formData={formData}
                    handleAdd={handleAdd}
                    handleNextPage={handleNextPage}
                ></PersonalForm>
            ) : (
                <></>
            )}
            {formPage === 1 ? (
                <AccesForm
                    formData={formData}
                    handleAdd={handleAdd}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                ></AccesForm>
            ) : (
                <></>
            )}
            {formPage === 2 ? (
                <ConfirmForm
                    formData={formData}
                    handlePreviousPage={handlePreviousPage}
                ></ConfirmForm>
            ) : (
                <></>
            )}
        </>
    );
}
