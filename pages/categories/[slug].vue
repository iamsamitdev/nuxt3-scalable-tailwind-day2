<script setup lang="ts">

    // รับค่า params จาก url
    const params = useRoute().params

    // call wp api
    const { data: categories } = await useWpApi().getCategory(params.slug as string)
    const category = categories.value?.[0]

    // read post in category
    const { data: posts } = await useWpApi().getPosts(category.id)

    useHead({
        title: `Archive: ${category?.name}`,
        meta: [
            {
                name: "description",
                content: `Category ${params.slug}`,
            },
        ],
    })

</script>

<template>
    <section class="py-10">
        <div class="container mx-auto">
            <div class="grid sm:grid-cols-3 gap-10">
                <BlogGrid
                v-for="post in posts"
                :key="post.id"
                :title="post.title.rendered"
                :image="post._embedded['wp:featuredmedia'][0]?.source_url"
                :excerpt="post.excerpt.rendered"
                :slug="post.slug"
                ></BlogGrid>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>