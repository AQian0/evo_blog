// 不知为何，useDatejs()无法提供正常的TypeScript类型提示
export const useDateText = (
  //  dayjs实际上并不支持传入null，此处仅是为了避免TypeScript报错
  // 因为supabase返回的数据中，有些字段可能为null
  time: string | undefined | null = undefined,
): string => {
  return useDayjs()(time).format('YYYY-MM-DD');
};
