<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use App\Http\Requests\StoreOfferRequest;
use App\Http\Requests\UpdateOfferRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class OfferController extends Controller
{
    public function __construct(private readonly Offer $offer)
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        try{
            $offers = $this->offer->all();
            return response()->json($offers, Response::HTTP_OK);
        }catch(\Exception $e){
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOfferRequest $request):JsonResponse
    {
        try {
            $data = $request->validated();
            $offer = $this->offer->create($data);
            return response()->json($offer, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $offerId):JsonResponse
    {
        $offer = $this->offer->newQuery()->findOrFail($offerId);
        return response()->json($offer, Response::HTTP_OK);
    }

    // TODO: Verificar o codigo de resposta para cada função
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOfferRequest $request, int $offerId):JsonResponse
    {
        $data = $request->validated();
        $offer = $this->offer->newQuery()->findOrFail($offerId);
        try{
            $offer->update($data);
            return response()->json($offer, Response::HTTP_OK);
        }catch(\Exception $e){
            return response()->json(['data' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $offerId):JsonResponse
    {
        $offer = $this->offer->newQuery()->findOrFail($offerId);
        return response()->json($offer->delete(), Response::HTTP_NO_CONTENT);
    }
}
