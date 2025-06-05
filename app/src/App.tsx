import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <p id="title">生成AI活用基盤構築 ~End-To-End Support~</p>
          <h1>生成AIベースの</h1>
          <h1>Azureインフラ構築</h1>
          <button id="inquiry">お問い合わせ</button>
        </div>
        <div className="topImage">
          <img src="https://placehold.jp/585x382.png" alt="ダミー画像"></img>
        </div>
      </div>
      <div className="contents">
        <div className="contentsList">
         <img src="https://placehold.jp/32x32.png" alt="ダミー画像"></img>
          <h3>継続的なイノベーション</h3>
          <p>
            最先端のAI技術を活用して、お客様のビジネスモデルを革新。
            Azureプラットフォーム上で、継続的なイノベーションを実現します。
          </p>
        </div>
        <div className="contentsList">
          <img src="https://placehold.jp/32x32.png" alt="ダミー画像"></img>
          <h3>最適化された顧客体験</h3>
          <p>
            AIによるデータ解析と顧客理解を深めるいことで、各顧客に合わせたパーソナライズされた体験を提供。Azureがもたらす予測分析により顧客満足度を高めます。
          </p>
        </div>
        <div className="contentsList">
          <img src="https://placehold.jp/32x32.png" alt="ダミー画像"></img>
          <h3>運用効率の向上とコスト削減</h3>
          <p>
            AIを駆使した自動化により、運用の効率化を図りつつ、コストを削減。Azureのスケーラブルなインフラがビジネスのスリム化と敏捷性の向上を支援します。
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
