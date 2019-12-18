import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import BookList from '../../components/BookList/BookList';
import './Book.css';

class Book extends Component {
	bookSelection = (book) => {
    this.props.selectBook(book)
	}
	
  render () {
		let filteredArray = this.props.books.filter(item => item.isbn !== this.props.details.isbn).slice(0,4);
    return (
      <div className='card'>
				<div className='row'>
					<div className='preview col-md-5 col-md-offset-1'>
						  <div><img src={this.props.details.imageLarge} alt={this.props.details.title}/></div>
              <div className='author'><h4>Author: {this.props.details.author}</h4></div>
					</div>
					<div className='details col-md-5 col-md-offest-1'>
						<h3 className='product-title'>{this.props.details.title}</h3>
            <h5 className='product-subtitle'>{this.props.details.subtitle}</h5>
						<div className='rating'>
							<div className='stars'>
								<span className='fa fa-star checked'></span>
								<span className='fa fa-star checked'></span>
								<span className='fa fa-star checked'></span>
								<span className='fa fa-star'></span>
								<span className='fa fa-star'></span>
							</div>
						</div>
            <div className='action'>
              <button className='btn btn-success' type='button'><span className='fa fa-share'> Share</span></button>
							<button className='btn btn-danger' type='button'><span className='fa fa-heart'> Favorite</span></button>
						</div>
						<p className='product-description'>{this.props.details.description}</p>
						<h4 className='publisher'><b>Publisher :</b> <span>{this.props.details.publisher}</span></h4>
						<p className='pages'><b>Year :</b> {new Date(this.props.details.published).getFullYear()}</p>
            <p className='pages'><b>Number of pages :</b> {this.props.details.pages}</p>
						<p className='pages'><b>Category :</b> {this.props.details.category}</p>
						<p className='vote'><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<p className='isbn'><b>ISBN-10 :</b> {this.props.details.isbn}</p>
						<p className='isbn'><b>ISBN-13 :</b> {this.props.details.isbn13}</p>
						<div className='action'>
							<button className='btn btn-primary' type='button'><span className='fa fa-shopping-cart'> Add to cart</span></button>
						</div>
					</div>
				</div>
				<BookList books={filteredArray} bookSelection={this.bookSelection} title='Other books you may like'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Book);