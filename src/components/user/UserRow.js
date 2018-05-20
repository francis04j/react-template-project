import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserRow = ({ onDeleteUser, user }) => (
    <Card className="mb-3">
        <CardBody>
            <Row>
                <Col className="clearfix">
                    <img
                        src="user.gravatarUrl"
                        alt={user.emailAddress}
                        className="img-thumbnail rounded-circle mr-3 float-left"
                    />
                    <h4 className="card-title">
                        {user.username}
                        <br />
                        <small className="text-muted">
                            {user.emailAddress}
                        </small>
                    </h4>
                </Col>
                <Col lg="auto" className="text-right">
                    <Button color="danger" onClick={() => onDeleteUser(user)}>
                        Delete
                    </Button>{' '}
                    <Link
                        to={`/user/update/${user.id}`}
                        className="btn btn-primary"
                    >
                        Update
                    </Link>
                </Col>
            </Row>
        </CardBody>
    </Card>
);

UserRow.propTypes = {
    onDeleteUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

export default UserRow;