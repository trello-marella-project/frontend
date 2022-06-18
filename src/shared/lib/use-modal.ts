import { useCallback, useState } from "react";

export const useModal = (defaultValue = false) => {
  const [isModalVisible, setIsModalVisible] = useState(defaultValue);

  const toggleModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [setIsModalVisible, isModalVisible]);

  return {
    isModalVisible,
    setIsModalVisible,
    toggleModal,
  };
};
