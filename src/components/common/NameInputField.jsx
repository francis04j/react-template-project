import  React, { props, Component } from 'react';
import PropTypes from 'prop-types';

export class NameInputField extends React.Component {
    constructor(){
        super(props);
        this.validateInput = this.validateInput.bind(this);
        this.state = {
            showError: false
        };
    }
    
    static defaultProps = {
        name: "Sandy",
        placeHolder: "deepblue",
        className: 'form-control'       
    }
    
    validateInput = (e) => {
        if(e.target.value && hasNumber(e.target.value)){
            this.setState({showError : true});
        }else{
            this.setState({showError : false});
        }
    }
    render() {
        const {name, label, className, placeHolder, ...rest } = this.props;
        return (
            <div>
                <label htmlFor={name}>{label}</label>
                {this.state.showError &&  <label for={name}>Invalid input</label>}
                <input 
                    type='text' 
                    name={name} 
                    onChange={this.validateInput}
                    placeholder={placeHolder}
                    className={className}
                    {...rest}
                     />
            </div>
        )
    }

}

NameInputField.propTypes = {
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    className: PropTypes.string
}
function hasNumber(inputText) {
    return /\d/.test(inputText);
}