import clsx from "clsx";

import AboutMe from "components/AboutMe";
import Container from "components/Container"
import Title from "components/Title"

import styles from "styles/pages.module.scss";

const About = () => {
  return (
    <Container>
      <div className={clsx(styles.page, styles.about)}>
        <Title text="About Me" />
        <AboutMe />
      </div>
    </Container>
  )
}

export default About