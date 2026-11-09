# Landing page jurídica

SPA em React 19, TypeScript, Vite e Tailwind CSS para captação de contatos em Direito do Trabalho.

## Executar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

Configure `VITE_WHATSAPP_NUMBER` com o número completo (código do país, DDD e número, apenas dígitos) antes de habilitar o contato. Opcionalmente, configure `VITE_LEAD_WEBHOOK_URL` com um endpoint HTTPS do CRM; sem endpoint, o envio usa um modo de demonstração e informa isso ao visitante.

Antes de publicar, substitua nome, registro da OAB, textos e depoimentos de exemplo em `src/config.ts` e nos componentes. Os depoimentos são marcadores de posição, não relatos reais. Verifique autorização e veracidade de qualquer relato publicado, revise a Política de Privacidade para refletir o tratamento real dos dados e valide o material conforme as regras vigentes da OAB e a LGPD.

## Produção

```bash
npm run build
npm run preview
```

Os pontos de inserção dos scripts do Google Tag Manager e do Pixel da Meta estão comentados no `<head>` de `index.html`.
