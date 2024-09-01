import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveNewPost } from '../store/slices/postsSlice'

const PostsForm = () => {
    const dispatch = useDispatch();
    let [newPostName, setNewPostName] = useState('');
    let [newPostDescription, setNewPostDescription] = useState('');

    function changeNewPostName(event){
        setNewPostName(event.target.value)
    }
    
    function changeNewPostDescription(event){
        setNewPostDescription(event.target.value)
    }

    function resetInputs(){
        setNewPostName('');
        setNewPostDescription('');
    }

    function createPost() {
        if(newPostName && newPostDescription) {
            dispatch(saveNewPost({newPostName, newPostDescription}))
            resetInputs();
        } else if(!newPostName && !newPostDescription) {
            alert('Los campos nombre y descripción no pueden estar vacíos')
        } else if(!newPostName) {
            alert('El campo nombre no puede estar vacío')
        } else {
            alert('El campo descripción no puede estar vacío')
        }
    }

    return (
        <div>
            <input type="text" value={newPostName} onChange={changeNewPostName} placeholder="nombre" />
            <input type="text" value={newPostDescription} onChange={changeNewPostDescription} placeholder="descripción" />
            <button onClick={createPost}>Crear</button>
        </div>
    );
};

export default PostsForm;
