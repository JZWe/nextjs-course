import classes from './post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
  const { post } = props;
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  console.log(imagePath);
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              layout="responsive"
              src={imagePath}
              alt={title}
              width={300}
              height={200}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
