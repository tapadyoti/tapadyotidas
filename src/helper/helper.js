export const handleCopy = () => {
  const profileUrl = "https://tapadyotidas.netlify.app";

  try {
    if (navigator.clipboard && window.isSecureContext) {
      // Modern browsers
      navigator.clipboard.writeText(profileUrl);
    } else {
      // Fallback for older browsers & iOS Safari
      const textarea = document.createElement("textarea");
      textarea.value = profileUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    return true; 
  } catch {
    return false; 
  }
};
