# TOPSPIN STORE (MEAN)

The project describes an e-commerce WEB application of table tennis sports products.

## Backend

### Technologies:
* OpenJDK 11.0.17 2022-10-18.
* ExpressJS >= 4.18.2.
* MondoDB >= 5.0.14.

### devDependencies:
* body-parser => 1.20.1.
* cors => 2.8.5.
* mongoose => 6.9.0.
* nodemon => 2.0.20.

### Installation:

To install the project, go to the `~.../backend` directory from the shell and run the `npm install` command.

## Frontend

### Technologies:
* HTML 5.
* CSS 3.
* Angular CLI 15.1.4
* OpenJDK 11.0.17 2022-10-18.

### Installation:
This project includes @ng-bootstrap and ngx-bootstrap for working with modal declarations and other additional tools. @ng-bootstrap was included bypassing the dependency tree check, even though the @ng-boostrap docs say that @ng-boostrap 14.x.x can be used on angular-cli 15.xx, some dependencies don't allow a clean install due to differences with their versioning.
* @ng-bootstrap: ^14.0.1
* ngx-bootstrap: ^10.2.0

1. Before running the `npm install` command at the shell from the `~.../frontend` directory, go to the `package.json` file and remove the development dependency `"@ng-bootstrap/ng-bootstrap": "^14.0.1"` included in the `devDependencies` section.

2. Go to the project folder: `~.../frontend` from the terminal and run the `npm install` command.

3. The project needs the `@ng-bootstrap/ng-bootstrap` development dependency to run; For its installation it is necessary to install it skipping the verification of the dependency tree that it needs. To do this, execute the following instruction from the project shell:
    `npm i -D @ng-bootstrap/ng-bootstrap --legacy-peer-deps`
