# NOTLAR
 
## Gün-1

  - **pages** klasörü özel bir klasör, routing işlemi bu klasor içerisine yapılıyor.
  - sayfalar *static* ve *dynamic* render edilebiliyor
  - aşağıdaki ozel fonksiyonlar ile render yapısı yönetiliyor
    - `getStaticProps` 
    - `getStaticPaths`
    - `getServerSideProps`

typescript e çevirme
  - `tsconfig.json` dosyasını root ta oluşturuyoruz
  - `yarn add --dev typescript @types/react @types/node` kütüphaneleri yükleniyor
  - `js` dosyaları `tsx` e çevriliyor
  - `yarn run dev` komutu ile nextjs *tsconfig* klasörünün içerisini dolduruyor 
  
[*kaynak*](https://nextjs.org/docs/basic-features/pages)


## Gün-2

  - `getStaticPaths` ve `getStaticProps` static html dosyaları oluşturulurken kullanılıyor.
  - `getStaticPaths` de geriye `fallback:false` dönerse, static sayfalar export/build anında hazırlanır `true` dönerse export anında  hazırlanmaz, ilk istekte **static** html sayfa hazırlanır, sonraki isteklere bu **static** sayfa gönderilir.
  -  `fallback:true` yüksek miktarda statik sayfanın hazırlanacağı zaman kullanılması mantıklıdır.
  -  `getServerSideProps` fonksiyonu içindeki kodlar server da her request te çalışır. Build işlemi sırasında çalışmaz.
  -  Her istekte veri tabanından çekilecek bilgilerin isteği client-side da yapılmalıdır. Bunun için `SWR` adındaki hooks kütüphanesi tavsiye ediliyor. Bu istek page fonksiyonu içerisinde yapılıyor.
  - klasör isimler `[]` içerisinde yazılarak dinamik hale getirilebilir.
  - klasör veya dosya adında `[...slug]` ifadesi kullanılırsa, `params` içerinden routePath teki tüm paramatreler `const [postId, commentId] = query.slug as string[]` şeklinde alınabilir.

[*kaynak*](https://nextjs.org/docs/basic-features/data-fetching)


#### Komutlar
* `yarn run dev`
* `npx next build && npx next export`
* `prettier --write "**/*.html"`


#### Faydalı linkler
* [nextjs offical docs](https://nextjs.org/docs/getting-started)
* [markdown guide](https://guides.github.com/features/mastering-markdown/)
  