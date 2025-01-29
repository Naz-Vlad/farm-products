import './advantage-card.css'
import Title, {TitleSize} from '../title/title'

function AdvantageCard() {
	return (
    <section className="advantage"> {/*обертка карточки */}
			<header className="advantage__header"> {/*шапка карточки */}
				<img className ='advantage__img'
				  src="/src/assets/Group.svg"
				/> {/*картинка */}
				<div> {/*обертка для span */}
          <span className='advantage__farmer'>Фермерские продукты</span> {/*чей продукт */}
					<Title size={TitleSize.SMALL}>Еда намного вкуснее</Title> {/*заголовок */}
				</div>
			</header>
			<p className="advantage__text">Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники</p>{/*текст карточки */}
		</section>
	)
}

export default AdvantageCard
