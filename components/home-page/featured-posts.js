import classes from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';

function FeaturedPosts(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
