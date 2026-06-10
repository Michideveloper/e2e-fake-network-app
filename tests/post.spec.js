import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';
import { FeedPage } from '../pages/FeedPage';
import { CreatePostModalPage } from '../pages/CreatePostModalPage';

test.describe('Creación y Eliminación de Publicaciones', () => {
  let navPage;
  let feedPage;
  let createModalPage;

  test.beforeEach(async ({ page }) => {
    navPage = new NavigationPage(page);
    feedPage = new FeedPage(page);
    createModalPage = new CreatePostModalPage(page);

    await navPage.goto();
    await feedPage.resetLocalStorageAndDatabases();
    await page.reload();
  });

  test('Debería crear una nueva publicación usando el generador de paisajes y luego eliminarla', async () => {
    // 1. Abrir el modal de creación de post desde el sidebar
    await navPage.navigateToCrear();
    await createModalPage.verifyVisible();

    // 2. Generar imagen usando la API integrada de Paisajes
    await createModalPage.generateNatureImage();

    // 3. Escribir descripción en el textarea
    const uniqueCaption = `Automatización Playwright - Post Test POM ${Date.now()} #QATesting`;
    await createModalPage.fillCaption(uniqueCaption);

    // 4. Compartir publicación
    await createModalPage.submit();

    // 5. Verificar que el post se haya agregado al tope del feed
    const firstPost = await feedPage.getFirstPost();
    await expect(firstPost).toBeVisible();
    await expect(firstPost.locator('.post-username')).toContainText('tú');
    await expect(firstPost.locator('.caption-text')).toContainText(uniqueCaption);

    // 6. Eliminar la publicación recién creada
    await feedPage.deletePost(firstPost);

    // Validar que el post ya no esté en el feed (el nuevo primer post no debería tener la descripción única)
    const currentFirstPost = await feedPage.getFirstPost();
    if (await currentFirstPost.isVisible()) {
      await expect(currentFirstPost.locator('.caption-text')).not.toContainText(uniqueCaption);
    }
  });
});
