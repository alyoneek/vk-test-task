import { FC, ReactNode } from "react";

import styles from "./layout.module.scss";

interface layoutProps {
  children?: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Layout;
