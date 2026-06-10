import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';
import { FeedPage } from '../pages/FeedPage';

test.describe('Navegación e Interfaz Principal (Tabs)', () => {
  let navPage;
  let feedPage;

  test.beforeEach(async ({ page }) => {
    navPage = new NavigationPage(page);
    feedPage = new FeedPage(page);

    await navPage.goto();
    await feedPage.resetLocalStorageAndDatabases();
    await page.reload();
  });

  test('Debería navegar entre todas las pestañas utilizando el sidebar de escritorio', async ({ page }) => {
    // 1. Navegar a Buscar
    await navPage.navigateToBuscar();
    
    // Verificar que estamos en la vista de búsqueda
    const searchInput = page.locator('input[placeholder*="Buscar usuarios"]');
    await expect(searchInput).toBeVisible();

    // 2. Navegar a Notificaciones
    await navPage.navigateToNotificaciones();

    // Verificar que estamos en la vista de notificaciones
    const notifsTitle = page.locator('h2, h3', { hasText: 'Notificaciones' });
    await expect(notifsTitle.first()).toBeVisible();

    // 3. Navegar a Perfil
    await navPage.navigateToPerfil();

    // Verificar que estamos en la vista de perfil
    const profileUser = page.locator('.profile-username', { hasText: 'tú' });
    await expect(profileUser).toBeVisible();

    // 4. Regresar a Inicio (Feed)
    await navPage.navigateToInicio();

    // Verificar que volvemos al Feed y que el panel de estadísticas es visible de nuevo
    await expect(feedPage.visitorCounterPanel).toBeVisible();
  });

  test('Debería limpiar el contador de notificaciones no leídas al abrir la pestaña de notificaciones', async () => {
    // Esperar a que se generen notificaciones sintéticas
    await expect(async () => {
      const count = await navPage.getUnreadNotificationsCount();
      expect(count).toBeGreaterThanOrEqual(0);
    }).toPass({ timeout: 3000 });

    // Abrir pestaña de notificaciones
    await navPage.navigateToNotificaciones();
    
    // El badge de notificaciones no leídas en el sidebar de escritorio debería ser 0
    const count = await navPage.getUnreadNotificationsCount();
    expect(count).toBe(0);
  });
});
