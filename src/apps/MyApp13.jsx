const a = "hello";
const b = 315;
const c = "world";
const f = "bye";

// export { a };
// export { b };
export { a, b, f }; // named export

export default c; // default export (unnamed)
// default export는 하나만 존재 가능.
// 하나만 존재하기에 이름이 의미가 없어서 import받을 떄는 아무 이름으로 받을 수 있음(c)가 아닌 (zx)로 받음
