'use client';

import { useEffect } from 'react';

/**
 * Sayfa genelindeki hareketleri bağlar: kaydırınca beliren öğeler, üst menü
 * gölgesi ve kartlarda imleci izleyen ışık. Sadece sınıf ve CSS değişkeni
 * ekler; içerik sunucuda üretilir, JS kapalıysa her şey görünür kalır.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

    let observer: IntersectionObserver | undefined;
    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      targets.forEach((el) => observer?.observe(el));
    }

    const onScroll = () => {
      root.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const onMove = (event: PointerEvent) => {
      const card = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        '[data-spotlight]',
      );
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointermove', onMove);
    };
  }, []);

  return null;
}
