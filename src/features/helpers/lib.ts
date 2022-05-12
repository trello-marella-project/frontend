import { useIsTrue } from "shared/lib";

export const useIsLoading = () => {
  const { isTrue, setTrue, toggle, setFalse } = useIsTrue();

  return {
    isLoading: isTrue,
    startLoading: setTrue,
    finishLoading: setFalse,
    toggleLoading: toggle,
  };
};
