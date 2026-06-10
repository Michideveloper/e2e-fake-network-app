export class NavigationPage {
  constructor(page) {
    this.page = page;
    
    // Selectores del Sidebar de Escritorio
    this.inicioLink = page.locator('.sidebar-menu-item', { hasText: 'Inicio' });
    this.buscarLink = page.locator('.sidebar-menu-item', { hasText: 'Buscar' });
    this.crearLink = page.locator('.sidebar-menu-item', { hasText: 'Crear' });
    this.notificacionesLink = page.locator('.sidebar-menu-item', { hasText: 'Notificaciones' });
    this.perfilLink = page.locator('.sidebar-menu-item', { hasText: 'Perfil' });
    this.sidebarLogo = page.locator('.sidebar-logo').first();
    this.headerLogo = page.locator('.header-logo').first();

    // Badge de notificaciones
    this.notificationsBadge = page.locator('.sidebar-badge-wrapper .ant-scroll-number');
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateToInicio() {
    await this.inicioLink.click();
  }

  async navigateToBuscar() {
    await this.buscarLink.click();
  }

  async navigateToCrear() {
    await this.crearLink.click();
  }

  async navigateToNotificaciones() {
    await this.notificacionesLink.click();
  }

  async navigateToPerfil() {
    await this.perfilLink.click();
  }

  async getUnreadNotificationsCount() {
    const isPresent = await this.notificationsBadge.isVisible();
    if (!isPresent) return 0;
    const text = await this.notificationsBadge.innerText();
    return parseInt(text, 10) || 0;
  }
}
