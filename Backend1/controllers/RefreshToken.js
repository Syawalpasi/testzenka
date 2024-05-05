import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken"; // Import JWT library

// Fungsi untuk menghasilkan token akses baru berdasarkan token refresh
export const refreshToken = async (req, res) => {
    try {
        // Ambil token refresh dari cookie
        const refreshToken = req.cookies.refreshToken;

        // Jika tidak ada token refresh, kirim status 401 Unauthorized
        if (!refreshToken) {
            console.log('No refresh token found');
            return res.sendStatus(401);
        }

        // Temukan pengguna berdasarkan token refresh di database
        const user = await Users.findOne({
            where: {
                refresh_token: refreshToken
            }
        });

        // Jika pengguna tidak ditemukan, kirim status 403 Forbidden
        if (!user) {
            console.log('User not found with provided refresh token');
            return res.sendStatus(403);
        }

        // Verifikasi token refresh menggunakan rahasia yang sesuai
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log('Refresh token verification failed:', err);
                return res.sendStatus(403);
            }

            // Periksa apakah ID pengguna yang didekodekan cocok dengan ID pengguna dari database
            if (decoded.userId !== user.id) {
                console.log('User ID mismatch');
                return res.sendStatus(403);
            }

            // Buat token akses baru
            const accessToken = jwt.sign(
                {
                    userId: user.id,
                    name: user.name,
                    email: user.email
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' } // Waktu kedaluwarsa token akses
            );

            // Kirim token akses baru ke klien
            res.json({ accessToken });
        });
    } catch (error) {
        // Log kesalahan dan kirim status 500 Internal Server Error
        console.log('Error refreshing token:', error);
        return res.sendStatus(500);
    }
};
