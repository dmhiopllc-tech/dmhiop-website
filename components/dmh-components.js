/**
 * DMH Component Loader System
 * Performance-optimized version
 *
 * Critical above-the-fold components load immediately.
 * Non-critical components load after the initial page render.
 */

(function () {
  'use strict';

  // =====================================================
  // COMPONENT CONFIGURATION
  // Same-origin relative URLs avoid unnecessary absolute URLs
  // =====================================================

  const components = {
    'dmh-viop-promo': '/components/viop-promo-banner.html',
    'dmh-treatment-menu': '/components/v4-treatment-dropdown.html',
    'dmh-header-nav': '/components/v4-header-nav.html',
    'dmh-footer': '/components/v4-footer.html',
    'dmh-seo-virtual-statewide': '/components/seo-virtual-iop-statewide.html',
    'dmh-seo-inperson-metro': '/components/seo-in-person-iop-metro.html'
  };

  // Components needed above the fold.
  const criticalComponents = new Set([
    'dmh-viop-promo',
    'dmh-header-nav'
  ]);

  // =====================================================
  // COMPONENT LOADER
  // =====================================================

  async function loadComponent(placeholder) {
    if (!placeholder || !placeholder.isConnected) {
      return;
    }

    const componentName = placeholder.tagName.toLowerCase();
    const componentUrl = components[componentName];

    if (!componentUrl) {
      console.warn(`Component not found: ${componentName}`);
      return;
    }

    try {
      const response = await fetch(componentUrl, {
        credentials: 'same-origin'
      });

      if (!response.ok) {
        throw new Error(
          `Failed to load ${componentUrl}: ${response.status}`
        );
      }

      const html = await response.text();

      // Parse component in a temporary container.
      const temp = document.createElement('div');
      temp.innerHTML = html;

      // =====================================================
      // EXECUTABLE SCRIPTS
      // Keep JSON-LD and other non-executable scripts in HTML.
      // =====================================================

      const executableScripts = [];

      temp.querySelectorAll('script').forEach(script => {
        const scriptType = script.getAttribute('type');

        if (
          !scriptType ||
          scriptType === 'text/javascript' ||
          scriptType === 'module'
        ) {
          executableScripts.push({
            code: script.textContent,
            type: scriptType
          });

          script.remove();
        }
      });

      // =====================================================
      // COMPONENT STYLES
      // Add each component's CSS to <head> only once.
      // =====================================================

      const styles = temp.querySelectorAll('style');

      if (
        styles.length > 0 &&
        !document.querySelector(
          `style[data-component="${componentName}"]`
        )
      ) {
        const newStyle = document.createElement('style');
        newStyle.setAttribute('data-component', componentName);

        let combinedCSS = '';

        styles.forEach(style => {
          combinedCSS += `${style.textContent}\n`;
        });

        newStyle.textContent = combinedCSS;
        document.head.appendChild(newStyle);
      }

      styles.forEach(style => style.remove());

      // =====================================================
      // INSERT COMPONENT
      // =====================================================

      if (placeholder.isConnected) {
        placeholder.outerHTML = temp.innerHTML;
      }

      // =====================================================
      // EXECUTE COMPONENT JAVASCRIPT
      // =====================================================

      executableScripts.forEach(item => {
        const script = document.createElement('script');

        if (item.type === 'module') {
          script.type = 'module';
        }

        script.textContent = item.code;
        document.body.appendChild(script);
      });

    } catch (error) {
      console.error(
        `Error loading component ${componentName}:`,
        error
      );

      if (placeholder && placeholder.isConnected) {
        placeholder.innerHTML =
          `<!-- Component ${componentName} failed to load -->`;
      }
    }
  }

  // =====================================================
  // FIND COMPONENT PLACEHOLDERS
  // =====================================================

  function getPlaceholders() {
    const placeholders = [];

    Object.keys(components).forEach(name => {
      const elements = document.getElementsByTagName(name);
      placeholders.push(...Array.from(elements));
    });

    return placeholders;
  }

  // =====================================================
  // LOAD CRITICAL COMPONENTS
  // Banner + header load immediately.
  // =====================================================

  function loadCriticalComponents(placeholders) {
    placeholders.forEach(placeholder => {
      const componentName = placeholder.tagName.toLowerCase();

      if (criticalComponents.has(componentName)) {
        loadComponent(placeholder);
      }
    });
  }

  // =====================================================
  // LOAD NON-CRITICAL COMPONENTS
  // Footer and below-the-fold components wait until
  // initial rendering has had a chance to complete.
  // =====================================================

  function loadDeferredComponents(placeholders) {
    const loadDeferred = function () {
      placeholders.forEach(placeholder => {
        if (!placeholder.isConnected) {
          return;
        }

        const componentName = placeholder.tagName.toLowerCase();

        if (!criticalComponents.has(componentName)) {
          loadComponent(placeholder);
        }
      });
    };

    // requestIdleCallback is ideal when available.
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadDeferred, {
        timeout: 1500
      });
    } else {
      // Fallback for browsers without requestIdleCallback.
      window.setTimeout(loadDeferred, 500);
    }
  }

  // =====================================================
  // ACTIVE NAVIGATION
  // =====================================================

  function markActiveNavLinks() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('[data-route]');

    navLinks.forEach(link => {
      const route = link.getAttribute('data-route');

      if (!route) {
        return;
      }

      if (
        currentPath === route ||
        currentPath === route + '.html' ||
        (currentPath === '/' && route === '/') ||
        (route !== '/' && currentPath.includes(route))
      ) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // =====================================================
  // INITIALIZATION
  // =====================================================

  function init() {
    const placeholders = getPlaceholders();

    // Start only above-the-fold components immediately.
    loadCriticalComponents(placeholders);

    // Delay footer and other non-critical components.
    loadDeferredComponents(placeholders);

    // Mark active links after header has had time to load.
    window.setTimeout(markActiveNavLinks, 750);
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      init,
      { once: true }
    );
  } else {
    init();
  }

})();
