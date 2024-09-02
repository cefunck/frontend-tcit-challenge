import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPostsBy } from "../store/slices/postsSlice";

const SEARCH_INPUT_PLACEHOLDER = 'palabra clave';
const SEARCH_BUTTON_TEXT = 'Buscar';

function PostsFilter() {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('');

    function filterPosts() {
        dispatch(filterPostsBy(keyword));
    }

    return (
        <div>
            <input
                type="text"
                value={keyword}
                onChange={(event) => { setKeyword(event.target.value) }}
                placeholder={SEARCH_INPUT_PLACEHOLDER}
            />
            <button onClick={filterPosts}>{SEARCH_BUTTON_TEXT}</button>
        </div>
    );
};

export default PostsFilter;
