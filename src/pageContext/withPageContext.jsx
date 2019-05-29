import React from "react";
import PropTypes from "prop-types";

import { IntlProvider, addLocaleData } from "react-intl";
import csData from "react-intl/locale-data/cs";
import enData from "react-intl/locale-data/en";

import PageContext from "./PageContext";

import { translations } from "../i18n";

import "../styles/common.sass";

addLocaleData([...csData, ...enData]);

const withPageContext = PageComponent => props => {
    const { locale } = props.pageContext;
    return (
        <IntlProvider locale={locale} messages={translations[locale]}>
            <PageContext.Provider value={props.pageContext}>
                <PageComponent {...props} />
            </PageContext.Provider>
        </IntlProvider>
    );
};

withPageContext.propTypes = {
    children: PropTypes.node.isRequired
};

export default withPageContext;
