import classes from "./Home.module.css";

const Home = ({ Title, Image, Description, Url, Source }) => {
  return (
    <div className={classes.home__project}>
      <div className={classes.home__projectInfo}>
        <p className={classes.home__title}>{Title}</p>
        <img className={classes.home__image} src={Image} alt={Title} />
        <p className={classes.home__description}>{Description}</p>
      </div>
      <ul className={classes.home__link}>
        <a
          href={Url}
          target="_blank"
          rel="noreferrer noopener"
          className={classes.home__site}
        >
          <li>Visit Site &rarr;</li>
        </a>
        <a
          href={Source}
          target="_blank"
          rel="noreferrer"
          className={classes.home__site}
        >
          <li>Source Code &rarr;</li>
        </a>
      </ul>
    </div>
  );
};

export default Home;
