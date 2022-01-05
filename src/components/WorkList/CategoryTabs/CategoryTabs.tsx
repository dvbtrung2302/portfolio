import clsx from 'clsx'

import styles from "./CategoryTabs.module.scss"

import { CATEGORY_TYPE } from 'constants/global';

export interface ICategoryTabsProps {
  className?: string,
  currentCategory: string,
  onCategoryClick?: Function
}

const CategoryTabs = (props: ICategoryTabsProps) => {
  const { className, currentCategory, onCategoryClick } = props;

  const handleCategoryClick = (category: string): void => {
    if (onCategoryClick) onCategoryClick(category)
  }

  return (
    <ul className={clsx(styles.root, className && className)} data-test="category-tabs">
      { Object.keys(CATEGORY_TYPE).map(item =>
        <li 
          className={clsx(styles.item, currentCategory === item && styles.active)} 
          key={item}
          onClick={() => handleCategoryClick(item)}
          data-test={`category-tab-${item}`}
        >
          { CATEGORY_TYPE[item] }
        </li>  
      )}
    </ul>
  )
}

export default CategoryTabs