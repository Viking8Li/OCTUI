let gulp = require('gulp')
let jshint = require('gulp-jshint')
let cleanCSS = require('gulp-clean-css')
let rename = require('gulp-rename')
let sass = require('gulp-sass')
let autoprefixer = require('gulp-autoprefixer')
let sourcemaps = require('gulp-sourcemaps')
const browserify = require('browserify')
let babelify = require('babelify')
let source = require('vinyl-source-stream')
let buffer = require('vinyl-buffer')
let uglify = require('gulp-uglify')


//gulp --tasks lists all tasks
//gulp -g in case of error
//gulp task-name to run a task
// gulp.task('gulp_jshint', function(done){
//     gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// })

//dafault task
// gulp.task('default', function(done){
//     gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// })


//creating a task with new gulp ver 4
function task_jshint(done){
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
    done()
}
function task_jshint1(done){
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
    done()
}
//named tasks
// exports.task_jshint = task_jshint

//default named task
// exports.default = task_jshint

//export more than one task
// exports.default = gulp.series(task_jshint, task_jshint1)
// exports.default = gulp.parallel(task_jshint, task_jshint1)
exports.both = gulp.parallel(task_jshint, task_jshint1)

//gulp minify + rename css files
// const styleSRC = './src/scss/style.css'
// const styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST))
//     done();
// })

///////////////////////////////////////////////////////////

// gulp.task('minify-css', (done)=>{
//     gulp.src(styleSRC)
//         .pipe(cleanCSS({debug:true}, (details)=>{
//             console.log(`${details.name}:${details.stats.originalSize}`);
//             console.log(`${details.name}:${details.stats.minifiedSize}`);
//         }))
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest((styleDEST)))
//     done()
// })

/////////////////////////////////////////////////////////////////
// sass compile + minify + rename
// const styleSRC = './src/scss/style.scss'
// const styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(sass({
//             outputStyle:'compressed'
//         }))
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST))
//     done()
// })

////////////////////////////////////////////////////////////

//sass compile + minify + rename + autoprefixer + sourcemaps
const styleSRC = './src/scss/style.scss'
const styleDEST = './dist/css'

gulp.task('styles', function(done){
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            cascade:false
        }))
        .pipe(cleanCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDEST))
    done()
})
//////////////////////////////////////////////////////
//browserify
//trnsform babelify
//bundle
//source
//rename
//bufffer
//init sourcemaps
//uglify
//write sourcemaps
//dist

let jsSRC = 'script.js'
let jsFolder = './src/js/'
let jsDEST = './dist/js/'

var jsFiles = [jsSRC]

gulp.task('js', function(done){
    jsFiles.map(function(entry){
        return browserify({
            entries:[jsFolder+entry]
        })
        .transform(babelify, {presets:['env']})
        .bundle()
        .pipe(source(entry))
        .pipe(rename({extname:'.min.js'}))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDEST))
    });
    done();
})