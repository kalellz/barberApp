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

export function CarouselSize({ selectedDay, onDaySelect }) {
  const daysInMonth = getDaysInCurrentMonth();
  const [internalSelectedDay, setInternalSelectedDay] = useState(selectedDay || getCurrentDay());

  useEffect(() => {
    if (selectedDay !== undefined) {
      setInternalSelectedDay(selectedDay);
    }
  }, [selectedDay]);

  const handleDaySelect = (day) => {
    setInternalSelectedDay(day);
    if (onDaySelect) {
      onDaySelect(day);
    }
  };
  
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          containScroll: "trimSnaps",
          dragFree: false,
          slidesToScroll: 4
        }}
        className="w-full h-fit px-6"
      >
        <CarouselContent className="w-full">
          {Array.from({ length: daysInMonth }, (_, index) => (
            <CarouselItem key={index} className="basis-1/4 md:basis-1/4 lg:basis-1/4 px-1">
              <div className="w-full h-full flex items-center justify-center">
                <Card 
                  className={`cursor-pointer select-none w-full ${internalSelectedDay === index + 1 ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => handleDaySelect(index + 1)}
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
    </div>
  )
}
