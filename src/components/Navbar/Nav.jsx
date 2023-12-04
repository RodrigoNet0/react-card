import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const [codigoInserido, setCodigoInserido] = useState('');
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleMostrarInput = () => {
    setMostrarInput(true);
  };

  const handleInserirCodigo = () => {
    // Faça algo com o código inserido, como exibi-lo em outro lugar na página ou executá-lo.
    console.log('Código inserido:', codigoInserido);
    // Se desejar, você pode redefinir o estado e ocultar o input novamente
    setCodigoInserido('');
    setMostrarInput(false);
  };

  return (
    <nav>
      <ul>
        <li> FACE<i className="bi bi-2-circle-fill"></i>FACE</li>
        <li>Actual Game</li>
        <li>About</li>
        <li className='button1' onClick={handleMostrarInput}>Insert Code</li>
        {mostrarInput && (
          <div className="box-text">
            <textarea
              value={codigoInserido}
              onChange={(e) => setCodigoInserido(e.target.value)}
              rows="4"
              cols="50"
              placeholder="Digite seu código aqui..."
            
            ></textarea>
            <button className="text" onClick={handleInserirCodigo}>Inserir</button>
          </div>
        )}
        <li className='button2'>New Game</li>
      </ul>
    </nav>
  );
}

export default Nav;
