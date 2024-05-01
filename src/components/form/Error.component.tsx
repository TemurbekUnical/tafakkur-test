import React, { memo } from "react";

const Error: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="text-red-600 text-14 italic mt-2 flex items-center gap-1">
      error:
      {children}
    </p>
  );
};

export default memo(Error);
