const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const getPosts = async () => {
    try {
        const url = `${API_BASE_URL}/api/v1/posts`
        const response = await fetch(url, {
            method: 'GET',
            headers: HEADERS
        });
        if (!response.ok) {
            throw new Error('GET response was not ok')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts", error)
        throw error
    }
};

const deletePost = async (id) => {
    try {
        const url = `${API_BASE_URL}/api/v1/posts/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: HEADERS
        })
        if (!response.ok) {
            throw new Error('DESTROY response was not ok')
        }
        const deletedPost = await response.json();
        return deletedPost;
    } catch (error) {
        console.error(`Error deleting post ${id}`, error)
    }
}

const createPost = async (postName, postDescription) => {
    const postData = {
        'post': { 'name': postName, 'description': postDescription }
    }

    try {
        const url = `${API_BASE_URL}/api/v1/posts`
        const response = await fetch(url, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(postData)
        })
        if (!response.ok) {
            throw new Error('CREATE response was not ok')
        }
        const createdPosts = await response.json();
        return createdPosts;
    } catch (error) {
        console.error('Error creating post', error)
    }
};

export { getPosts, deletePost, createPost };