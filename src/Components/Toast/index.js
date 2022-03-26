import { useState, useEffect } from "react";

const Toast = ({
  msg,
  typeNotify = "primary",
  toast = true,
  position = "bottom",
}) => {
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  return (
    <>
      {toast ? (
        <div className={`notification-container`}>
          <div
            class={`toast notify-${typeNotify} toast-${position} space-between`}
          >
            <span>{msg}</span> <i class="far fa-times pointer-text"></i>
          </div>
        </div>
      ) : (
        <div className={`notification-container`}>
          <div
            class={`notify notify-${typeNotify} toast-${position} space-between`}
          >
            <span>{msg}</span> <i class="far fa-times pointer-text"></i>
          </div>
        </div>
      )}
    </>
  );
};
export default Toast;
