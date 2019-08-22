import React from 'react';
import { FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import { NameInputField } from './NameInputField';

const PersonalForm = () => (
    <React.Fragment>
        <FormGroup row>
            <NameInputField label="User Id" name="userId" tabIndex = {1} required reportError={this.reportError}/>
            <NameInputField label="First Name" name="fname" tabIndex = {2} required/>
            <NameInputField label="last Name" name="lname" tabIndex = {3} required/>
            
            {/* <AvField
                name="username"
                label="User Name"
                required
                groupAttrs={{ className: 'form-field col-lg-6' }}
            />
            <AvField
                name="password"
                label="Password"
                type="password"
                required
                groupAttrs={{ className: 'form-field col-lg-6' }}
            />
            <AvField
                name="email"
                label="Email"
                type="email"
                required
                groupAttrs={{ className: 'form-field col-lg-6' }}
            />
            <AvField
                name="dob"
                label="Date of birth"
                type="date"
                groupAttrs={{ className: 'form-field col-lg-6' }}
            />
            <AvField
            name="occupation"
            label="Occupation"
            groupAttrs={{ className: 'form-field' }}
        /> */}
        </FormGroup>
    </React.Fragment>
);

function reportError() {
    
}
export default PersonalForm;
