import {gql} from '@apollo/client';

export const SIGNUP_USER = gql`
   mutation signupUser(
    $username: String!,
    $email: String!,
    $password: String!
   ){
         signupUser(
            username: $username,
            email: $email,
            password: $password
            ){
                token
                user {
                    _id
                    username
                    email
                    }
            }
    }
`;
export const LOGIN_USER = gql`
    mutation login(
        $email: String!,
        $password: String!
    ){
        login(
            email: $email,
            password: $password
        ){
            token
            user {
                _id
                username
                
            }
        }
    }
`
export const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookData: $bookData){
      _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;
               
    
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId){
            id
            username
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;
