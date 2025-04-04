# My V0 Project

このプロジェクトはNext.js 15と React 18を使用したモダンなウェブアプリケーションです。

## 技術スタック

- **フレームワーク**: [Next.js 15](https://nextjs.org/)
- **UIライブラリ**: [React 18](https://reactjs.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **UIコンポーネント**: [Radix UI](https://www.radix-ui.com/)
- **フォーム管理**: [React Hook Form](https://react-hook-form.com/)
- **バリデーション**: [Zod](https://zod.dev/)
- **日付処理**: [date-fns](https://date-fns.org/)
- **アイコン**: [Lucide React](https://lucide.dev/)
- **テーマ**: [next-themes](https://github.com/pacocoursey/next-themes)

## 始め方

### 前提条件

- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## スクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用ビルドを作成
- `npm run start` - 本番用サーバーを起動
- `npm run lint` - コードリントを実行

## プロジェクト構造

```
/
├── .next/             # Next.jsビルドの出力
├── node_modules/      # 依存関係
├── public/            # 静的ファイル
├── src/               # ソースコード
│   ├── app/           # アプリケーションルート
│   ├── components/    # UIコンポーネント
│   ├── lib/           # ユーティリティ関数
│   └── styles/        # グローバルスタイル
├── .gitignore         # Gitの除外設定
├── next.config.js     # Next.js設定
├── package.json       # プロジェクト依存関係と設定
├── postcss.config.js  # PostCSS設定
├── README.md          # プロジェクトの説明
├── tailwind.config.js # Tailwind CSS設定
└── tsconfig.json      # TypeScript設定
```

## ライセンス

[MIT](LICENSE)
