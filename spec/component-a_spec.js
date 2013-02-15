define([
       'lib/squire'
], function(Squire){

    var async = new AsyncSpec(this), injector;

    afterEach(function(){
    	injector.clean();
    });

    describe("component-a", function() {

    	async.it('should be defined', function(done){
    	    injector = new Squire();
    	    injector.mock({ 
    	    	sys:{ver:'1.a'} 
    	    });
    	    injector.require(['components/component-a'], function(a){
		expect(a).toBeDefined();
		expect(a.name).toEqual('A');
		expect(a.ver).toEqual('1.a');
		done();
	    });
	});

    });

});


