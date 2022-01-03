import { useEffect, useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className= "my-0 mx-auto w-11/12">
      <form className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
      onSubmit= {(e) => {
        e.preventDefault();
        requestPets();
      }}
      >
        <label htmlFor="location">
          Location
          <input
              className="w-60 my-5"
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => updateLocation(e.target.value)}
            />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            className="w-60 my-5"
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            className="w-60 my-5"
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label html="theme">
            Theme
            <select
              className="w-60 my-5"
              value={theme}
              onChange={e => setTheme(e.target.value)}
              onBlur={e => setTheme(e.target.value)}>
                <option value="darkblue">Dark Blue</option>
                <option value="peru">Peru</option>
                <option value="chartreuse">Chartreuse</option>
                <option value="mediumorchid">Medium Orchid</option>
            </select>

        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
