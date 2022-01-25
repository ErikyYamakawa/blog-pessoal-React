import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import ListaTema from "./components/temas/listatema/ListaTema";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/DeletarTema/DeletarTema";

function App() {
  return (
    <Router>

      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/cadastrousuario">
            <CadastroUsuario />
          </Route>

          <Route path="/temas">
            <ListaTema />
          </Route>

          <Route path="/posts">
            <ListaPostagem />
          </Route>

          <Route exact path="/formularioPostagem">
            <CadastroPost />
          </Route>
          <Route exact path="/formularioPostagem/:id">
            <CadastroPost />
          </Route>
          <Route exact path="/formularioTema">
            <CadastroTema />
          </Route>
          <Route exact path="/formularioTema/:id">
            <CadastroTema />
          </Route>
          <Route exact path="/deletarPostagem/:id">
            <DeletarPostagem />
          </Route>
          <Route exact path="/deletarTema/:id">
            <DeletarTema />
          </Route>



        </div>
      </Switch>
      < Footer />
    </Router>

  );
}
export default App;