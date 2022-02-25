import Title from './../components/Title';
import Header from './../components/Header';
import Selector from './../components/Selector';
import Card from './../components/Card';

const TypePage = ({ setSelectedType, pokemonDataSortByType, loading, destructItems, selectedType }) => {

  return (
    <div className="type-page">
      <Header />
      <Title />
      <Selector setSelectedType={setSelectedType} />
      <div className="type-page__container">
        <Card pokemonDataSortByType={pokemonDataSortByType} loading={loading} destructItems={destructItems} selectedType={selectedType} />
      </div>
    </div>
  );
};
export default TypePage;
