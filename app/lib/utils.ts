/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes - The size in bytes
 * @returns A formatted string with the appropriate unit (KB, MB, GB)
 */
import { twMerge } from "tailwind-merge"
import {type  ClassValue, clsx } from "clsx";

export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export const generateUUID = () => crypto.randomUUID()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}