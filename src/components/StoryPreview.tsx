import { Story } from '../type'

export const StoryPreview = ({ story }: { story: Story }) => {
  return story.type === 'image' ? (
    <img src={story.url} alt={story.storyId.toString()} />
  ) : (
    <video>
      <track kind="captions" />
      <source src={story.url} type="video/mp4" />
    </video>
  )
}
