function kdvhesaplamak(para, kdvoranı) {
  const kdvsayısı = para * (kdvoranı / 100);
  const toplampara = para + kdvsayısı;
  return {
    kdvsayısı: kdvsayısı,
    toplampara: toplampara,
  };
}

const ürünsayısı = 100;
const kdvoranı = 10;

const sonuc = kdvhesaplamak(ürünsayısı, kdvoranı);
console.log(`Ürün fiyat${ürünsayısı} TL`);
console.log(`Kdv Tutarı:${result.kdvsayısı.toFixed(2)} TL`);
console.log(`Toplam Fiyat${result.toplampara.toFixed(2)}TL`);
