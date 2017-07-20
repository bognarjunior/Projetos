<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',  'ProdutoController@lista');

Route::get('/produtos', 'ProdutoController@lista');
Route::get('/produto/mostra/{id}', 'ProdutoController@mostra')->where('id', '[0-9]+');
Route::get('/produtos/novo', 'ProdutoController@novo');
Route::post('/produtos/adiciona', 'ProdutoController@adiciona');
Route::get('/produto/deletar/{id}', 'ProdutoController@deletar')->where('id', '[0-9]+');
Route::get('/produtos/buscar/{id}', 'ProdutoController@buscar')->where('id', '[0-9]+');
Route::post('/produtos/alterar/{id}', 'ProdutoController@alterar')->where('id', '[0-9]+');

/*Route::get('home', 'HomeController@index');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);*/