
import PageWrpapeer from "../layout/page-wrapper/page-wrapper"; // берем цертровщик главной страницы
import advantages from "/src/data/advantages"; // берем данные карточек
import './App.css'

function App() {
  return  <PageWrpapeer advantages = {advantages}/> // передаем тассив данных
}

export default App
