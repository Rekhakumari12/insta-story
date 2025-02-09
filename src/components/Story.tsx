import { useParams } from 'react-router-dom'
import { data } from '../data'
import { StoryPreview } from './StoryPreview'
import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'

export const Story = () => {
  const { username } = useParams()
  const userStories = data.filter((user) => user.user.username === username)[0].stories

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const storyDuration = 5000

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex <= userStories.length) handleNextStory()
    }, storyDuration)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handlePrevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }
  const handleNextStory = () => {
    if (currentIndex < userStories.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const getProgressClassName = (id: number) => {
    console.log(id, currentIndex, '===')
    if (id < currentIndex) {
      return 'progress progress_bar_finished'
    } else if (id === currentIndex) {
      return isPaused
        ? 'progress progress-bar-active progress-bar-paused'
        : 'progress progress-bar-active'
    } else {
      return 'progress'
    }
  }

  return (
    <div className="story_container">
      <button className="arrow_button" onClick={handlePrevStory}>
        {'<'}
      </button>
      <div>
        <div className="progress_bars">
          {userStories.map((story) => (
            <ProgressBar
              className={getProgressClassName(story.storyId)}
              value={Math.floor(storyDuration / 1000)}
              key={story.storyId}
            />
          ))}
        </div>
        <div className="stories">
          {userStories.map((story, index) => {
            return (
              index === currentIndex && (
                <StoryPreview
                  story={story}
                  isPaused={isPaused}
                  setIsPaused={setIsPaused}
                  key={story.storyId}
                />
              )
            )
          })}
        </div>
      </div>

      <button className="arrow_button" onClick={handleNextStory}>
        {'>'}
      </button>
    </div>
  )
}
