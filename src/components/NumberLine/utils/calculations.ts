import type { Tick } from '../types';

export function calculateTickPositions(start: number, end: number): Tick[] {
  const range = end - start;
  const stepSize = Math.max(1, Math.floor(range / 10)); // Ensure reasonable number of ticks
  const ticks: Tick[] = [];

  for (let value = start; value <= end; value += stepSize) {
    const position = ((value - start) / range) * 100;
    ticks.push({ value, position });
  }

  // Always include the end value if it's not already included
  if (ticks[ticks.length - 1].value !== end) {
    ticks.push({
      value: end,
      position: 100
    });
  }

  return ticks;
}

export function calculateJumpPosition(
  fromValue: number,
  start: number,
  totalRange: number
): number {
  return ((fromValue - start) / totalRange) * 100;
}