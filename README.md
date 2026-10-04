# ACK Techs

ACK Techs ekibinin resmi web sitesi: https://ack-techs.com

Kişisel siteden ayrılmış bağımsız Next.js uygulaması. Ana sayfa ve proje detayları statik olarak üretilir.

## Yerel çalışma

Node.js 22.13 veya üzeriyle:

```bash
npm ci
npm run dev
```

## Kontrol ve derleme

```bash
npm run build
npm run typecheck
```

Statik dosyalar `out/` klasöründe üretilir.

## Yayın

GitHub: `ACK-Techs/ack-techs.com`
Vercel: `GhostWorker` / `ack-techs`
Framework: Next.js. Derleme: `npm run build`. Çıktı: otomatik (`out`).
`main` dalına gönderilen değişiklikler üretim yayınına alınır.

Kaynak, `caglarkc/alicaglarkocer.com` reposundaki `.ack-techs-source` klasörünün `0a4e117` commitinden taşındı. Eski `/ack-techs/` bağlantıları yeni domainin kök yollarına uyarlandı.
