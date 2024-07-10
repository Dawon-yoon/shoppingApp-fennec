# shopping app
* https://fennec-by-dawon.netlify.app/product/7
* 
## バック・アクセサリーブランドの fennec のオンラインストア
![스크린샷 2024-07-10 17 42 23](https://github.com/Dawon-yoon/shoppingApp-fennec/assets/154343298/82aab722-f89c-4fd5-bac7-000a1803565b)

### stack: react,scss,redux,json-server

## user story

1. Home Page

- ホームから fennec のイメージと広告の映像が見れる
- 上段には Navbar で logo,menu,サーチアイコン、カートアイコン、ユーザアイコン(login or mypage)が見える
- 下段には footer で Company,Contact,Info,Sns 情報とリンクを表示

* モバイル:fennec のイメージのみになる

2. Product Page

- ALL :全ての商品を見せる
- Bag :商品の中でカテゴリが'Bag'の商品のみ表示
- Wallet : 商品の中でカテゴリが'Wallet'の商品のみ表示
- Acc :商品の中でカテゴリが'Acc'の商品のみ表示

3. Product DetailPage

- 商品のカードを押すと → 該当商品のディテールページに移動。
- 商品のイメージ、価額、オプション、数量を選べる、価額を表示、カートに入れるボタン、決済ボタン

4. Login
   -login 後 Cart ページに移動可能
   -sign up リンクから会員登録フォームに移動可能
   ー user server はないため、state でログイン状態を管理

5. Cart
   ー detail ページから数量を選択しカートへ入れるボタンから Cart ページへ商品を追加できる
   ー session storage を利用しサーバーの代わりに my cart データをセーブ

6. Order
   -cart ページもしくは detail ページから注文金額をもらって移動
   ー配送先、クレジットカード入力フォームのフロントのみ開発、実際の決済機能はない

7. Search -キーワードから商品全体のページで一致するキーワードの商品を検索

### mobile 共通

- 全てのページは responsive
- menu とアイコンは表示しなくなる。hamberger icon のみ表示される。
- hamberger icon=>side bar 表示　：　 menu,search,cart,login(or logout),mypage(login の場合)が表示される＆ページに移動できるリンク
- footer : 画面の大きさに応じで並びが変わる　 4 列 →2 列 →1 列
