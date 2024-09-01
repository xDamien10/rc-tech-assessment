import { Hero } from "./hero-list-items";
import "./styles.css";

interface Props {
    hero: Hero;
    heroes: Hero[];
    setHeroes: React.Dispatch<React.SetStateAction<Hero[]>>;
}

const SingleHero = ({ hero, heroes, setHeroes }: Props) => {

    const clickHandler = (id: number) => {
        console.log(hero.available);
        setHeroes(heroes.map((hero) =>
            hero.id === id ? { ...hero, available: !hero.available } : hero));
    };

    return (
        <span
            className="hero__item"
            key={hero.id}
            onClick={() => clickHandler(hero.id)}
            style={{ color: hero.available ? "#399918" : "#982B1C" }}>
            {hero.id}. {hero.name} {hero.available}
        </span>
    );

};

export default SingleHero;