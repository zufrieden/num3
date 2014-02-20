num3
====

This project is developped with Silex microframework

## How to install
Fork this repository and clone it to your machine

### Requirement
````
$ brew install composer
OR
$ curl -s https://getcomposer.org/installer | php
````

### Install dependencies with [Composer](http://getcomposer.org)
````
$ composer install
````

### Configure Webserver (Apache)
````
    <VirtualHost *:80>
        ServerName num3.dev
        DocumentRoot "/path/to/project/num3/web"
        DirectoryIndex index.php
        <Directory "/path/to/project/num3/web">
            AllowOverride All
            Allow from all
        </Directory>
    </VirtualHost>
````
Don't forget to modify your hosts for uxl.dev

### All set
Run : http://num3.dev/index_dev.php


