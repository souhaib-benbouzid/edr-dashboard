import React from "react";

type Props = {
  children: React.ReactNode;
};

const FormControl = (props: Props) => {
  return <div className="my-2">{props.children}</div>;
};

export default FormControl;
