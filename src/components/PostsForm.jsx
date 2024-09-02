import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveNewPost } from '../store/slices/postsSlice'


const ALL_MISSING_MESSAGE = 'Los campos nombre y descripción no pueden estar vacíos';
const MISSING_NAME_MESSAGE = 'El campo nombre no puede estar vacío';
const MISSING_DESCRIPTION_MESSAGE = 'El campo descripción no puede estar vacío';

const NAME_PLACEHOLDER = 'nombre';
const DESCRIPTION_PLACEHOLDER = 'descripción';

const CREATE_BUTTON_TEXT = 'Crear';


const PostsForm = () => {
    const dispatch = useDispatch();
    let [newPostName, setNewPostName] = useState('');
    let [newPostDescription, setNewPostDescription] = useState('');

    function changeNewPostName(event) {
        setNewPostName(event.target.value)
    }

    function changeNewPostDescription(event) {
        setNewPostDescription(event.target.value)
    }

    function resetInputs() {
        setNewPostName('');
        setNewPostDescription('');
    }

    function createPost() {
        if (newPostName && newPostDescription) {
            dispatch(saveNewPost({ newPostName, newPostDescription }))
            resetInputs();
        } else if (!newPostName && !newPostDescription) {
            alert(ALL_MISSING_MESSAGE)
        } else if (!newPostName) {
            alert(MISSING_NAME_MESSAGE)
        } else {
            alert(MISSING_DESCRIPTION_MESSAGE)
        }
    }

    return (
        <div>
            <input
                type="text"
                value={newPostName}
                onChange={changeNewPostName}
                placeholder={NAME_PLACEHOLDER}
            />

            <input
                type="text"
                value={newPostDescription}
                onChange={changeNewPostDescription}
                placeholder={DESCRIPTION_PLACEHOLDER}
            />

            <button onClick={createPost}>{CREATE_BUTTON_TEXT}</button>
        </div>
    );
};

export default PostsForm;
