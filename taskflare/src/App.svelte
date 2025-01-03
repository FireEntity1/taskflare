<script>
    let projects = $state(
      [
        {
          "name": "New Project",
          "id": 0,
          "description": "My description",
          "tasks": [
            {
              "name": "New task",
              "description": " ",
              "completed": false,
            }
          ]
        }
      ]
    )

    function newTask(id) {
      projects[id].tasks.push({
        "name": "New task",
        "description": " ",
        "completed": false,
      })
    }
    
    function newProject() {
      projects.push({
        "name": "New Project",
          "id": 0,
          "description": "My description",
          "tasks": [
            {
              "name": "New task",
              "description": " ",
              "completed": false,
            }
          ]
      })
    }
</script>

<main>
  <h1>Taskflare</h1>
  {#each projects as project}
  <hr>
    <input bind:value={project.name} class="title"> <br>
    <textarea bind:value={project.description} class="description"></textarea>

    {#each project.tasks as task} 
      <br><label><input type="checkbox" bind:checked={task.completed}> <input bind:value={task.name} class="taskName"> </label>
    {/each}
    <br> <button onclick={() => newTask(project.id)}>+</button>
  {/each}
  <hr>
  <button onclick={newProject}>+</button>
</main>

<style>
  
</style>
