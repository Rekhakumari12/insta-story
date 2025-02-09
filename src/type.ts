export interface UserData {
  id: number
  user: {
    id: number
    name: string
    profilePic: string
    username: string
  }
  stories: {
    storyId: number
    type: string
    url: string
    postedAt: string
  }[]
}

export interface Story {
  type: string
  url: string
  storyId: number
}

export interface StoryPreviewProps {
  story: Story
  isPaused: boolean
  setIsPaused: (value: boolean) => void
}

export interface ProgressBarProps {
  className: string
  value: number
  onAnimationEnd?: () => void
  paused: boolean
}
