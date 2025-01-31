import Header from "/src/components/layout/header/header";
import MainPage from "/src/components/layout/main/main-page";
import Footer from "../footer/footer";
import './page-wrapper.css'

function PageWrpapeer({advantages}) { // передаем в параметры данные не забываем про {}
	return (
		<>
		  <Header/>
			<main className="page-wrapper__main">
        <MainPage advantages = {advantages} /> {/*прокидываем данные в компанент*/}
			</main>
			<Footer/>
		</>
	)
}

export default PageWrpapeer
