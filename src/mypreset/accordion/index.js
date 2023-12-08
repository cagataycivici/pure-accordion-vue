export default {
    root: "mb-1",
    accordiontab: {
        headerAction: ({ context }) => ({
            class: [
                "flex flex-row-reverse justify-between items-center cursor-pointer relative no-underline select-none", // Alignments
                "p-5 transition-color duration-300 ease-in-out font-bold", // Padding and transition
                "border-b border-surface-200 bg-white text-surface-700 dark:border-surface-700 dark:bg-transparent dark:text-surface-400", // Borders and colors
                "hover:bg-surface-50 hover:text-surface-800 dark:hover:bg-surface-800 dark:hover:text-surface-300", // Hover
                "focus:outline-none focus:outline-offset-0 focus-visible:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]", // Focus
            ],
        }),
        headerTitle: "leading-none",
        content: {
            class: ["p-5 text-surface-700 dark:text-surface-400"],
        },
    },
};
