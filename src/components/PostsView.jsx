import PostsFilter from './PostsFilter';
import PostsForm from './PostsForm';
import PostsList from './PostsList';

const PostsView = () => {
    return (
        <div>
            <PostsFilter />
            <PostsList />
            <PostsForm />
        </div>
    );
};

export default PostsView;
