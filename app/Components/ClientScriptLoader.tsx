import { useEffect } from 'react';

const ClientScriptLoader: React.FC = () => {
  useEffect(() => {
    const handleClientScript = () => {
      const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector<HTMLDivElement>('#mainNav');
        if (!navbarCollapsible) return;

        if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink');
        } else {
          navbarCollapsible.classList.add('navbar-shrink');
        }
      };

      navbarShrink(); // Shrink the navbar immediately if needed
      document.addEventListener('scroll', navbarShrink);

      const mainNav = document.body.querySelector<HTMLElement>('#mainNav');
      if (mainNav) {
        // Assuming Bootstrap and ScrollSpy are globally available
        new (window as any).bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
        });
      }

      // Log the state of the DOM after setting up scripts
      console.log("Client-side DOM after scripts:", document.documentElement.outerHTML);

      const navbarToggler = document.body.querySelector<HTMLButtonElement>('.navbar-toggler');
      const responsiveNavItems = Array.from(document.querySelectorAll<HTMLAnchorElement>('#navbarResponsive .nav-link'));
      responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler!).display !== 'none') {
            navbarToggler!.click();
          }
        });
      });
    };

    handleClientScript();

    return () => {
      // Cleanup if necessary
      document.removeEventListener('scroll', navbarShrink);
    };
  }, []);

  return null; // This component does not render anything visible
};

export default ClientScriptLoader;

function navbarShrink(this: Document, ev: Event) {
  throw new Error('Function not implemented.');
}
