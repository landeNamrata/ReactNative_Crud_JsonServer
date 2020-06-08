import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";
// import BlogContext from "../Context/BlogContext";
import { Context } from "../Context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

    const { state, getBlogPost, deleteBlogPost } = useContext(Context);
    useEffect(() => {
        getBlogPost();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        });
        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
            {/* <Button title="Add Post" onPress={addBlogPost} /> */}
            <FlatList
                keyExtractor={blogPost => blogPost.title}
                data={state}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24} color="black" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );

                }}
            />
        </View>
    )
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 24,
    }
});

export default IndexScreen;
