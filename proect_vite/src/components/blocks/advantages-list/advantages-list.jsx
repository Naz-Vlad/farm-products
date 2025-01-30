import Title from '../../ul/title/title';
import Button from '../../ul/button/button';
import AdvantageCard from '../../ul/advantage-card/advantage-card';
import './advantages-list.css';

function AdvantagesList({ advantages }) {
  return advantages && advantages.length ? (
    <section className="advantages">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="advantages__list">
        {advantages.map((advantage) => (
          <li className ="advantages__item" key={advantage.id}>
            <AdvantageCard {...advantage} />
          </li>
        ))}
      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
}

export default AdvantagesList
