<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use App\Http\Requests\StoreOfferRequest;
use App\Http\Requests\UpdateOfferRequest;

class OfferController extends Controller
{
    public function __construct(private readonly Offer $offer){

    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $offers = $this->offer->all();
        return response()->json($offers);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOfferRequest $request)
    {
        $data = $request->validate();
        $offer = $this->offer->create($data);
        return response()->json($offer, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Offer $offer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offer $offer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOfferRequest $request, Offer $offerId)
    {
        $data = $request->validate();
        $offer = $this->offer->find($offerId);  
        $offer->update($data);
        return response()->json($offer, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offer $offerId)
    {
        $offer = $this->offer->find($offerId);
        $offer->delete();   
        return response()->json(null, 204);
    }
}
