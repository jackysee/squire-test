var requirejsConfig = {
	baseUrl: '.',
	waitSeconds: 15,
	urlArgs: 'bust='+new Date().getTime(),
	paths: {
		'jquery': 'lib/jquery-1.7.2'
	},
	shim: {}
};

require.config(requirejsConfig);

define("sys", {
	ver: '0.0.1'
});
