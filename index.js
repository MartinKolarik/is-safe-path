var DANGEROUS_PATH_PATTERN = /(?:^|[\\/])\.\.(?:[\\/]|$)/;

module.exports = function (path) {
	return path.indexOf('\0') === -1 && !DANGEROUS_PATH_PATTERN.test(path);
};
