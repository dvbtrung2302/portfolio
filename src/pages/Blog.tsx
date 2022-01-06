import Container from "components/Container"
import Title from "components/Title"

import styles from "styles/pages.module.scss";

const Blog = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Title text="Latest Posts" />
      </div>
    </Container>
  )
}

export default Blog