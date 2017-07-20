<?php

namespace estoque;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model {
    protected $table = 'produtos';
    
    public $timestamps = false;
    
    protected $fillable = [
    	'nome', 
    	'descricao', 
    	'valor', 
    	'quantidade',
    	'tamanho',
        'categoria_id'
    ];

    protected $guarded = ['id'];

    public function categoria(){
        return $this->belongsTo('estoque\Categoria');
    }
}
