import clsx from "clsx";

import Container from "components/Container"
import Title from "components/Title"
import WorkList from "components/WorkList";

import styles from "styles/pages.module.scss";

const Works = () => {
  return (
    <Container>
      <div className={clsx(styles.page, styles.works)}>
        <Title text="Recent Works" />
        <WorkList />
      </div>
    </Container>
  )
}

export default Works