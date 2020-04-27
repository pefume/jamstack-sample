// ページ遷移をするためのLinkコンポーネントをimport
import Link from 'next/link';
// react-bootstrapからコンポーネントをimport
import { Container, ListGroup } from 'react-bootstrap';
import { gatItems, getItem, getItems } from '../../api/qiitaApi';

// getStaticPropsから渡されるitemsという変数を受け取る
function Items({ items }) {
  return (
    <Container>
      <h1>Hello</h1>
      <ListGroup>
        {items.map(item => (
          <Link key={item.id} href="/items/[id]" as={`/items/${item.id}`}>
            <ListGroup.Item action>{item.title}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  );
}

// getStaticPropsという名前の関数はビルド時にフレームワークが実行してくれる
export async function getStaticProps() {
  const data = await getItems();
  // APIから取得したデータを必要な項目(idとtitle)だけに絞り込む
  const items = data.contents.map(item => ({ id: item.id, title: item.title }));
  // 取得したデータをpropsとしてreturnするとItems関数の引数に渡すことができる
  return { props: { items } };
}

export default Items;