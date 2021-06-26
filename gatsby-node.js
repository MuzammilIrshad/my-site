

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    console.log(page);
    const { createPage } = actions

    // Only update the `/app` page.
    if (page.path.match(/^\/about/)) {
        // page.matchPath is a special key that's used for matching pages
        // with corresponding routes only on the client.
        page.matchPath = "/about/*"

        // Update the page.
        createPage(page)
    }
}

/*
const arr = [{ name: "Fruit", dec: "" }]

exports.createPages = async function ({ actions }) {

    actions.createPage({
        path: "fruits",
        component: require.resolve(`./src/templates/fruits.js`),
        context: {
            // Data passed to context is available
            // in pageContext props of the template component
            name: arr[0].name,
            dec: arr[0].dec
        },
    });
    console.log("End of Gatsby Node File");
}*/