import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../Context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    //  console.log(navigation.getParam('id'))
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Title: {blogPost.title}</Text>
            <Text style={styles.content}>Content: {blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return{
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={40} />
    </TouchableOpacity>
    } 
       
}

const styles = StyleSheet.create({
    view: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 20,
        margin: 40,
        backgroundColor:'lightblue',
        borderRadius:14
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:10
    },
    content: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default ShowScreen;
