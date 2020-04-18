/**
 * Enum di TypeScript
 * ------------------
 * 
 * Seperti halnya Boolean (true, false) di JavaScript, di TypeScript value yang sama bisa di
 * buat dengan bantuan Enum.
 * 
 * Default value dari Enum member adalah numerik!
 * 
 * assert.equal(YesNo.Yes, 0) // true
 * assert.equal.(YesNo,1 ) // true
 */
export enum YesNo {
  Yes, // member 1
  No, // member2, trailing comma allows and ignored
}

// Enum dengan Inisialisasi
export enum NoYes {
  No = 1,
  Yes = 2,
}

/**
 * Enum dengan inisialiasi dan jika tidak di inisiailasi 
 * maka akan di auto increment dari nilai sebelumnya
 */ 
export enum Ongko{
  Nol,  // 0
  Siji, // 1
  Songo = 9, // 9
  Sepuluh,  // 10
  Rolas = 12, // 12
  Telulas, // 13
}

