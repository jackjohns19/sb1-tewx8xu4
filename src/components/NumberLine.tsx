import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NumberLineProps {
  start: number;
  end: number;
  jumps: number[];
}

export function NumberLine({ start, end, jumps }: NumberLineProps) {
  const totalWidth = end - start;
  let currentPosition = start;

  return (
    <div className="relative w-full h-20 flex items-center">
      <div className="absolute w-full h-0.5 bg-gray-400" />
      {jumps.map((jump, index) => {
        const jumpWidth = (jump / totalWidth) * 100;
        const prevPosition = currentPosition;
        currentPosition += jump;
        
        return (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{ left: `${(prevPosition / totalWidth) * 100}%`, width: `${jumpWidth}%` }}
          >
            <div className="h-2 w-0.5 bg-gray-400 absolute -top-1" />
            <span className="text-sm mt-4">{prevPosition}</span>
            <ArrowRight className="text-blue-500 mt-2" />
          </div>
        );
      })}
      <div className="absolute right-0 flex flex-col items-center">
        <div className="h-2 w-0.5 bg-gray-400 absolute -top-1" />
        <span className="text-sm mt-4">{end}</span>
      </div>
    </div>
  );
}