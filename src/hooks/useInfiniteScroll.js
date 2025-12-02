import useInfiniteScroll from "react-infinite-scroll-hook";
import useLoadItems from "./useLoadItems";
import Loading from "@/components/Loading";

function WindowScroll() {
  const { items, loading, hasNextPage, error, loadMore } = useLoadItems();
  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: Boolean(error),
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <div>
      <List>
        {items.map((item) => (
          <ListItem key={item.key}>{item.value}</ListItem>
        ))}
      </List>
      {hasNextPage && <Loading ref={infiniteRef} />}
      {error && (
        <div style={{ color: "red" }}>
          {error.message || "Error loading items"}
        </div>
      )}
    </div>
  );
}

export default WindowScroll;
