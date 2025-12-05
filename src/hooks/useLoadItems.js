import { fetchFeed } from "@/feartures/feed/feedActions";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useLoadItems() {
  const dispatch = useDispatch();

  const { data, feedLoading, pagination, error } = useSelector(
    (state) => state.feed,
  );

  const [limit, setLimit] = useState(5);

  const loadMore = useCallback(async () => {
    const newLimit = limit + 5; // tăng per_page lên
    setLimit(newLimit);
    try {
      dispatch(
        fetchFeed({
          type: "for_you",
          page: pagination.current_page,
          per_page: newLimit,
        }),
      );
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, pagination.current_page, limit]);
  return {
    items: data,
    feedLoading,
    error,
    pagination,
    hasNextPage: limit < pagination.total,
    loadMore,
  };
}
