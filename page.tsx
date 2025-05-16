import Image from "next/image";

export default function Home() {
  return (
    <div>
      <title>Meu Financeiro</title>


      <div className="cards">
        <div className="card entrada">
          <h2>Entradas</h2>
          <p>R$ 7.840,56</p>
        </div>

        <div className="card saida">
          <h2>Saídas</h2>
          <p>R$ 1.580,45</p>
        </div>

        <div className="card balanco">
          <h2>Balanço</h2>
          <p>R$ 6.260,11</p>
        </div>
      </div>


      <div className="card Análise">
        <h1>Análise</h1>
      </div>



      <div className="card Categorias">
        <h1>Categorias</h1>
        <p>Alimentação      10      R$1,508,15</p>
        <p>Transporte       10      R$1,508,15</p>
        <p>Mercado          10      R$1,508,15</p>
      </div>


      <div className="card Transações">
        <h1>Transações</h1>
        <p>Supermercado Big Master</p>
      </div>

      <div className="card Transações">
        <p>Supermercado Tropical</p>
      </div>


    </div>
  );
}
