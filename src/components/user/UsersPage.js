import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import UserRow from './UserRow';
import { getUsers } from '../../actions/userActions';
class UsersPage extends Component {
    
    componentWillMount() {
        this.props.getUsers();
    }

    ConfirmDelete() {
    }

    render() {
        const { users } = this.props;
        const hasUsers = users && users.list && users.list.length > 0;
        return(
            <React.Fragment>
            <h1>Users</h1>
                <hr />
                {!hasUsers && (
                    <Alert color="info">No users could be found.</Alert>
                )}

            {hasUsers && (
            <React.Fragment>
                {users.list.map(userq => (
                    <UserRow 
                        key={userq.id}
                        user={userq}
                        onDeleteUser={this.ConfirmDelete}
                    />
                ))}                
            </React.Fragment>
            )}
            </React.Fragment>
        );
    }   
    
};

const mapStateToProps = state => ({
    users: state.users
   
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers())
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);