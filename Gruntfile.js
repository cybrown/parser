module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-peg');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        mochacli: {
            options: {
                reporter: 'spec',
                require: ['should']
            },
            all: ['test/']
        },
        peg: {
            parser: {
                src: "parser/parser.pegjs",
                dest: "parser/parser.gen.js"
            }
        },
        watch: {
            scripts: {
                files: ['parser/parser.pegjs'],
                tasks: ['peg'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('test', ['mochacli:all']);
};
