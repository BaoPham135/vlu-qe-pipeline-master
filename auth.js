/**
 * Dữ liệu người dùng giả lập (demo).
 * Trong thực tế, dữ liệu này sẽ được lấy từ database.
 */
const users = {
  admin: { password: '123', locked: false },
  locked_user: { password: '123', locked: true },
  user1: { password: '456', locked: false }, // <-- BỔ SUNG: Tài khoản thường để kiểm thử
};

/**
 * Kiểm tra thông tin đăng nhập.
 * @param {string} username - Tên đăng nhập
 * @param {string} password - Mật khẩu
 * @returns {boolean} true nếu đăng nhập hợp lệ, ngược lại false
 */
function login(username, password) {
  // Không cho phép username hoặc password rỗng/undefined/null
  if (!username || !password) {
    return false;
  }

  // BỔ SUNG: Xử lý loại bỏ khoảng trắng thừa ở đầu/cuối username
  const cleanUsername = typeof username === 'string' ? username.trim() : username;

  const user = users[cleanUsername];

  // Tài khoản không tồn tại
  if (!user) {
    return false;
  }

  // Tài khoản bị khóa
  if (user.locked) {
    return false;
  }

  // So khớp mật khẩu (phân biệt chữ hoa/chữ thường, kể cả ký tự đặc biệt)
  return user.password === password;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = login;
}
