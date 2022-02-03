// import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import Link from "next/link";
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;

    // <Card sx={{ Width: 350 }} >
    //   <CardContent>
    //     <Typography variant="h5" component="div">
    //       {article.title}
    //     </Typography>
    //     <Typography variant="body2">
    //       {article.excerpt}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" href={`/article/${article.id}`}>Learn More</Button>
    //   </CardActions>
    // </Card>