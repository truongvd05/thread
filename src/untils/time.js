export function formatPostTime(createdAt) {
  const now = new Date();
  const postTime = new Date(createdAt);
  const diff = Math.floor((now - postTime) / 1000); // giây

  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);

  if (diff < 10) return "vừa xong";
  if (diff < 60) return `${diff} giây trước`;
  if (minutes < 60) return `${minutes} phút trước`;
  if (hours < 24) return `${hours} giờ trước`;
  if (days < 7) return `${days} ngày trước`;

  // format ngày
  const d = postTime.getDate().toString().padStart(2, "0");
  const m = (postTime.getMonth() + 1).toString().padStart(2, "0");
  const y = postTime.getFullYear();

  // nếu cùng năm → không hiển thị năm
  if (y === now.getFullYear()) {
    return `${d}/${m}`;
  }

  return `${d}/${m}/${y}`;
}
