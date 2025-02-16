let pageName = $state<'confirm' | 'message' | 'Register' | 'Login'>('Login');

export const useAuthState = () => {
  const setPageName = (newPageName: typeof pageName) => {
    pageName = newPageName;
  };

  return {
    pageState: () => pageName,
    setPageName,
  };
};
