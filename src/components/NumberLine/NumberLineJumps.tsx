import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Jump } from './types';
import { calculateJumpPosition } from './utils/calculations';

interface NumberLineJumpsProps {
  jumps: Jump[];
  start: number;
  end: number;
}

export function NumberLineJumps({ jumps, start, end }: NumberLineJumpsProps) {
  const totalRange = end - start;

  return (
    <>
      {jumps.map((jump, index) => {
        const position = calculateJumpPosition(jump.from, start, totalRange);
        const width = (jump.value / totalRange) * 100;
        
        return (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              left: `${position}%`,
              width: `${width}%`,
              top: '0'
            }}
          >
            {/* Jump value label */}
            <span className="text-sm font-medium text-blue-600 mb-1">
              +{jump.value}
            </span>
            
            {/* Arrow */}
            <div className="flex items-center w-full">
              <div className="h-0.5 bg-blue-500 flex-grow" />
              <ArrowRight className="text-blue-500 flex-shrink-0" />
            </div>
          </div>
        );
      })}
    </>
  );
}