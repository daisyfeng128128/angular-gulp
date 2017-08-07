//引入模块
var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //其他的gulp模块就可以直接通过$来引用，而不需再声明变量
var open = require('open');

//全部变量来定义目录路径
var app = {
	srcPath:'src/',		//源代码放置的位置
	devPath:'build/',	//整合之后的文件，开发目录
	prdPath:'dist/'		//用于生产、部署
};

//把bower下载的第三方创建拷贝到生产环境目录
gulp.task('lib',function(){
	gulp.src('bower_components/**/*.js')  	//对bower_..下面的子文件进行深度遍历，读取文件
	.pipe(gulp.dest(app.devPath+'vendor'))	//操作：写文件
	.pipe(gulp.dest(app.prdPath+'vendor'))
	.pipe($.connect.reload())//构建完，刷新浏览器进行实时预览

});

gulp.task('html',function(){
	gulp.src(app.srcPath+'**/*.html')
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
	.pipe($.plumber()) //修复了pipe处理异常的bug，让任务执行更平滑
	.pipe($.less())
	.pipe(gulp.dest(app.devPath+'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath+'css'))
	.pipe($.connect.reload())

});

gulp.task('js',function(){
	gulp.src(app.srcPath+'script/**/*.js')
  	.pipe($.plumber())
	.pipe($.concat('index.js'))
	.pipe(gulp.dest(app.devPath+'js'))
	.pipe($.uglify())
	.pipe(gulp.dest(app.prdPath+'js'))
	.pipe($.connect.reload())

});

gulp.task('image',function(){
	gulp.src(app.srcPath+'image/**/*')
	.pipe($.plumber())
	.pipe(gulp.dest(app.devPath+'image'))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.prdPath+'image'))
	.pipe($.connect.reload());

});

gulp.task('build',['image','js','less','json','html','lib']);

//每次发布的时候，把之前的目录清除，避免旧的文件对当前项目造成影响
gulp.task('clean',function(){  //构架任务
	gulp.src([app.devPath, app.prdPath])
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
	gulp.watch(app.srcPath+'**/*',['html']);
	gulp.watch(app.srcPath+'data/**/*',['json']);
	gulp.watch(app.srcPath+'style/**/*',['less']);
	gulp.watch(app.srcPath+'script/**/*',['js']);
});

gulp.task('default',['serve'])

