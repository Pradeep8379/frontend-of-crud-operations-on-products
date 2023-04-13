export const useGetUserToken= () => {
    return window.localStorage.getItem("token");
  };