import { expect } from '@playwright/test';

export class CreatePostModalPage {
  constructor(page) {
    this.page = page;

    this.modal = page.locator('.create-post-modal');
    this.modalTitle = this.modal.locator('.ant-modal-title');
    this.natureBtn = this.modal.locator('.api-btn', { hasText: '🏔️ Paisaje' });
    this.dogBtn = this.modal.locator('.api-btn', { hasText: '🐶 Perrito' });
    this.catBtn = this.modal.locator('.api-btn', { hasText: '🐱 Gatito' });
    
    this.mediaPreview = this.modal.locator('.preview-media');
    this.captionTextarea = this.modal.locator('textarea[placeholder*="Escribe un pie de foto"]');
    
    // Tipo de crecimiento select
    this.growthSelect = this.modal.locator('.ant-select-selector');
    this.submitBtn = this.modal.locator('button', { hasText: 'Compartir' });
    this.successMessage = page.locator('.ant-message-success');
  }

  async verifyVisible() {
    await expect(this.modalTitle).toBeVisible();
    await expect(this.modalTitle).toContainText('Crear nueva publicación');
  }

  async generateNatureImage() {
    await this.natureBtn.click();
    // Esperar a que la imagen previsualizada esté cargada
    await expect(this.mediaPreview).toBeVisible({ timeout: 15000 });
  }

  async fillCaption(captionText) {
    await this.captionTextarea.fill(captionText);
  }

  async selectGrowthType(type) {
    await this.growthSelect.click();
    // Playwright buscará la opción en la lista emergente de Antd
    const option = this.page.locator(`.ant-select-item-option[value="${type}"]`);
    await option.click();
  }

  async submit() {
    await this.submitBtn.click();
    // Esperar a que aparezca el mensaje de éxito de Ant Design
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText('¡Publicación creada exitosamente!');
  }
}
