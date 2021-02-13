<template>
  <li class="list-group-item" :class="{done: completed}">
    <input
        type="checkbox"
        :checked="completed"
        @change="$emit('changeCheckHandler', id)"
        :id="id"
    >
    {{ title }}
  </li>
</template>

<script>
export default {
  props: ['title', 'checked', 'id', 'completed'],
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>