import { ReactNode } from "react";
import { Layout, Menu, Button } from "antd";

import styles from "./private-layout.module.scss";

import { PageI, pages } from "../../lib/pages";
import { useNavigate } from "react-router";
import { CreateSpaceForm } from "../../../spaces";
import { useModal } from "shared/lib";

const { Sider, Content } = Layout;

interface Props {
  children: ReactNode;
}

export const PrivateLayout = ({ children }: Props) => {
  const navigate = useNavigate();
  const { isModalVisible, setIsModalVisible, toggleModal } = useModal();

  return (
    <Layout className={styles.container}>
      <Sider theme="light">
        <Menu theme="light" mode="inline">
          {pages.map(({ title, link }: PageI) => (
            <Menu.Item key={link} onClick={() => navigate(link)}>
              {title}
            </Menu.Item>
          ))}
          <CreateSpaceForm
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
          <Button
            type="primary"
            style={{ margin: "20px" }}
            onClick={toggleModal}
          >
            Create space +
          </Button>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
