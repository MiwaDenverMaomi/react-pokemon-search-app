import Title from './../components/Title';
import Header from './../components/Header';
import Selector from './../components/Selector';
import Box from './../components/Box';

const TopPage = ({ onClickSearch, setId, pokemonData, types, abilities }) => {
  return (
    <div className="top-page">
      <Header />
      <Title />
      <Selector onClickSearch={onClickSearch} setId={setId} />
      <div className="top-page__container">
        <Box pokemonData={pokemonData} types={types} abilities={abilities} />
      </div>
    </div>
  );
};
export default TopPage;
