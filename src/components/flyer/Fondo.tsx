"use client";
import { useRef, useEffect } from "react";
import { text } from "stream/consumers";

export default function Fondo({ contenidoFlyerRef }: { contenidoFlyerRef: React.RefObject<HTMLElement> }) {

  const textoFondoRef = useRef<HTMLDivElement>(null);
  const contentHeightRef = useRef(0);

  useEffect(() => {
    const contenidoFlyer = contenidoFlyerRef.current;
    const textoFondo = textoFondoRef.current;

    if (!contenidoFlyer || !textoFondo) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const height = entry.contentRect.height;
        if (entry.target === contenidoFlyer) {
          textoFondo.style.fontSize = `${height * 0.3}px`;
          contentHeightRef.current = height;
        }
        if (entry.target === textoFondo) {
          const offset = (contentHeightRef.current - height) / 2;
          textoFondo.style.top = `${offset}px`;
        }
      }
    });

    observer.observe(contenidoFlyer);
    observer.observe(textoFondo);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textoFondoRef} className="fondo d-flex justify-content-center">
      GEBA
    </div>
  );
}
