<?php

    $menu = [
        [
            'titulo'=>"Home",
            'link'=>"#home"
        ],
        [
            'titulo'=>"Sobre",
            'link'=>"#sobre"
        ],
        [
            'titulo'=>"Contato",
            'link'=>"#contato"
        ],
        [
            'titulo'=>"Mapa",
            'link'=>"#mapa"
        ]
    ];

    $dados = [
        [
            'titulo'=>"Cartão 1", 
            'descricao'=>"Descrição do cartão 1", 
            'detalhe'=>"Texto de detalhe do cartão 1", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 2", 
            'descricao'=>"Descrição do cartão 2", 
            'detalhe'=>"Texto de detalhe do cartão 2", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 3", 
            'descricao'=>"Descrição do cartão 3", 
            'detalhe'=>"Texto de detalhe do cartão 3", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 4", 
            'descricao'=>"Descrição do cartão 4", 
            'detalhe'=>"Texto de detalhe do cartão 4", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 1", 
            'descricao'=>"Descrição do cartão 1", 
            'detalhe'=>"Texto de detalhe do cartão 1", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 2", 
            'descricao'=>"Descrição do cartão 2", 
            'detalhe'=>"Texto de detalhe do cartão 2", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 3", 
            'descricao'=>"Descrição do cartão 3", 
            'detalhe'=>"Texto de detalhe do cartão 3", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 4", 
            'descricao'=>"Descrição do cartão 4", 
            'detalhe'=>"Texto de detalhe do cartão 4", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 1", 
            'descricao'=>"Descrição do cartão 1", 
            'detalhe'=>"Texto de detalhe do cartão 1", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 2", 
            'descricao'=>"Descrição do cartão 2", 
            'detalhe'=>"Texto de detalhe do cartão 2", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ],
        [
            'titulo'=>"Cartão 3", 
            'descricao'=>"Descrição do cartão 3", 
            'detalhe'=>"Texto de detalhe do cartão 3", 
            'imagem'=>"http://materializecss.com/images/office.jpg", 
            'link'=>"#link"
        ]
    ];


    if(isset($_GET['menu'])) {
        echo json_encode($menu);
        exit;
    }

    if(isset($_GET['dados'])) {
        echo json_encode($dados);
        exit;
    }