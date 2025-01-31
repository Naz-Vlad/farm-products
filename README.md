            пошаговое описание главной страницы проекта

^  	1 - делаем функццию компанента страницы [App]

*	  2 - делаем функцию компанента центровщика страницы [PageWrpapeer], и записываем    компанент [<PageWrpapeer/>] в [App]

     		function PageWrpapeer() {
					return (
						<>
шапка				  <Header/>
              <main className="page-wrapper__main">
тело  		      <MainPage/>
              </main>
подвал		    <Footer/>
						</>
					)
				}

^   3 - делаем функцию для компанента шапка [<Header/>]

				function Header() {
					return (
						<header className="header">
^						  3.1 делаем функцию для компанента доготип [<Logo/>]
логотип		    <Logo/>
^             3.2 делаем функцию для компанента навигация [<Nav/>]
навигация		  <Nav/>
						</header>
					)
				}

   4 - делаем функцию для компанента падвал [<Footer/>]

				function Footer() {
					return (
						<footer className='footer'>
^							<Logo/>
^							<span className="footer__copyright">Создано 2021</span>
						</footer>
					)
				}
   5 - делаем функцию для компанента [<MainPage/>]

				function MainPage() {
					return (
						<main>
^             5.1 делаем функцию для компанента герой [<Hero/>]
герой				  <Hero/>
^             5.2 делаем функцию для компанента проимущества [<AdvantagesList/>]
проимущества	<AdvantagesList/>
						</main>
					)
				}
           --------------------------------------------------------

^            ПОШАГОВОЕ ОПИСАНИЕ БЛОКА ПРОИМУЩЕСТВ [<AdvantagesList/>]

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

#    6 - Шаблонизируеь созданные компоненты данными. От данных на главной странице будет зависеть только список проимуществ:

const advantages = [
  {
    id: 0,
    title: "Еда намного вкуснее",
    owner: "Фермерские продукты",
    isNegative: false,
    image: "/src/assets/icon-1.svg",
    about:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина два настолько разных продукта, что они даже не родственники"
  },
  {
    id: 1,
    title: "Просроченные продукты",
    owner: "Магазинные продукты",
    isNegative: true,
    image: "/src/assets/icon-2.svg",
    about:
      "Из-за большого количества товара сотрудники магазинов нe успевают своевременно производить замену товара"
  },
  {
    id: 3,
    title: "Натуральные продукты",
    owner: "Фермерские продукты",
    isNegative: false,
    image: "/src/assets/icon-3.svg",
    about:
      "Поставляем местные органические продукты, выращенные без пестицидов и химических удобрений."
  },
  {
    id: 4,
    title: "Некачественное мясо",
    owner: "Магазинные продукты",
    isNegative: true,
    image: "/src/assets/icon-4.svg",
    about:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"
  }
];

export default advantages

#   7 - Подключим [advantages] в компонент [App] и передаем их в [PageWrpapeer]

#   import advantages from "/src/data/advantages";

						function App() {
#							return  <PageWrpapeer advantages = {advantages}/> // передаем компанену данные
						}

#      7.1 прокидываем данные в [PageWrpapeer] и передаем их в [MainPage]

#						function PageWrpapeer({advantages}) {
							return (
								<>
									<Header/>
                  <main className="page-wrapper__main">
#                   <MainPage advantages = {advantages} />
			            </main>
									<Footer/>
								</>
							)
						}

#        7.2 прокидываем данные в [MainPage] и передаем их в [AdvantagesList]

#						function MainPage(advantages) {
							return (
								<>
									<Hero/>
#									<AdvantagesList advantage = {advantages} />
								</main>
							)
						}

#         7.3 прокидываем данные в [AdvantagesList] и передаем их в фукцию:
#             {advantages.map((advantage) => (
#               <li className="advantages__item" key={advantage.id}>
#                 <AdvantageCard {...advantage} />
#               </li>
#             ))}




