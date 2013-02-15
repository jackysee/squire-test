define([
   'jquery',
   'sys'
], function($, sys){

    console.log('component-a loaded', $, sys);
    return { name:'A' , ver: sys.ver };
	
});
