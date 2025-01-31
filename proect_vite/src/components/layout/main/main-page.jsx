import AdvantagesList from "../../blocks/advantages-list/advantages-list";
import Hero from "../../blocks/hero/hero";


function MainPage({advantages}) { // передаем в параметры данные не забываем про {}
	return (
    <div>
      <Hero/>
			<AdvantagesList advantages = {advantages} />  {/*прокидываем данные в компанент*/}
		</div>
	)
}

export default MainPage
