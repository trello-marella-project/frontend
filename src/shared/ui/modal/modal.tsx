import { Dispatch, ReactNode } from "react";
import { Modal as AntdModal } from "antd";

interface ModalI {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<boolean>;
  children: ReactNode;
  title: string;
  handleOk: () => void;
}

export const Modal = ({
  isModalVisible,
  setIsModalVisible,
  title,
  children,
  handleOk,
}: ModalI) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <AntdModal
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      {children}
    </AntdModal>
  );
};
