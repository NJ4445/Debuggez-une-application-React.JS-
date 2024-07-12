import { render } from '@testing-library/react';
import Logo from './index';

// Début de la suite de tests pour le composant Logo
describe('Logo Component', () => {
  // Test pour vérifier le rendu par défaut du composant Logo
  test('renders with default size', () => {
    // Rend le composant Logo sans passer de prop de taille
    const { container } = render(<Logo />);
    // Sélectionne l'élément svg dans le rendu
    const svgElement = container.querySelector('svg');
    // Vérifie que l'attribut width du svg est "101" (taille par défaut)
    expect(svgElement).toHaveAttribute('width', '101');
    // Vérifie que l'attribut height du svg est "35" (taille par défaut)
    expect(svgElement).toHaveAttribute('height', '35');
  });

  // Test pour vérifier le rendu du composant Logo avec la taille large
  test('renders with large size', () => {
    // Rend le composant Logo avec la prop de taille "large"
    const { container } = render(<Logo size="large" />);
    // Sélectionne l'élément svg dans le rendu
    const svgElement = container.querySelector('svg');
    // Vérifie que l'attribut width du svg est "196" (taille large)
    expect(svgElement).toHaveAttribute('width', '196');
    // Vérifie que l'attribut height du svg est "67" (taille large)
    expect(svgElement).toHaveAttribute('height', '67');
  });

  // Test pour vérifier le rendu du composant Logo avec la taille small
  test('renders with small size', () => {
    // Rend le composant Logo avec la prop de taille "small"
    const { container } = render(<Logo size="small" />);
    // Sélectionne l'élément svg dans le rendu
    const svgElement = container.querySelector('svg');
    // Vérifie que l'attribut width du svg est "101" (taille small)
    expect(svgElement).toHaveAttribute('width', '101');
    // Vérifie que l'attribut height du svg est "35" (taille small)
    expect(svgElement).toHaveAttribute('height', '35');
  });
});
