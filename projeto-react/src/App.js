import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Função para alternar entre as guias
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exemplo de App React com várias guias</h1>
        
        {/* Menu de navegação */}
        <nav>
          <ul>
            <li>
              <button 
                className={activeTab === 'home' ? 'active' : ''} 
                onClick={() => handleTabChange('home')}>
                Home
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'about' ? 'active' : ''} 
                onClick={() => handleTabChange('about')}>
                Sobre
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'contact' ? 'active' : ''} 
                onClick={() => handleTabChange('contact')}>
                Contato
              </button>
            </li>
          </ul>
        </nav>

        {/* Conteúdo baseado na guia ativa */}
        <div className="tab-content">
          {activeTab === 'home' && (
            <div>
              <h2>Home</h2>
              <p>Bem-vindo à página inicial! Aqui você encontra as últimas novidades.</p>
              <button onClick={() => alert('Você está na Home!')}>
                Clique na Home
              </button>
            </div>
          )}

          {activeTab === 'about' && (
            <div>
              <h2>Sobre</h2>
              <p>Este é um aplicativo React simples com navegação entre guias.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            </div>
          )}

          {activeTab === 'contact' && (
            <div>
              <h2>Contato</h2>
              <p>Entre em contato conosco por meio deste formulário.</p>
              <form>
                <label>
                  Nome: 
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  Email: 
                  <input type="email" name="email" />
                </label>
                <br />
                <button type="submit">Enviar</button>
              </form>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
