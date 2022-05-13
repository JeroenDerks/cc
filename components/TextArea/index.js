import React, { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const TextArea = ({ setUserValue, userValue }) => {
  const [textValue, setTextValue] = useState(userValue);
  const debouncedUserValue = useDebounce(textValue, 500);

  useEffect(() => {
    setUserValue(debouncedUserValue);
  }, [debouncedUserValue]);

  return (
    <textarea
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
      rows={20}
      cols={100}
    ></textarea>
  );
};

export default TextArea;
