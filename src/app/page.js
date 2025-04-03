import CardMoney from "../components/cardMoney";
import { CarouselSize } from "../components/Carousel";
export default function Home() {
  const user = {
    name: "Ryan",
    };
  const value = 500;
  
  return (
    <div className="h-screen w-screen flex flex-col p-4">
      <header className="h-1/6">
        <h1>Olá, {user.name}</h1>
        <div className="flex justify-between items-center">
          <h2>Março, 2025 - Semana 1</h2>
          <button>Sair</button>
        </div>
      </header>
      <main className="h-4/6 flex flex-col items-center justify-center">
        <header>

        </header>
        <section className="flex justify-between w-full md:w-1/2 gap-4">
          <CardMoney text={"24, Março"} value={`R$ ${value},00`}/>
          <CardMoney text={"Esta Semana"} value={`R$ ${value},00`}/>
        </section>
        <section>
          <CarouselSize />
        </section>
      </main>
      <footer className="h-1/6 flex justify-between items-center w-full">
        <button className="p-2 px-4">Clientes</button>
        <button className="p-2 px-4">Novo Agendamento</button>
      </footer>
    </div>
  );
}
