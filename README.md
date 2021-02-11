### GamerStore - React

<br />
<p align="center">
  <a href="https://github.com/m90khan/gamer-store-react-app/">
    <img src="./src/img/logo.svg" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">GamerStore | Search and View Games </h3>

  <p align="center">
Games Search Engine <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://github.com/m90khan/gamer-store-react-app/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snipet](#code)
- [Connect with me](#Contact)

---

### About the Project

Live: https://github.com/m90khan/gamer-store-react-app/

<img src="./src\img\GamerStore-Cover.jpg">

#### Process

- Setup react environment with react-router.
- Implement the structure, divide it into components.
- Applied styling using styled-components.
- Use Axios to fetch data from rawg.io API used for games.
- Setup redux for state management.
- Divide fetch data for popular, upcoming, and new games.
- Add framer for an Animate Shared Layout effect.

<img src="./src\img\GamerStore.jpg">

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][youtube]
[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][youtube]
[<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/redux.svg" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />
<br />

---

### Code Snippet

```javascript
import dotenv from 'dotenv';
dotenv.config();
// Base URL
const baseUrl = 'https://api.rawg.io/api/';
const apiKey = process.env.REACT_APP_GAME_API_KEY;
// Date
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDate = () => {
  const day = new Date().getDay();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
// current Date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// Last Year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added
//filter
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=4`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=4`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=4`;
// url concatenation
export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) => `${baseUrl}games/${game_id}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) => `${baseUrl}games/${game_id}/screenshots`;
//Searched game
export const searchGameURL = (game_name) =>
  `${baseUrl}games?search=${game_name}&page_size=9`;
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/uxdkhan
[linkedin]: https://www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxdkhan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan
