// react-bootstrapからコンポーネントをimport
import { Container } from 'react-bootstrap';
// qiitaApiから一覧を取得するgetItemsと詳細を取得するgetItemをimport
import { getItems, getItem } from '../../api/qiitaApi';

// getStaticPropsからitemを受け取る
function Item({ item }) {
  return (
    <Container>
      <h1>{item.title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
      </Container>
  );
}

// ビルド時に実行される関数で、returnした値をコンポーネントに渡すことができる
export async function getStaticProps({ params }) {
  const data = await getItem({ id: params.id });
  // レスポンスから必要な項目だけを抽出
  const item = { id: data.id, title: data.title, body: data.body };
  // 抽出した値をreturn(コンポーネントに引数として渡される)
  return { props: { item } };
}

// ビルド時に実行される関数で、[id].jsのidに具体的にどんな値が入るのかをリストでreturnする
export async function getStaticPaths() {
  const data = await getItems();
  // レスポンスを元に詳細ページのURLのリストを作成
  const paths = data.contents.map(item => `/items/${item.id}`);
  return { paths, fallback: false };
}

export default Item;