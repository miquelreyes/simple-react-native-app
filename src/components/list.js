import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Post from "./post";
import React from "react";
import { fetchPostsRequest } from '../redux/actions/postsActions';
import { selectPosts } from '../redux/selectors/postsSelectors'
import { useEffect } from 'react';

const List = () => {
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()
    
    useEffect(() => {
		dispatch(fetchPostsRequest());
	}, [dispatch]);

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