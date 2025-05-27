import { useEffect, useState } from "react"
import "./App.css"
import { Plural, Trans } from "@lingui/react/macro"
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import { loadCatalog } from "./i18n"

function App() {
  const [count, setCount] = useState(0)
  const [currentLang, setCurrentLang] = useState("zh")

  useEffect(() => {
    loadCatalog(currentLang)
  }, [currentLang])

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang)
    loadCatalog(lang)
  }

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <div className="language-selector">
          <select 
            value={currentLang} 
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="lang-dropdown"
          >
            <option value="en">
              🇺🇸 English
            </option>
            <option value="zh">
              🇨🇳 中文
            </option>
          </select>
        </div>
        <h1>
          <Trans>Simple Demo Project for Implementing i18n for OpenYurt</Trans>
        </h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            <Plural value={count} one="# month" other="# months" />
          </button>
          <p>
            <Trans>
              Click on the button to increment the months
            </Trans>
          </p>
        </div>
        <p className="read-the-docs">
          <Trans>Created for a sample implementation </Trans>
        </p>
      </div>
    </I18nProvider>
  )
}

export default App
