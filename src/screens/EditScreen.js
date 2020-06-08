import React, { useContext } from 'react'
import { StyleSheet } from "react-native"
import { Context } from "../Context/BlogContext"
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
    //console.log({navigation.getParam('id')})
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find(
        (blogPost) => blogPost.id === id
    );
    // const [title, setTitle] = useState(blogPost.title);
    // const [content, setContent] = useState(blogPost.content);
    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onsubmit={(title, content) => {
                console.log(title, content)
                editBlogPost(id, title, content, () => navigation.navigate('Index'))
            }}
        />
    )
}

const styles = StyleSheet.create({})

export default EditScreen;