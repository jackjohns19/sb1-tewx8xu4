import React from 'react';

interface ExpandedFormProps {
  number: number;
}

export function ExpandedForm({ number }: ExpandedFormProps) {
  const tens = Math.floor(number / 10) * 10;
  const ones = number % 10;

  return (
    <div className="flex items-center gap-2 text-xl">
      {tens > 0 && (
        <>
          <span className="font-bold text-blue-600">{tens}</span>
          {ones > 0 && <span>+</span>}
        </>
      )}
      {ones > 0 && <span className="font-bold text-green-600">{ones}</span>}
    </div>
  );
}