import { Avatar, Box, Card, List, ListItem, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          maxWidth: 600,
        }}
      >
        <Avatar src="/thinking.PNG" sx={{ width: 120, height: 120 }} />
        <Typography variant="h5">Yua2</Typography>
      </Box>

      <Card sx={{ padding: 2, maxWidth: 600 }}>
        <List>
          <ListItem>
            <Typography variant="body1">出身地：東京</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              趣味：探し中。現在はブログ作成につながるもの全般。
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              仕事：IT企業にエンジニアとして就職。現在は研究員。
            </Typography>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Profile;
