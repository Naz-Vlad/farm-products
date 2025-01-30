import './advantage-card.css'
import Title, {TitleSize} from '../title/title'

function AdvantageCard({title, owner, about, isNegative, image}) {
	return (
    <section className={`advantage${isNegative ? " advantage_negative" : ""}`}>
			<header className="advantage__header">
				<img className ='advantage__img'
				  src={image}
					width={56}
          height={56}
          alt={title}
				/>
				<div>
				 <span className={`advantage__owner${isNegative ? " advantage__owner_negative" : ""}`}> {owner}
          </span>
					<Title size={TitleSize.EXTRA_SMALL}>{title}</Title> {/*заголовок */}
				</div>
			</header>
			<p
        className="advantage__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />{/*текст карточки */}
		</section>
	)
}

export default AdvantageCard
