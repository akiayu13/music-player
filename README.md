# 🎵 Music Player

## Overview
This is a simple and modern music player built with React.js. It uses Zustand for state management and Tailwind CSS for styling. The player is responsive, meaning it works well on both large and small screens. 🎧

## Features
- **Responsive Design:** 📱 Adjusts to different screen sizes. On smaller screens, the player becomes the main interface with a menu to show the song list.
- **State Management:** 🛠 Zustand is used to keep track of the music player’s state.
- **API Integration:** 🌐 Songs are loaded from a REST API.
  - Song list API: `https://cms.samespace.com/items/songs`
  - Cover images: `https://cms.samespace.com/assets/{COVER_IMAGE_ID}`
- **Continuous Playback:** 🎶 Music keeps playing even if you switch tabs.
- **Dynamic Background:** 🎨 The background color changes based on the album cover of the current song.
- **Smooth Interface:** 💻 The app includes animations for things like loading the song list and changing background colors.

## Main Functions
- **Search:** 🔍 Find songs by name.
- **Music Controls:** 🎵 Play, pause, skip to the next or previous song.
- **Tab Navigation:** 🔄 Switch between different views like "For You" and "Top Tracks".
- **Seeker:** ⏩ Drag the bar to move to a different part of the song.

## Live Demo
Check out the live version of the Music Player:
- **Vercel Demo:** [Music Player Demo](https://music-player-akiayu13.vercel.app/) 🚀

## Getting Started

### Requirements
Before starting, make sure you have:
- Node.js (version 14 or higher) 🖥
- npm or yarn 📦

### Installation
1. **Clone the project:**
   ```bash
   git clone https://github.com/your-username/music-player.git
   cd music-player
   ```
2. **Install the necessary packages:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
4. **Open your browser** and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## API Details
The music player uses the following API:

### Get Song List

```http
GET /items/songs
```

This API returns a list of songs that are shown in the app.

### Get Cover Image

```http
GET /assets/{COVER_IMAGE_ID}
```

This API fetches the cover image for the current song.

## Future Ideas
- **User Accounts:** 👤 Allow users to log in and save their favorite songs.
- **Playlists:** 🎼 Let users create and manage playlists.

## Contributions
If you want to help improve this project, you can send a pull request or open an issue on GitHub. 🌟
