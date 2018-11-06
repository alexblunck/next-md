# Next.js + Markdown

Import markdown files in your Next.js project

## Installation

```
npm install --save @blunck/next-md
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withMarkdown = require('@blunck/next-md')()
module.exports = withMarkdown()
```

You can now import parsed strings from `.md` files

```js
import foo from './foo.md'

export default () => <div dangerouslySetInnerHTML={{ __html: foo }} />
```

### With `markdown-loader` and `html-loader` options

Optionally you can provide [Marked.js](https://marked.js.org/#/USING_ADVANCED.md#options) and [html-loader](https://github.com/webpack-contrib/html-loader) options

```js
// next.config.js
const withMarkdown = require('@blunck/next-md')({
    markdownLoaderOptions: {
        gfm: true
    },
    htmlLoaderOptions: {
        minimize: true,
        conservativeCollapse: false
    }
})
module.exports = withMarkdown()
```

### Configuring Next.js

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withMarkdown = require('@blunck/next-md')()
module.exports = withMarkdown({
    webpack(config, options) {
        return config
    }
})
```
