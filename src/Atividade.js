import React from 'react';
import './Atividade.css';

export default function Atividade(){
    return(
        <div>
            <section className="topo">
                <p className="inicio">
                    .
                </p>
                <h3 className="home">
                    <a href="#">
                        Home
                    </a>
                </h3>
                <h3 className="perfil">
                    <a href="#">
                        Perfil
                    </a>
                </h3>
            </section>
            <section className="titulo">
                <p className="inicio2">
                    .
                </p>
                <h1>
                    Galeria de Imagens
                </h1>
                <p>
                    Aqui você encontra as imagens mais diversas
                </p>
            </section>
            <section className="imagens">
                <div>
                    p
                </div>
                <div className="img1">
                    <img src="https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_960_720.jpg" />
                    <h2>
                        Heading
                    </h2>
                    <p className="text1">
                        This is a media card. You can use
                    </p>
                    <p className="text2">
                        this section to describe the
                    </p>
                    <p className="text3">
                        content.
                    </p>
                    <a className="ver" href="#">
                        <b>
                            Ver
                        </b>
                    </a>
                </div>
                <div className="img2">
                    <img src="https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_960_720.jpg" />
                    <h2>
                        Heading
                    </h2>
                    <p className="text1">
                        This is a media card. You can use
                    </p>
                    <p className="text2">
                        this section to describe the
                    </p>
                    <p className="text3">
                        content.
                    </p>
                    <a className="ver" href="#">
                        <b>
                            Ver
                        </b>
                    </a>
                </div>
                <div className="img3">
                    <img src="https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_960_720.jpg" />
                    <h2>
                        Heading
                    </h2>
                    <p className="text1">
                        This is a media card. You can use
                    </p>
                    <p className="text2">
                        this section to describe the
                    </p>
                    <p className="text3">
                        content.
                    </p>
                    <a className="ver" href="#">
                        <b>
                            Ver
                        </b>
                    </a>
                </div>
            </section>
            <section className="fim">
                <p className="final">
                    .
                </p>
                <h4>
                    Galeria
                </h4>
                <p className="frase">
                    As mais belas imagens<br/>
                </p>
                <center>
                    <footer>
                        Copyright © Mariane Barbosa Caldeira 2021.
                    </footer>
                </center>
            </section>
        </div>
    );
}