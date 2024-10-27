import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function formatDate(date) {
  return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric', 
      day: 'numeric' 
  })
}

export function sortTasks(tasks) {
  return [...tasks].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}