import { Pagination } from "@mui/material";

type BlogPaginationProps = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};
const BlogPagination = ({ count, page, onChange }: BlogPaginationProps) => {
  return <Pagination count={count} page={page} onChange={onChange} />;
};

export default BlogPagination;
