export const fetchPostsRequest = () => {
    return {
        type: 'FETCH_POSTS_REQUEST'
    }
}

export const fetchPostsStart = () => {
    return {
        type: 'FETCH_POSTS_START'
    }
}

export const fetchPostsSuccess= posts => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts: posts,
    }
}

export const fetchPostsError= () => {
    return {
        type: 'FETCH_POSTS_ERROR'
    }
}