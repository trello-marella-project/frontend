import { ReactNode } from "react";
import { Col, Row } from "antd";

import { Grid } from "shared/ui";

import styles from "./auth-layout.module.scss";

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <Grid className={styles.grid}>
      <Row align="middle">
        <Col span={8} offset={8} className={styles.col}>
          {children}
        </Col>
      </Row>
    </Grid>
  );
};
