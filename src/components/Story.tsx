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
  // const [progress, setProgress] = useState(Array(userStories.length).fill(0))
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

  return (
    <div className="story_container">
      <button className="left_arrow" onClick={handlePrevStory}>
        {'<'}
      </button>
      <div>
        <div className="progress_bars">
          {userStories.map((story) => (
            <ProgressBar
              value={storyDuration}
              currentStory={currentIndex}
              key={story.storyId}
              story={story}
              storyLength={userStories.length}
            />
          ))}
        </div>
        <div className="stories">
          {userStories.map((story, index) => {
            return (
              <>
                {index === currentIndex && (
                  <StoryPreview
                    story={story}
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                    key={story.storyId}
                  />
                )}
              </>
            )
          })}
        </div>
      </div>

      <button className="next_btn" onClick={handleNextStory}>
        {'>'}
      </button>
    </div>
  )
}
