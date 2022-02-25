import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TopPage from './pages/TopPage';
import TypePage from './pages/TypePage';
import pokemonJson from './fixed/pokemonJson';
import Loading from './components/Spinner';
// import PokemonJson from './fixed/PokemonJson';
// import { type } from '@testing-library/user-event/dist/type';
export const LoadingContext = React.createContext();
export const PokemonDataContext = React.createContext();
export const SetIdContext = React.createContext();
export const OnClickSearchContext = React.createContext();
// onClickSearch = { onClickSearch } setId = { setId } pokemonData = { pokemonData } types = { types } abilities = { abilities }

function App() {
  const [id, setId] = useState(null);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    img: "",
    type: "",
    abilities: ""
  });
  const [selectedType, setSelectedType] = useState("");
  const [pokemonDataSortByType, setPokemonDataSortByType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState("");
  const [abilities, setAbilities] = useState("");


  const onClickSearch = () => {
    if (id !== "Select Pokemon") {
      setLoading(true);
      const num = Number(id);
      fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(res =>
        res.json()
      ).then(res => {
        setPokemonData({
          name: res.name,
          img: `http://www.serebii.net/pokemongo/pokemon/${id}.png`,
          type: res.types.length > 1 ? destructItems(res.types, "types") : res.types[0].type.name,
          abilities: res.abilities.length > 1 ? destructItems(res.abilities, "abilities") : res.abilities[0].ability.name
        })
        setLoading(false);

      }
      ).catch(err => {
        alert("Err occured. Reload the page and try again.");
        setLoading(false);
      });
    }
  }
  const destructItems = (items, type) => {
    let itemLength = items.length;
    switch (type) {
      case "types":
        let types = "";
        if (itemLength > 0) {
          items.map((item, index) => {
            if (itemLength === index + 1) {

              types += item.type.name
            } else {
              types += item.type.name + ","
            }
          })
          return types;
        }
        break;
      case "abilities":

        let abilities = "";
        if (itemLength > 1) {
          items.map((item, index) => {

            if (itemLength === index + 1) {
              abilities += item.ability.name
            } else {
              abilities += item.ability.name + ", "
            }
          })
          return abilities;
        }
      case "kinds":
        let kinds = "";
        items.map((item, index) => {

          if (itemLength === index + 1) {
            kinds += item
          } else {
            kinds += item + ","
          }
        })

        return kinds;
        break;

    }
  }

  useEffect(() => {
    if (selectedType.length > 0) {
      setLoading(true);
      let extractedPokemonData = [];
      let typeNames = [];

      pokemonJson.map((pokemon) => {
        typeNames = destructItems(pokemon.type, "kinds");
        if (typeNames.indexOf(selectedType) !== -1) {

          extractedPokemonData.push({
            id: pokemon.id,
            num: pokemon.num,
            name: pokemon.name,
            img: pokemon.img
          });
        }
      });

      setPokemonDataSortByType(extractedPokemonData);
    }
    setLoading(false);
  }, [selectedType]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <LoadingContext.Provider value={loading}>
              <PokemonDataContext.Provider value={pokemonData}>
                <SetIdContext.Provider value={setId}>
                  <OnClickSearchContext.Provider value={onClickSearch}>
                    <TopPage />
                  </OnClickSearchContext.Provider>
                </SetIdContext.Provider>
              </PokemonDataContext.Provider >
            </LoadingContext.Provider>
          } />
          <Route exact path="/type_search" element={
            <TypePage setSelectedType={setSelectedType} loading={loading} selectedType={selectedType} pokemonDataSortByType={pokemonDataSortByType} destructItems={destructItems} />
          } />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

<TopPage />
