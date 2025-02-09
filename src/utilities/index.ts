export const handleNavigateToId = (to: string) => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView();
    }
  };