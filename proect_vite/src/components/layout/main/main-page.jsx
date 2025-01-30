import AdvantagesList from "../../blocks/advantages-list/advantages-list";
import Hero from "../../blocks/hero/hero";


function MainPage(advantages) {
	return (
    <div>
      <Hero/>
			<AdvantagesList advantage = {advantages} />
		</div>
	)
}

export default MainPage
