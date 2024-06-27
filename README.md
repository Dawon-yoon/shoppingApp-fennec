# shopping app

## バック・アクセサリーブランドの fennec のオンラインストア

### stack: react,scss,redux

1. Home 　 Page

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

### mobile 共通

- menu とアイコンは表示しなくなる。hamberger icon のみ表示される。
- hamberger icon=>side bar 表示　：　 menu,search,cart,login(or logout),mypage(login の場合)が表示される＆ページに移動できるリンク
- footer : 画面の大きさに応じで並びが変わる　 4 列 →2 列 →1 列
