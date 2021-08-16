import Hero from '../components/home-page/hero';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  const { featuredPosts } = props;
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta
          name="description"
          content="I post about programming and web devlopment"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}
export default HomePage;
