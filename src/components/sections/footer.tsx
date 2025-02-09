const Footer = () => {
  return (
    <footer className="container mx-auto space-y-8 px-4 py-12 lg:p-24">
      <h4 className="text-2xl font-medium">業務実績のある国・地域</h4>
      <div className="md:grid-col-2 grid gap-y-12 sm:gap-4 lg:grid-cols-5">
        <div className="">
          <h5 className="text-lg font-semibold">東南アジア</h5>
          <ul className="mt-2 list-disc *:ml-5">
            <li>ベトナム（全域）</li>
            <li>フィリピン（マニラ、セブ）</li>
            <li>マレーシア（KL、ペナン）</li>
            <li>インドネシア（ジャカルタ、バリ）</li>
            <li>カンボジア（プノンペン）</li>
            <li>シンガポール、タイ</li>
          </ul>
        </div>
        <div className="">
          <h5 className="text-lg font-semibold">東アジア・西アジア</h5>
          <ul className="mt-2 list-disc *:ml-5">
            <li>中国（北京、上海）</li>
            <li>香港</li>
            <li>韓国</li>
            <li>インド（ムンバイ）</li>
          </ul>
        </div>
        <div className="">
          <h5 className="text-lg font-semibold">ヨーロッパ</h5>
          <ul className="mt-2 list-disc *:ml-5">
            <li>フランス</li>
            <li>イギリス</li>
            <li>ドイツ（ベルリン、デュッセルドルフ）</li>
            <li>ベルギー</li>
            <li>スペイン</li>
            <li>イタリア（ミラノ、リミニ）</li>
            <li>スイス</li>
          </ul>
        </div>
        <div className="space-y-8">
          <div className="">
            <h5 className="text-lg font-semibold">アメリカ</h5>
            <ul className="mt-2 list-disc *:ml-5">
              <li>アメリカ（ＮＹ、LA）</li>
            </ul>
          </div>
          <div className="">
            <h5 className="text-lg font-semibold">オセアニア</h5>
            <ul className="mt-2 list-disc *:ml-5">
              <li>オーストラリア（パース）</li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="">
            <h5 className="text-lg font-semibold">中東</h5>
            <ul className="mt-2 list-disc *:ml-5">
              <li>ドバイ</li>
            </ul>
          </div>
          <div className="">
            <h5 className="text-lg font-semibold">その他</h5>
            <ul className="mt-2 list-disc *:ml-5">
              <li>ロシア</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
