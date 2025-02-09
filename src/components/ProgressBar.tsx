import { ProgressBarProps } from '../type'

export const ProgressBar = ({
  value = 0,
  currentStory = 0,
  story,
  storyLength,
}: ProgressBarProps) => {
  console.log({ value, currentStory, storyLength }, story.storyId)

  const getProgressClassName = (id: number) => {
    if (id < currentStory) {
      return 'progress progress_bar_finished'
    } else if (id === currentStory) {
      return 'progress progress_bar_active'
    } else {
      return 'progress'
    }
  }
  return (
    <div className="progress_bar_container">
      <div
        style={{ animationDuration: `${value}s` }}
        className={getProgressClassName(story.storyId)}
      ></div>
    </div>
  )
}
