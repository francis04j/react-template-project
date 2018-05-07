import React from 'react';
import FormGroup from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

const PersonalForm = () => (
    <React.Fragment>
        <FormGroup row>
            <AvField
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
                name="Email"
                label="Email"
                type="email"
                required
                groupAttrs={{ className: 'form-field col-lg-6' }}
            />
            <AvField
                name="Dob"
                label="Date of birth"
                type="date"
                groupAttrs={{ className: 'form-field col-lg-6' }}
            />
        </FormGroup>
        <AvField
            name="occupation"
            label="Occupation"
            groupAttrs={{ className: 'form-field' }}
        />
    </React.Fragment>
);

export default PersonalForm;
