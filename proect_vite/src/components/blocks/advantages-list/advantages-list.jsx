import Title from '../../ul/title/title';
import Button from '../../ul/button/button';
import './advantages-list.css';

function AdvantagesList() {
	return (
    <section className="advantages">
			<Title>Почему фермерские продукты лучше?</Title>
			<ui className = "advantages__list">
        <li className="advantages__item">
          <p>контент карточки</p>
				</li>
			</ui>
      <Button>Купить</Button>
		</section>
	)
}

export default AdvantagesList
