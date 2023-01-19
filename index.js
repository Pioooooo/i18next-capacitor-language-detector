const Preferences = require('@capacitor/preferences').Preferences;

function callFallbackIfFunc(fallback, callback) {
	if (typeof fallback === 'function') {
		return fallback(callback)
	}
	return callback(fallback)
}

module.exports = exports = function (fallback) {
	return {
		type: 'languageDetector',
		async: true,
		init: () => { },
		detect: async function (callback) {
			try {
				await Preferences.get({ key: '@i18next-async-storage/user-language' })
					.then(language => {
						if (language.value) {
							return callback(language.value)
						}
						return callFallbackIfFunc(fallback, callback)
					})
			} catch (error) {
				callFallbackIfFunc(fallback, callback)
			}
		},
		cacheUserLanguage: async function (language) {
			try {
				await Preferences.set({ key: '@i18next-async-storage/user-language', value: language })
			} catch (error) {
				console.error(error)
			}
		}
	}
};
