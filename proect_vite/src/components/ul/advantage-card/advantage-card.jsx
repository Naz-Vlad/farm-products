import './advantage-card.css'
import Title, {TitleSize} from '../title/title'


//записываем ключи объекта в параметры не забываем
function AdvantageCard({title, owner, text, isNegative, image}) {
	return (
		// определяем клас <section> по ключю[isNegative] объекта для CSS
    <section className={`advantage${isNegative ? " advantage_negative" : ""}`}>
			<header className="advantage__header">
				<img className ='advantage__img'
				  src={image}  // передаем ссылку на иконку
					width={56}   // ширина иконки
          height={56}  // высота иконки
          alt={title}  // нзвание иконки, соответствует заголовку карточки
				/>
				<div>
				  {/*определяем клас <span> по ключю[isNegative] объекта для CSS*/}
				  <span className={`advantage__owner${isNegative ? " advantage__owner_negative" : ""}`}> {owner} {/*передаем значение владельца*/}
          </span>
					<Title size={TitleSize.EXTRA_SMALL}>{title}</Title> {/*заголовок */}
				</div>
			</header>
			<p className="advantage__text">{text}</p> {/* передаем текст карточки */}
		</section>
	)
}

export default AdvantageCard
