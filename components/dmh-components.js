/**
 * DMH Component Loader System
 * 
 * This script loads reusable components into your pages.
 * Update components once, all pages update automatically!
 * 
 * Usage: Add this script at the end of your <body> tag:
 * <script src="/components/dmh-components.js"></script>
 */

(function() {
  'use strict';

  // Component configuration - using full absolute URLs
  const SITE_URL = 'https://dmhiop.com';
  const components = {
    'dmh-viop-promo': `${SITE_URL}/components/viop-promo-banner.html`,
    'dmh-treatment-menu': `${SITE_URL}/components/v4-treatment-dropdown.html`,
    'dmh-header-nav': `${SITE_URL}/components/v4-header-nav.html`,
    'dmh-footer': `${SITE_URL}/components/v4-footer.html`,
    'dmh-seo-virtual-statewide': `${SITE_URL}/components/seo-virtual-iop-statewide.html`,
    'dmh-seo-inperson-metro': `${SITE_URL}/components/seo-in-person-iop-metro.html`
  };

  /**
   * Load a component from a URL and insert it into a placeholder
   */
  async function loadComponent(placeholder) {
    const componentName = placeholder.tagName.toLowerCase();
    const componentUrl = components[componentName];

    if (!componentUrl) {
      console.warn(`Component not found: ${componentName}`);
      return;
    }

    try {
      const response = await fetch(componentUrl);
      if (!response.ok) {
        throw new Error(`Failed to load ${componentUrl}: ${response.status}`);
      }

      const html = await response.text();
      
      // Create a temporary container
      const temp = document.createElement('div');
      temp.innerHTML = html;

      // Extract scripts to execute them
      const scripts = temp.querySelectorAll('script');
      const scriptCode = Array.from(scripts).map(s => s.textContent).join('\n');

      // Extract styles
      const styles = temp.querySelectorAll('style');
      styles.forEach(style => {
        if (!document.querySelector(`style[data-component="${componentName}"]`)) {
          const newStyle = document.createElement('style');
          newStyle.setAttribute('data-component', componentName);
          newStyle.textContent = style.textContent;
          document.head.appendChild(newStyle);
        }
      });

      // Remove script and style tags from HTML
      scripts.forEach(s => s.remove());
      styles.forEach(s => s.remove());

      // Replace placeholder with component content
      placeholder.outerHTML = temp.innerHTML;

      // Execute scripts
      if (scriptCode) {
        const script = document.createElement('script');
        script.textContent = scriptCode;
        document.body.appendChild(script);
      }

    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
      placeholder.innerHTML = `<!-- Component ${componentName} failed to load: ${error.message} -->`;
    }
  }

  /**
   * Initialize component system when DOM is ready
   */
  function init() {
    // Find all component placeholders by tag name
    const componentNames = Object.keys(components);
    const placeholders = [];
    
    componentNames.forEach(name => {
      const elements = document.getElementsByTagName(name);
      placeholders.push(...Array.from(elements));
    });
    
    // Load each component
    placeholders.forEach(placeholder => {
      loadComponent(placeholder);
    });

    // Mark active navigation links based on current page
    setTimeout(() => {
      markActiveNavLinks();
    }, 500);
  }

  /**
   * Mark the current page's navigation link as active
   */
  function markActiveNavLinks() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('[data-route]');
    
    navLinks.forEach(link => {
      const route = link.getAttribute('data-route');
      if (currentPath === route || currentPath === route + '.html' || 
          (currentPath === '/' && route === '/') ||
          (currentPath.includes(route) && route !== '/')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
