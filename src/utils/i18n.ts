import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import english from '../utils/languages/en.json'
import spanish from '../utils/languages/es.json'

const resources = {
	en: {
		translation: english,
	},
	es: {
		translation: spanish,
	},
}

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	})

export default i18n
