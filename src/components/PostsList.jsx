import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, destroyPost } from '../store/slices/postsSlice';


const IDLE = 'idle'
const LOADING = 'loading'
const FAILED = 'failed'

const LOADING_MESSAGE = 'Cargando...'
const EMPTY_MESSAGE = 'No hay posts para mostrar'

const COLUMN_NAME_TITLE = 'Nombre';
const COLUMN_DESCRIPTION_TITLE = 'Descripción';
const COLUMN_ACTION_TITLE = 'Acción';

const DELETE_BUTON_TEXT = 'Eliminar';

const ERROR_PREFIX = 'Error:'


function PostsList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.filteredPosts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (status === IDLE) {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    if (status === LOADING) {
        return <div>{LOADING_MESSAGE}</div>;
    }

    if (status === FAILED) {
        return <div>{ERROR_PREFIX} {error}</div>;
    }

    function deletePost(id) {
        dispatch(destroyPost(id));
    }

    return (
        <div>
            {posts.length === 0 ?
                <p>{EMPTY_MESSAGE}</p> :
                <table>
                    <thead>
                        <tr>
                            <td><b>{COLUMN_NAME_TITLE}</b></td>
                            <td><b>{COLUMN_DESCRIPTION_TITLE}</b></td>
                            <td><b>{COLUMN_ACTION_TITLE}</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.name}</td>
                                <td>{post.description}</td>
                                <td><button onClick={() => deletePost(post.id)}>{DELETE_BUTON_TEXT}</button></td>
                            </tr>))}
                    </tbody>
                </table>}
        </div>
    );
};

export default PostsList;
