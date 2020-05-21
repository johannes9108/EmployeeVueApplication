<template>
  <div class="detailsContainer">
    <div v-if="!editMode" class="details">
      <img src="../assets/placeholderPerson.png" class="thumbnail" />
      <h2>{{data.name}}</h2>
      <router-link :to="{name: 'Edit'}">
        <button>Edit me</button>
      </router-link>
      <h3>{{data.title}}</h3>

      <ul>
        <li>
          <label>Mobile</label>
          {{data.mobile}}
        </li>
        <li>
          <label>Email</label>
          {{data.email}}
        </li>
      </ul>
    </div>

    <div v-if="editMode" class="detailsEdit">
      <img src="../assets/placeholderPerson.png" class="thumbnail" />
      <h2>
        <input type="text" v-model="data.name" />
      </h2>
      <router-link :to="{name: 'Details', params:{id: data.id}}" @click="updateData(data.id)">
        <button>Save</button>
      </router-link>
      <h3>
        <input type="text" v-model="data.title" />
      </h3>

      <ul>
        <li>
          <label>Mobile</label>
          <input type="text" v-model="data.mobile" />
        </li>
        <li>
          <label>Email</label>
          <input type="text" v-model="data.email" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: Object,
    editMode: Boolean,
    isVisible: Boolean
  }
};
</script>

<style lang="scss" scoped>
.detailsContainer {
  text-align: center;

  ul {
    list-style-type: none;
  }
}
.thumbnail {
  max-width: 200px;
}
.details {
  height: 100%;
}
.detailsEdit {
}
</style>