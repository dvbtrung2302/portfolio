import { useState } from 'react';
import clsx from 'clsx'

import styles from "./WorkList.module.scss"

import { INFO, PROJECT_LIMIT } from 'constants/global';

import WorkItem from './WorkItem';
import CategoryTabs from './CategoryTabs';
import Button from 'components/Button';
import { IProject } from 'typings';

export interface IWorkListProps {
  className?: string,
}

const WorkList = (props: IWorkListProps) => {
  const { className } = props;
  const [currentCategory, setCurentCategory] = useState<string>("all");
  const [limit, setLimit] = useState<number>(PROJECT_LIMIT)

  const handleCategoryChange = (category: string): void => {
    if (currentCategory !== category) {
      setCurentCategory(category)
      setLimit(PROJECT_LIMIT)
    }
  }

  const handleLoadMore = (): void => {
    setLimit(prevLimit => prevLimit + 3)
  }

  const getList = (): IProject[] => {
    return INFO.projects.filter(item => 
      currentCategory === "all" ? 
      item : 
      item.category === currentCategory
    )
  }

  return (
    <div className={clsx(styles.root, className && className)}>
      <CategoryTabs 
        currentCategory={currentCategory} 
        onCategoryClick={handleCategoryChange}
      />
      <div className={styles.list}>
        { getList()
          .slice(0, limit)
          .map(item =>
          <WorkItem key={item.id} {...item} />  
        )}
      </div>
      { getList().length > limit &&
        <div className={styles.button}>
          <Button onClick={handleLoadMore}>Load more</Button>
        </div>
      }
    </div>
  )
}

export default WorkList