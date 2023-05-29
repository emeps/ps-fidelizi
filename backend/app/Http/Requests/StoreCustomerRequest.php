<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
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
            'fullname' => 'required|string',
            'email' => 'required|string',
            'cpf' => 'required|string',
            'date_birth' => 'required|date',
            'phone' => 'required|string',
        ];
    }
    public function messages(): array {
        return [
            'fullname.required' => 'O campo nome é obrigatório',
            'fullname.string' => 'O campo nome deve ser uma string',
            'email.required' => 'O campo email é obrigatório',
            'email.string' => 'O campo email deve ser uma string',
            'cpf.required' => 'O campo cpf é obrigatório',
            'cpf.string' => 'O campo cpf deve ser uma string',
            'date_birth.required' => 'O campo data de nascimento é obrigatório',
            'date_birth.date' => 'O campo data de nascimento deve ser uma data',
            'phone.required' => 'O campo telefone é obrigatório',
            'phone.string' => 'O campo telefone deve ser uma string',
        ];
    }
}
