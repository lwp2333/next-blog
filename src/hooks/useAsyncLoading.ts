import React, { useState, useEffect, useCallback, useRef } from 'react'

type PromiseAction = (...args: any[]) => Promise<any>

type ResponeType = {
  data: any
  loading: boolean
  error: any
}
export default function useAsyncLoading<A extends PromiseAction>(action: A, wait: number): [A, ResponeType] {
  const timerRef = useRef(0)
  const [pending, setPending] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const actionWithPending = useCallback(
    (...args: Parameters<A>) => {
      setPending(true)
      const promise = action(...args)
      promise
        .then(res => {
          setData(res)
        })
        .catch(err => {
          setError(err)
        })
        .finally(() => {
          setPending(false)
        })

      return promise
    },
    [action]
  )

  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setLoading(pending)
    }, wait)
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [wait, pending])

  return [actionWithPending as A, { data, loading, error }]
}
