import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import Spinner from '../components/Spinner/Spinner';
import Input from '../components/Input/Input';

class CreateBook extends Component {
    state = {
        orderForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 120,
                    specialCharacters: true
                },
                label: 'Title *',
                errorMessage: 'Invalid Title. Title should be between 10 and 120 characters.',
                valid: false,
                touched: false
            },
            subTitle: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subtitle ^'
                },
                value: '',
                validation: {
                    required: true
                },
                validation: {
                    required: false
                },
                label: 'Subtitle',
                errorMessage: '',
                valid: false,
                touched: false
            },
            description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 512,
                    starstsWithCapital: true
                },
                label: 'Description *',
                errorMessage: 'Invalid description. Description should shorter than 512 characters and start with capital letter.',
                valid: false,
                touched: false
            },
            publisher: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Publisher'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 60,
                },
                label: 'Publisher',
                errorMessage: 'Invalid publisher. Publisher should be between 5 and 60 characters.',
                valid: false,
                touched: false
            },
            year: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Year'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                    maxNumber: 2020,
                    isNumeric: true
                },
                label: 'Year Published *',
                errorMessage: 'Invalid year. Year should be numeric with 4 characters and lower than 2020.',
                valid: false,
                touched: false
            },
            mumberOfPages: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Number of Pages'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 4,
                    isNumeric: true
                },
                label: 'Number of Pages *',
                errorMessage: 'Invalid Number of Pages. It should be up to 9999 pages.',
                valid: false,
                touched: false
            },
            isbn10: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ISBN-10'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    isNumeric: true
                },
                label: 'ISBN-10 *',
                errorMessage: 'Invalid Number of Pages. It should be 10 characters.',
                valid: false,
                touched: false
            },
            isbn13: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ISBN-13'
                },
                value: '',
                validation: {
                    required: false,
                    minLength: 13,
                    maxLength: 13,
                    isNumeric: true
                },
                label: 'ISBN-13 *',
                errorMessage: 'Invalid Number of Pages. It should be 13 characters.',
                valid: false,
                touched: false
            },
            category: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Category (Add up to four comma seperated)'
                },
                value: '',
                validation: {
                    required: false,
                    upToFourStrings: true,
                },
                label: 'Category',
                errorMessage: 'Invalid category. It should be up to four comma seperated.',
                valid: false,
                touched: false
            },
            author: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Author(s) (Add up to three comma seperated)'
                },
                value: '',
                validation: {
                    upToThreeStrings: true,
                    maxLength: 60,
                },
                label: 'Aythor *',
                errorMessage: 'Invalid author. It should be up to three comma seperated.',
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        // turn the Spinner on
        this.setState( { loading: true } );
        // get the submitted data
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        // constract the oject to be submitted
        const book =  {
            isbn: formData.isbn10,
            title: formData.title,
            subtitle: formData.subTitle,
            author: formData.author,
            published: new Date(formData.year).toString(),
            publisher: formData.publisher,
            pages: formData.mumberOfPages,
            description: formData.description,
            website: '',
            isbn13: formData.isbn13,
            category: formData.isbn13,
            image: 'http://covers.openlibrary.org/b/isbn/'+formData.isbn10+'-M.jpg',
            imageLarge: 'http://covers.openlibrary.org/b/isbn/'+formData.isbn10+'-L.jpg'
        }        
        
        // add new book to the existing list andupdate store
        let updatedList = [...this.props.books, book];
        this.props.initialBooks(updatedList);
        this.props.setBooksFiltered(updatedList);
        // turn the Spinner off
        this.setState( { loading: false } );
        //redirect the user to home page
        this.props.history.push( '/' );
    }

    checkValidity(value, rules) {
        // check if data are valid based on rules
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.maxNumber) {
            isValid = value <= rules.maxNumber && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.starstsWithCapital) {
            const pattern = /^[A-Z]/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.upToThreeStrings) {
            const pattern = /^[^,]+(?:,[^,]+){0,2}$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.upToFourStrings) {
            const pattern = /^[^,]+(?:,[^,]+){0,3}$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.specialCharacters) {
            const pattern = /^[a-zA-Z0-9@" #&*!&*)(+=._-]*$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // onevery input change get vlues, check validitu andset to touched
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form className='form-horizontal bookForm' onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        label={formElement.config.label}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        errorMessage={formElement.config.errorMessage}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button className='btn btn-success' disabled={!this.state.formIsValid}>SAVE</button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className='container'>
                <h3 className='title'>Create new book</h3>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      details: state.selectedBook,
      books: state.books,
      booksFiltered: state.booksFiltered
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      selectBook: (val) => dispatch(actionCreators.selectBook(val)),
      initialBooks: (val) => dispatch(actionCreators.initialBooks(val)),
      setBooksFiltered: (val) => dispatch(actionCreators.booksFiltered(val))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);