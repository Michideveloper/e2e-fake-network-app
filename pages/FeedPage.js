import { expect } from '@playwright/test';

export class FeedPage {
  constructor(page) {
    this.page = page;

    // Selectores del VisitorCounter
    this.visitorCounterPanel = page.locator('.visitor-counter-panel');
    this.liveText = this.visitorCounterPanel.locator('.live-text');
    this.badgeImage = this.visitorCounterPanel.locator('.michi-counter-badge');

    // Selectores del Feed
    this.postCards = page.locator('.post-card');
    this.successMessage = page.locator('.ant-message-success');
    
    // Modal de Insights (Estadísticas)
    this.insightsModal = page.locator('.insights-modal');
    this.insightsTitle = this.insightsModal.locator('.ant-modal-title');
    this.insightsCloseBtn = this.insightsModal.locator('.ant-modal-close');
  }

  // Limpiar IndexedDB para aislar el estado del entorno local de pruebas
  async resetLocalStorageAndDatabases() {
    await this.page.evaluate(async () => {
      // Limpiar LocalStorage
      window.localStorage.clear();
      window.sessionStorage.clear();
      
      // Borrar todas las bases de datos de IndexedDB
      if (window.indexedDB && window.indexedDB.databases) {
        const dbs = await window.indexedDB.databases();
        for (const db of dbs) {
          window.indexedDB.deleteDatabase(db.name);
        }
      }
    });
  }

  async getPostsCount() {
    return await this.postCards.count();
  }

  async getFirstPost() {
    return this.postCards.first();
  }

  async getPostByCaption(caption) {
    return this.page.locator('.post-card', { hasText: caption }).first();
  }

  // Scroll inteligente esperando a que aumente la cantidad de posts
  async scrollAndLoadMore() {
    const initialCount = await this.getPostsCount();
    
    // Hacer scroll al final de la página
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Esperar a que la cantidad de posts en el feed sea mayor al contador inicial
    await expect(async () => {
      const currentCount = await this.getPostsCount();
      expect(currentCount).toBeGreaterThan(initialCount);
    }).toPass({
      timeout: 5000,
      intervals: [500]
    });
  }

  async likePost(postLocator) {
    const likeBtn = postLocator.locator('.post-actions-left button').first();
    await likeBtn.click();
  }

  async commentOnPost(postLocator, commentText) {
    const commentInput = postLocator.locator('.comment-input');
    await commentInput.fill(commentText);
    
    const submitBtn = postLocator.locator('.comment-submit-btn');
    await submitBtn.click();

    // Esperar retroalimentación visual de éxito
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText('Comentario agregado');
  }

  async getLastComment(postLocator) {
    const commentItem = postLocator.locator('.comment-item').last();
    const username = await commentItem.locator('.comment-username').innerText();
    const content = await commentItem.locator('.comment-content').innerText();
    return { username, content };
  }

  async openInsights(postLocator) {
    const insightsLinkBtn = postLocator.locator('.insights-link-btn');
    await insightsLinkBtn.click();
    await expect(this.insightsModal).toBeVisible();
  }

  async closeInsights() {
    await this.insightsCloseBtn.click();
    await expect(this.insightsModal).not.toBeVisible();
  }

  async deletePost(postLocator) {
    const deleteBtn = postLocator.locator('.delete-post-btn');
    await deleteBtn.click();
    
    // Esperar retroalimentación visual de éxito
    await expect(this.successMessage).toContainText('Publicación eliminada');
  }
}
