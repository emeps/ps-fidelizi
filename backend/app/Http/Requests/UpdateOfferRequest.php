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
            'date_opened' => 'required|date_format:d-m-Y|date',
            'date_closed' => 'required|date_format:d-m-Y|date',
            'status' => 'required|boolean',
            'amount_registered' => 'required|integer|min:0',
        ];
    }
    public function messages(): array
    {
        return [
            'enterprise_name.required' => 'O campo nome da empresa é obrigatório',
            'enterprise_name.string' => 'O campo nome da empresa deve ser uma string',
            'enterprise_name.max' => 'O campo nome da empresa deve ter no máximo 255 caracteres',
            'description.required' => 'O campo descrição é obrigatório',
            'description.string' => 'O campo descrição deve ser uma string',
            'description.max' => 'O campo descrição deve ter no máximo 255 caracteres',
            'description.min' => 'O campo descrição deve ter no mínimo 10 caracteres',
            'image.required' => 'O campo imagem é obrigatório',
            'image.string' => 'O campo imagem deve ser uma string',
            'image.image' => 'O campo imagem deve ser uma imagem',
            'image.max' => 'O campo imagem deve ter no máximo 2048Mb',
            'image.file' => 'O campo imagem deve ser um arquivo',
            'reward_id.required' => 'O campo recompensa é obrigatório',
            'reward_id.integer' => 'O campo recompensa deve ser um inteiro',
            'date_opened.required' => 'O campo data de abertura é obrigatório',
            'date_opened.date_format' => 'O campo data de abertura deve ser uma data no formato dd-mm-aaaa',
            'date_closed.required' => 'O campo data de fechamento é obrigatório',
            'date_closed.date_format' => 'O campo data de fechamento deve ser uma data no formato dd-mm-aaaa',
            'status.required' => 'O campo status é obrigatório',
            'status.boolean' => 'O campo status deve ser um booleano',
            'amount_registered.required' => 'O campo quantidade de registros é obrigatório',
            'amount_registered.integer' => 'O campo quantidade de registros deve ser um inteiro',
            'amount_registered.min' => 'O campo quantidade de registros deve ser no mínimo 0',
        ];
    }
}
