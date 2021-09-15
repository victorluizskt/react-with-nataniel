import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const UserFormFunc = props => {
    return (
        <form>
            <label>
                Name
            </label>
            <Field
                type="text"
                component="input"
                name="name"
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
        </form>
    );
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc);

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm);