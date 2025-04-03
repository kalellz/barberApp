"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

function getDaysInCurrentMonth() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getWeekdayShort(dayNumber) {
  const date = new Date();
  date.setDate(dayNumber);
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  return weekdays[date.getDay()];
}

function getCurrentDay() {
  const date = new Date();
  return date.getDate();
}

export function CarouselSize() {
  const daysInMonth = getDaysInCurrentMonth();
  const [selectedDay, setSelectedDay] = useState(getCurrentDay());

  useEffect(() => {
    setSelectedDay(getCurrentDay());
  }, []);
  
  return (
    <Carousel
      opts={{
        align: "center",
        containScroll: "trimSnaps",
        dragFree: true
      }}
      className="w-full h-fit px-8"
    >
      <CarouselContent className="w-full gap-2">
        {Array.from({ length: daysInMonth }, (_, index) => (
          <CarouselItem key={index} className="basis-1/5 md:basis-1/5 lg:basis-1/5 p-0">
            <div className="w-full h-full flex items-center justify-center">
              <Card 
                className={`cursor-pointer select-none w-full ${selectedDay === index + 1 ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setSelectedDay(index + 1)}
              >
                <CardContent className="flex flex-col items-center justify-center p-1">
                  <span className="text-xs font-semibold">{getWeekdayShort(index + 1)}</span>
                  <span className="text-xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer"/>
      <CarouselNext className="cursor-pointer"/>
    </Carousel>
  )
}
