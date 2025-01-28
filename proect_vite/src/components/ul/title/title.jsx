import './title.css'

// создаем объект для размера загаловков, ключ - значение
export const TitleSize = { // РазмерТекста
  BIG: "big",      //// TitleSize.BIG, то класс заголовка - .title_big
  SMALL: "small",  // TitleSize.SMALL, то класс заголовка - .title_small
  DEFAULT: ""      //TitleSize.DEFAULT, то класс заголовка - .title
};


  function  Title({children, size}) { // в параметрах указываем; {дети, размер}
    return (
    // по ключю объекта заголовка определяется значение, которое добавляется его класс
    <h1 className={`title${size ?` title_${size}` : ""}`}> {children} </h1>
	)
}

export default Title
