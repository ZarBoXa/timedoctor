module.exports=function(grunt){


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		meta : {
			banner : '/* AngularJs Dependencies <%= grunt.template.today() %> */'
		},

		uglify: {
			jsLib: {
				src: [
					'node_modules/jquery/dist/jquery.min.js',
					'node_modules/bootstrap/dist/js/bootstrap.min.js',
					'node_modules/angular/angular.min.js',
					'node_modules/angular-animate/angular-animate.min.js',
					'node_modules/angular-route/angular-route.min.js',
					'node_modules/angular-sanitize/angular-sanitize.min.js',
					'node_modules/angular-aria/angular-aria.min.js',
					'node_modules/angular-messages/angular-messages.min.js',
					'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
					'node_modules/highcharts/highcharts.js',
					'node_modules/highcharts/highcharts-more.js',
					'node_modules/highcharts/modules/solid-gauge.js',
					'node_modules/highcharts-ng/dist/highcharts-ng.min.js',
					],
				dest: 'js/dep.min.js',
			},
			dist: {
				src: ['js/scripts.js'],
				dest: 'js/scripts.min.js'
			},
		},
		cssmin: {
			minify: {
				src: [
					'node_modules/bootstrap/dist/css/bootstrap.min.css',
					'node_modules/components-font-awesome/css/font-awesome.min.css',
					'css/styles.css'
				],
				dest: 'css/styles.min.css'
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true, 
						src: [
							'node_modules/bootstrap/fonts/*',
							'node_modules/components-font-awesome/fonts/*'
						],
						dest: 'fonts',
						filter: 'isFile',
						flatten:true
					},
				],
			}
		},
	    serve: {
			options: {
				port: 9000,
				'aliases':{
					'index': {
						tasks: ['test'],
						output: 'index.html'
					}
				}
			}
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-serve');

	grunt.registerTask('default',['cssmin','copy','uglify','serve']);

	grunt.registerTask('test',function(){
		grunt.log.write('Index.html served successfully on '+grunt.template.today()+' ').ok();
	});
};