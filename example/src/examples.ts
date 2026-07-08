export type ExampleItem = {
  id: string;
  title: string;
  description: string;
};

export const examples: ExampleItem[] = [
  {
    id: 'overview',
    title: 'Overview do microapp2-rn',
    description:
      'microapp2-rn é uma lib react-native-builder-bob consumida pelo main app e, aqui, por este example standalone.',
  },
  {
    id: 'microfronts',
    title: 'Microfronts inclusos',
    description: 'Este microapp renderiza microfront1-rn, publicado em seu próprio repositório.',
  },
  {
    id: 'shared',
    title: 'Componentes compartilhados',
    description:
      'Card, PrimaryButton, AppBar e LoadingScreen vêm de shared-rn — o mesmo pacote usado por microapp1-rn e microapp3-rn.',
  },
  {
    id: 'feature',
    title: 'Tabela',
    description:
      'microapp2-rn implementa uma tabela de métricas. Abra o microapp para ver o componente real renderizado.',
  },
];
