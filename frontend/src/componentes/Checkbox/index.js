import React, { useState,useEffect } from "react";

const Checkbox = ({id, onChange, value }) => {
  const [checked, setChecked] = useState();

  useEffect(() => {
    setChecked(checked);
  }, onChange);
  
  return (
    <div>
      
      <label>
        <input
        name="opcion"
          type="radio"
          onClick={({target}) =>  onChange(id, target.checked,value)}
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
