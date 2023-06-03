<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Models\Offer;
use App\Notifications\OfferNotification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use function App\Helpers\only_numbers;
use function App\Helpers\validate_cpf;

class UserController extends Controller
{
    public function __construct(
        private readonly User $user,
        private readonly Offer $offer

    ) {
    }
    public function index(): JsonResponse
    {
        try {
            $users = $this->user->all();
            return response()->json($users, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request): JsonResponse
    {

        $data = $request->validated();
        $user = $this->user->create($data);
        return response()->json($user, Response::HTTP_CREATED);
    }

    public function show(int $userId): JsonResponse
    {
        $user = $this->user->newQuery()->findOrFail($userId);
        return response()->json($user, Response::HTTP_OK);
    }

    // TODO: Verificar o codigo de resposta para cada função

    public function update(UpdateUserRequest $request, int $userId): JsonResponse
    {
        $data = $request->validated();
        $user = $this->user->newQuery()->findOrFail($userId);
        try {
            $user->update($data);
            return response()->json($user, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy(int $userId): JsonResponse
    {
        $user = $this->user->newQuery()->findOrFail($userId);
        return response()->json($user->delete(), Response::HTTP_NO_CONTENT);
    }

}
