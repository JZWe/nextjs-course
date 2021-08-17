# nextjs-course

Vercel 連結：https://nextjs-course-beta.vercel.app/

跟隨著 Udemy 上的課程 Next.js & React - The Complete Guide (incl. Two Paths!) - 的 blog project 實作出來的網頁
沒有其他客製化功能，只有稍微改了一點程式碼的架構

# 從這個 project 上學到了什麼、程式碼架構改了什麼？

1) 大略知道什麼時機適合用 Static Site Generation (SSG) 、 Server Side Rendering (SSR)
   因為這個部落格主要會是由實作 project 的人自行撰寫文章的，文章的增減速度也不會到特別快
   所以比較適合用 SSG，在跑 build 的時候就會提前為對應的 URL 建立網頁頁面。
   反之如果用 SSR 的話就比較不適合了，因為不會有特別多的使用者發出用戶去操作這個網頁
   使用者最多就可能會在 /contact 頁面傳遞資訊給部落客，但那些資訊並不會被渲染到網頁上
   所以用 SSR 會變成 overkill
   
2) Next.js 是基於 React 上構建的 framework，可以透過 Next.js 撰寫 server-side (Node.js 環境) 邏輯
   而在寫 component 的時候，都是經由 React.js 撰寫 client-side (瀏覽器環境) 的邏輯。
   client-side 的邏輯並不利於 SEO，打開瀏覽器檢查網頁原始碼跟檢查的時候會發現檢查內的資訊跟原始碼內的 <div id='root'></div> 相差很多，
   而 Google 在分析網頁資訊 SEO 的時候，往往都是在分析網頁原始碼，這就是為什麼會需要用 Next.js 來做 SEO。

3) 學到了怎麼使用 Next.js 裡的 Image, Link, Head, Document
   透過 Image 可以輕鬆完成 lazy-loading, 降低瀏覽器下載圖片的大小
   透過 Link 可以完成類似於 react-router/link 的效果，能切換路由之餘，也可以設定使用者在 hover 到 Link 上時就預先讀取該頁面的資訊，相當的方便。
   
3) 在上傳這個 project 的時候，會
   

  



