const calcFare = (distanceKm) => {
  // ตรวจสอบค่าที่ไม่ถูกต้อง
  if (typeof distanceKm !== "number" || Number.isNaN(distanceKm) || distanceKm < 0) {
    return 0;
  }

  // เศษของกิโลเมตรปัดขึ้น
  const roundedKm = Math.ceil(distanceKm);

  // 2 กม.แรก 10 บาท
  if (roundedKm <= 2) {
    return 10;
  }

  // กม.ถัดไปคิด 2 บาท/กม.
  const extraKm = roundedKm - 2;
  return 10 + extraKm * 2;
};

console.log("1.5 =>", calcFare(1.5));
console.log("2 =>", calcFare(2));
console.log("7.2 =>", calcFare(7.2));