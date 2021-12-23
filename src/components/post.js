import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
    const {title, body} = post
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string
    })
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 10,
        borderWidth: 4,
        borderColor: '#000000'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    body: {

    }
})

export default Post