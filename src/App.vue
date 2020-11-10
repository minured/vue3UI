<template>
<div>
    导航栏 | <router-link to="/hello">1</router-link> |
    <router-link to="/hello2">2</router-link>
</div>
<router-view />
</template>

<script>
export default {
    name: "App",
};
</script>
