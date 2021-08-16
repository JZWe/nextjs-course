import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.PNG"
          alt="An image showing Max 300"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        I blog about web devlopment - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
