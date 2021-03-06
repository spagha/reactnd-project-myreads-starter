import React, { Component } from 'react'

class BookShelf extends Component {
  
  render() {
    const { bookshelfOption, books, onUpdateShelf } = this.props
    const bookshelfFiltered = bookshelfOption === 'searched' ? books : books.filter(book => book.shelf === bookshelfOption)
    let bookshelfTitle = ''
    switch (bookshelfOption) {
      case 'currentlyReading':
        bookshelfTitle = 'Currently Reading'
        break
      case 'wantToRead':
        bookshelfTitle = 'Want to Read'
        break
      case 'read':
        bookshelfTitle = 'Read'
        break
      default:
        bookshelfTitle = 'Searched Books'
        break
    }
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
          {bookshelfFiltered.map((book) => (
            <li key={book.id}>
              <div className="book">
              <div className="book-top">
              <div className="book-cover" style={{
                width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`
              }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => onUpdateShelf(book, event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
              </div>
            </li>
          ))}
          </ol>
          </div>
        </div>
        )
      }
    }
    
    export default BookShelf