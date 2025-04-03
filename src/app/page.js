"use client"
import CardMoney from "../components/cardMoney";
import { CarouselSize } from "../components/Carousel";
import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";

function getCurrentMonth() {
  const months = {
    0: 'Janeiro',
    1: 'Fevereiro', 
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho', 
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro'
  };
  return months[new Date().getMonth()];
}

function getCurrentDay() {
  const date = new Date();
  return date.getDate();
}

function getWeekNumber(day) {
  const date = new Date();
  date.setDate(day);
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const offsetDate = day + firstDayOfWeek - 1;
  return Math.ceil(offsetDate / 7);
}

export default function Home() {
  const user = {
    name: "Ryan",
  };
  const value = 500;
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(getCurrentDay());
  const [weekNumber, setWeekNumber] = useState(getWeekNumber(selectedDay));
  
  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setWeekNumber(getWeekNumber(day));
    
    // Atualizar a data do calendário
    const newDate = new Date();
    newDate.setDate(day);
    setDate(newDate);
  };
  
  const handleCalendarSelect = (newDate) => {
    if (newDate) {
      setDate(newDate);
      setSelectedDay(newDate.getDate());
      setWeekNumber(getWeekNumber(newDate.getDate()));
    }
  };
  
  return (
    <div className="h-screen w-screen flex flex-col p-4">
      <header className="h-1/6">
        <h1>Olá, {user.name}</h1>
        <div className="flex justify-between items-center">
          <h2>{getCurrentMonth()}, {new Date().getFullYear()} - Semana {weekNumber}</h2>
          <button>Sair</button>
        </div>
      </header>
      <main className="h-4/6 flex flex-col justify-around items-center">
        <header className="flex w-full md:w-1/3 items-center justify-center">
            <CarouselSize selectedDay={selectedDay} onDaySelect={handleDaySelect} />
        </header>
        <section className="flex justify-between w-full md:w-1/2">
          <CardMoney text={`${selectedDay}, ${getCurrentMonth()}`} value={`R$ ${value},00`}/>
          <CardMoney text={"Esta Semana"} value={`R$ ${value},00`}/>
        </section>
        <section className="flex justify-center w-full md:w-1/2 items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleCalendarSelect}
            className="rounded-md border bg-[#202020] text-white"
          />
        </section>
      </main>
      <footer className="h-1/6 flex justify-between items-center w-full">
        <button className="p-2 px-4">Clientes</button>
        <button className="p-2 px-4">Novo Agendamento</button>
      </footer>
    </div>
  );
}
