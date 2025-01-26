interface Post {
  id: string;
  title: string;
  body: string;
}

export const normalizeData = (data: Post[], key: keyof Post) => {
  return {
    byId: data.reduce((acc, item) => {
      const keyValue = item[key];
      if (typeof keyValue === "string" || typeof keyValue === "number") {
        acc[keyValue] = item;
      }
      return acc;
    }, {} as Record<string | number, Post>),
  };
};
