import clsx from "clsx";

import Container from "components/Container"
import ExperienceList from "components/ExperienceBox";
import Title from "components/Title"

import { INFO } from "constants/global";

import styles from "styles/pages.module.scss";

const Experience = () => {
  return (
    <Container>
      <div className={clsx(styles.page, styles.commonPage)}>
        <Title text="Experience" />
        <div className={styles.experienceContent}>
          <ExperienceList items={INFO.education} />
          <ExperienceList items={INFO.works} />
        </div>
      </div>
    </Container>
  )
}

export default Experience