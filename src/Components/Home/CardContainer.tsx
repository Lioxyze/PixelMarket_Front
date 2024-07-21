import React from "react";

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
