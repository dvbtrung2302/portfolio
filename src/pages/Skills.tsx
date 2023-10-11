import clsx from "clsx";

import Container from "components/Container";
import SkillList from "components/SkillList";
import Title from "components/Title";

import styles from "styles/pages.module.scss";

const Skills = () => {
  return (
    <Container>
      <div className={clsx(styles.page, styles.commonPage)}>
        <Title text="My Skills" />
        <SkillList />
      </div>
    </Container>
  );
};

export default Skills;
