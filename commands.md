Setting up an angular project

npm install angular
ng version

ng new <name of project>
Press enter twice for default stuff

Wait for angular project to build
cd <name of project>

ng serve runs a local Angular web server hosting your files --open opens it automatically
ng serve --open

Majority of useful app content is /src/app/ *.ts, .html

.html
Html files, structure

.spec.ts - typically used for testing

.routes.ts 
/about-me
/shop

Generating components
ng generate component <new component name>

To render a child component we need to do the following:
1) Import the component into the parent components 'app.components.ts'
2) Render it in .html

You need to pass data from parent -> child in order to render it
