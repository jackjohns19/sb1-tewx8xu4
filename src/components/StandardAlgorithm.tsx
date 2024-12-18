import React from 'react';

interface StandardAlgorithmProps {
  num1: number;
  num2: number;
}

export function StandardAlgorithm({ num1, num2 }: StandardAlgorithmProps) {
  const sum = num1 + num2;
  
  return (
    <div className="font-mono text-xl flex flex-col items-end border-2 border-gray-200 rounded p-4 bg-white">
      <div className="flex flex-col items-end">
        <span>{num1}</span>
        <div className="flex items-center">
          <span>+</span>
          <span>{num2}</span>
        </div>
        <div className="w-full h-0.5 bg-gray-400 my-2" />
        <span className="font-bold">{sum}</span>
      </div>
    </div>
  );
}