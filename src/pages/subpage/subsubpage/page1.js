import React from "react";
import Helmet from "react-helmet";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { compose } from "recompose";

import withPageContext from "../../../pageContext";

import Header from "../../../components/Header";
import Link from "../../../components/LocalizedLink";

const Page1 = ({ intl }) => (
    <React.Fragment>
        <Helmet>
            <title>
                {intl.formatMessage({ id: "subpage.subsubpage.page1.title" })}
            </title>
        </Helmet>
        <Header />
        <main>
            <h1>
                <FormattedMessage id="subpage.subsubpage.page1.title" />
            </h1>
            <Link to="/">
                <FormattedMessage id="back.home" />
            </Link>
        </main>
    </React.Fragment>
);

Page1.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    injectIntl
)(Page1);
