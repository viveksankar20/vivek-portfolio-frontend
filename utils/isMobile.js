export const isMobile = () => {
    if (typeof window === "undefined") return false; // Prevent errors during server-side rendering
    return window.innerWidth <= 768; // You can adjust breakpoint if needed
  };
  