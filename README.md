# farm-products


#            ПОШАГОВОЕ ОПИСАНИЕ ГЛПАВНОЙ СТРОНИЦЫ ПРОЕКТА

# 	1 - делаем функццию компанента страницы [App]
#	  2 - делаем функцию компанента центровщика страницы [PageWrpapeer], и записываем компанент [<PageWrpapeer/>] в [App]

     		function PageWrpapeer() {
					return (
						<>
шапка				  <Header/>
главная		    <MainPage/>
подвал		    <Footer/>
						</>
					)
				}

#   3 - делаем функцию для компанента шапка [<Header/>]

				function Header() {
					return (
						<header className="header">
#             3.1 делаем функцию для компанента доготип [<Logo/>]
логотип		    <Logo/>
#             3.2 делаем функцию для компанента навигация [<Nav/>]
навигация		  <Nav/>
						</header>
					)
				}

#   4 - делаем функцию для компанента падвал [<Footer/>]

				function Footer() {
					return (
						<footer className='footer'>
							<Logo/>
							<span className="footer__copyright">Создано 2021</span>
						</footer>
					)
				}
#   5 - делаем функцию для компанента [<MainPage/>]

				function MainPage() {
					return (
						<main>
#             5.1 делаем функцию для компанента герой [<Hero/>]
герой				  <Hero/>
#             5.2 делаем функцию для компанента проимущества [<AdvantagesList/>]
проимущества	<AdvantagesList/>
						</main>
					)
				}
           --------------------------------------------------------

#            ПОШАГОВОЕ ОПИСАНИЕ БЛОКА ПРОИМУЩЕСТВ [<AdvantagesList/>]

  1 - 5.2 делаем функцию для компанента списка проимуществ [<AdvantagesList/>]

#				function AdvantagesList() {
					return (
						<section className="advantages">
							<Title>Почему фермерские продукты лучше?</Title>
							<ui className = "advantages__list">
#								<li className="advantages__item">
#           5.2.1 делаем функцию для компанента карточи проимущества[<AdvantageCard/>]
проимущество 		  <AdvantageCard/>
#								</li>
							</ui>
							<Button>Купить</Button>
						</section>
					)
				}

#      5.2.1 делаем функцию для компанента карточи проимущества[<AdvantageCard/>]

function AdvantageCard() {
	return (
#  <section className="advantage"> //обертка карточки
#		 <header className="advantage__header"> //шапка карточки
#			 <img className ='advantage__img' src="/src/assets/Group.svg"/> //картинка
#			 <div> {/*обертка для span */}
#        <span className='advantage__farmer'>Фермерские продукты</span>//производитель
#				 <Title size={TitleSize.SMALL}>Еда намного вкуснее</Title> // заголовок
#			 </div>
#		 </header>
#		 <p className="advantage__text">текст карточки</p> //текст карточки
#	 </section>
	)
}


