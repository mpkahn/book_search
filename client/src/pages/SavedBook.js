  
import React, { Component } from "react";
import API from "../utils/API";
import Jumbo from "../components/Jumbo/index";
import { Container} from "../components/Layout/index";
import SearchResultList from "../components/SearchResultList"

class SavedBook extends Component {
    state = {
        savedBooks: []
    };

       //function to remove a book based on ID
       handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }


    //retrieve all books that are saved to the database
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

 

    render() {
        return (
            <Container fluid className="container">
                <Jumbo />
                <Container>
                    <SearchResultList savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SavedBook 