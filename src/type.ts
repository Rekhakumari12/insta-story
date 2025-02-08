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
    duration: number
  }[]
}

export interface Story {
  type: string
  url: string
  storyId: number
}
