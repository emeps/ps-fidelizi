<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'fullname' => 'required|string|max:255',
            'email'=> 'required|string|email|max:255|unique:users,email,'.$this->user->id,
            'cpf'=> 'required|string|max:11|unique:users,cpf,'.$this->user->id,
            'date_birth'=> 'required|date_format:d-m-Y|date',
            'phone'=> 'required|string|max:11',
        ];
    }

    public function attributes():array
    {
        return [
            'fullname' => 'nome completo',
            'email'=> 'email',
            'cpf'=> 'cpf',
            'date_birth'=> 'data de nascimento',
            'phone'=> 'telefone',
        ];
    }
    
    public function messages(): array
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'string' => 'O campo :attribute deve ser uma string',
            'max' => 'O campo :attribute deve ter no máximo 255 caracteres',
            'email' => 'O campo :attribute deve ser um email válido',
            'unique' => 'O campo :attribute já está em uso',
            'date_format' => 'O campo :attribute deve ser uma data válida',
            'date' => 'O campo :attribute deve ser uma data válida',
        ];
    }
}
