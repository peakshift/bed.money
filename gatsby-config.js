module.exports = {
	// Since `gatsby-plugin-typescript` is automatically included in Gatsby you
	// don't need to define it here (just if you need to change the options)
	siteMetadata: {
		title: "🛏.💵 - Bitcoin Every Day"
	},
	plugins: [
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				defaultLayouts: {
					personas: require.resolve(
						"./src/components/personas-page-layout.tsx"
					),
					default: require.resolve("./src/components/default-page-layout.tsx")
				}
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `personas`,
				path: `${__dirname}/src/personas/`
			}
		},
		{
			resolve: "gatsby-plugin-page-creator",
			options: {
				path: `${__dirname}/src/personas`
			}
		}
	]
};

// module.exports = {
// 	plugins: [
// 		{
// 			resolve: `gatsby-source-filesystem`,
// 			options: {
// 				name: `pages`,
// 				path: `${__dirname}/src/pages/`
// 			}
// 		},
// 		{
// 			resolve: `gatsby-source-filesystem`,
// 			options: {
// 				name: `personas`,
// 				path: `${__dirname}/src/personas/`
// 			}
// 		},
// 		{
// 			resolve: "gatsby-plugin-page-creator",
// 			options: {
// 				path: `${__dirname}/src/personas`
// 			}
// 		},
// 	]
// };
