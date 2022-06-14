import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./grid.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Grid = ({ className, children }: Props) => {
  return <div className={classNames(styles.grid, className)}>{children}</div>;
};
