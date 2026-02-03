import type { EventHandlerRequest, H3Event } from "h3";

export const appendPagination = (event: H3Event<EventHandlerRequest>, totalCount: number): void => {
  const { page = 1, perPage = 10 }: { page: number; perPage: number } = getQuery(event);
  appendResponseHeaders(event, {
    "X-Page": page,
    "X-Per-Page": perPage,
    "X-Total-Count": totalCount,
    "X-Total-Pages": totalCount / perPage + 1,
  });
};
