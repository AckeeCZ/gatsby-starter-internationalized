<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

# Gatsby Starter Internationalized

Gatsby v2 starter based on [gatsby-starter-intl](https://github.com/tomekskuta/gatsby-starter-intl).

[Checkout the demo!](https://gatsby-starter-internationalized.ack.ee)

## Features

-   internationalized pages (via `react-intl`)
-   internationalized routes (via configuration)
-   `LocalizedLink` component to create a link based on a current locale
-   `LanguageSwitcher` component to create a language switcher based on the configuration

**The starter includes just code important for internationalization, the rest is up to you**

## How to start

To use **Gatsby starter intl** you have to install Gatsby CLI

```sh
npm install global gatsby-cli
```

Then use it to start new project based on **Gatsby starter internationalized**

```sh
gatsby new your-project-name https://github.com/AckeeCZ/gatsby-starter-internationalized
cd your-project-name/
gatsby develop
```

Your site is running at `localhost:8000`.

If you want to compile production build just run `gatsby build`.

## How it works

Gatsby creates **static pages** for every language sets in the configuration in `src/i18n/languages.js`.

Say you have two languages:

-   `cs` ,
-   `en` and is a default language.

Gatsby then creates:

-   `/cs/stranka1`,
-   `/page1`, base on the configuration.

### Translations

Translations are set in `src/i18n/translations`. We use flat structure set in yaml files. There should be a yaml file for every language (`cs.yaml`, `en.yaml` etc.)

```jsx
<FormattedMessage id="home.title" />
```

Translation is in `src/i18n/translations/en.yaml` and looks like:

```yaml
home.title: "Homepage"
```

### Languages

Languages list is in `src/i18n/languages.js`. Elements of array has attrs:

-   locale - key to identify your locale,
-   label - pretty name of your locale to display in list or buttons in your UI.
-   default - if true it is fallback language for app.
-   routes - an object with translations for app routes

Example:

```js
{
        locale: "cs",
        label: "Čeština",
        default: false,
        routes: {
            "/": "/",
            "/page1": "/stranka1",
            "/subpage/page1": "/podstranka/stranka1",
        }
    },
```

### PageContext

HOC `withPageContext` (`./src/pageContext/withPageContext.jsx`) wraps your page with `react-intl` provider.

It injects `locale` and `originalPath` into a page via react `PageContext`, you can find its usage in `./src/components/LocalizedLink` or `./src/components/LanguageSwitcher` components

To make internationalization working, you have to wrap your pages with `withPageContext` HOC.

```jsx
// src/pages/my-page.jsx

import withPageContext from "../pageContext";

const IndexPage = ({ intl }) => (
    <React.Fragment>
        <h1>
            <FormattedMessage id="home.title" />
        </h1>
    </React.Fragment>
);

export default withPageContext(IndexPage);
```

## Contributing

If you have any question, see bugs or you think some feature can be written better - just open pull request or issue. I will be happy to help and learn from you.

## License

[MIT](https://opensource.org/licenses/MIT)
