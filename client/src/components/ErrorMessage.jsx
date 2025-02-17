function ErrorMessage({ message }) {
    if (!message) return null; // Don't show anything if there's no error
  
    return <p style={{ color: "red" }}>{message}</p>;
  }
  
  export default ErrorMessage;
  