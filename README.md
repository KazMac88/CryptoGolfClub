# CryptoGolfClub（クリプトゴルフクラブ）

日本の仮想通貨・ゴルフ愛好家向けコミュニティ公式サイト

---

## このプロジェクトについて
CryptoGolfClubは、仮想通貨とゴルフが好きな人のための日本発コミュニティです。

- ブロックチェーン×ゴルフの最新情報
- 限定イベントや大会の案内
- コミュニティ参加（Discord/Telegram）
- 会員特典・NFT・CGCトークンなど

## 開発環境
- React（Create React App）
- MUI（Material-UI）
- 日本語対応・モバイル最適化

## Github連携デプロイ手順（Netlify推奨）

### 1. Githubリポジトリにpush

```
git init
git add .
git commit -m "初回コミット"
git branch -M main
git remote add origin https://github.com/KazMac88/CryptoGolfClub.git
git push -u origin main
```

### 2. Netlifyでデプロイ
1. [Netlify](https://app.netlify.com/)にログイン
2. 「Add new site」→「Import an existing project」→「GitHub」
3. リポジトリを選択
4. ビルドコマンド：`npm run build`、公開ディレクトリ：`build`
5. 「Deploy site」で公開！

### 3. デプロイ後
- サイトURLが発行されます
- 独自ドメイン設定や環境変数もNetlify管理画面から可能

---

## コミュニティ参加
- [Discord](https://discord.gg/cryptogolfclub)
- [Telegram](https://t.me/cryptogolfclub)

## お問い合わせ
contact@cryptogolfclub.com

---

## ライセンス
MIT
