<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\Offer;
use App\Models\Reward;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

use App\Notifications\OfferNotification;

use function App\Helpers\only_numbers;
use function App\Helpers\validate_cpf;

class OfferActiveController extends Controller
{

    public function __construct(
        private readonly  Offer $offer,
        private readonly  Reward $reward,
        private readonly  User $user,
        private readonly  UserController $userController
    ) {
    }
    public function createUser(StoreUserRequest $request, int $offerId): JsonResponse{
        try{
            $this->userController->store($request);
            $this->checkUser($request, $offerId);
            return response()->json(['data' => 'Usuário criado e oferta ativada com sucesso'], Response::HTTP_OK);
        }catch(\Exception $e){
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    protected function checkOffer($user ,int $id): bool
    {
        return $user->offers()->where('offer_id', $id)->exists();
    }

    public function checkUser(Request $request, int $offerId): JsonResponse
    {
        try {
            $cpf = only_numbers($request->cpf);

            if (!validate_cpf($cpf)) {
                return response()->json(['data' => 'CPF inválido'], Response::HTTP_BAD_REQUEST);
            } else {
                $user = $this->user->newQuery()->where('cpf', $cpf)->first();
                if(!$user){
                    return response()->json(['data' => 'Usuário não encontrado'], Response::HTTP_NOT_FOUND);
                }else if(!$this->checkOffer($user, $offerId)){
                    //! Refatorar essa bagaça quando possivel
                    $offer = $this->offer->newQuery()->findOrFail($offerId);
                    $user->offers()->attach($offer);
                    $offer['amount_available'] -= 1;
                    $user->notify(new OfferNotification($offer));
                    return response()->json(['data' => 'Oferta ativada com sucesso'], Response::HTTP_OK);
                }else{
                    return response()->json(['data' => 'Usuário já possui essa oferta'], Response::HTTP_BAD_REQUEST);
                }
            }
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    
}
