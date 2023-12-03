export default {
  accordion: {
    root: 'mb-1',
    accordiontab: {
      headerAction: ({ context }) => ({
        class: [
          'flex flex-row-reverse justify-between items-center cursor-pointer relative no-underline select-none', // Alignments
          'p-5 transition duration-200 ease-in-out font-bold transition-background-color duration-200', // Padding and transition
          'border-b border-gray-300 bg-white text-gray-600', // Borders and colors
          'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800', // Hover
          'focus:outline-none focus:outline-offset-0 focus-visible:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
          {
            'text-gray-800': context.active,
          },
        ],
      }),
      headerTitle: 'leading-none',
      content: {
        class: ['p-5 bg-white text-gray-700 border-t-0'],
      },
    },
  },
};
