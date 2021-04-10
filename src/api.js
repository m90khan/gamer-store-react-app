import dotenv from 'dotenv';
dotenv.config();
// Base URL
const baseUrl = 'https://api.rawg.io/api/';
const apiKey = process.env.REACT_APP_GAME_API_KEY;
// Date settings
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
