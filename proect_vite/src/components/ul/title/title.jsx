import './title.css'

// создаем объект для размера загаловков, ключ - значение
export const TitleSize = { // РазмерТекста
  BIG: "big",      // TitleSize.BIG, то класс заголовка - .title_big - большой
	MEDIUM: "medium",// TitleSize.MEDIUM,то класс заголовка - .title_medium - средний
  SMALL: "small",  // TitleSize.SMALL, то класс заголовка - .title_small - маленький
  EXTRA_SMALL: "extra_small" //TitleSize.EXTRA_SMALL, то класс заголовка - .title_extra_small - экстра маленький
};


  function  Title({children, size}) { // в параметрах указываем; {дети, размер}
    return (
    // по ключю объекта заголовка определяется значение, которое добавляется его класс
    <h1 className={`title${size ?` title_${size}` : ""}`}> {children} </h1>
	)
}

export default Title
