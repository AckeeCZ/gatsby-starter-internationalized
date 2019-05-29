import React from "react";
import { Link } from "gatsby";

import cs from "../../images/cs.png";
import en from "../../images/en.png";

import languages from "../../i18n/languages";
import getLocalizedPath from "../../i18n/getLocalizedPath";

import { PageContext } from "../../pageContext";

import "./LanguageSwitcher.sass";

const flags = {
    cs,
    en
};

const LanguageSwitcher = () => (
    <PageContext.Consumer>
        {({ originalPath, locale }) => (
            <div className="LanguageSwitcher">
                {languages.map(lang =>
                    lang.locale === locale ? (
                        <img src={flags[lang.locale]} alt={lang.label} />
                    ) : (
                        <Link
                            key={lang.locale}
                            to={getLocalizedPath(originalPath, lang.locale)}
                        >
                            <img src={flags[lang.locale]} alt={lang.label} />
                        </Link>
                    )
                )}
            </div>
        )}
    </PageContext.Consumer>
);

export default LanguageSwitcher;
