import React, { useState } from 'react'
import createDataContext from '../screens/createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;

        case 'delete_blogpost':
            return state.filter((blogPosts) => blogPosts.id !== action.payload);
        case 'edit_blogpost':
            return state.map((blogPosts) => {
                return blogPosts.id === action.payload.id ? action.payload : blogPosts;
            });
        default:
            return state;
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        // dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (callback) {
            callback()
        }
    };
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`,{title,content})
        dispatch({
            type: 'edit_blogpost',
            payload: { id: id, title: title, content: content }
        });
        if (callback) {
            callback()
        }

    };
}

export const { Context, Provider } = createDataContext(
    blogReducer, // reducer
    { getBlogPost, addBlogPost, deleteBlogPost, editBlogPost }, //action
    [] //default state
);












// import React,{useState ,useReducer} from 'react'
// const BlogContext = React.createContext();
// export const BlogProvider = ({ children }) => {
//     const [blogPosts,setBlogPosts] = useState([]);
// export const BlogProvider = ({ children }) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);
//     return (
//         <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//             {children}
//         </BlogContext.Provider>
//     );
// };

//     const addBlogPost = () =>{
//         setBlogPosts([...blogPosts,{ title:`Blog Post #${blogPosts.length + 1}`}]);
//     }

//     const editBlogPost = () => {}

//     const deleteBlogPost = () => {}

//     // const blogPosts = [
//     //     {title:'Blog Post #1'},
//     //     {title:'BlogPost #2'}
//     // ];

//    return (
// <BlogContext.Provider value={{data:blogPosts , addBlogPost}}>{children}</BlogContext.Provider>
//     );
// };

// export default BlogContext;