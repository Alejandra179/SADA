import React, { useState } from "react";

const Checkbox = ({id, onChange, value }) => {
  const [checked, setChecked] = useState();
  return (
    <div>
      <label>
        <input
        name="opcion"
          type="radio"
          onClick={(e) => setChecked(e.target.checked)}
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
