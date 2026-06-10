import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';
import { FeedPage } from '../pages/FeedPage';

test.describe('Interacciones con Publicaciones (Comentarios, Likes e Insights)', () => {
  let navPage;
  let feedPage;

  test.beforeEach(async ({ page }) => {
    navPage = new NavigationPage(page);
    feedPage = new FeedPage(page);

    await navPage.goto();
    await feedPage.resetLocalStorageAndDatabases();
    await page.reload();
  });

  test('Debería poder dar me gusta a una publicación', async () => {
    const firstPost = await feedPage.getFirstPost();
    await expect(firstPost).toBeVisible();

    const likeBtn = firstPost.locator('.post-actions-left button').first();
    
    // Dar click en like
    await feedPage.likePost(firstPost);
    await expect(likeBtn).toHaveClass(/liked/);

    // Quitar el like
    await feedPage.likePost(firstPost);
    await expect(likeBtn).not.toHaveClass(/liked/);
  });

  test('Debería agregar un comentario a una publicación del feed', async () => {
    const firstPost = await feedPage.getFirstPost();
    await expect(firstPost).toBeVisible();

    // Comentar en la publicación
    const uniqueComment = `Espectacular waifu y gran UX! ${Date.now()}`;
    await feedPage.commentOnPost(firstPost, uniqueComment);

    // Verificar el comentario agregado en la lista usando POM
    const lastComment = await feedPage.getLastComment(firstPost);
    expect(lastComment.username).toContain('tú');
    expect(lastComment.content).toContain(uniqueComment);
  });

  test('Debería abrir y cerrar el modal de estadísticas (Insights)', async () => {
    const firstPost = await feedPage.getFirstPost();
    await expect(firstPost).toBeVisible();

    // Clic en ver estadísticas usando el POM
    await feedPage.openInsights(firstPost);

    // Verificar contenido del modal
    await expect(feedPage.insightsTitle).toContainText('Estadísticas de la Publicación');
    await expect(feedPage.insightsModal.locator('.summary-lbl', { hasText: 'Me gusta' })).toBeVisible();
    await expect(feedPage.insightsModal.locator('.summary-lbl', { hasText: 'Comentar' })).toBeVisible();

    // Cerrar el modal usando el POM
    await feedPage.closeInsights();
  });
});
