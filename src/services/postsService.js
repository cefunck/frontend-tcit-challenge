const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const POSTS_ENDPOINT = '/api/v1/posts';

const GET_NOT_OK = 'GET response was not ok';
const DESTROY_NOT_OK = 'DESTROY response was not ok';
const CREATE_NOT_OK = 'CREATE response was not ok';

const GET_ERROR = 'Error fetching posts';
const DESTROY_ERROR = 'Error deleting posts';
const CREATE_ERROR = 'Error creating post';



const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const getPosts = async () => {
    try {
        const url = `${API_BASE_URL}${POSTS_ENDPOINT}`
        const response = await fetch(url, {
            method: 'GET',
            headers: HEADERS
        });
        if (!response.ok) {
            throw new Error(GET_NOT_OK)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(GET_ERROR, error)
        throw error
    }
};

const deletePost = async (id) => {
    try {
        const url = `${API_BASE_URL}${POSTS_ENDPOINT}/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: HEADERS
        })
        if (!response.ok) {
            throw new Error(DESTROY_NOT_OK)
        }
        const deletedPost = await response.json();
        return deletedPost;
    } catch (error) {
        console.error(`${DESTROY_ERROR} ${id}`, error)
    }
}

const createPost = async (postName, postDescription) => {
    const postData = {
        'post': { 'name': postName, 'description': postDescription }
    }

    try {
        const url = `${API_BASE_URL}${POSTS_ENDPOINT}`
        const response = await fetch(url, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(postData)
        })
        if (!response.ok) {
            throw new Error(CREATE_NOT_OK)
        }
        const createdPosts = await response.json();
        return createdPosts;
    } catch (error) {
        console.error(CREATE_ERROR, error)
    }
};

export { getPosts, deletePost, createPost };