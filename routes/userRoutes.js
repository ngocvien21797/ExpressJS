// userRoutes.js
const express = require('express');
const router = express.Router();

// Giả sử bạn có một mô hình User trong MongoDB hoặc một hệ quản trị cơ sở dữ liệu khác
const User = require('../models/User');

// Route tìm kiếm người dùng
router.get('/search', async (req, res) => {
    const name = req.query.name;
    try {
        // Tìm người dùng trong cơ sở dữ liệu
        const user = await User.findOne({ username: name });

        if (user) {
            res.render('searchUser', { user });
        } else {
            res.render('searchUser', { error: 'Không tìm thấy người dùng với tên này.' });
        }
    } catch (error) {
        console.log(error);
        res.render('searchUser', { error: 'Đã xảy ra lỗi khi tìm kiếm.' });
    }
});

module.exports = router;
