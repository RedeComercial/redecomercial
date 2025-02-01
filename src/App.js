import React, { useState } from "react";
import "./App.css";

function Loja() {
  const [vendas, setVendas] = useState([
    { id: 1, data: "2025-02-01", cliente: "João", aparelho: "Celular", valor: 500, pagamento: "2025-02-05", entrega: "2025-02-10" },
    { id: 2, data: "2025-02-02", cliente: "Maria", aparelho: "Notebook", valor: 1200, pagamento: "2025-02-06", entrega: "2025-02-12" }
  ]);

  const [novaVenda, setNovaVenda] = useState({ data: "", cliente: "", aparelho: "", valor: "", pagamento: "", entrega: "" });

  const adicionarVenda = () => {
    if (!novaVenda.data || !novaVenda.cliente || !novaVenda.aparelho || !novaVenda.valor) return;
    setVendas([...vendas, { ...novaVenda, id: vendas.length + 1, valor: parseFloat(novaVenda.valor) }]);
    setNovaVenda({ data: "", cliente: "", aparelho: "", valor: "", pagamento: "", entrega: "" });
  };

  const totalVendas = vendas.reduce((total, venda) => total + venda.valor, 0);

  return (
    <div className="loja-container">
      <h1>Loja</h1>
      <h2>Total de Vendas: R$ {totalVendas.toFixed(2)}</h2>
      
      <h3>Lista de Vendas</h3>
      <ul>
        {vendas.map((venda) => (
          <li key={venda.id}>
            {venda.data} - {venda.cliente} - {venda.aparelho} - R$ {venda.valor.toFixed(2)}
          </li>
        ))}
      </ul>
      
      <h3>Adicionar Nova Venda</h3>
      <input type="date" placeholder="Data" value={novaVenda.data} onChange={(e) => setNovaVenda({ ...novaVenda, data: e.target.value })} />
      <input type="text" placeholder="Cliente" value={novaVenda.cliente} onChange={(e) => setNovaVenda({ ...novaVenda, cliente: e.target.value })} />
      <input type="text" placeholder="Aparelho" value={novaVenda.aparelho} onChange={(e) => setNovaVenda({ ...novaVenda, aparelho: e.target.value })} />
      <input type="number" placeholder="Valor" value={novaVenda.valor} onChange={(e) => setNovaVenda({ ...novaVenda, valor: e.target.value })} />
      <input type="date" placeholder="Pagamento" value={novaVenda.pagamento} onChange={(e) => setNovaVenda({ ...novaVenda, pagamento: e.target.value })} />
      <input type="date" placeholder="Entrega" value={novaVenda.entrega} onChange={(e) => setNovaVenda({ ...novaVenda, entrega: e.target.value })} />
      <button onClick={adicionarVenda}>Adicionar Venda</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Loja />
    </div>
  );
}

export default App;
