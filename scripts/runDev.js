/**
 * This script requires a specific example from this directory and runs it.
 * Just pass --file to the package.json run dev command like so: `npm --file=hello run dev`
 */

const exampleFileArg = process.env.npm_config_file;

if (exampleFileArg) {
	require(`../examples/${exampleFileArg}`);
} else {
	const errorMessage = '`--file=<example name from examples>` argument is required. For example: npm run dev --file=hello';
	throw Error(errorMessage);
}

