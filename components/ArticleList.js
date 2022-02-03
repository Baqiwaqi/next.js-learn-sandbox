import { Grid, Item } from '@material-ui/core';
import { padding } from '@mui/system';
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
    {articles.map((article) => (
      <ArticleItem key={article.id} article={article} />
    ))}
    </div>
  );
};

{/* <div className={articleStyles.grid}>
{articles.map((article) => (
  <ArticleItem key={article.id} article={article} />
))}
</div> */}

export default ArticleList;