import { ReactNode, useState } from "react";
import { Layout, Menu } from "antd";

import styles from "./private-layout.module.scss";

const { Header, Sider, Content } = Layout;

interface Props {
  children: ReactNode;
}

export const PrivateLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // <div className={styles.container}>
    //   <main>{children}</main>
    // </div>
    <Layout>
      <Sider collapsed={collapsed} collapsible>
        <Menu theme="light" mode="inline" />
      </Sider>
    </Layout>
  );
};
