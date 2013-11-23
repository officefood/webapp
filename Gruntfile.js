module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'css/main.css': 'less/main.less',
                    'css/reset.css': 'less/reset.less'
                }
            }
        },
        
        watch: {
            scripts: {
                files: 'less/*.less',
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-deploy");
    
    grunt.registerTask('default', ['less']);
};
/*0ff1c3f00D*/