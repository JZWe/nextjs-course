import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
  const { selectedPostData } = props;

  return (
    <>
      <Head>
        <title>{selectedPostData.title}</title>
        <meta name="description" content={selectedPostData.excerpt} />
      </Head>
      <PostContent post={selectedPostData} />
    </>
  );
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  const paramsWithSlugs = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths: paramsWithSlugs,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const selectedPostData = getPostData(slug);

  return {
    props: { selectedPostData },
  };
}
export default PostDetailPage;
