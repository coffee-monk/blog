const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/acorn/Desktop/blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/acorn/Desktop/blog/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/acorn/Desktop/blog/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/acorn/Desktop/blog/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/home/acorn/Desktop/blog/src/pages/portfolio.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/acorn/Desktop/blog/src/templates/blog-post.js")))
}

