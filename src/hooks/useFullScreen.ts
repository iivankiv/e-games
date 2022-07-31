function useFullScreen() {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      return;
    }

    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  return {
    toggleFullScreen,
  };
}

export default useFullScreen;
