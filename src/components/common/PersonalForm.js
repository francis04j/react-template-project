import React from 'react';
import { FormGroup } from 'reactstrap';
import { NameInputField } from './NameInputField';

export class PersonalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputErrors: []
        }
    }

    render() {
        return (
        <FormGroup row>
            <NameInputField label="User Id" name="userId" tabIndex = {1} required reportError={this.reportError}/>
            <NameInputField label="First Name" name="fname" tabIndex = {2} required/>
            <NameInputField label="last Name" name="lname" tabIndex = {3} required/>    
        </FormGroup>
        );
    }
};