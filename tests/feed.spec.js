import { test, expect } from '@playwright/test';
import { FeedPage } from '../pages/FeedPage';
import { NavigationPage } from '../pages/NavigationPage';

test.describe('Feed y Estadísticas de Red (VisitorCounter)', () => {
  let feedPage;
  let navPage;

  test.beforeEach(async ({ page }) => {
    feedPage = new FeedPage(page);
    navPage = new NavigationPage(page);

    // Ir a la página
    await navPage.goto();
    
    // Limpiar localStorage y base de datos local para iniciar en un estado limpio
    await feedPage.resetLocalStorageAndDatabases();
    
    // Recargar para aplicar el estado limpio
    await page.reload();
  });

  test('Debería cargar la página principal y verificar el título y logo', async () => {
    // Validar el texto del logotipo en la cabecera y en el menú lateral
    await expect(navPage.sidebarLogo).toContainText('Waifu.ai');
    await expect(navPage.headerLogo).toContainText('Waifu.ai');
  });

  test('Debería mostrar el panel de estadísticas del VisitorCounter correctamente', async () => {
    await expect(feedPage.visitorCounterPanel).toBeVisible();

    // Validar textos técnicos del panel de estadísticas
    await expect(feedPage.visitorCounterPanel).toContainText('ESTADÍSTICAS_RED_GRID');
    await expect(feedPage.visitorCounterPanel).toContainText('qa.michi');
    await expect(feedPage.visitorCounterPanel).toContainText('Waifu.ai');

    // Validar el indicador de usuarios en línea simulados
    await expect(feedPage.liveText).toBeVisible();
    await expect(feedPage.liveText).toContainText('EN LÍNEA');

    // Validar el renderizado de la imagen del badge de Komarev
    await expect(feedPage.badgeImage).toBeVisible();
    await expect(feedPage.badgeImage).toHaveAttribute('alt', 'Visitantes Totales');
  });

  test('Debería cargar los posts del feed iniciales', async () => {
    // Debe haber al menos una tarjeta de post
    const postsCount = await feedPage.getPostsCount();
    expect(postsCount).toBeGreaterThan(0);

    const firstPost = await feedPage.getFirstPost();
    await expect(firstPost).toBeVisible();
  });

  test('Debería cargar más posts de forma asíncrona mediante Scroll Infinito', async () => {
    // Obtener cantidad inicial de posts
    const initialPostsCount = await feedPage.getPostsCount();
    
    // Hacer scroll inteligente (espera automáticamente a que se carguen posts adicionales)
    await feedPage.scrollAndLoadMore();

    // Validar que la cantidad de posts haya aumentado
    const newPostsCount = await feedPage.getPostsCount();
    expect(newPostsCount).toBeGreaterThan(initialPostsCount);
  });
});
