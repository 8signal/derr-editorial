"use client";

import { useEffect } from "react";

export default function MicroInteractions() {
  useEffect(() => {
    // Only run on devices that support hover
    if (!window.matchMedia("(hover: hover)").matches) return;

    // ─── Magnetic Buttons ───
    const buttons = document.querySelectorAll<HTMLElement>(
      ".btn-primary, .btn-secondary"
    );

    const btnHandlers = new Map<
      HTMLElement,
      { move: (e: MouseEvent) => void; leave: () => void; enter: () => void }
    >();

    buttons.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      };
      const leave = () => {
        btn.style.transform = "";
        btn.style.transition = "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      };
      const enter = () => {
        btn.style.transition = "transform 0.15s ease-out";
      };

      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      btn.addEventListener("mouseenter", enter);
      btnHandlers.set(btn, { move, leave, enter });
    });

    // ─── Card Tilt ───
    const cards = document.querySelectorAll<HTMLElement>(
      ".problem-card, .service-card"
    );

    const cardHandlers = new Map<
      HTMLElement,
      { move: (e: MouseEvent) => void; leave: () => void }
    >();

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-6px) perspective(600px) rotateX(${
          y * -3
        }deg) rotateY(${x * 3}deg)`;
      };
      const leave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cardHandlers.set(card, { move, leave });
    });

    // Cleanup
    return () => {
      btnHandlers.forEach((handlers, btn) => {
        btn.removeEventListener("mousemove", handlers.move);
        btn.removeEventListener("mouseleave", handlers.leave);
        btn.removeEventListener("mouseenter", handlers.enter);
      });
      cardHandlers.forEach((handlers, card) => {
        card.removeEventListener("mousemove", handlers.move);
        card.removeEventListener("mouseleave", handlers.leave);
      });
    };
  }, []);

  return null;
}
