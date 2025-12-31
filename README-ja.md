[正體中文](README.md) | [日本語](README-ja.md)

## Nuxt 電子商取引サイト（ECサイト）

本プロジェクトは **Nuxt 3** と **Tailwind CSS** を用いて開発した  
モダンな EC サイトの **SPA（Single Page Application）構成の模擬アプリケーション**です。

商品一覧、カート機能、ログイン（疑似）および  
**トークンベースの認証管理**など、実際の商用アプリケーションを想定した  
基本機能を実装しています。

また、**Nuxt Composable を活用した状態管理・ロジックの共通化**を行い、  
**Vercel** による自動デプロイ環境を構築しています。

---

## 機能概要

- **商品一覧表示**  
  Fake Store API から商品データを取得し表示

- **カート機能**  
  商品の追加・削除・数量変更（1〜10）

- **操作フィードバック表示（Lightbox）**  
  商品追加成功、数量上限超過などの通知表示

- **ログイン / 登録（疑似実装）**  
  - メールアドレス・パスワード形式のバリデーション  
  - `useCookie` を利用したトークン保存（SSR 環境でも状態取得可能）  
  - Nuxt Middleware によるルートガードの実装  

- **エラーハンドリング**  
  Composable を用いて API 呼び出し時のエラーや通信失敗を共通処理

---

## 使用技術

- **Nuxt 3**
- **Tailwind CSS**
- **Fake Store API**
- **Nuxt Composables**
- **Vercel**

---

## 技術的な工夫・課題

カート機能の実装において、  
Vue Composable を利用してカートデータおよび操作ロジック  
（商品追加・削除・数量変更）を共通化しました。

これにより、  
複数コンポーネント間での状態共有やロジックの重複を防ぎ、  
保守性と可読性の高い構成を実現しています。

---

## デモ

🔗 [デモサイトはこちら](https://nuxt-e-commerce-eta.vercel.app)

---

## ローカル環境での起動方法（Get Started）

本プロジェクトをローカル環境で動作させる場合は、  
以下の手順に従ってください。

1.  **リポジトリをクローン：**
    ```bash
    git clone [https://github.com/JAI-KAI/Nuxt-E-commerce.git]
    cd Nuxt-E-commerce
    ```

2.  **依存関係のインストール：**
    ```bash
    npm install
    ```

3.  **開発サーバーを起動：**
    ```bash
    npm run dev
    ```