//模块定义
var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //其他的gulp模块就可以直接通过$来引用，而不需再声明变量
var open = require('open');

//全部变量来定义目录路径
var app = {
	srcPath:'src/',
	devPath:'build/',
	prdPath:'dist/'
};

//把bower下载的第三方创建拷贝到生产环境目录
gulp.task('lib',function(){
	gulp.src('bower_components/**/*')
	.pipe(gulp.dest(app.devPath+'vendor'))
	.pipe(gulp.dest(app.prdPath+'vendor'))
	.pipe($.connect.reload())//构建完，刷新浏览器进行实时预览

});

gulp.task('html',function(){
	gulp.src(app.srcPath+'/**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath))
	.pipe($.connect.reload())

});

gulp.task('json',function(){
	gulp.src(app.srcPath+'data/**/*.json')
	.pipe(gulp.dest(app.devPath+'data'))
	.pipe(gulp.dest(app.prdPath+'data'))
	.pipe($.connect.reload())

});

gulp.task('less',function(){
	gulp.src(app.srcPath+'style/index.less')
	.pipe($.less())
	.pipe(gulp.dest(app.devPath+'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath+'css'))
	.pipe($.connect.reload())

});

gulp.task('js',function(){
	gulp.src(app.srcPath+'script/**/*.js')
	.pipe($.concat('index.js'))
	.pipe(gulp.dest(app.devPath+'js'))
	.pipe($.uglify())
	.pipe(gulp.dest(app.prdPath+'js'))
	.pipe($.connect.reload())

});

gulp.task('image',function(){
	gulp.src(app.srcPath+'image/**/*')
	.pipe(gulp.dest(app.devPath+'image'))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.prdPath+'image'))
	.pipe($.connect.reload());

});

gulp.task('build',['image','js','less','json','html','lib']);

//每次发布的时候，把之前的目录清除，避免旧的文件对当前项目造成影响
gulp.task('clean',function(){  //构架任务
	gulp.src([app.devPath,app.prdPath])
	.pipe($.clean());

});

//编写个服务器
gulp.task('serve',['build'],function(){
	$.connect.server({
		root:[app.devPath],
		livereload:true,	//适用于高级浏览器，自动刷新浏览器，ie就不支持
		port:1234

	});
	open('http://localhost:1234');

	//自动构建
	gulp.watch('bower_components/**/*',['lib']);
	gulp.watch(app.srcPath+'html/**/*',['html']);
	gulp.watch(app.srcPath+'data/**/*',['json']);
	gulp.watch(app.srcPath+'style/**/*',['less']);
	gulp.watch(app.srcPath+'script/**/*',['js']);
});

gulp.task('default',['serve'])

