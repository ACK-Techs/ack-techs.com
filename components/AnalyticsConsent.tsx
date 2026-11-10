'use client';

import { useEffect, useRef, useState } from 'react';

const ID = 'G-N90GMF0C81';
const KEY = 'analytics-consent-v1';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(KEY); } catch {}
    setChoice(saved);
    setOpen(saved !== 'accepted' && saved !== 'rejected');
  }, []);

  useEffect(() => {
    if (choice !== 'accepted') return;
    if (!initialized.current) {
      initialized.current = true;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) { window.dataLayer.push(args); };
      window.gtag('js', new Date());
      window.gtag('config', ID, { allow_google_signals: false, page_location: window.location.origin + window.location.pathname });
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`;
      document.head.appendChild(script);
    }
  }, [choice]);

  function choose(value: 'accepted' | 'rejected') {
    try { localStorage.setItem(KEY, value); } catch {}
    if (value === 'rejected' && initialized.current) {
      document.cookie.split(';').forEach((cookie) => {
        const name = cookie.trim().split('=')[0];
        if (name === '_ga' || name.startsWith('_ga_')) {
          document.cookie = `${name}=; Max-Age=0; path=/`;
          document.cookie = `${name}=; Max-Age=0; path=/; domain=.ack-techs.com`;
        }
      });
      window.location.reload();
      return;
    }
    setChoice(value);
    setOpen(false);
  }

  return <>
    <button className="analytics-settings" onClick={() => setOpen(true)}>Çerez tercihleri</button>
    {open && <section className="analytics-consent" aria-label="Analiz çerezleri" aria-live="polite">
      <p><strong>Analiz çerezleri</strong><br />İzninizle Google Analytics kullanarak ziyaretleri ve site etkileşimlerini ölçüyoruz. Veriler Google ile paylaşılır. Tercihinizi istediğiniz zaman değiştirebilirsiniz. <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google gizlilik politikası</a></p>
      <div><button onClick={() => choose('rejected')}>Reddet</button><button onClick={() => choose('accepted')}>Kabul et</button></div>
    </section>}
  </>;
}
