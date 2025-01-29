import Title, { TitleSize } from '../../ul/title/title'
import './hero.css'

function Hero() {
	return (
    <section className="about">
      <div className="about__wrapper">
				<Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
				<p className="about__text">
					Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
				</p>
			</div>
		</section>
	)
}

export default Hero
