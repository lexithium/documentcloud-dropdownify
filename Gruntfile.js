module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 9000,
					hostname: 'localhost',
					livereload: true,
					open: true,
				},
			},
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: ['*.html'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['css/*.css'],
				options: {
					spawn: false,
				},
			},
			script: {
				files: ['js/*.js'],
				options: {
					spawn:false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect', 'watch']);
}