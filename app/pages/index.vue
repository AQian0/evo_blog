<template>
  <div class="flex flex-col h-full items-center p-2">
    <BaseSearch />
    <div class="flex flex-col flex-1 relative items-center justify-around gap-4">
      <OverlayScrollbarsComponent defer class="h-[448px]">
        <BlogList>
          <BlogListItem v-for="blog in blogs" :blog />
        </BlogList>
      </OverlayScrollbarsComponent>
      <base-pagination
        :total="totalCount"
        :page-size="query?.perPage"
        :current-page="query?.page"
        @change="changePage"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const totalCount = ref(0);
const changePage = async (index: number) => {
  await navigateTo({
    path: "/",
    query: {
      ...query.value,
      page: index,
    },
  });
};
const query = computed<{
  perPage?: number;
  page?: number;
  search?: string;
}>(() => route.query);
const { data: blogs } = await useFetch("/api/blogs", {
  query,
  default: () => [],
  onResponse: ({ response }) => {
    totalCount.value = Number(response.headers.get("X-Total-Count")!);
  },
});
</script>
<style scoped></style>
