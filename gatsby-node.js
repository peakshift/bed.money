const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			plugins: [new TsconfigPathsPlugin()]
		}
	});
};

exports.createPages = async ({ actions: { createPage } }) => {
	// `getPokemonData` is a function that fetches our data
	const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"]);
	// Create a page that lists all Pokémon.
	createPage({
		path: `/`,
		component: require.resolve("./src/templates/all-pokemon.js"),
		context: { allPokemon }
	});
	// Create a page for each Pokémon.
	allPokemon.forEach((pokemon) => {
		createPage({
			path: `/pokemon/${pokemon.name}/`,
			component: require.resolve("./src/templates/pokemon.js"),
			context: { pokemon }
		});
	});
};
