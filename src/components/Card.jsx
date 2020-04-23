import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function SimpleCard(props) {
  const { title, subTitle, description, imgSrc } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar></Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia style={{ height: "150px" }} image={imgSrc} title={title} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description.length < 70
            ? description
            : description.substring(0, 70) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Learn More
        </Button>
        <Button size="small" variant="contained" color="secondary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
