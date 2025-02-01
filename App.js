import React, { useState } from 'react';
import './App.css';

// Simulando lojas e vendas com dados em memória
const lojas = [
  { id: 1, nome: 'VDC', vendas: [], objetivo: 20000 },
  { id: 2, nome: 'BRA', vendas: [], objetivo: 20000 },
  { id: 3, nome: 'VNG', vendas: [], objetivo: 20000 },
  { id: 4, nome: 'CBR', vendas: [], objetivo: 20000 },
  { id: 5, nome: 'PBL', vendas: [], objetivo: 20000 }
];


function App() {
  const [lojaAtiva, setLojaAtiva] = useState(null);
  const [novaVenda, setNovaVenda] = useState({
    dataConsulta: '',
    cliente: '',
    tipoAparelho: '',
    valorAparelho: '',
    dataPagamento: '',
    dataEntrega: ''
  });

  const [lojaNome, setLojaNome] = useState('');
  const [objetivoVenda, setObjetivoVenda] = useState('');

  // Função para registrar nova venda
  const registrarVenda = () => {
    const loja = lojas.find(l => l.id === lojaAtiva);
    loja.vendas.push(novaVenda);
    alert('Venda registrada com sucesso!');
    setNovaVenda({
      dataConsulta: '',
      cliente: '',
      tipoAparelho: '',
      valorAparelho: '',
      dataPagamento: '',
      dataEntrega: ''
    });
  };

  // Função para calcular o total das vendas da loja
  const calcularTotalVendas = (vendas) => {
    return vendas.reduce((total, venda) => total + parseFloat(venda.valorAparelho), 0);
  };

  // Função para exibir resultados da loja
  const exibirResultados = () => {
    const loja = lojas.find(l => l.id === lojaAtiva);
    return calcularTotalVendas(loja.vendas);
  };

  // Função para atualizar nome e objetivo de vendas
  const atualizarLoja = () => {
    const loja = lojas.find(l => l.id === lojaAtiva);
    loja.nome = lojaNome;
    loja.objetivo = objetivoVenda;
    alert('Dados da loja atualizados!');
  };

  return (
    <div className="App">
      <h1>Gestão de Vendas - Loja</h1>

      <div>
        <h2>Login da Loja</h2>
        <button onClick={() => setLojaAtiva(1)}>Entrar na Loja 1</button>
        <button onClick={() => setLojaAtiva(2)}>Entrar na Loja 2</button>
        <button onClick={() => setLojaAtiva(3)}>Entrar na Loja 3</button>
        <button onClick={() => setLojaAtiva(4)}>Entrar na Loja 4</button>
        <button onClick={() => setLojaAtiva(5)}>Entrar na Loja 5</button>
      </div>

      {lojaAtiva && (
        <div>
          <h2>{lojas.find(l => l.id === lojaAtiva).nome}</h2>

          {/* Registrar nova venda */}
          <h3>Registrar Nova Venda</h3>
          <input
            type="date"
            placeholder="Data da Consulta"
            value={novaVenda.dataConsulta}
            onChange={(e) => setNovaVenda({ ...novaVenda, dataConsulta: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cliente"
            value={novaVenda.cliente}
            onChange={(e) => setNovaVenda({ ...novaVenda, cliente: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tipo de Aparelho"
            value={novaVenda.tipoAparelho}
            onChange={(e) => setNovaVenda({ ...novaVenda, tipoAparelho: e.target.value })}
          />
          <input
            type="number"
            placeholder="Valor do Aparelho"
            value={novaVenda.valorAparelho}
            onChange={(e) => setNovaVenda({ ...novaVenda, valorAparelho: e.target.value })}
          />
          <input
            type="date"
            placeholder="Data do Pagamento"
            value={novaVenda.dataPagamento}
            onChange={(e) => setNovaVenda({ ...novaVenda, dataPagamento: e.target.value })}
          />
          <input
            type="date"
            placeholder="Data da Entrega"
            value={novaVenda.dataEntrega}
            onChange={(e) => setNovaVenda({ ...novaVenda, dataEntrega: e.target.value })}
          />
          <button onClick={registrarVenda}>Registrar Venda</button>

          {/* Resultados da loja */}
          <h3>Total de Vendas: {exibirResultados()}</h3>

          {/* Configuração da loja */}
          <h3>Configuração da Loja</h3>
          <input
            type="text"
            placeholder="Novo Nome da Loja"
            value={lojaNome}
            onChange={(e) => setLojaNome(e.target.value)}
          />
          <input
            type="number"
            placeholder="Objetivo de Vendas"
            value={objetivoVenda}
            onChange={(e) => setObjetivoVenda(e.target.value)}
          />
          <button onClick={atualizarLoja}>Atualizar Loja</button>
        </div>
      )}
    </div>
  );
}

export default App;
