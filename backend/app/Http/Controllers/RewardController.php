<?php

namespace App\Http\Controllers;

use App\Models\Reward;
use App\Http\Requests\StoreRewardRequest;
use App\Http\Requests\UpdateRewardRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class RewardController extends Controller
{
    public function __construct(private readonly Reward $reward)
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        try{
            $rewards = $this->reward->all();
            return response()->json($rewards, Response::HTTP_OK);
        }catch(\Exception $e){
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRewardRequest $request):JsonResponse
    {
        try {
            $data = $request->validated();
            $reward = $this->reward->create($data);
            return response()->json($reward, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $rewardId):JsonResponse
    {
        $reward = $this->reward->newQuery()->findOrFail($rewardId);
        return response()->json($reward, Response::HTTP_OK);
    }

    // TODO: Verificar o codigo de resposta para cada função
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRewardRequest $request, int $rewardId):JsonResponse
    {
        $data = $request->validated();
        $reward = $this->reward->newQuery()->findOrFail($rewardId);
        try{
            $reward->update($data);
            return response()->json($reward, Response::HTTP_OK);
        }catch(\Exception $e){
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $rewardId):JsonResponse
    {
        $reward = $this->reward->newQuery()->findOrFail($rewardId);
        return response()->json($reward->delete(), Response::HTTP_NO_CONTENT);
    }
}
