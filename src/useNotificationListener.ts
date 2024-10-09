import { useEffect } from "react";
import { messaging } from "./firebase";

const useNotificationListener = () => {
  useEffect(() => {
    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);

      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
      };

      window.alert(payload.notification.title);
      new Notification(notificationTitle, notificationOptions);
    });
  }, []);
};

export default useNotificationListener;
