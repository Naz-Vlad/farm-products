           пошаговое описание главной страницы проекта

^  	1 - делаем функццию компанента страницы [App]

*	  2 - делаем функцию компанента центровщика страницы [PageWrpapeer], и записываем

#     		function PageWrpapeer() {
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

------------------------------------------------------------------------

3 - делаем функцию для компанента шапка [<Header/>]

#				function Header() {
					return (
^						<header className="header">
логотип		    <Logo/> // делаем компанент доготип [<Logo/>]
навигация		  <Nav/>  // делаем  компанент навигация [<Nav/>]
^						</header>
					)
				}

--------------------------------------------------------------------------

4 - делаем функцию для компанента падвал [<Footer/>]

#				function Footer() {
					return (
^						<footer className='footer'>
^							<Logo/>
^							<span className="footer__copyright">Создано 2021</span>
^						</footer>
					)
				}

---------------------------------------------------------------------------------------

5 - делаем функцию для компанента [<MainPage/>]

#				function MainPage() {
					return (
^						<main>
герой				  <Hero/>// делаем компанент блока герой [<Hero/>]
проимущества	<AdvantagesList/>// делаем комп. для списка проим. [<AdvantagesList/>]
^						</main>
					)
				}

-----------------------------------------------------------------------------

6 делаем функцию для компанента списка проимуществ [<AdvantagesList/>]

#				function AdvantagesList() {
					return (
^					<section className="advantages">
^							<Title>Почему фермерские продукты лучше?</Title>
^							<ui className = "advantages__list"> // блок списка карточек
^								<li className="advantages__item"> // блок карточки
проимущество 		  <AdvantageCard/> // делаем комп. карточки проим. [<AdvantageCard/> ]
^								</li>
^							</ui>
^							<Button>Купить</Button>
^						</section>
					)
				}

---------------------------------------------------------------------------------

7 делаем функцию для компанента карточи проимущества[<AdvantageCard/>]

# function AdvantageCard() {
	 return (
  ^  <section className="advantage"> //обертка карточки
  ^		 <header className="advantage__header"> //шапка карточки
  ^			 <img className ='advantage__img' src="/src/assets/Group.svg"/> // иконка карточки
  ^			 <div> // обертка для span и Title
  ^        <span className='advantage__farmer'>Фермерские продукты</span> //производитель
  ^				 <Title size={TitleSize.SMALL}>Еда намного вкуснее</Title> // заголовок
  ^			 </div>
  ^		 </header>
  ^		 <p className="advantage__text">текст карточки</p> //текст карточки
  ^	 </section>
    )
  }

-------------------------------------------------------------------------------

8 - Шаблонизируем созданные компоненты данными. От данных на главной странице будет зависеть только список проимуществ:

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

------------------------------------------------------------------------------------

9 - Подключим ланные [advantages] в компонент [App] и передаем их в [PageWrpapeer]

     import advantages from "/src/data/advantages";

						function App() {
^							return  <PageWrpapeer advantages = {advantages}/> // передаем компанену данные
						}

------------------------------------------------------------------------------

10 - прокидываем в параметры [PageWrpapeer] и прокидывае их в [MainPage]

*               передаем в параметры данныене [не забываем про {}]
#            function PageWrpapeer({advantages}) {
							return (
								<>
									<Header/>
                  <main className="page-wrapper__main">
^                   <MainPage advantages = {advantages} />  // прокидываем данные в компанент
			            </main>
									<Footer/>
								</>
							)
						}

-------------------------------------------------------------------------------

11 - прокидываем данные в [MainPage] и передаем их в [AdvantagesList]

               передаем в параметры данныене [не забываем про {}]
#						function MainPage({advantages}) {
							return (
								<>
									<Hero/>
^									<AdvantagesList advantage = {advantages} /> // прокидываем данные в компанент
								</main>
							)
						}

-------------------------------------------------------------------------------

12 - прокидываем данные в [AdvantagesList] и передаем их в фукцию
	12.1 - проверяем данные на массив
  12.2-каждый объект массива [advantages] превращаем в компонент [advantage]. Используем для этого [map]

       передаем в параметры данныене [не забываем про {}]
#		function AdvantagesList({ advantages }) {

#		  return  advantages && advantages.length ? ( // 12.1-проверяем даные на массив
				<section className="advantages">
					<Title>Почему фермерские продукты лучше?</Title>
					<ul className="advantages__list">
#					  {advantages.map((advantage) => (
^  12.2-каждый объект массива [advantages] превращаем в компонент [advantage]. Используем для этого [map]
^							<li className ="advantages__item" key={advantage.id}> // заполнение карточек по id объекта
#								<AdvantageCard {...advantage} /> // передаем массив обьектов
							</li>
^       на экран будет выведено столько карточек, сколько есть объектов в массиве [advantages]
						))}
					</ul>
					<Button>Купить</Button>
				</section>
#			) : null; // 12.1-проверяем даные на массив
		}

-------------------------------------------------------------------------------------

13 - прокидываем данные в [AdvantageCard] и передаем их в фукцию

#  записываем ключи объекта в параметры не забываем {}
	function AdvantageCard({
		title,       // заголовок карточки
		owner,       // владелец в карточке
		text,        // техст карточки
		isNegative,  // если негативный отзыв
		image        // адрес иконки
		}) {
		return (
#		 определяем клас для [<section>] по ключю[isNegative] объекта для CSS
#    если [isNegative === false], то [className='advantage'], иначе [className='advantage_negative']

		  <section className = {`advantage${isNegative ? " advantage_negative" : ""}`}>
		    <header className="advantage__header">
          <img className ='advantage__img'
#				    src={image} // передаем ссылку на иконки
#					  width={56}  // ширина иконки
#           height={56} // высота иконки
#           alt={title} // нзвание иконки, соответствует заголовку карточки
				  />
					<div>
#         определяем клас [<span>] по ключю [isNegative] объекта для CSS
#         если [isNegative === false], то [className='advantage__owner'], иначе [className='advantage__owner_negative']
						<span className={`advantage__owner${isNegative ? " advantage__owner_negative" : ""}`}> {owner} // передаем значение владельца
						</span>
#          // заголовок, масштаб устанвливаем по значению ключа объекта [TitleSize]
#						<Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
					</div>
				</header>
				<p
					className="advantage__text"
					dangerouslySetInnerHTML={{ __html: text }}
				/>{/*текст карточки */}
	    </section>
		)
	}



dangerouslySetInnerHTML={{ __html: text }}
