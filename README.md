# Story Viewer

A React-based story viewer component, inspired by Instagram stories. This component supports both video and image stories with animated progress bars that indicate the story duration. It includes pause/resume functionality and automatically redirects the user to the feed page once all stories have been viewed.

## Features

- **Story Playback:**  
  Display both video and image stories.

  - Videos autoplay and support pause/resume on mouse events.
  - Images display with a click-to-advance feature.

- **Animated Progress Bars:**  
  Each story has a progress bar that animates from 0% to 100% over the specified duration.

  - The active progress bar’s animation pauses when the story is paused.
  - On animation end, the progress bar triggers the transition to the next story.

- **Navigation Controls:**  
  Manual navigation with previous and next arrow buttons to move between stories.

- **Automatic Redirection:**  
  Once all stories are completed, the user is redirected to the feed page using React Router.

- **Responsive & Interactive UI:**  
  A clean UI with Material-UI icons and responsive design ensures a seamless viewing experience.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/story-viewer.git
   cd story-viewer
   ```
