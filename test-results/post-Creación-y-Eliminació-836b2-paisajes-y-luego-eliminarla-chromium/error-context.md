# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: post.spec.js >> Creación y Eliminación de Publicaciones >> Debería crear una nueva publicación usando el generador de paisajes y luego eliminarla
- Location: tests/post.spec.js:21:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.create-post-modal').locator('.ant-modal-title')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.create-post-modal').locator('.ant-modal-title')

```

```yaml
- complementary:
  - text: Waifu.ai
  - img "home"
  - text: Inicio
  - img "compass"
  - text: Buscar
  - img "plus-square"
  - text: Crear
  - img "heart"
  - superscript: 2 5
  - text: Notificaciones
  - img "user"
  - text: Perfil
- main:
  - text: "[ ESTADÍSTICAS_RED_GRID ] 41 EN LÍNEA SITIO: Waifu.ai CREADOR: qa.michi"
  - img "Visitantes Totales"
  - text: CONEXIÓN_SEGURA_LOCAL // GRID_ACTIVE v1.2.0 Tú Tu historia S sofia.creative J juan_travels M maria_photo C carlos_fit L lucia_art D diego.explorer I influencer_fake Hace 3 h
  - img "fire"
  - text: Viral
  - button "delete":
    - img "delete"
  - img "Publicación"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: 9110 Me gusta influencer_fake¡Bienvenidos a Waifu.ai! Este es un post viral simulado. Deja pasar unos minutos y verás un crecimiento exponencial de engagement. 🚀🔥
  - button "Ver los 38 comentarios"
  - text: felipe_growthEsto es de nivel profesional. Hace 9 min enzo_neon¡ESTO ES VIRAL! 😱 Hace 7 min
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: V viajero_silencioso Hace 6 h
  - img "coffee"
  - text: Normal
  - button "delete":
    - img "delete"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: 0 Me gusta viajero_silenciosoUna linda tarde simulando redes sociales en modo offline-first. Todo local. ☀️☕
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: ゆ ゆがー Hace 1 min
  - img "coffee"
  - text: Normal
  - button "delete":
    - img "delete"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: "0 Me gusta ゆがーIlustración creada por @ゆがー. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: 小 小鮫 Hace 2 min
  - img "fire"
  - text: Viral
  - button "delete":
    - img "delete"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: "0 Me gusta 小鮫Ilustración creada por @小鮫. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: ノ ノア290 Hace 3 min
  - img "global"
  - text: Inactivo
  - button "delete":
    - img "delete"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: "0 Me gusta ノア290Ilustración creada por @ノア290. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: は はづきんとん Hace 4 min
  - img "global"
  - text: Inactivo
  - button "delete":
    - img "delete"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: "0 Me gusta はづきんとんIlustración creada por @はづきんとん. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: 苺 苺谷ゆき Hace 5 min
  - img "fire"
  - text: Viral
  - button "delete":
    - img "delete"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: "0 Me gusta 苺谷ゆきIlustración creada por @苺谷ゆき. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - complementary:
    - img "user"
    - text: Admin (Michi) Simulador Offline Simulado Sugerencias para ti Ver todo S sofia.creative Sugerencia para ti
    - button "Seguir"
    - text: J juan_travels Sugerencia para ti
    - button "Seguir"
    - text: M maria_photo Popular cerca de ti
    - button "Seguir"
    - text: C carlos_fit Nuevo en Waifu.ai
    - button "Seguir"
    - paragraph: © 2026 WAIFU.AI SIMULATOR · Creado por qa.michi
    - img "Visitas totales"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class CreatePostModalPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  | 
  7  |     this.modal = page.locator('.create-post-modal');
  8  |     this.modalTitle = this.modal.locator('.ant-modal-title');
  9  |     this.natureBtn = this.modal.locator('.api-btn', { hasText: '🏔️ Paisaje' });
  10 |     this.dogBtn = this.modal.locator('.api-btn', { hasText: '🐶 Perrito' });
  11 |     this.catBtn = this.modal.locator('.api-btn', { hasText: '🐱 Gatito' });
  12 |     
  13 |     this.mediaPreview = this.modal.locator('.preview-media');
  14 |     this.captionTextarea = this.modal.locator('textarea[placeholder*="Escribe un pie de foto"]');
  15 |     
  16 |     // Tipo de crecimiento select
  17 |     this.growthSelect = this.modal.locator('.ant-select-selector');
  18 |     this.submitBtn = this.modal.locator('button', { hasText: 'Compartir' });
  19 |     this.successMessage = page.locator('.ant-message-success');
  20 |   }
  21 | 
  22 |   async verifyVisible() {
> 23 |     await expect(this.modalTitle).toBeVisible();
     |                                   ^ Error: expect(locator).toBeVisible() failed
  24 |     await expect(this.modalTitle).toContainText('Crear nueva publicación');
  25 |   }
  26 | 
  27 |   async generateNatureImage() {
  28 |     await this.natureBtn.click();
  29 |     // Esperar a que la imagen previsualizada esté cargada
  30 |     await expect(this.mediaPreview).toBeVisible({ timeout: 15000 });
  31 |   }
  32 | 
  33 |   async fillCaption(captionText) {
  34 |     await this.captionTextarea.fill(captionText);
  35 |   }
  36 | 
  37 |   async selectGrowthType(type) {
  38 |     await this.growthSelect.click();
  39 |     // Playwright buscará la opción en la lista emergente de Antd
  40 |     const option = this.page.locator(`.ant-select-item-option[value="${type}"]`);
  41 |     await option.click();
  42 |   }
  43 | 
  44 |   async submit() {
  45 |     await this.submitBtn.click();
  46 |     // Esperar a que aparezca el mensaje de éxito de Ant Design
  47 |     await expect(this.successMessage).toBeVisible();
  48 |     await expect(this.successMessage).toContainText('¡Publicación creada exitosamente!');
  49 |   }
  50 | }
  51 | 
```