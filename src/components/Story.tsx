import { useParams } from 'react-router-dom'
import { data } from '../data'
import { StoryPreview } from './StoryPreview'
import { useState } from 'react'
import {ReactComponent as LeftArrow} from '../assets/icons/left-arrow.svg'

export const Story = () => {
  const { username } = useParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const userStories = data.filter((user) => user.user.username === username)[0].stories

  const handlePrevStory = () => {
    const isFirstStory = currentIndex === 0
    //going to back component if isFirstStory is false
    const newIndex = isFirstStory ? userStories.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const handleNextStory = () => {
    const isLastSlide = currentIndex === userStories.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  console.log(userStories)
  return (
    <div className="story_container">
      <button className="prev_btn" onClick={handlePrevStory}>
        <
      </button>

      {userStories.map((story, index) => {
        return (
          <div key={story.storyId} className="story">
            {index === currentIndex && <StoryPreview story={story} />}
          </div>
        )
      })}
      <button className="next_btn" onClick={handleNextStory}>
        <p>&gt;</p>
      </button>
    </div>
  )
}
