<template>
    <div class="relative">
        <button type="button"
            class="h-8 w-8 rounded-full inline-flex justify-center items-center bg-gray-100 dark:bg-surface-800 hover:bg-gray-200 dark:hover:bg-surface-700 text-surface-700 hover:text-surface-900 dark:text-surface-500 dark:hover:text-surface-300 transition-colors duration-200"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-palette" />
        </button>
        <div
            class="absolute top-[2.5rem] right-0 hidden w-[12rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top">
            <div class="flex-col justify-start items-start gap-2 inline-flex">
                <span class="text-black dark:text-surface-0 text-sm font-medium">Surface Colors</span>
                <div class="self-stretch justify-start items-start gap-2 inline-flex">
                    <a v-for="surface of surfaces" :key="surface.name" @click="updateColors('surface', surface.palette)"
                        class="w-4 h-4 rounded-full cursor-pointer"
                        :style="{ backgroundColor: `rgb(${surface.palette[6]})` }"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            surfaces: [
                {
                    name: 'gray',
                    palette: ['255 255 255', '249 250 251', '243 244 246', '229 231 235', '209 213 219', '156 163 175', '107 114 128', '75 85 99', '55 65 81', '31 41 55', '17 24 39', '8 8 8']
                },
                {
                    name: 'slate',
                    palette: ['248 250 252', '241 245 249', '226 232 240', '203 213 225', '148 163 184', '100 116 139', '71 85 105', '45 55 72', '30 41 59', '15 23 42', '3 6 23', '2 6 23']
                },
                {
                    name: 'zinc',
                    palette: ['250 250 250', '244 244 245', '228 228 231', '212 212 216', '161 161 170', '113 113 122', '82 82 91', '63 63 70', '39 39 42', '24 24 27', '18 18 19', '9 9 11']
                },
                {
                    name: 'neutral',
                    palette: ['250 250 250', '245 245 245', '229 229 229', '212 212 212', '163 163 163', '115 115 115', '82 82 82', '64 64 64', '38 38 38', '24 24 24', '17 17 17', '10 10 10']
                },
                {
                    name: 'stone',
                    palette: ['250 250 249', '245 245 244', '231 229 228', '214 211 209', '168 162 158', '120 113 108', '87 83 78', '68 64 60', '46 42 41', '36 33 31', '28 25 23', '12 10 9']
                }
            ]
        };
    },
    methods: {
        updateColors(type, colors) {
            if (!document.startViewTransition) {
                applyTheme(type, colors);

                return;
            }

            document.startViewTransition(() => this.applyTheme(type, colors));
        },
        applyTheme(type, colors) {
            let increments = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

            colors.forEach((color, index) => {
                document.documentElement.style.setProperty(`--${type}-${increments[index]}`, color);
            });
        }
    }
};
</script>
