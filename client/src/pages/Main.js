import React, { Component } from "react";
import { Container } from "../components/Layout/index";
import Nav from "../components/Nav/index";
import Jumbo from "../components/Jumbo/index";
import SearchForm from "../components/Search/index";
import API from "../utils/API";
import Results from "../components/SearchResultList/index";

class Main extends Component {

    state = {
        books: [],
        search: "",
    };


    //Function to search books via API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    saveGoogleBook = currentBook => {
        console.log("Current book:", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(res => console.log("Successfully posted to db", res))
        .catch(err => console.log(err));
    };

      // Function to handle data submitted through form
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    // Function to handle user input
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbo />
                <SearchForm>
                
                </SearchForm>
                
                {this.state.books.length ? (
                    <Results 
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </Results>
                ) : (
                    <div>
                        <hr/>
                    <p style>No results to display</p>
                    </div>
                )}
                
                </Container>
            </div>
        )
    }
}

export default Main