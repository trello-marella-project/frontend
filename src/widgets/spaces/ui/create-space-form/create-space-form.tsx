import { Modal } from "shared/ui";
import { Dispatch } from "react";

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<boolean>;
}

export const CreateSpaceForm = ({
  setIsModalVisible,
  isModalVisible,
}: Props) => {
  const handleOk = () => {
    console.log("meow");
  };

  return (
    <Modal
      title="Create space"
      handleOk={handleOk}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      meow
    </Modal>
  );
};
