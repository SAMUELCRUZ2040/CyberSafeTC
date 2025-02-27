"use client";

import { cn } from "@/utils/cn";
import { ConfiDiferentsEffectsAbout } from "./confiComponents/ConfiDiferentsEffectsAbout";

const notifications = Array.from({ length: 10 }, () => [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "\uD83D\uDCB8",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "\uD83D\uDC64",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "\uD83D\uDCAC",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "\uD83D\uDDBE️",
    color: "#1E86FF",
  },
]).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[100.2%] ",
        "border-2 border-[#38393933] gradient__inset__third"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function DiferentsEffectsAbout({ className }) {
  return (
    <>
    <div className={cn("relative flex h-[400px] w-full flex-col overflow-hidden p-2 pt-[10rem]", className)}>
        <ConfiDiferentsEffectsAbout>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </ConfiDiferentsEffectsAbout>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
    </>
  );
}