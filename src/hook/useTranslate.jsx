import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { trasnlateData } from '../data/translateData'

function useTranslate() {
    const { language } = useContext(LanguageContext)

    const res = (key) => {
        return trasnlateData[key][language]
    }

    return {t: res}
}

export default useTranslate