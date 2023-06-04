<?php

use App\Http\Controllers\{
    OfferController,
    OfferActiveController,
    UserController,
    RewardController
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rotas do CRUD's
Route::apiResource('/user', UserController::class);
Route::apiResource('/reward', RewardController::class);
Route::apiResource('/offer', OfferController::class);

// Rotas da Aplicação
Route::post('/check-user/{id}', [OfferActiveController::class, 'checkUser']);
Route::post('/check-create-user/{id}', [OfferActiveController::class, 'createUser']);

Route::get('/offers/{id}', [OfferActiveController::class, 'show']);
