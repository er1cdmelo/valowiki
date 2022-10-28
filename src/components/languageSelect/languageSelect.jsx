import { useState } from 'react';
import { LangWrapper } from './styles'

const LanguageSelect = ({ selectedLanguage, languages, onSelect }) => {

  // create a state to store the selected language
  const [selected, setSelected] = useState(selectedLanguage); 
    
  return (
    <LangWrapper
        value={selected} // set the value of the select to the selected language
        onChange={e => {
            setSelected(e.target.value);
            onSelect(e.target.value);
        }}
        style={{ fontSize: 16 }}
    >
        {languages.map(lang => (
            <option key={lang} value={lang}>
                {lang}
            </option>
        ))}
    </LangWrapper>
  )
}

export default LanguageSelect;