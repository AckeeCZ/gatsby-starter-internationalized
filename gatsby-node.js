/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const languages = require("./src/i18n/languages");
const getLocalizedPath = require("./src/i18n/getLocalizedPath");

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    if (page.internalComponentName === "ComponentDev404Page") {
        return;
    }

    return new Promise(resolve => {
        deletePage(page);

        languages.forEach(lang => {
            const localizedPath = getLocalizedPath(page.path, lang.locale);
            const localePage = {
                ...page,
                path: localizedPath,
                context: {
                    locale: lang.locale,
                    originalPath: page.path
                }
            };
            createPage(localePage);
        });

        resolve();
    });
};
