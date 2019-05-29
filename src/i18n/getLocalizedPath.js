const languages = require("./languages");

const defaultLanguage = languages.find(lang => lang.default);

const getLocalizedPath = (originalPath, locale) => {
    const keyPath = originalPath.replace(/(\w+)\/$/, "$1");
    const lang = languages.find(lang => lang.locale === locale);
    const localizedPath =
        locale === defaultLanguage.locale
            ? defaultLanguage.routes[keyPath]
            : `/${locale}${lang.routes[keyPath]}`;
    return localizedPath;
};

module.exports = getLocalizedPath;
