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

