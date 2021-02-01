import { useCallback, useRef } from "react"

export const useDebouncedSearch = (fn: (...args: any[]) => any, delay = 500) => {
  const timeoutRef = useRef<any>();

  const updateTerm = useCallback((str: string) => {
    if(timeoutRef.current) clearTimeout(timeoutRef.current)

    if(!str) return () => clearTimeout(timeoutRef.current)
    
    timeoutRef.current = setTimeout(() => fn(str), delay)

    return () => clearTimeout(timeoutRef.current)
  }, [delay, fn])


  return { updateTerm }
}