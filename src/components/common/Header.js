import React, { Component } from 'react';

import { connect } from 'react-redux';

import history from '../../history';
import {
    Navbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFeather from '@fortawesome/fontawesome-free-solid/faFeather';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        history.listen(this.handleRouteChange);
    }

    handleToggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleRouteChange() {
        this.setState({ isOpen: false });
    }

    handleLogout() {
        this.props.removeToken();
        history.push('/');
    }

    render() {
        const { currentUser } = this.props;

        // const isUserAdministrator =
        //     currentUser &&
        //     currentUser.role &&
        //     currentUser.role.includes(USER_ADMINISTRATOR);

        return (
            <Navbar color="dark" dark expand="lg" fixed="top">
                <Container>
                    <NavbarBrand to="/" tag={Link}>
                        <FontAwesomeIcon icon={faFeather} fixedWidth /> Falcon
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={this.handleToggle}
                        aria-label="Toggle navigation"
                    />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink to="/" tag={Link}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about" tag={Link}>
                                    About
                                </NavLink>
                            </NavItem>

                            
                        </Nav>

                        {currentUser && (
                            <Nav navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <img
                                            src={currentUser.picture}
                                            alt={`${currentUser.given_name} ${
                                                currentUser.family_name
                                            }`}
                                            className="rounded-circle mr-2 d-inline-block"
                                        />{' '}
                                        {currentUser.given_name}{' '}
                                        {currentUser.family_name}{' '}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem to="/manage" tag={Link}>
                                            My Account
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={this.handleLogout}
                                        >
                                            Log Off
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        )}

                        {!currentUser && (
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/account/login" tag={Link}>
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/account/register" tag={Link}>
                                        Register
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        )}
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: undefined // TODO: state.token.currentUser
});

// const mapDispatchToProps = dispatch => ({
//     removeToken: () => dispatch(removeToken())
// });

// Header.propTypes = {
//     removeToken: PropTypes.func.isRequired,
//     currentUser: PropTypes.object
// };

export default connect(mapStateToProps, undefined)(Header);