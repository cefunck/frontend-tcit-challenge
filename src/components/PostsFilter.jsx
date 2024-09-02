import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPostsBy } from "../store/slices/postsSlice";

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
                placeholder="palabra clave"
            />
            <button onClick={filterPosts}>Buscar</button>
        </div>
    );
};

export default PostsFilter;
