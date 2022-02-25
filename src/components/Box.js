import useContext from 'react';
import Spinner from './Spinner';
import { LoadingContext, PokemonDataContext, } from './../App';

const Box = () => {
  const renderBox = (loading) => {
    return <PokemonDataContext.Consumer>{(pokemonData) =>
      loading === false ?
        <div className="box__container">
          <div className="box__img-container">
            <img src={pokemonData.img ? pokemonData.img : ''} className="box__img" />
          </div>
          <p className="box__name">{pokemonData.name ? pokemonData.name : "???"}</p>
          <p>Type:<span className="box__type">{pokemonData.type ? pokemonData.type : "???"}</span></p>
          <p>Skills:<span className="box__desc">{pokemonData.abilities ? pokemonData.abilities : "???"}</span></p>
        </div> :
        <Spinner />}
    </PokemonDataContext.Consumer>
  }
  return (
    <div className="box">
      <LoadingContext.Consumer>
        {(loading) => renderBox(loading)}
      </LoadingContext.Consumer>
    </div >
  );
};
export default Box;
