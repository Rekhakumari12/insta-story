import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../../data'
import { useState } from 'react'
import { ProgressBar } from '../progress-bar/ProgressBar'
import { Button } from '../button/Button'
import { STORY_DURATION } from '../../constants'
import { StoryPreview } from './StoryPreview'
import './story.css'
export const Story = () => {
  const { username } = useParams()
  const navigate = useNavigate()

  // find the user and fallback to an empty array if not found
  const user = data.find((user) => user.user.username === username)

  console.log(user)

  const userStories = user?.stories || []

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

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
      <Button name={'<'} onClickHandle={handlePrevStory} />
      <div>
        <div className="progress_bars">
          {userStories.map((story, index) => (
            <ProgressBar
              key={story.storyId + '-' + (index === currentIndex ? currentIndex : '')} // include currentIndex in key for active story to force remount & animation restart
              className={getProgressClassName(index)}
              value={STORY_DURATION}
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
      <Button name={'>'} onClickHandle={handleNextStory} />
    </div>
  )
}
