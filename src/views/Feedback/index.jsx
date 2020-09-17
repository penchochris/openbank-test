import React from "react";
import { CheckCircleOutlined, ErrorOutlineOutlined } from "@material-ui/icons";

export default function Feedback() {
  return (
    <div>
      <div>
        <CheckCircleOutlined fontSizeLarge/>
        <ErrorOutlineOutlined />
      </div>
      <h2>Tu Password Manager ya esta creado!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
