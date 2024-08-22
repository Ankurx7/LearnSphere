import React, { useEffect, useState } from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

function RatingStars({ Review_Count, Star_Size }) {
  const [starCount, setStarCount] = useState({
    full: 0,
    half: 0,
    empty: 0,
  })

  useEffect(() => {
    const wholeStars = Math.floor(Review_Count) || 0
    setStarCount({
      full: wholeStars,
      half: Number.isInteger(Review_Count) ? 0 : 1,
      empty: Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars,
    })
  }, [Review_Count])

  return (
    <div className="flex gap-1 text-yellow-400">
      {[...new Array(starCount.full)].map((_, i) => (
        <TiStarFullOutline
          key={i}
          size={Star_Size || 24}
          className="transition-transform duration-300 transform hover:scale-110"
          style={{ color: 'linear-gradient(45deg, #ffeb3b, #fbc02d)' }}
        />
      ))}
      {[...new Array(starCount.half)].map((_, i) => (
        <TiStarHalfOutline
          key={i}
          size={Star_Size || 24}
          className="transition-transform duration-300 transform hover:scale-110"
          style={{ color: 'linear-gradient(45deg, #ffeb3b, #fbc02d)' }}
        />
      ))}
      {[...new Array(starCount.empty)].map((_, i) => (
        <TiStarOutline
          key={i}
          size={Star_Size || 24}
          className="transition-transform duration-300 transform hover:scale-110"
          style={{ color: 'linear-gradient(45deg, #eeeeee, #cccccc)' }}
        />
      ))}
    </div>
  )
}

export default RatingStars
