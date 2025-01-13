const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: 'null;', name: 'null' },
    { code: 'null;', name: '' },
];

// Hàm chuyển đổi từ mảng sang đối tượng
const ArrayToObject = ({ array = [], keyId = '' }) =>
    Object.fromEntries(
        (array || []).map(item => [keyId ? item[keyId] : item, item])
    );

// Ví dụ sử dụng hàm chuyển đổi
const result = ArrayToObject({ array: oldData, keyId: 'code' });

// Hàm lọc đối tượng để loại bỏ dữ liệu không hợp lệ
const filterObject = obj => {
    // Lặp qua các key trong đối tượng
    Object.keys(obj).forEach(key => {
        const item = obj[key];
        // Kiểm tra và xóa phần tử nếu không hợp lệ
        if (!item.code || !item.name || item.code === 'null;' || !item.name.trim()) {
            delete obj[key]; // Xóa phần tử không hợp lệ
        }
    });
    return obj;
};

// Áp dụng hàm lọc
const filteredResult = filterObject(result);

// In kết quả sau khi lọc
console.log(filteredResult);
