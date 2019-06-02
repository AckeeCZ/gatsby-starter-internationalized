import React from "react";
import PropTypes from "prop-types";

import { IntlProvider } from "react-intl";

import PageContext from "./PageContext";

import "../i18n/config/reactIntl";
import translations from "../i18n/translations";

import "../styles/common.sass";

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
