/*global jasmine:false*/

var jasmineEnv = jasmine.getEnv();

jasmineEnv.updateInterval = 1000;
var htmlReporter = new jasmine.HtmlReporter();
// var consoleReporter = new jasmine.ConsoleReporter();
// jasmineEnv.addReporter(new jasmine.TrivialReporter());
jasmineEnv.addReporter(htmlReporter);
// jasmineEnv.addReporter(consoleReporter);


jasmineEnv.specFilter = function(spec) {
	return htmlReporter.specFilter(spec);
};

function execJasmine() {
	jasmineEnv.execute();
}
