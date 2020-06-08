import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"

const BlogPostForm = ({ onsubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                onPress={() => onsubmit(title, content)}
                title="Save Blog Post"
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        fontSize: 18,
        borderWidth: 2,
        marginBottom: 15,
        padding: 5,
        margin: 5,
        backgroundColor: 'lightblue'
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        color: 'darkblue'
    }

})
export default BlogPostForm;