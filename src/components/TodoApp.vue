<template>
  <div>
    <ul class="task-list">
      <li class="task-list-item">
        <label class="task-list-item-label">
          <input type="checkbox" />
          <span>Task</span>
        </label>
        <span class="delete-btn" title="Delete Task"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
};
</script>
