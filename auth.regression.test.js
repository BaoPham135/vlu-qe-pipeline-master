const login = require('./auth');

describe('Regression Test - Đăng nhập', () => {
  test('Sai mật khẩu → trả về false', () => {
    expect(login('admin', 'saipass')).toBe(false);
  });

  test('Username rỗng → trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng → trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Username và password đều rỗng → trả về false', () => {
    expect(login('', '')).toBe(false);
  });

  test('Username hoặc password là null/undefined → trả về false', () => {
    expect(login(null, '123')).toBe(false);
    expect(login('admin', null)).toBe(false);
    expect(login(undefined, undefined)).toBe(false);
  });

  test('Username không tồn tại → trả về false', () => {
    expect(login('khong_ton_tai', '123')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt nhưng không đúng → trả về false', () => {
    expect(login('admin', '123!@#$%^&*()')).toBe(false);
  });

  test('Tài khoản bị khóa → trả về false dù đúng mật khẩu', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('Phân biệt chữ hoa/chữ thường trong username → trả về false', () => {
    expect(login('Admin', '123')).toBe(false);
  });

  test('Phân biệt chữ hoa/chữ thường trong password → trả về false', () => {
    expect(login('admin', '123 ')).toBe(false);
  });
});
