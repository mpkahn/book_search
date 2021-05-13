import axios from "axios";

export default {
    // Retrieves Google books from API
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Deletes selected book by ID
    deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
    },

    // Retreives books saved to DB
    getBooks: function() {
        return axios.get("/api/books");
    },
     // Saves books to DB
     saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Retrieves book with the specified ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
  
};