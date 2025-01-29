import Title from '../../ul/title/title';
import Button from '../../ul/button/button';
import AdvantageCard from '../../ul/advantage-card/advantage-card';
import './advantages-list.css';

function AdvantagesList() {
	return (
    <section className="advantages">
			<Title>Почему фермерские продукты лучше?</Title>
			<ui className = "advantages__list">
        <li className="advantages__item">
          <AdvantageCard/>
				</li>
			</ui>
      <Button>Купить</Button>
		</section>
	)
}

export default AdvantagesList
