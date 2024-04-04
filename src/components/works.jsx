import { cn } from "../utils/cn";
import React,{useState} from "react";
import { BentoGrid, BentoGridItem } from "./bento";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Works() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={img}
        width={600}
        height={500}
        layout="responsive"
        objectFit="cover"
        alt=""
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

const items = [
  {
    title: "Dog Care Center Website - A Case Study",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton img="https://imgs.search.brave.com/nhDizHNGc5q-bgrcxRQWu2cu8EIrEHKQxG9Bp6YLkGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyYWNrcy1v/bi1hLWZyb3plbi1z/ZWEuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA"/>,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Food Delivery App",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton img="https://imgs.search.brave.com/nhDizHNGc5q-bgrcxRQWu2cu8EIrEHKQxG9Bp6YLkGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyYWNrcy1v/bi1hLWZyb3plbi1z/ZWEuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA"/>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Restaurant Menu Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton img="https://imgs.search.brave.com/nhDizHNGc5q-bgrcxRQWu2cu8EIrEHKQxG9Bp6YLkGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyYWNrcy1v/bi1hLWZyb3plbi1z/ZWEuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA"/>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ChocoDae - A Chocolate Ecommerce Website",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton img="https://imgs.search.brave.com/nhDizHNGc5q-bgrcxRQWu2cu8EIrEHKQxG9Bp6YLkGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyYWNrcy1v/bi1hLWZyb3plbi1z/ZWEuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA"/>,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
