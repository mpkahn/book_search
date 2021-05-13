import React, { Component } from "react";
import { Container } from "../components/Layout/index";
import Nav from "../components/Nav/index";
import Jumbo from "../components/Jumbo/index";
import SearchForm from "../components/Search/index";
import API from "../utils/API";
import ResultList from "../components/ResultList/ResultList";

class Main extends Component {

    state = {
        books: [],
        search: "",
        error: "",
    };


    //Function to search books via API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(res => console.log("Successful POST to DB!", res))
        .catch(err => console.log("this is the error", err));
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
                    <h5>Search for books</h5>
                    <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="e.g. Harry Potter"
                    />
                    <SubmitBtn onClick={this.handleFormSubmit}/>
                </SearchForm>
                
                {this.state.books.length ? (
                    <ResultList 
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </ResultList>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
                
                </Container>
            </div>
        )
    }
}

export default Main