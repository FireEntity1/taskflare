<script>
import "../src/app.css";
const defaultTask = {
  name: "New task",
  description: " ",
  completed: false,
}

let data = $state({
  projects: [
    {
      name: "New Project",
      id: 0,
      description: "My description",
      tasks: [
        {
          name: "New task",
          description: " ",
          completed: false,
        }
      ]
    }
  ],
  highestID: 0
})

function newTask(id) {
  data.projects[id].tasks.push({...defaultTask});
}

function newProject() {
  data.highestID += 1;
  data.projects.push({
    name: "New Project",
    id: data.highestID,
    description: "My description",
    tasks: [
      {...defaultTask}
    ]
  });
}
</script>

<main>
  <h1>Taskflare</h1>
  {#each data.projects as project}
    <hr>
    <input bind:value={project.name} class="title"> <br>
    <textarea bind:value={project.description} class="description"></textarea>
    {#each project.tasks as task}
      <br>
      <label>
        <input type="checkbox" bind:checked={task.completed}>
        <input bind:value={task.name} class="taskName">
      </label>
    {/each}
    <br>
    <button onclick={() => newTask(project.id)}> + </button>
  {/each}
  <hr>
  <button onclick={newProject}>+</button>
</main>

<style>
</style>