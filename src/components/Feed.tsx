import { useState } from 'react'
import '../App.css'
import { UserData } from '../type'
import { data } from '../data'
import { Link } from 'react-router-dom'

export const Feed = () => {
  const [userData, _] = useState<UserData[]>(data)

  return (
    <div className="main">
      <div className="container">
        {userData.map((user) => {
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
