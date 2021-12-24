const initialState = {
    posts: [],
    loading: false
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        case 'FETCH_POSTS_ERROR':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default postsReducer