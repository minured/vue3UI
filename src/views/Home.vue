<template>
<div class="home-page">
    <top-nav />
    <div class="banner">
        <h1>米UI</h1>
        <h2>一个很牛逼UI框架</h2>
        <p class="actions">
            <router-link to="/doc">开始</router-link>
            <a href="https://github.com/minured/vue3UI">Github</a>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
    components: {
        TopNav,
    },
};
</script>

<style lang="scss" scoped>
div.home-page {
    div.banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: lightgreen;

        h1 {}

        h2 {}

        p.actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: #fff;
                display: inline-block;
                $h: 28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
            }
        }
    }
}
</style>
