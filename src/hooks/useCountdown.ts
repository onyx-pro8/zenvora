import { useEffect, useState } from 'react'

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':')
}

export function useCountdown(initialSeconds = 11 * 3600 + 47 * 60 + 45) {
  const [remaining, setRemaining] = useState(initialSeconds)

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? initialSeconds : prev - 1))
    }, 1000)
    return () => window.clearInterval(id)
  }, [initialSeconds])

  return formatTime(remaining)
}
