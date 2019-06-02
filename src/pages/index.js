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
import withLayout from "../layout";

import Header from "../components/Header";

import astronaut from "../images/gatsby-astronaut.png";

const IndexPage = ({ intl }) => (
    <React.Fragment>
        <Helmet>
            <title>{intl.formatMessage({ id: "home.title" })}</title>
        </Helmet>
        <Header />
        <main>
            <FormattedHTMLMessage id="home.main" tagName="div" />
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
    withLayout,
    injectIntl
)(IndexPage);
