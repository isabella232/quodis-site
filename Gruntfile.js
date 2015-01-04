module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			js: {
				files: [ 'src/js/**/**.js' ],
				tasks: [ 'uglify', 'includereplace', 'htmlmin' ]
			},
			css: {
				files: [ 'src/scss/*.scss' ],
				tasks: [ 'libsass', 'imageEmbed', 'cssmin', 'includereplace', 'htmlmin' ]
			},
			html: {
				files: [ 'src/*.html' ],
				tasks: [ 'includereplace', 'htmlmin' ]
			},
			work: {
				files: [ 'src/img/work/*.png' ],
				tasks: [ 'copy' ]
			},
		},

		imageEmbed: {
			main: {
				src: [ 'tmp/style.css' ],
				dest: 'tmp/style.css',
				options: {
					deleteAfterEncoding: false,
				}
			}
		},

		includereplace: {
			main: {
				src: 'src/index.html',
				dest: 'build/index.html'
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'build/index.html': 'build/index.html'
				}
			}
		},

		copy: {
			main: {
				files: [{
					expand: true,
					flatten: true,
					src: [ 'src/fonts/*.woff' ],
					dest: 'build/',
					filter: 'isFile'
				},{
					expand: true,
					flatten: true,
					src: [ 'src/img/work/*.png' ],
					dest: 'build/',
					filter: 'isFile'
				},{
					expand: true,
					flatten: true,
					src: [
						'src/img/og.png',
						'src/img/229.jpg',
						'src/img/lxjs.jpg',
						'src/img/favicon.ico'
					],
					dest: 'build/',
					filter: 'isFile'
				}]
			}
		},

		uglify: {
			options: {
				// mangle: false,
				// beautify: true
			},
			build: {
				files: {
					'tmp/main.min.js': [ 'src/js/main.js' ]
				}
			}
		},

		libsass: {
			main: {
					src: 'src/scss/style.scss',
					dest: 'tmp/style.css'
			}
		},

		cssmin: {
			combine: {
				files: {
					'tmp/style.min.css': ['tmp/style.css']
				}
			}
		}

	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-libsass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-image-embed');

	// Default tasks
	grunt.registerTask('default', [
		'uglify',
		'libsass',
		'imageEmbed',
		'cssmin',
		'includereplace',
		'htmlmin',
		'copy',
		'watch'
	]);

};