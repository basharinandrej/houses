<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Новая задача</label>
      <input type="text"
             class="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             placeholder="Добавить квартиру"
      >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<style scoped>
.form-label {
  text-align: left;
  display: block;
}
.btn {
  width: 100%;
}
</style>