import React from 'react';

export const SectionTitle = ({ title, className }) => {
  return (
    <h2 className={`font-archivo font-bold text-primary text-[28px] ${className}`}>{title}</h2>
  );
};