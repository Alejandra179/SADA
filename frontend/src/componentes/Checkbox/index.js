import React, { useState,useEffect } from "react";

const Checkbox = ({id, onChange, value }) => {
  const [checked, setChecked] = useState();

  const onClick = (checked) => {
    onChange(id, checked,value);
  };
  useEffect(() => {
    setChecked(checked);
  }, onChange);
  
  return (
    <div>
      
      <label>
        <input
        name="opcion"
          type="radio"
          onClick={(e) => onClick(e.target.checked)}
          checked={checked}
          value={value}
        />
        {value}
      </label>
      <br />
    </div>
  );
};

export default Checkbox;
