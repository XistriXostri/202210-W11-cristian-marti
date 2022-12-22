import { FormDataType } from '../types/data';
import { FORMDATA } from './mock';

export const getFormData = async () => {
    const data = localStorage.getItem('formData');

    if (!data) {
        localStorage.setItem('formData', JSON.stringify(FORMDATA));
        return FORMDATA;
    }

    return JSON.parse(data);
};

export const saveData = async (formData: FormDataType) => {
    localStorage.setItem('formData', JSON.stringify(formData));
};
