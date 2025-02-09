import { UserData } from './type'

export const data: UserData[] = [
  {
    id: 1,
    user: {
      id: 101,
      name: 'John Doe',
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
      username: 'john_doe',
    },
    stories: [
      {
        storyId: 0,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        postedAt: '2025-02-08T10:30:00Z',
      },
      {
        storyId: 1,
        type: 'video',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        postedAt: '2025-02-08T11:00:00Z',
      },
      {
        storyId: 2,
        type: 'image',
        url: 'https://plus.unsplash.com/premium_photo-1673595853248-217e09f5fd68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
        postedAt: '2025-02-08T12:00:00Z',
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 102,
      name: 'Alice Smith',
      profilePic: 'https://randomuser.me/api/portraits/women/45.jpg',
      username: 'alice_smith',
    },
    stories: [
      {
        storyId: 0,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1635272433924-def8bcf5ac68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVydGljYWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
        postedAt: '2025-02-08T12:00:00Z',
      },
      {
        storyId: 1,
        type: 'image',
        url: 'https://plus.unsplash.com/premium_photo-1673595853248-217e09f5fd68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
        postedAt: '2025-02-08T12:00:00Z',
      },
    ],
  },
  {
    id: 3,
    user: {
      id: 103,
      name: 'Bob Brown',
      username: 'bob_brown',
      profilePic: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    stories: [
      {
        storyId: 0,
        type: 'video',
        url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        postedAt: '2025-02-08T13:00:00Z',
      },
    ],
  },
]
