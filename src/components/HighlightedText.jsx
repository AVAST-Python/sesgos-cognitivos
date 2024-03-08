import { useState, useEffect } from 'react'
import './HighlightedText.css'

function HighlightedText(props) {
  const { text } = props
  const [mounted, setMounted] = useState(true)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if(!mounted) return
    setAnimate(true)

    setTimeout(() => {
      if (mounted) {
        setAnimate(false)
      }
    }, 1000)
  }, [text, mounted])


  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  return (
    <div className={`highlighted-number ${animate ? 'changed' : ''}`}>
      {text}
    </div>
  )
}

export default HighlightedText
