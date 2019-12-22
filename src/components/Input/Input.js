import React from 'react';

import  './Input.css';

const input = ( props ) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = ['form-control'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('invalid');
        validationError =  <div className='alert alert-danger'>{props.errorMessage}</div>;
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
        break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className='input'>
            <label className='control-label label'>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );

};

export default input;