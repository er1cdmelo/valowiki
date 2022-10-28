import { Link } from 'react-router-dom'
import { Nav } from "./styles"
import Logo from '../../assets/Logo.svg';
import LanguageSelect from '../languageSelect/languageSelect';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/langSlice';

const Navbar = () => {
  // create an array of languages that will be used in the dropdown menu like pt-BR, en-US, etc. This array will be passed to the LanguageSelect component as a prop.  The LanguageSelect component will render a dropdown menu with the languages available.  The LanguageSelect component is located in src\components\languageSelect\languageSelect.jsx
  const languages = ['pt-BR', 'en-US', 'es-ES', 'fr-FR', 'de-DE', 'it-IT', 'ja-JP', 'ko-KR', 'ru-RU'];
  const dispatch = useDispatch();
  // create a function that will dispatch the action to change the language
  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };


  return (
    <Nav>
      <Link to='/'><img src={Logo} alt="Logo" /></Link>
      <LanguageSelect onSelect={handleLanguageChange} languages={languages} selectedLanguage='en-US'/>  
    </Nav>
  )
}

export default Navbar