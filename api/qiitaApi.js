import fetch from 'node-fetch';

// microCMSで作成した自身のAPIのURLに変更
const baseUrl = 'https://jamstack-sample-ya.microcms.io/api/v1';

const headers = {
  // APIキーを設定
  'X-API-KEY': '10815389-8719-47d7-94f5-12199b4a9c97',
};

// 記事一覧を取得する関数
export async function getItems() {
  const res = await fetch(`${baseUrl}/items`, { headers });
  return res.json();
}

// 記事詳細を取得する関数
export async function getItem({ id }) {
  const res = await fetch(`${baseUrl}/items/${id}`, { headers });
  return res.json();
}