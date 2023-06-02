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

    public function messages(): array
    {
        return [
            'fullname.required' => 'O campo nome é obrigatório',
            'fullname.string' => 'O campo nome deve ser uma string',
            'fullname.max' => 'O campo nome deve ter no máximo 255 caracteres',
            'email.required' => 'O campo email é obrigatório',
            'email.string' => 'O campo email deve ser uma string',
            'email.email' => 'O campo email deve ser um email válido',
            'email.max' => 'O campo email deve ter no máximo 255 caracteres',
            'email.unique' => 'O campo email já está em uso',
            'cpf.required' => 'O campo cpf é obrigatório',
            'cpf.string' => 'O campo cpf deve ser uma string',
            'cpf.max' => 'O campo cpf deve ter no máximo 11 caracteres',
            'cpf.unique' => 'O campo cpf já está em uso',
            'date_birth.required' => 'O campo data de nascimento é obrigatório',
            'date_birth.date_format' => 'O campo data de nascimento deve ser uma data válida',
            'date_birth.date' => 'O campo data de nascimento deve ser uma data válida',
            'phone.required' => 'O campo telefone é obrigatório',
            'phone.string' => 'O campo telefone deve ser uma string',
            'phone.max' => 'O campo telefone deve ter no máximo 11 caracteres',
        ];
    }
}
