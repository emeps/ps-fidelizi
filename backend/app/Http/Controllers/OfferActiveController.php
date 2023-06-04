<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\Offer;
use App\Models\Reward;
use App\Models\User;
use Carbon\Carbon;
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

    public function show(int $id)
    {
        try {
            $offer = $this->offer->newQuery()->findOrFail($id);
            if ($offer->status == false) {
                return response()->json(['data' => 'Oferta não disponível'], Response::HTTP_NOT_FOUND);
            } else {
                $reward = $this->reward->newQuery()->findOrFail($offer->reward_id);
                $offer['reward'] = $reward['description'];
                
                $date_remaing = Carbon::parse($offer["date_opened"])->diffInDays($offer["date_closed"]);
                $offer['date_remaing'] = $date_remaing;
                return response()->json([
                    'offer' => $offer,
                ], Response::HTTP_OK);
            }
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_FORBIDDEN);
        }
    }
    public function createUser(StoreUserRequest $request, int $offerId): JsonResponse
    {
        try {
            $this->userController->store($request);
            $this->checkUser($request, $offerId);
            return response()->json(['data' => 'Usuário criado e oferta ativada com sucesso', 'offer_code'=>'OFC201']);
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    protected function checkOffer($user, int $id): bool
    {
        return $user->offers()->where('offer_id', $id)->exists();
    }
    //TODO: Refatorar essa bagaça quando possivel
    public function checkUser(Request $request, int $offerId)
    {
        try {
            $cpf = only_numbers($request->cpf);

            if (!validate_cpf($cpf)) {
                return response()->json(['data' => 'CPF inválido', 'offer_code'=>'OFC100']);
            } else {
                $user = $this->user->newQuery()->where('cpf', $cpf)->first();
                if (!$user) {
                    return response()->json(['data' => 'Usuário não encontrado', 'offer_code'=>'OFC101']);
                } else if (!$this->checkOffer($user, $offerId)) {
                    $offer = $this->offer->newQuery()->findOrFail($offerId);
                    $user->offers()->attach($offer);
                    if ($offer['amount_available'] <= 0) {
                        $offer['status'] = false;
                        return response()->json(['data' => 'Oferta esgotada', 'offer_code'=>'OFC102']);
                    } else {
                        $offer['amount_available'] -= 1;
                        $user->notify(new OfferNotification($offer));
                        return response()->json(['data' => 'Oferta ativada com sucesso', 'offer_code'=>'OFC200']);
                    }
                } else {
                    return response()->json(['data' => 'Usuário já possui essa oferta', 'offer_code'=>'OFC103']);
                }
            }
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
