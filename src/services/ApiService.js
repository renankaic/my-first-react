const apiEndpoint = 'http://localhost:8000/api'

const ApiService = {

    CreateAuthor: (author) => {
        
        return fetch(apiEndpoint + '/autor', {
            method: "POST", 
            headers: { 'Content-type': 'application/json'},
            body: author 
        })
        .then(res => res.json())        
        
    },
    ListBooks: () => fetch(apiEndpoint + '/autor/livro').then(res => res.json()),    
    RemoveAuthor: (id) => fetch(apiEndpoint + `/autor/${id}`, { method: "DELETE" }),
    ListNames: () => fetch(apiEndpoint + '/autor/nome').then(res => res.json()),
    ListAuthors: () => fetch(apiEndpoint + '/autor').then(res => res.json()),
}

export default ApiService