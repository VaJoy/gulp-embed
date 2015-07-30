# [gulp](https://github.com/wearefractal/gulp)-embed
> a gulp plugin wrapper around resource-embedder2(modified version of [resource-embedder](https://github.com/callumlocke/resource-embedder))

## Install

Install with [npm](https://npmjs.org/package/gulp-embed).

```
npm install --save-dev gulp-embed
```
## Usage
```js
gulp.task('embed', function () {
    gulp.src('./src/*.html')
        .pipe(embed())
        .pipe(gulp.dest('./dist/'));
});
```

add relative attributes to `<script>` or `<link>` to determine the handling of the file:
```html
<!doctype html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>demo</title>
    <link rel="stylesheet" href="css/a.css"  data-embed /> <!-- will be embed -->
    <link rel="stylesheet" href="css/b.css"  data-embed="false" /> <!-- will NOT be embed -->
</head>
<body>
    <div id="container"></div>
    <textarea id="debug" cols="100" rows="30"></textarea>
    <script type="text/javascript" data-src="./js/a.js" data-embed></script> <!-- will be embed using 'data-src' only -->
    <script type="text/javascript" src="./js/b.js" data-embed="disable"></script><!-- will be removed finally -->
</body>
</html>

```


## LICENSE
[MIT](http://en.wikipedia.org/wiki/MIT_License) @ VaJoy Larn