import React from 'react';

export const CardThumb = ({ title, text }) => {
  return (
    <div className="bg-grey-50 rounded-4xl p-8">
      <h4 className="font-archivo font-extrabold text-lg mb-3">{title}</h4>
      <p className="font-gilroy font-medium text-secondary">{text}</p>
    </div>
  );
};
