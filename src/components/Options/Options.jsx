import React from "react";
import PropTypes from "prop-types";
import styles from "./Options.module.scss";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <button
        className={`${styles.button} ${styles.good}`}
        onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={`${styles.button} ${styles.neutral}`}
        onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button
        className={`${styles.button} ${styles.bad}`}
        onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
