import { ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import axios from 'axios';
import Post from "./post";
import React from "react";

const List = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
            })
    }

    
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
      <ScrollView style={styles}>
      {posts.map(post => (
          <Post post={post} key={post.id} />
      ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    paddingHorizontal: 20,
    paddingVertical: 30,
})

export default List