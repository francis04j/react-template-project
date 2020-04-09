import React from 'react';

import { Link } from 'react-router-dom';
import { FormGroup, Button } from 'reactstrap';
import { NameInputField } from './NameInputField';

export class PersonalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputErrors: []
        }
        this.reportError = this.reportError.bind(this);
    }

    reportError(error) {
        this.setState({ inputErrors: this.inputErrors.push(error)});
    }

    render() {
        return (
        <form onSubmit = {this.props.submitForm}>
        <FormGroup row>
            <NameInputField label="User Id" name="userId" tabIndex = {1} required />
            <NameInputField label="First Name" name="fname" tabIndex = {2} required/>
            <NameInputField label="last Name" name="lname" tabIndex = {3} required/>    
        </FormGroup>
        <FormGroup className="text-right">
            <Link to="/user" className="btn btn-secondary"> Cancel </Link>
            <Button type="submit" color="primary"> Submit</Button>
        </FormGroup>
        </form>
        );
    }
};