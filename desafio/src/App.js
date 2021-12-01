import logo from "./logo.png";
import "../src/css/cabecalho/cabecalho.css";
import "../src/css/cabecalho/busca.css";
import "../src/css/cabecalho/logo.css";
import "../src/css/cabecalho/menu-item.css";
import "../src/css/cabecalho/menu-link.css";
import "../src/css/cabecalho/menu-lista.css";
import "../src/css/cabecalho/busca.css";
import cadastro from "./paginas/Cadastro.jsx";




function App() {
  return (
    <div className="App">
      <header>
        <section>
          <div class="cabecalho">
            <div>
              <h1 class="logo">
                <img src={logo} className="logo__imagem" alt="logo" />
              </h1>
            </div>
            <div>
              <nav class="menu">
                <ul class="menu__lista">
                  <li class="menu__item">
                    <a class="menu__ajuda">Precisa de ajuda? </a>
                  </li>
                  <li class="menu__item">
                    <a class="menu__entrar">Entrar </a>
                  </li>
                  <li class="menu__item">
                    <a class="menu__vaga" src={cadastro} >Cadastrar vaga </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <div class="busca">
          <label class ="busca__titulo" for="filtrar-tabela">Procure uma oportunidade de emprego</label>
				 <input type="text" name="filtro" class="busca__texto" placeholder="Digite cargo, empresa ou localização"></input>

        </div>
      </header>
    </div>
  );
}

export default App;
