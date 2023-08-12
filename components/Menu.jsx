import React from 'react'
import { Card } from './ui/card';
import Image from 'next/image';

const Menu = () => {
    const data = [
        {
          image: "/food.jpg",
          name: "Pizza",
          price: 10.99,
          category: "Italian"
        },
        {
          image: "/food.jpg",
          name: "Burger",
          price: 5.99,
          category: "American"
        },
        {
          image: "/food.jpg",
          name: "Sushi",
          price: 12.49,
          category: "Japanese"
        },
        {
          image: "/food.jpg",
          name: "Taco",
          price: 8.75,
          category: "Mexican"
        },
        {
          image: "/food.jpg",
          name: "Pasta",
          price: 9.99,
          category: "Italian"
        },
        {
          image: "/food.jpg",
          name: "Salad",
          price: 6.49,
          category: "Healthy"
        },
        {
          image: "/food.jpg",
          name: "Sushi Roll",
          price: 14.99,
          category: "Japanese"
        },
        {
          image: "/food.jpg",
          name: "Steak",
          price: 18.99,
          category: "American"
        },
        {
          image: "/food.jpg",
          name: "Ramen",
          price: 11.25,
          category: "Japanese"
        },
        {
          image: "/food.jpg",
          name: "Burrito",
          price: 7.99,
          category: "Mexican"
        },
        {
          image: "/food.jpg",
          name: "Sushi Platter",
          price: 24.99,
          category: "Japanese"
        },
        {
          image: "/food.jpg",
          name: "Chicken Wings",
          price: 9.49,
          category: "American"
        },
        {
          image: "/food.jpg",
          name: "Pasta Carbonara",
          price: 11.99,
          category: "Italian"
        },
        {
          image: "/food.jpg",
          name: "Quesadilla",
          price: 6.99,
          category: "Mexican"
        },
        {
          image: "/food.jpg",
          name: "Sashimi",
          price: 15.99,
          category: "Japanese"
        },
        {
          image: "/food.jpg",
          name: "Cheeseburger",
          price: 7.49,
          category: "American"
        },
        {
          image: "/food.jpg",
          name: "Enchiladas",
          price: 10.25,
          category: "Mexican"
        },
        {
          image: "/food.jpg",
          name: "Margherita Pizza",
          price: 8.99,
          category: "Italian"
        },
        {
          image: "/food.jpg",
          name: "Sundae",
          price: 4.99,
          category: "Dessert"
        },
        {
          image: "/food.jpg",
          name: "Pho",
          price: 10.99,
          category: "Vietnamese"
        }
      ];
  return (
    <article className='w-screen m-auto flex justify-center flex-row flex-wrap items-center'>
        {data.map((ele, key)=>{
            return <Card className="flex flex-col justify-center items-center p-3 m-2 w-[160px] bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 border-0">
                <div className='overflow-hidden shadow-lg rounded-lg relative w-[140px] h-[140px]'>
                    <Image 
                        src={ele.image}
                        alt="test"
                        fill
                        objectFit='cover'
                        className='overflow-hidden'
                    />
                </div>
                <div className='w-full flex flex-col justify-center items-center p-2'>
                    <p className='text-xl font-bold text-rose-500'>{ele.category}</p>
                    <p className='text-muted-foreground text-xs text-white font-semibold m-1'>{ele.name}</p>
                    <p className='text-lg italic bg-rose-600 px-1 rounded-md text-white'>{`$`+ele.price}</p>
                </div>
            </Card>
        })}
    </article>
  )
}

export default Menu