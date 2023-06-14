
# Webpack CLI Options

Lista de comandos se pueden ver ejecutando el comando

    npm run help


| Command | Description |
|--|--|
|-c, --config <pathToConfigFile...>  |Provide path to one or more webpack configuration files to process, e.g. "./webpack.config.js". |
|--config-name <name...>| Name(s) of particular configuration(s) to use if configuration file exports an array of multiple configurations.|
|-m, --merge |Merge two or more configurations using 'webpack-merge'.|
|--disable-interpret |Disable interpret for loading the config file.|
|--env <value...>| Environment variables passed to the configuration when it is a function, e.g. "myvar" or "myvar=myval".|
|--node-env <value> |Sets process.env.NODE_ENV to the specified value.|
|--analyze |It invokes webpack-bundle-analyzer plugin to get bundle information.|
|--progress [value] |Print compilation progress during build.|
|-j, --json [pathToJsonFile] |Prints result as JSON or store it in a file.|
|--fail-on-warnings |Stop webpack-cli process with non-zero exit code on warnings from webpack.|
|-e, --extends <value...> |Path to the configuration to be extended (only works when using webpack-cli).|
|-d, --devtool <value> |A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).|
|--no-devtool |Negative 'devtool' option.|
|--entry <value...> |A module that is loaded upon startup. Only the last one is exported.|
|--extends <value...> |Path to the configuration to be extended (only works when using webpack-cli).|
|--mode <value> |Enable production optimizations or development hints.|
|--name <value> |Name of the configuration. Used when loading multiple configurations.|
|-o, --output-path <value> |The output directory as **absolute path** (required).|
|--stats [value] |Stats options object or preset name.|
|--no-stats |Negative 'stats' option.|
|-t, --target <value...> |Environment to build for. Environment to build for. An array of environments to build for all of them when possible.|
|--no-target| Negative 'target' option.|
|-w, --watch |Enter watch mode, which rebuilds on file change.|
|--no-watch |Negative 'watch' option.|
|--watch-options-stdin |Stop watching when stdin stream has ended.|
|--no-watch-options-stdin |Negative 'watch-options-stdin' option.|


Ejemplo tomado de:

https://github.com/davidjoy/webpack-5-examples/tree/master/01-basic