import Title from '../../ul/title/title';
import Button from '../../ul/button/button';
import AdvantageCard from '../../ul/advantage-card/advantage-card';
import './advantages-list.css';

function AdvantagesList(advantages) {
	return advantages && advantages.length ? ( // проверяем данные на массив объектов
    <section className="advantages">
			<Title>Почему фермерские продукты лучше?</Title>
			<ui className = "advantages__list">
			  {advantages.map ((advantage) => ( //методом map пепебирая каждый элемент масива advantages карточек превращаем каждую карточку в компанент advantage.на экран будет выведено столько карточек, сколько есть элементов в массиве advantages
          <li className="advantages__item" key={advantage.id}>
            <AdvantageCard {...advantage} /> {/* каждый компанент карточки в массиве заполняем данными по idkey={advantage.id */}
          </li>
        ))}
			</ui>
      <Button>Купить</Button>
		</section>
  ) : null;
}

export default AdvantagesList
