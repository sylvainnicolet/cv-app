<template>
  <label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
  </label>
</template>

<style lang="scss" scoped>
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    @apply absolute;
    @apply cursor-pointer;
    @apply top-0 left-0 right-0 bottom-0;
    @apply rounded-full;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 2px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(38px);
  }
</style>