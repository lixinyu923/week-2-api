const gulp=require("gulp");
const scss=require("gulp-sass");
const webserver=require("gulp-webserver");

gulp.task("devcss",()=>{
    return gulp.src("./src/scss/**/*.scss")
    .pipe(scss())
    .pipe(gulp.dest("./src/css"))
})
gulp.task("webserver",()=>{
    return gulp.src("./src")
    .pipe(webserver({
        port:8989,
        open:true,
        proxies:[
            {
                source:"/api/getlist",
                target:"http://localhost:3000/api/getlist"
            },{
                source:"/api/getcenter",
                target:"http://localhost:3000/api/getcenter"
            },
        ]
    }))
})

gulp.task("watch",()=>{
    gulp.watch("./src/scss/**/*.scss",gulp.series("devcss"));
})
gulp.task("default",gulp.parallel("watch","webserver"));