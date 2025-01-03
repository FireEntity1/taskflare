<script>
    let projects = $state(
      [
        {
          "name": " ",
          "description": " ",
          "tasks": [
            {
              "name": " ",
              "description": " ",
              "completed": false,
            }
          ]
        }
      ]
    )
    function logData() {
      console.log(projects);
    }

    function newTask() {
      null;
    }
</script>

<main>
  <h1>Taskflare</h1>
  <button onclick={logData}>Print Data</button>
</main>

<style>
  
</style>
