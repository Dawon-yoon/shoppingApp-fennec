# shopping app

## バック・アクセサリーブランドの fennec のオンラインストア

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

### mobile 共通

- 全てのページは responsive
- menu とアイコンは表示しなくなる。hamberger icon のみ表示される。
- hamberger icon=>side bar 表示　：　 menu,search,cart,login(or logout),mypage(login の場合)が表示される＆ページに移動できるリンク
- footer : 画面の大きさに応じで並びが変わる　 4 列 →2 列 →1 列

//진행상황 todo

1. 디테일 페이지 scss&하드코딩 ✅
2. 디테일 페이지 state와 연결✅
3. cart페이지에 이동하면 cart슬라이스에 카트리스트 배열안에 객체로 정보를 저장하도록 dispatch✅
4. 카트리스트 배열을 렌더하도록 dispatch✅
5. 카트리스트는 세션스토리지에 저장 ✅
   5-1. checkbox 체크 상태 상태 추가(useState)✅
   5-2. checkbox 이벤트 처리 => 선택유무, 상품 인덱스 스테이트에 저장✅
   5-3. checkbox 상태를 부모 컴포넌트에 전달 -> Cart.js에서 카트 리스트에서 선택 상품 추출=> 가격\* 오더갯수 총합 보여주기✅
   5-5. 결제 페이지 이동 버튼클릭시 결제페이지에 이동(가격을 가지고) ✅
6. 카트리스트 = 0 일때 "카트가 비었습니다. " 문구만 보여주기 ✅
7. 결제 페이지 프론트만 ✅
   //로그인 인증 관련
8. 로그인페이지에서 로그인시 유저 스테이트 = true ✅
9. 유저 트루 => 로그인 페이지 접근 불가 ✅
10. 유저 false => cart 페이지 접근 불가 ✅
11. 유저 true => 유저 아이콘은 로그아웃 아이콘으로 변경, 사이드바 로그인->로그아웃으로 변경 ✅
12. 로그아웃 아이콘/ 로그아웃 클릭시 유저 스테이트 = false ✅
13. search sidebar 생성
14. 서치 onSubmit => 서치 페이지로 이동
15. 검색결과 없을 시 문구만들기
16. 페이지네이션?
