const User = require('../models/User'); // Import model User

// Tìm kiếm người dùng theo username
const searchUserByName = async (req, res) => {
    const { name } = req.query; // Lấy 'name' từ query, vì form gửi 'name' (trường input)

    console.log('Tìm kiếm với tên người dùng: ', name);  // Kiểm tra đầu vào từ form

    try {
        // Sử dụng phương thức findOne để tìm người dùng theo tên
        const user = await User.findOne({ username: name });

        if (user) {
            return res.render('searchUser', { user });  // Render thông tin người dùng nếu tìm thấy
        } else {
            return res.render('searchUser', { error: 'Không thấy người dùng với tên: ' + name });
        }
    } catch (err) {
        console.error(err);  // Log lỗi nếu có
        res.status(500).send('Lỗi server: ' + err.message);
    }
};

module.exports = { searchUserByName };
