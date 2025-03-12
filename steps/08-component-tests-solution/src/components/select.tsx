import React from 'react';

export interface SelectProps {
  value: string;
  options: string[];
  onChange?(newValue: string): void;
}

export function Select({ value, options, onChange }: SelectProps) {
  return (
    <select value={value} onChange={(event) => onChange?.(event.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
