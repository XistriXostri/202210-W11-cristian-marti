import { Link } from 'react-router-dom';
import { FormDataType } from '../../../../types/data';

export function ConfirmForm({
    formData,
    handlePreviousPage,
}: {
    formData: FormDataType;
    handlePreviousPage: () => void;
}) {
    return (
        <div className="confim-form">
            <h2>
                Please {formData.username}, confirm that the following data
                entered is correct
            </h2>
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
            <div className="buttons">
                <button onClick={handlePreviousPage}>Back</button>
                <Link to="/login">
                    <button className="confirm__button" id="confirm-button">
                        Confirm
                    </button>
                </Link>
            </div>
        </div>
    );
}
