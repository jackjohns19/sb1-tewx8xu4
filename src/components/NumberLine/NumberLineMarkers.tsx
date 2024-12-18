import React from 'react';
import { Tick } from './types';

interface NumberLineMarkersProps {
  ticks: Tick[];
}

export function NumberLineMarkers({ ticks }: NumberLineMarkersProps) {
  return (
    <>
      {ticks.map((tick) => (
        <div
          key={tick.value}
          className="absolute flex flex-col items-center"
          style={{ left: `${tick.position}%` }}
        >
          {/* Vertical line */}
          <div className="h-16 w-0.5 bg-gray-300 absolute top-1/2 transform -translate-y-1/2" />
          
          {/* Number label */}
          <span className="absolute -bottom-6 text-sm font-medium text-gray-600">
            {tick.value}
          </span>
        </div>
      ))}
    </>
  );
}