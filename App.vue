<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
      <div class="col-sm-6">
        <h1 class="text-center">{{ message }}</h1>
        <h2 class="text-center">Hello From Component</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'Hello from Webpack',
    };
  }
}
</script>