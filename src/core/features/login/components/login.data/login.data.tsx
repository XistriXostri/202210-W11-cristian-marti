import { FormDataType } from '../../../../types/data';

export function LoginData({ formData }: { formData: FormDataType }) {
    return (
        <>
            <h1>Welcome {formData.name}!</h1>
            <div className="data-entered">
                <p>
                    <b>UserName: </b> {formData.username}
                </p>
                <p>
                    <b>Name: </b>
                    {formData.name}
                </p>
                <p>
                    <b>LastName: </b>
                    {formData.lastname}
                </p>
                <p>
                    <b>Birth date: </b>
                    {formData.birthDate}
                </p>
                <p>
                    <b>Gender: </b>
                    {formData.gender}
                </p>
                <p>
                    <b>email: </b>
                    {formData.email}
                </p>
                <p>
                    <b>Account Type: </b>
                    {formData.accountType}
                </p>
                <p>
                    <b>
                        {formData.newsletter
                            ? 'subscribed to our newsletter'
                            : 'You do not want to receive our newsletter'}
                    </b>
                </p>
            </div>
        </>
    );
}
