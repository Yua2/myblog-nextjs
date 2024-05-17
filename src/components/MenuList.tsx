import { List, ListItem, ListItemText } from "@mui/material";

type MenuListProps = {
  items: string[];
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
};
const MenuList = ({ items, onClick }: MenuListProps) => {
  return (
    <div role="presentation" onClick={onClick} onKeyDown={onClick}>
      <List>
        {items &&
          items.map((text, index) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};
export { MenuList };
