import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, destroyPost } from '../store/slices/postsSlice';

function PostsList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.filteredPosts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    function deletePost(id) {
        dispatch(destroyPost(id));
    }

    return (
        <div>
            {
                posts.length == 0 ?
                    <p>No hay posts para mostrar</p> :
                    <table>
                        <thead>
                            <tr>
                                <td><b>nombre</b></td>
                                <td><b>descripción</b></td>
                                <td><b>acción</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post) => (
                                    <tr key={post.id}>
                                        <td>{post.name}</td>
                                        <td>{post.description}</td>
                                        <td><button onClick={() => deletePost(post.id)}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default PostsList;
