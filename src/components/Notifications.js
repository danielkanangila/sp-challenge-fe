import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./../styles/notifications.module.scss";
import { CloseButton } from "./Close.Button";
import { SearchContext } from "../context/search-context";
import { closeNotification } from "../context/actions";

const Notifications = () => {
  const [state, dispatch] = useContext(SearchContext);

  return (
    <ul className={styles.notifications}>
      <AnimatePresence initial={false}>
        {state.notifications.map((notification) => (
          <Notification
            {...notification}
            close={(id) => dispatch(closeNotification(id))}
            key={notification.id}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

const Notification = ({ id, message, type, delay = 3000, close }) => {
  useEffect(() => {
    /** close notification after 3 second */
    const timer = setTimeout(() => {
      close(id);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [id, close, delay]);

  return (
    <motion.li
      key={id}
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={type ? styles[type] : "notification"}
    >
      <CloseButton close={() => close(id)} className={styles.close} />
      {message}
    </motion.li>
  );
};

export default Notifications;
