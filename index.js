const defaultHtmlOptions = {
    minimize: true,
    conservativeCollapse: false
}

const defaultMarkdownOptions = {
    gfm: true
}

module.exports = ({ htmlLoaderOptions, markdownLoaderOptions } = {}) => (
    nextConfig = {}
) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            config.module.rules.push({
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: Object.assign(
                            {},
                            defaultHtmlOptions,
                            htmlLoaderOptions
                        )
                    },
                    {
                        loader: 'markdown-loader',
                        options: Object.assign(
                            {},
                            defaultMarkdownOptions,
                            markdownLoaderOptions
                        )
                    }
                ]
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}
