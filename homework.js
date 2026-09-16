// ค่าโดยสารรถ NGV ในมหาวิทยาลัย
// 2 กม. แรก 10 บาท, กม. ถัดไปคิด 2 บาท/กม.
// เศษของกม. ปัดขึ้น / ระยะติดลบหรือไม่ใช่ตัวเลข คืน 0

const calcFare = (distanceKm) => {
  if (typeof distanceKm !== "number" || Number.isNaN(distanceKm) || distanceKm < 0) {
    return 0;
  }

  const roundedKm = Math.ceil(distanceKm);

  if (roundedKm <= 2) {
    return 10;
  }

  const extraKm = roundedKm - 2;
  return 10 + extraKm * 2;
};

// --- ทดสอบ function calcFare ---

const testFare = (distance, expected) => {
  const actual = calcFare(distance);
  const ok = actual === expected;
  console.log(`${ok ? "PASS" : "FAIL"} | calcFare(${distance}) = ${actual} (คาดหวัง ${expected})`);
  return ok;
};

let passCount = 0;
let totalCount = 0;

const run = (testFn) => {
  totalCount++;
  if (testFn()) {
    passCount++;
  }
};

// ขอบเขตและกรณีปกติ
run(() => testFare(1.5, 10));   // ปัดขึ้นเป็น 2 => 10
run(() => testFare(2, 10));     // 2 กม. แรก => 10
run(() => testFare(2.1, 12));   // ปัดขึ้นเป็น 3 => 10 + 1*2
run(() => testFare(7.2, 22));   // ปัดขึ้นเป็น 8 => 10 + 6*2

// ค่าไม่ถูกต้อง
run(() => testFare(0, 10));     // 0 กม. ยังอยู่ภายใน 2 กม. แรก
run(() => testFare(-5, 0));     // ระยะติดลบ => 0
run(() => testFare("3", 0));    // ไม่ใช่ตัวเลข => 0
run(() => testFare(NaN, 0));    // NaN => 0
run(() => testFare(undefined, 0)); // undefined => 0

console.log(`\nผลรวม: ${passCount}/${totalCount} ผ่าน`);