import React from "react";

const LoadingButton = (props) => {
    const className = props.className || "btn-primary";

    const buttonProps = { ...props };
    delete buttonProps.loading;
  return (
    props.loading ?
      (
      <button class="btn btn-primary position-absolute end-0" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
      )
    : (
        <button {...buttonProps} className={`btn ${className}`}>
          {props.children}
        </button>
      )
  );
};

export default LoadingButton;
