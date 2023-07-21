<template>
  <button @click="$emit('button_clicked')">{{text}}</button>
</template>
<script>
export default{
  props: ['text'],
  emits: ["button_clicked"],
}
</script>

<style>
button {
    background-color: var(--button-color);
    color: var(--button-text-color);
    border-radius: 12px;
    border-width: 0;
    cursor: pointer;
    font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding: 6px 12px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;

    -webkit-font-smoothing: antialiased;
}
</style>
