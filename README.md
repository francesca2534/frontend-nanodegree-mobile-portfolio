## Website Performance Optimization portfolio project
The dist folder contains the minified, working-version of the project.

###The project objectives include:
*To achieve a PageSpeed score of 90 for index.html
*To render pizza.html with a consisten framerate of 60 fps while scrolling
*To resize pizza image within 5ms

###PageSpeed score of 90
*Images were scaled down(not using html or css)
*The images were compressed
*Mediaquery added to print.css
*Image dimension attributes added to link
*Minified using gulp

###Framerate of 60 fps
*Number of pizzas were reduced
*Forced reflow was eliminated
*Complexity of for loops minified(by doing certain calculation outside the loop)
*Certain functions modified

###Minify pizzas
*Unwanted dx calculation eliminated
*Simplified the formula
*For loops simplified

###Gulp
Minification of javasript, css and html was done using gulp. The plug-ins used for minification include:
*gulp-clean-css
*gulp-html-minifier2
*gulp-uglify

The plug-ins were imported to the project and was used for specific functions in gulpfile.js.