
const ENGLISH_LOCALE = "en_US";
const LOCALE_FRANÇAISE = "fr_CA";

function setDisplayLocale(locale) {
    let localeAttributeName = "data-locale-" + locale;
    let localeAttributeSelector = "[" + localeAttributeName + "]";
    
    let elements = document.querySelectorAll(localeAttributeSelector);
    for (let element of elements) {
	let content = element.getAttribute(localeAttributeName);
	element.dataset.locale = locale;
	element.innerHTML = content;
    }

    let forgetLinks = document.querySelectorAll("a.forget-locale"),
	linksVisible = (getPreferredLocale() != null);
    for (let link of forgetLinks) {
	if (linksVisible) {
	    link.classList.remove("hidden");
	} else {
	    link.classList.add("hidden");
	}
    }
}

function setPreferredLocale(locale) {
    localStorage.setItem("locale", locale);
}

function deletePreferredLocale() {
    localStorage.removeItem("locale");
}

function getPreferredLocale() {
    return localStorage.locale;
}

function getDefaultLocale() {
    if (localStorage.locale) {
	return localStorage.locale;
    } else if (navigator.language.startsWith("fr")) {
	return "fr_CA";
    } else {
	return "en_US";
    }
}

window.addEventListener("load", function () {
    setDisplayLocale(
	getDefaultLocale());
});
