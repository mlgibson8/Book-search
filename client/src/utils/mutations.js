import {gql} from '@apollo/client';

export const SIGNUP_USER = gql`
   mutation signup(
    $username: String!,
    $email: String!,
    $password: String!
   ){
         signup(
            username: $username,
            email: $email,
            password: $password
            ){
                token
                user {
                    _id
                    username
                    email
                    bookCount
                }
            }
    }
`
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
                email
                bookCount
            }
        }
    }
`
export const SAVE_BOOK = gql`
    mutation saveBook(
        $bookId: String!,
        $image: String!,
        $title: String!,
        $authors: [String],
        $link: String!,
        $description: String!) {
            saveBook(
                bookId: $bookId,
                image: $image,
                title: $title,
                authors: $authors,
                link: $link,
                description: $description
            ){
                id
                username
                email
                savedBooks {
                    bookId                 
            }
        }
    }
    `
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId){
            id
            username
            email
            savedBooks {
                bookId
            }
        }
    }
`
