import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="firstView">
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
      <div className="secondView">

        <div className="secondViewTop">
          <button id="unlockButton">
            Unlock Full Business Potential with Azure Support
          </button>
          <h1>
            Azure全方位サポート-ビジネスの可能性を最大化
          </h1>
          <p>
            Azureの力を最大限に活かし、企画検討から導入、運用にいたるまでの一気通貫サポートで、ビジネス成長を加速します。AI総研のEnd-To-Endのアプローチで、あなたのクラウド/生成AI戦略を成功に導きます。
          </p>
        </div>

        <div className="secondViewMain">
          <div className="secondViewImage">
            <img src="https://placehold.jp/532x516.png"></img>
          </div>

          <div className="secondViewContents">
            <div className="secondViewContentList">

              <div className="secondViewContentsText">
                <h2>検討</h2>
                <p>
                  貴社の既存環境、ビジョンを現実に変えるための戦略検討。Azureの全機能を活用して貴社の目標達成を全力でサポートします。
                </p>
              </div>
              
            </div>

            <div className="secondViewContentList">
              <div className="secondViewContentsText">
                <h2>設計</h2>
                <p>
                  精密な設計で、Azureのクラウドを最大限に活かすソリューションを構築。ビジネス要件に合わせたカスタマイズを実現します。
                </p>
              </div>
              
            </div>

            <div className="secondViewContentList">

              <div className="secondViewContentsText">
                <h2>導入</h2>
                <p>
                  Azure導入による変革。新しいテクノロジーを組織に統合し、ビジネスプロセスを再定義します。
                </p>
              </div>
              
            </div>

            <div className="secondViewContentList">
              <div className="secondViewContentsText">
                <h2>運用</h2>
                <p>
                  24時間365日の確実な運用で、Azureの継続的な価値を実現、日々の管理と最適化で、業務効率と成果を最大化します。
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
