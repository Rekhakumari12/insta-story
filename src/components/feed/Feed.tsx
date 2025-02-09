import './feed.css'
import { data } from '../../data'
import { Link } from 'react-router-dom'

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

export const Feed = () => {
  return (
    <div className="main">
      <div className="container">
        {data.map((user) => {
          return (
            <Link to={`/stories/${user.user.username}`} key={user.id}>
              <div className="profile_container" key={user.id}>
                <img src={user.user.profilePic} alt={user.user.name} className="profile" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
