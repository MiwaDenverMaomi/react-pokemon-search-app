import { useState, useContext } from 'react';
import pokemonJson from './../fixed/pokemonJson';
import pokemonTypes from './../fixed/pokemonTypes';
import { SetIdContext, OnClickSearchContext, SelectTypesContext } from './../App';
// export const OnClickSearchContext


const Selector = (props) => {
  // const pokedexJson = useContext(PokedexJson);

  return (
    <div className="selector">
      < SetIdContext.Consumer>
        {(setId) =>
          window.location.pathname === '/' ?
            <div className="selector__container--l">
              <select className="selector__selector" onChange={e => setId(e.target.value)}>
                <option>Select Pokemon</option>
                {pokemonJson.map(pokemon =>
                  <option value={pokemon.num} key={pokemon.num}>{pokemon.name}</option>)}
              </select>
              <OnClickSearchContext.Consumer>{(onClickSearch) =>
                <button className="selector__submit" onClick={onClickSearch}>Search</button>
              }
              </OnClickSearchContext.Consumer>
            </div> :
            <div className="selector">
              <div className="selector__container--m">
                {pokemonTypes.map(name =>
                  <button className="selector__btn" key={name} onClick={() => props.setSelectedType(name)}>{name}</button>)}
              </div>
            </div>
        }
      </SetIdContext.Consumer>
    </div>
  );
};
export default Selector;
