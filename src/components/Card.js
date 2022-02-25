import useContext from 'react';
import Spinner from './Spinner';
import LoadingContext from './../App';


const Card = ({ pokemonDataSortByType, loading, destructItems, selectedType }) => {

  return (
    <div className="card">
      {loading === true && < Spinner />}
      {loading === false && pokemonDataSortByType.length > 0 ? pokemonDataSortByType.map(item =>
        < div className={`card__container ${selectedType}`} key={item.id} >
          <div className="card__img-container">
            <img className="card__img" src={item.img} />
          </div>
          <p className="card__name">{item.name}</p>
          <p className="card__desc">{item.num}</p>

        </div >) : <p className="card__result">Found 0 Pokemons</p>
      }
    </div >
  );
};
export default Card;
