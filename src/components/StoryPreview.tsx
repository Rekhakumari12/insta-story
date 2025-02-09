import { useRef } from 'react'
import { StoryPreviewProps } from '../type'

export const StoryPreview = ({ story, isPaused, setIsPaused }: StoryPreviewProps) => {
  const ref = useRef<HTMLVideoElement>(null)

  const handlePause = () => {
    if (ref.current) {
      if (isPaused) {
        ref.current.play()
        setIsPaused(false)
      } else {
        ref.current.pause()
        setIsPaused(true)
      }
    }
  }

  return (
    <div key={story.storyId} className="story">
      {story.type === 'image' ? (
        <img src={story.url} alt={story.storyId.toString()} className="story_image" />
      ) : (
        <video autoPlay className="story_video" onClick={handlePause} ref={ref}>
          <track kind="captions" />
          <source src={story.url} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
