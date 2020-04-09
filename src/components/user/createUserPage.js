import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Row, Col, Card, CardBody } from 'reactstrap';
import { PersonalForm } from '../common/PersonalForm';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions';

class CreateUserPage extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    async submitForm(event, values) {
        const result = await this.props.createUser(values);
        if (result.success) {
            this.props.history.push('/');
        }
    }

    userRow(user, index) {
        return <div key={index}>{user.username}</div>;
    }

    handleError() {
        
    }
    render() {
        return (
            <Row className="justify-content-md-center">
                {this.props.user}
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>
                                User<br />
                                <small className="text-muted">Create</small>
                            </h1>
                            <hr />                          
                            <PersonalForm submitForm={this.submitForm}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

CreateUserPage.propTypes = {
    createUser: PropTypes.func
};

// const mapStateToProps = (state, ownProps) => {
//     return {
//         user: state.user
//     }
// }
const mapDispatchToProps = dispatch => ({
    createUser: model => dispatch(createUser(model))
});

export default connect(undefined, mapDispatchToProps)(CreateUserPage);
