import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function InputPassword({ handleChange }) {
  
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="password-form__input-with-icon">
      <input
        onChange={handleChange}
        className="password-form__input"
        type={showPassword ? "text" : "password"}
      />
      {showPassword ? (
        <VisibilityOff
          className="password-form__input-icon"
          onClick={handleShowPassword}
        />
      ) : (
        <Visibility
          className="password-form__input-icon"
          onClick={handleShowPassword}
        />
      )}
    </div>
  );
}
