import React from "react";
import PropTypes from "prop-types";
import styles from "./dialog.scss";
import Button from "../inputs/Button";
import DialogHeader from "./DialogHeader";

export default function ErrorDialog({ title, message, hideDialog }) {
  return (
    <div className={styles.dialogContainer}>
      <DialogHeader title={title} />
      <div className={styles.content}>{message}</div>
      <div className={styles.bottom}>
        <Button onClick={hideDialog}>Ok</Button>
      </div>
    </div>
  );
}

ErrorDialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  hideDialog: PropTypes.func.isRequired
};

ErrorDialog.defaultProps = {
  title: "Error"
};
