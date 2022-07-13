import classes from "./About.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const About = () => {
  return (
    <div className={classes.about__info}>
      <p className={classes.about__LineOne}>Swapnil Mishra</p>
      <p className={classes.about__LineTwo}>
        I am a recent graduate having pursued Information Technology from Guru Tegh
        Bahadur Institute of Technology affiliated to Guru Gobind Singh
        Indraprastha University.
        <br />
        This website is my portfolio for various projects that I have built like Clones of 
        Instagram, Amazon and Hulu or guided projects like Memories and Campbea.
      </p>
      <div className={classes.about__LineThreeDiv}>
        <p className={classes.about__LineThree}>Contact me on</p>
        <div>
          <a
            href="https://www.linkedin.com/in/swapnil-m13919/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon className={classes.social} fontSize="large" />
          </a>
          &nbsp;
          <a href="mailto:mishra14912@gmail.com">
            <EmailIcon className={classes.social} fontSize="large"  />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://github.com/swapnil14912"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon className={classes.social} fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
