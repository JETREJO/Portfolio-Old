import { MEDIA_ICONS } from "../../dictionaries/media";
import EllipticalButton from "../buttons/elliptical/ellipticalButton";
import styles from "./about.module.css";

const PHOTO_URL = `${import.meta.env.BASE_URL}/images/about-photo-test.webp`;
const RESUMEE_URL = `${import.meta.env.BASE_URL}/certifications/JavierTrejo-Resumee.pdf`;

const About = () => {

  return (
    <section className={styles.sectionWrapper} id="about">

      <h2>About me</h2>

      <div className={styles.infoContainer}>
        <article className={styles.photoWrapper}>
          <img src={PHOTO_URL} alt="Fotografía JT" />
          <a href={RESUMEE_URL} target="_blank" rel="noopener noreferrer">
            <EllipticalButton style={{fontSize: "15px", border:"transparent", fontWeight: "600"}}>
              View Resumee
            </EllipticalButton>
          </a>
        </article>

        <article className={styles.descriptionWrapper}>
          <div className={styles.media}>
            {MEDIA_ICONS.LINKEDIN}
            {MEDIA_ICONS.GITHUB}
            {MEDIA_ICONS.INDEED}
            {MEDIA_ICONS.INSTAGRAM}
          </div>
          <p>
            Hello there! I'm Javier Trejo a web developer with more than&nbsp;
            <span className={styles.highlighted}>4 years</span>&nbsp;
            of experience building&nbsp;
            <span className={styles.highlighted}>user-friendly</span>&nbsp;
            applications. Throughout my jurney, I've collaboratedwith my co-workers in their duties across diverse areas like&nbsp;
            <span className={styles.highlighted}>backend, design</span>&nbsp;
            and&nbsp;
            <span className={styles.highlighted}>database managment,</span>&nbsp;
            learning a lot from them. I'm constantly exploring&nbsp;
            <span className={styles.highlighted}>new technologies </span>&nbsp;
            and resources to build&nbsp;
            <span className={styles.highlighted}>smooth</span>&nbsp;
            and&nbsp;
            <span className={styles.highlighted}>scalable</span>&nbsp;
            apps.
          </p>
        </article>
      </div>

    </section>
  );
};

export default About;