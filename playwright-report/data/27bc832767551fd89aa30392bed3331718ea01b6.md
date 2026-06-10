# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> Navegación e Interfaz Principal (Tabs) >> Debería navegar entre todas las pestañas utilizando el sidebar de escritorio
- Location: tests/navigation.spec.js:18:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[placeholder*="Buscar usuarios"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[placeholder*="Buscar usuarios"]')

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
  - img "search"
  - textbox "Buscar creadores o hashtags..."
  - text: Explorar Tecnología Viajes Música Comida Fotografía Arte Fitness
  - img "fire"
  - text: Tendencias del Simulador
  - list:
    - listitem:
      - img "compass"
      - heading "#OfflineLife" [level=4]
      - text: 1.2M publicaciones
    - listitem:
      - img "compass"
      - heading "#WaifuAi" [level=4]
      - text: 840K publicaciones
    - listitem:
      - img "compass"
      - heading "#SyntheticEngagement" [level=4]
      - text: 320K publicaciones
    - listitem:
      - img "compass"
      - heading "#NoServerNoProblem" [level=4]
      - text: 150K publicaciones
    - listitem:
      - img "compass"
      - heading "#ViteReactSpeed" [level=4]
      - text: 94K publicaciones
    - listitem:
      - img "compass"
      - heading "#AntdDesign" [level=4]
      - text: 45K publicaciones
  - heading "Descubre la Ilusión" [level=3]
  - paragraph: Toda la interacción que ves está ocurriendo exclusivamente dentro de tu navegador.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { NavigationPage } from '../pages/NavigationPage';
  3  | import { FeedPage } from '../pages/FeedPage';
  4  | 
  5  | test.describe('Navegación e Interfaz Principal (Tabs)', () => {
  6  |   let navPage;
  7  |   let feedPage;
  8  | 
  9  |   test.beforeEach(async ({ page }) => {
  10 |     navPage = new NavigationPage(page);
  11 |     feedPage = new FeedPage(page);
  12 | 
  13 |     await navPage.goto();
  14 |     await feedPage.resetLocalStorageAndDatabases();
  15 |     await page.reload();
  16 |   });
  17 | 
  18 |   test('Debería navegar entre todas las pestañas utilizando el sidebar de escritorio', async ({ page }) => {
  19 |     // 1. Navegar a Buscar
  20 |     await navPage.navigateToBuscar();
  21 |     
  22 |     // Verificar que estamos en la vista de búsqueda
  23 |     const searchInput = page.locator('input[placeholder*="Buscar usuarios"]');
> 24 |     await expect(searchInput).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
  25 | 
  26 |     // 2. Navegar a Notificaciones
  27 |     await navPage.navigateToNotificaciones();
  28 | 
  29 |     // Verificar que estamos en la vista de notificaciones
  30 |     const notifsTitle = page.locator('h2, h3', { hasText: 'Notificaciones' });
  31 |     await expect(notifsTitle.first()).toBeVisible();
  32 | 
  33 |     // 3. Navegar a Perfil
  34 |     await navPage.navigateToPerfil();
  35 | 
  36 |     // Verificar que estamos en la vista de perfil
  37 |     const profileUser = page.locator('.profile-username', { hasText: 'tú' });
  38 |     await expect(profileUser).toBeVisible();
  39 | 
  40 |     // 4. Regresar a Inicio (Feed)
  41 |     await navPage.navigateToInicio();
  42 | 
  43 |     // Verificar que volvemos al Feed y que el panel de estadísticas es visible de nuevo
  44 |     await expect(feedPage.visitorCounterPanel).toBeVisible();
  45 |   });
  46 | 
  47 |   test('Debería limpiar el contador de notificaciones no leídas al abrir la pestaña de notificaciones', async () => {
  48 |     // Esperar a que se generen notificaciones sintéticas
  49 |     await expect(async () => {
  50 |       const count = await navPage.getUnreadNotificationsCount();
  51 |       expect(count).toBeGreaterThanOrEqual(0);
  52 |     }).toPass({ timeout: 3000 });
  53 | 
  54 |     // Abrir pestaña de notificaciones
  55 |     await navPage.navigateToNotificaciones();
  56 |     
  57 |     // El badge de notificaciones no leídas en el sidebar de escritorio debería ser 0
  58 |     const count = await navPage.getUnreadNotificationsCount();
  59 |     expect(count).toBe(0);
  60 |   });
  61 | });
  62 | 
```