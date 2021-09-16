import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitUserAction } from '../actions/user/UserAction';

const UserFormFunc = props => {

    const { handleSubmit } = props;

    // Metódo resposável por fazer o submit no form, passando uma função que é o submitUserAction
    // E nesse metódo passamos o data, que é para ser salvo no back.
    const submit = (data, submitUserAction) => {
        submitUserAction(data);
    }

    // Nesse forms no handleSubmit e passamos os fields e a função para salvar os valores
    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>
                Name
            </label>
            <Field
                type="text"
                component="input"
                name="nome"
            />
            <br/>
            <label>
                Email
            </label>
            <Field
                type="text"
                component="input"
                name="email"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc);

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, submitUserAction)(UserForm);