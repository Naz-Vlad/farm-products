# farm-products


#            ПОШАГОВОЕ ОПИСАНИЕ ГЛПАВНОЙ СТРОНИЦЫ ПРОЕКТА

# 	1 - делаем функццию компанента страницы [App]
#	  2 - делаем функцию компанента центровщика страницы [PageWrpapeer], а в [App] записываем компанент [<PageWrpapeer/>]

     		function PageWrpapeer() {
					return (
						<>
# шапка				<Header/>
#	главная			<MainPage/>
#	подвал		  <Footer/>
						</>
					)
				}

#   3 - делаем функцию для компанента шапка [<Header/>]

				function Header() {
					return (
						<header className="header">
#             3.1 делаем функцию для компанента доготип [<Logo/>]
							<Logo/>
#             3.2 делаем функцию для компанента навигация [<Nav/>]
							<Nav/>
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
#             5.1 делаем функцию для компанента [<About/>]
							<About/>
							<AdvantagesList/>
#             5.2 делаем функцию для компанента [<AdvantagesList/>]
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
# 				        <p>контент карточки</p>
#								</li>
							</ui>
							<Button>Купить</Button>
						</section>
					)
				}
