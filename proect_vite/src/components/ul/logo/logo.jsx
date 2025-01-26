import logo from '/src/assets/logo.svg' // импортируем картинку
import './logo.css'

function Logo() {
	return (
    <a href="/" className="logo__link">
			<img src = {logo} alt = 'Логотип'/>{/*передаем импортир. картинку */}
      <span className="logo__text">Фермерские продукты</span>
		</a>
	)
}

export default Logo
