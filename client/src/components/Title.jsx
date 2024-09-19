import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const Title = ({ title, className }) => {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize", className)}>
      {title}
    </h2>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;