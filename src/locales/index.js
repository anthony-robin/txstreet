const enUS = require('date-fns/locale/en-US/index');
const de = require('date-fns/locale/de/index');
const fr = require('date-fns/locale/fr/index');

const supportedLocales = {
	"en": {
        title: "English",
        fns: enUS,
        messages: require("./en.json")
    },
    de:{
        title: "Deutsche",
        fns: de,
        messages: require("./de.json")
    },
    fr:{
        title: "Français",
        fns: fr,
        messages: require("./fr.json")
    },
};

module.exports = supportedLocales;
