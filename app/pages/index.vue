<template>
  <div class="flex h-full flex-col items-center p-2">
    <BaseSearch />
    <div class="relative flex flex-1 flex-col items-center justify-around gap-4">
      <OverlayScrollbarsComponent defer class="h-[448px]">
        <BlogList>
          <BlogListItem v-for="blog in blogs" :blog />
        </BlogList>
      </OverlayScrollbarsComponent>
      <base-pagination
        :total="totalCount"
        :perPage="query?.perPage"
        :current-page="query?.page"
        @change="changePage"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const totalCount = ref(0);
const changePage = async (index: number): Promise<void> => {
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
    totalCount.value = Number(response.headers.get("X-Total-Count") ?? 0);
  },
});
</script>
<style scoped></style>
