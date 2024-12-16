//Api URL
const BASE_URL = `https://swapi.py4e.com/api/`;

//Fetch all startships from the StarWars APi
export async function getAllStarships() {
  try {
    const response = await fetch(`${BASE_URL}starships/`);
    if (!response.ok)
      throw new Error(`The MotherShip is down, nothing could be fetched`);
    return response.json();
  } catch (error) {
    console.error(`Your Stars and Ships belongeth to me:`, error);
    return { results: [] }; //Return an empty array in case of error
  }
}
