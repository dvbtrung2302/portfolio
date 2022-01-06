import clsx from "clsx";

import Container from "components/Container"
import Title from "components/Title"
import ContactForm from "components/ContactForm";

import styles from "styles/pages.module.scss";

const Contact = () => {
  return (
    <Container>
      <div className={clsx(styles.page, styles.commonPage)}>
        <Title text="Get in Touch" />
        <ContactForm />
      </div>
    </Container>
  )
}

export default Contact