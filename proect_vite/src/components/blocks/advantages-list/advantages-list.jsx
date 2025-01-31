import Title from '../../ul/title/title';
import Button from '../../ul/button/button';
import AdvantageCard from '../../ul/advantage-card/advantage-card';
import './advantages-list.css';

function AdvantagesList({ advantages }) {  //передаем в параметры данныене [не забываем про {}]
  return advantages && advantages.length ? ( // проверяем даные на массив
    <section className="advantages">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="advantages__list">
  {/*каждый объект массива [advantages] превращаем в компонент [advantage].Используем для этого [map]*/}
        {advantages.map((advantage) => ( //методом map перебираем объекты массива и заполняем их данными
          <li className ="advantages__item" key={advantage.id}> {/* заполнение карточек по id объекта*/}
            <AdvantageCard {...advantage} /> {/* передаем массив обьектов */}
          </li>
		    // на экран будет выведено столько карточек, сколько есть объектов в массиве [advantages]
        ))}
      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
}

export default AdvantagesList
