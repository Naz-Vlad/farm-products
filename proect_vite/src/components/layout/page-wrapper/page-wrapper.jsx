import Header from "/src/components/layout/header/header";
import MainPage from "/src/components/layout/main/main-page";
import Footer from "../footer/footer";
import './page-wrapper.css'

function PageWrpapeer({advantages}) {
	return (
		<div>
		  <Header/>
			<main className="page-wrapper__main">
        <MainPage advantages = {advantages} />
			</main>
			<Footer/>
		</div>
	)
}

export default PageWrpapeer
