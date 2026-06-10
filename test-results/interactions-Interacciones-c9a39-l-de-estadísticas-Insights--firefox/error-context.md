# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: interactions.spec.js >> Interacciones con Publicaciones (Comentarios, Likes e Insights) >> Debería abrir y cerrar el modal de estadísticas (Insights)
- Location: tests/interactions.spec.js:47:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.insights-modal')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.insights-modal')

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
  - text: "[ ESTADÍSTICAS_RED_GRID ] 43 EN LÍNEA SITIO: Waifu.ai CREADOR: qa.michi"
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
  - img "Publicación"
  - button "heart":
    - img "heart"
  - button "message":
    - img "message"
  - button "bar-chart Ver estadísticas de engagement":
    - img "bar-chart"
    - text: Ver estadísticas de engagement
  - text: 76 Me gusta viajero_silenciosoUna linda tarde simulando redes sociales en modo offline-first. Todo local. ☀️☕
  - button "Ver los 4 comentarios"
  - text: joaquin_beats¡Qué buena foto! 🔥 Hace 2 h maria_photo¡Wow! 😍 Hace 2 h
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: ひ ひよろう Hace 1 min
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
  - text: "0 Me gusta ひよろうIlustración creada por @ひよろう. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: M milky Hace 2 min
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
  - text: "0 Me gusta milkyIlustración creada por @milky. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: ね ねい Hace 3 min
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
  - text: "0 Me gusta ねいIlustración creada por @ねい. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: S sooon Hace 4 min
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
  - text: "0 Me gusta sooonIlustración creada por @sooon. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
  - textbox "Añade un comentario..."
  - button "Publicar" [disabled]
  - text: 四 四季野ゆき Hace 5 min
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
  - text: "0 Me gusta 四季野ゆきIlustración creada por @四季野ゆき. Generada de manera infinita mediante API y simulada en local. 🌸🎌 #AnimeArt"
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
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | export class FeedPage {
  4   |   constructor(page) {
  5   |     this.page = page;
  6   | 
  7   |     // Selectores del VisitorCounter
  8   |     this.visitorCounterPanel = page.locator('.visitor-counter-panel');
  9   |     this.liveText = this.visitorCounterPanel.locator('.live-text');
  10  |     this.badgeImage = this.visitorCounterPanel.locator('.michi-counter-badge');
  11  | 
  12  |     // Selectores del Feed
  13  |     this.postCards = page.locator('.post-card');
  14  |     this.successMessage = page.locator('.ant-message-success');
  15  |     
  16  |     // Modal de Insights (Estadísticas)
  17  |     this.insightsModal = page.locator('.insights-modal');
  18  |     this.insightsTitle = this.insightsModal.locator('.ant-modal-title');
  19  |     this.insightsCloseBtn = this.insightsModal.locator('.ant-modal-close');
  20  |   }
  21  | 
  22  |   // Limpiar IndexedDB para aislar el estado del entorno local de pruebas
  23  |   async resetLocalStorageAndDatabases() {
  24  |     await this.page.evaluate(async () => {
  25  |       // Limpiar LocalStorage
  26  |       window.localStorage.clear();
  27  |       window.sessionStorage.clear();
  28  |       
  29  |       // Borrar todas las bases de datos de IndexedDB
  30  |       if (window.indexedDB && window.indexedDB.databases) {
  31  |         const dbs = await window.indexedDB.databases();
  32  |         for (const db of dbs) {
  33  |           window.indexedDB.deleteDatabase(db.name);
  34  |         }
  35  |       }
  36  |     });
  37  |   }
  38  | 
  39  |   async getPostsCount() {
  40  |     return await this.postCards.count();
  41  |   }
  42  | 
  43  |   async getFirstPost() {
  44  |     return this.postCards.first();
  45  |   }
  46  | 
  47  |   async getPostByCaption(caption) {
  48  |     return this.page.locator('.post-card', { hasText: caption }).first();
  49  |   }
  50  | 
  51  |   // Scroll inteligente esperando a que aumente la cantidad de posts
  52  |   async scrollAndLoadMore() {
  53  |     const initialCount = await this.getPostsCount();
  54  |     
  55  |     // Hacer scroll al final de la página
  56  |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  57  |     
  58  |     // Esperar a que la cantidad de posts en el feed sea mayor al contador inicial
  59  |     await expect(async () => {
  60  |       const currentCount = await this.getPostsCount();
  61  |       expect(currentCount).toBeGreaterThan(initialCount);
  62  |     }).toPass({
  63  |       timeout: 5000,
  64  |       intervals: [500]
  65  |     });
  66  |   }
  67  | 
  68  |   async likePost(postLocator) {
  69  |     const likeBtn = postLocator.locator('.post-actions-left button').first();
  70  |     await likeBtn.click();
  71  |   }
  72  | 
  73  |   async commentOnPost(postLocator, commentText) {
  74  |     const commentInput = postLocator.locator('.comment-input');
  75  |     await commentInput.fill(commentText);
  76  |     
  77  |     const submitBtn = postLocator.locator('.comment-submit-btn');
  78  |     await submitBtn.click();
  79  | 
  80  |     // Esperar retroalimentación visual de éxito
  81  |     await expect(this.successMessage).toBeVisible();
  82  |     await expect(this.successMessage).toContainText('Comentario agregado');
  83  |   }
  84  | 
  85  |   async getLastComment(postLocator) {
  86  |     const commentItem = postLocator.locator('.comment-item').last();
  87  |     const username = await commentItem.locator('.comment-username').innerText();
  88  |     const content = await commentItem.locator('.comment-content').innerText();
  89  |     return { username, content };
  90  |   }
  91  | 
  92  |   async openInsights(postLocator) {
  93  |     const insightsLinkBtn = postLocator.locator('.insights-link-btn');
  94  |     await insightsLinkBtn.click();
> 95  |     await expect(this.insightsModal).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  96  |   }
  97  | 
  98  |   async closeInsights() {
  99  |     await this.insightsCloseBtn.click();
  100 |     await expect(this.insightsModal).not.toBeVisible();
  101 |   }
  102 | 
  103 |   async deletePost(postLocator) {
  104 |     const deleteBtn = postLocator.locator('.delete-post-btn');
  105 |     await deleteBtn.click();
  106 |     
  107 |     // Esperar retroalimentación visual de éxito
  108 |     await expect(this.successMessage).toContainText('Publicación eliminada');
  109 |   }
  110 | }
  111 | 
```