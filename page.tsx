
//Card modelo
//Card obtendo cardprops como objetivo
function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <span>{props.title}</span>
        <img src={props.icon} alt={props.title} />
      </div>
      <strong className={props.color}>{props.value}</strong>
      <p>{props.description}</p>
    </div>
  );
}

//declaração de props como um tipo
type CardProps = {
  title: string;
  value: string;
  description: string;
  color: string; // ou: 'green' | 'red'
  icon: string;
};

//ultilização do card modelo para os cards: entrada, saidas e balanço
export default function Home() {
  return (
    <div className="container">
      <div className="cards">
        <Card
          title="Entradas"
          value="R$ 7.840,56"
          description="Somada todas as entradas do período."
          color="green"
          icon="/banknote-arrow-down.png"
        />

        <Card
          title="Saídas"
          value="R$ 1.580,45"
          description="Somada todas as saídas do período."
          color="red"
          icon="/banknote-arrow-up.png"
        />

        <Card
          title="Balanço"
          value="R$ 6.260,11"
          description="Somada todas as entradas e saídas do período."
          color="green"
          icon="/banknote-arrow-down.png"
        />
      </div>


      <div className="main-content">
        <div className="analysis">
          <h2>Análise</h2>
          <div className="chart-placeholder"></div>
        </div>


        <div className="categories">
          <h2>Categorias</h2>
          <ul>
            <li>
              <div className="left">
                <img src="cooking-pot.png" alt="Alimentacao icon" className="icon" />
                <span>Alimentação</span>
              </div>
              <div className="right">
                <span>10</span>
                <span className="amount red">R$ 1.508,15</span>
              </div>
            </li>
            <li>
              <div className="left">
                <img src="/shopping-basket.png" alt="Mercado icon" className="icon" />
                <span>Mercado</span>
              </div>
              <div className="right">
                <span>5</span>
                <span className="amount red">R$ 320,00</span>
              </div>
            </li>
            <li>
              <div className="left">
                <img src="/house.png" alt="Moradia icon" className="icon" />
                <span>Moradia</span>
              </div>
              <div className="right">
                <span>1</span>
                <span className="amount red">R$ 950,00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div className="transactions">
        <h2>Transações</h2>
        <div className="transaction-header">
          <span>Descrição</span>
          <span>Tipo</span>
          <span>Valor</span>
          <span>Banco</span>
          <span>Data</span>
          <span>Parcelas</span>
        </div>

        <div className="transaction-row">
           <span>
           <img src="/shopping-basket.png" alt="basket icon" className="icon" /> Supermercado Big Master 
           </span>
          <span>Crédito</span>
          <span className="red">R$ 896,00</span>
          <span>Nubank</span>
          <span>21/03/2024</span>
          <span>1/1</span>
        </div>

        <div className="transaction-row">
          <span>
            <img src="/car.png" alt="Car icon" className="icon" /> Posto Shell
          </span>
          <span>Débito</span>
          <span className="red">R$ 180,00</span>
          <span>Itaú</span>
          <span>20/03/2024</span>
          <span>-</span>
        </div>
      </div>
    </div>
  );
}
