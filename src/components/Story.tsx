import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../data'
import { StoryPreview } from './StoryPreview'
import { useState } from 'react'
import { ProgressBar } from './ProgressBar'

export const Story = () => {
  const { username } = useParams()
  const navigate = useNavigate()

  // find the user and fallback to an empty array if not found
  const userStories = data.find((user) => user.user.username === username)?.stories || []

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const storyDuration = 5 // duration in seconds

  const handleNextStory = () => {
    if (currentIndex < userStories.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      navigate('/')
    }
  }

  const handlePrevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // setting progress class dynamically on active, paused, finished state
  const getProgressClassName = (index: number) => {
    if (index < currentIndex) {
      return 'progress progress_bar_finished'
    } else if (index === currentIndex) {
      return 'progress progress_bar_active'
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
          {userStories.map((story, index) => (
            <ProgressBar
              key={story.storyId + '-' + (index === currentIndex ? currentIndex : '')} // include currentIndex in key for active story to force remount & animation restart
              className={getProgressClassName(index)}
              value={storyDuration}
              onAnimationEnd={index === currentIndex ? handleNextStory : undefined} // only attach onAnimationEnd to the active progress bar
              paused={index === currentIndex ? isPaused : false}
            />
          ))}
        </div>
        <div className="stories">
          {userStories.map(
            (story, index) =>
              index === currentIndex && (
                <StoryPreview
                  key={story.storyId}
                  story={story}
                  isPaused={isPaused}
                  setIsPaused={setIsPaused}
                />
              )
          )}
        </div>
      </div>
      <button className="arrow_button" onClick={handleNextStory}>
        {'>'}
      </button>
    </div>
  )
}
