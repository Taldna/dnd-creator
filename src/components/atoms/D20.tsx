import { useEffect, useRef, useState, useCallback } from "react"
import styles from "./D20.module.scss"

interface D20Props {
  autoRoll?: boolean
  rollTo?: number
}

export default function D20({ autoRoll = false, rollTo = 0 }: D20Props) {
  const dieRef = useRef<HTMLDivElement>(null)
  const [isRolling, setIsRolling] = useState(false)
  const [currentFace, setCurrentFace] = useState<number | null>(1)
  const timeoutRef = useRef<number | undefined>(undefined)
  const intervalRef = useRef<number | undefined>(undefined)

  const sides = 20
  const animationDuration = 2000

  const randomFace = useCallback(() => {
    const face = Math.floor(Math.random() * sides) + 1
    if (face === currentFace) {
      return randomFace()
    }
    return face
  }, [sides, currentFace])

  const rollToNumber = (face: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setCurrentFace(face)
  }

  const handleRoll = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsRolling(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsRolling(false)
      rollToNumber(randomFace())
    }, animationDuration)
  }

  useEffect(() => {
    if (autoRoll) {
      const startAutoRoll = () => {
        setIsRolling(true)
        timeoutRef.current = setTimeout(() => {
          setIsRolling(false)
          rollToNumber(randomFace())
        }, animationDuration)
      }

      startAutoRoll()
      intervalRef.current = setInterval(startAutoRoll, animationDuration + 500)
    } else if (rollTo > 0) {
      setIsRolling(true)
      timeoutRef.current = setTimeout(() => {
        setIsRolling(false)
        rollToNumber(rollTo)
      }, animationDuration)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoRoll, rollTo, randomFace])

  return (
    <div>
      <div className={styles.content}>
        <div
          ref={dieRef}
          className={`${styles.die} ${isRolling ? styles.rolling : ""}`}
          data-face={currentFace || undefined}
          onClick={handleRoll}
        >
          <figure className={`${styles.face} ${styles["face-1"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-2"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-3"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-4"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-5"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-6"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-7"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-8"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-9"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-10"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-11"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-12"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-13"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-14"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-15"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-16"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-17"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-18"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-19"]}`}></figure>
          <figure className={`${styles.face} ${styles["face-20"]}`}></figure>
        </div>
      </div>
    </div>
  )
}
