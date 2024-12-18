import React, { useState } from 'react';
import { Square, Circle } from 'lucide-react';

interface BaseTenModelProps {
  number: number;
}

export function BaseTenModel({ number }: BaseTenModelProps) {
  const tens = Math.floor(number / 10);
  const ones = number % 10;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {Array.from({ length: tens }).map((_, i) => (
          <div key={`ten-${i}`} className="flex flex-wrap w-12 h-12 bg-blue-100 border-2 border-blue-500 rounded">
            {Array.from({ length: 10 }).map((_, j) => (
              <Square key={`dot-${j}`} className="w-2 h-2 text-blue-500" />
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {Array.from({ length: ones }).map((_, i) => (
          <Circle key={`one-${i}`} className="w-4 h-4 text-green-500" />
        ))}
      </div>
    </div>
  );
}