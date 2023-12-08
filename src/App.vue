<template>
  <div
    class="min-h-screen bg-white dark:bg-surface-900 px-8 pb-8 pt-20 justify-center flex transition-colors duration-200">
    <div class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8">
      <DarkToggle />
      <ColorPalette />
    </div>

    <div class="w-full sm:w-[40rem]">
      <Accordion multiple expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
        <AccordionTab header="Header I">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab header="Header II">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
            sed quia non numquam eius modi.
          </p>
        </AccordionTab>
        <AccordionTab header="Header III">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import DarkToggle from './components/DarkToggle.vue';
import ColorPalette from './components/ColorPalette.vue';
</script>