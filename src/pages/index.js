import React from "react";
import Helmet from "react-helmet";
import {
    injectIntl,
    intlShape,
    FormattedMessage,
    FormattedHTMLMessage
} from "react-intl";
import { compose } from "recompose";

import withPageContext from "../pageContext";

import Header from "../components/Header";

import astronaut from "../images/gatsby-astronaut.png";

const IndexPage = ({ intl }) => (
    <React.Fragment>
        <Helmet>
            <title>{intl.formatMessage({ id: "home.title" })}</title>
        </Helmet>
        <Header />
        <main>
            <h1>
                <FormattedMessage id="home.title" />
            </h1>
            <FormattedHTMLMessage id="home.main" tagName="p" />
            <img src={astronaut} alt="" />
        </main>
        <footer>
            <FormattedHTMLMessage id="home.footer" />
        </footer>
    </React.Fragment>
);

IndexPage.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    injectIntl
)(IndexPage);
