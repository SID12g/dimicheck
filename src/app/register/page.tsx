export default function Register() {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div>
      <form method="POST" action="/api/auth/signup">
        <select name="number" defaultValue={""}>
          <option value="" disabled hidden>
            번호
          </option>
          {numbers.map((a, i) => (
            <option value={a} key={i}>
              {a}번
            </option>
          ))}
        </select>
        <input name="password" type="password" placeholder="비번" />
        <button type="submit">가입</button>
      </form>
    </div>
  );
}
