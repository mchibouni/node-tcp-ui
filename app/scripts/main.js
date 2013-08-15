require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        blink: 'jquery.blink',
	uihandler: 'uihandler'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        blink: {
            deps: ['jquery'],
            exports: 'jquery'
        },
	uihandler: {
	   deps: ['jquery','blink'],
	   exports: 'jquery'
	}
    }
});

require(['app', 'jquery', 'bootstrap','blink','uihandler'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});


