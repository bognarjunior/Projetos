<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AdicionaTamanhoProduto extends Migration {
    public function up() {
        Schema::table('produtos', function($table) {
            $table->string('tamanho', 100);
        });
    }

    public function down() {
        Schema::table('produtos', function($table) {
            $table->dropColumn('tamanho');
        });
    }
}
