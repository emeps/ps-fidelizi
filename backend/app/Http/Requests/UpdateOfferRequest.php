<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOfferRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'enterprise_name' => 'required|string|max:255',
            'description' => 'required|string|max:255|min:10',
            'image' => 'required|string|image|max:2048|file',
            'reward_id' => 'required|integer',
            'date_opened' => 'required|date_format:Y-m-d|date',
            'date_closed' => 'required|date_format:Y-m-d|date',
            'status' => 'required|boolean',
            'amount_registered' => 'required|integer|min:0',
        ];
    }
    public function attributes(): array
    {
        return [
            'enterprise_name' => 'nome da empresa',
            'description' => 'descrição',
            'image' => 'imagem',
            'reward_id' => 'recompensa',
            'date_opened' => 'data de abertura',
            'date_closed' => 'data de fechamento',
            'status' => 'status',
            'amount_registered' => 'quantidade de vagas',
        ];
    }

    public function messages(): array
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'string' => 'O campo :attribute deve ser uma string',
            'max' => 'O campo :attribute deve ter no máximo :max caracteres',
            'min' => 'O campo :attribute deve ter no mínimo :min caracteres',
            'image' => 'O campo :attribute deve ser uma imagem',
            'image.max' => 'O campo :attribute deve ter no máximo :max',
            'file' => 'O campo :attribute deve ser um arquivo',
            'integer' => 'O campo :attribute deve ser um inteiro',
            'date_format' => 'O campo :attribute deve ser uma data no formato dd-mm-aaaa',
            'boolean' => 'O campo :attribute deve ser um booleano',
        ];
    }
}
