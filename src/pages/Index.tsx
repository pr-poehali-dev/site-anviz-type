
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

// Типы для карточек
type CardType = {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
};

// Примеры карточек
const cardExamples: CardType[] = [
  { id: 1, title: "Встреча с другом", description: "Неожиданно встретить старого друга", icon: "Coffee", color: "bg-purple-500" },
  { id: 2, title: "Новое хобби", description: "Начать заниматься чем-то новым", icon: "Palette", color: "bg-blue-500" },
  { id: 3, title: "Поездка", description: "Спонтанная поездка в новое место", icon: "Plane", color: "bg-green-500" },
  { id: 4, title: "Книга", description: "Прочитать книгу случайного автора", icon: "BookOpen", color: "bg-yellow-500" },
  { id: 5, title: "Фильм", description: "Посмотреть фильм из непривычного жанра", icon: "Film", color: "bg-red-500" },
  { id: 6, title: "Новый рецепт", description: "Приготовить что-то, что никогда не готовил", icon: "Utensils", color: "bg-indigo-500" },
  { id: 7, title: "Музыка", description: "Послушать новый музыкальный жанр", icon: "Music", color: "bg-pink-500" },
  { id: 8, title: "Медитация", description: "Попробовать медитировать утром", icon: "Moon", color: "bg-teal-500" },
  { id: 9, title: "Спорт", description: "Попробовать новый вид тренировки", icon: "Dumbbell", color: "bg-orange-500" },
];

const Index = () => {
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState('');

  // Генерация случайной карточки
  const generateRandomCard = () => {
    setIsLoading(true);
    setAnimation('animate-out fade-out');
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * cardExamples.length);
      setCurrentCard(cardExamples[randomIndex]);
      setAnimation('animate-in fade-in');
      setIsLoading(false);
    }, 300);
  };

  // Генерация случайной карточки при первой загрузке
  useEffect(() => {
    generateRandomCard();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1A1F2C] to-[#121420] text-white p-4">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold mb-2 text-[#9b87f5] font-montserrat">RPK</h1>
        <p className="text-lg text-gray-300 font-rubik">Генератор случайных карточек</p>
      </header>

      <div className={`mb-8 transition-all duration-300 transform ${animation}`}>
        {currentCard && (
          <Card className="w-[320px] md:w-[400px] bg-gray-800 border-gray-700 text-white overflow-hidden">
            <div className={`h-2 ${currentCard.color}`}></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-montserrat">
                <div className={`p-2 rounded-full ${currentCard.color}`}>
                  <Icon name={currentCard.icon} className="h-6 w-6 text-white" />
                </div>
                {currentCard.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="font-rubik">
              <p>{currentCard.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end text-sm text-gray-400">
              Карточка #{currentCard.id}
            </CardFooter>
          </Card>
        )}
      </div>

      <Button 
        onClick={generateRandomCard} 
        disabled={isLoading}
        className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 font-rubik"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Icon name="Loader2" className="animate-spin" /> Генерирую...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Icon name="Shuffle" /> Сгенерировать
          </span>
        )}
      </Button>

      <footer className="mt-12 text-center text-gray-500 font-rubik">
        <p>Нажмите на кнопку, чтобы получить случайную карточку</p>
        <p className="mt-1 text-sm">© 2024 RPK Generator</p>
      </footer>
    </div>
  );
};

export default Index;
