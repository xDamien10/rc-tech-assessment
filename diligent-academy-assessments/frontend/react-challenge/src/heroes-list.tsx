import "./components/styles.css";
import useFetchHeroes from "./useFetchHeroes";
import SingleHero from "./components/single-hero";

function HeroesList() {

  const { heroes,setHeroes, isLoading, error } = useFetchHeroes();

  return (
    <>
      <h2>Heroes</h2>
      <div className="heroes">
        {isLoading && <div>Loading</div>}
        {error && <div>Failed to fetch heroes</div>}
        {heroes.map((hero) => {
          return <SingleHero hero={hero} heroes = {heroes} setHeroes = {setHeroes}/>
        }
        )}
      </div>
    </>
  );
}

export default HeroesList;