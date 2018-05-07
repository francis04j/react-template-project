import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import PersonalForm from '../common/PersonalForm';

class CreateUserPage extends Component {
    render() {
        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>
                                User<br />
                                <small className="text-muted">Create</small>
                            </h1>
                            <hr />

                            <AvForm model={this.props.user}>
                                <PersonalForm />

                                <FormGroup className="text-right">
                                    <Link
                                        to="/user"
                                        className="btn btn-secondary"
                                    >
                                        Cancel
                                    </Link>{' '}
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </FormGroup>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

CreateUserPage.propTypes = {
    user: PropTypes.object
};

export default CreateUserPage;
