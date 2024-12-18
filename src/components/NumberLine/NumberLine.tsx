import React from 'react';
import { NumberLineAxis } from './NumberLineAxis';
import { NumberLineJumps } from './NumberLineJumps';
import { NumberLineMarkers } from './NumberLineMarkers';
import { calculateTickPositions } from './utils/calculations';
import type { Jump } from './types';

interface NumberLineProps {
  start: number;
  end: number;
  jumps: number[];
}

export function NumberLine({ start, end, jumps }: NumberLineProps) {
  const totalWidth = end - start;
  const ticks = calculateTickPositions(start, end);
  
  // Convert jumps array to Jump objects with positions
  const jumpObjects: Jump[] = jumps.reduce((acc: Jump[], jump: number) => {
    const prevJump = acc[acc.length - 1];
    const fromPosition = prevJump ? prevJump.to : start;
    const toPosition = fromPosition + jump;
    
    return [...acc, { from: fromPosition, to: toPosition, value: jump }];
  }, []);

  return (
    <div className="relative w-full h-32 mt-8">
      {/* Main horizontal line */}
      <NumberLineAxis />
      
      {/* Vertical markers and numbers */}
      <NumberLineMarkers ticks={ticks} />
      
      {/* Jumps and arrows */}
      <NumberLineJumps jumps={jumpObjects} start={start} end={end} />
    </div>
  );
}