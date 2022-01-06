import clsx from 'clsx'

import styles from "./GithubLink.module.scss"

export interface IGithubLinkProps {
  className?: string
}

const GithubLink = (props: IGithubLinkProps) => {
  const { className } = props;

  return (
    <div className={clsx(styles.root, className && className)}>
      <a href="https://github.com/dvbtrung2302/portfolio" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
  )
}

export default GithubLink