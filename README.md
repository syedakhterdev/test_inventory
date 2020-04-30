<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

# CRUD App

A simple Laravel + React app for doing CRUD operations on Users entity and Unit Tests.

## Requirements
- PHP >= 7.2.5
- Mysql 
- SQLite (for testing)

## Installation

Go to the project folder and run the following commands

```bash
npm i 
```

```bash
composer install
```
```bash
cp .env.example .env
```
```bash
php artisan key:generate
```
```bash
change 'DB_DATABASE' path according to your local computer in '.env.testing'
```


## Usage

```
npm run dev (only needed once)
```
```bash
php artisan serve
```

## Running Tests
```bash
./vendor/phpunit/phpunit/phpunit
```
