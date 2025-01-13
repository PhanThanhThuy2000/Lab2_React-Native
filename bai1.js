const class1 = [
    {
        mssv: 'PS0000',
        name: 'Nguyen Van A',
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: 'pass',
    },
    {
        mssv: 'PS0001',
        name: 'Nguyen Van B',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'pass',
    }
];
const class2 = [ {
        mssv: 'PS0002',
        name: 'Nguyen Van C',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'failed',
    }, {
        mssv: 'PS0003',
        name: 'Nguyen Van D',
        avgPoint: 10,
        avgTraningPoint: 10,
        status: 'pass',
    },{
        mssv: 'PS0004',
        name: 'Nguyen Van E',
        avgPoint: 10,
        avgTraningPoint: 2,
        status: 'pass',
    },
]

const allStudent = class1.concat(class2);
const allStudent1 = allStudent.filter(student => student?.status !== 'failed')

// Sắp xếp danh sách theo avgPoint giảm dần
// Sắp xếp theo avgPoint giảm dần
const studentAvgPoint = [...allStudent1].sort((a, b) => b.avgPoint - a.avgPoint);

// Sắp xếp theo avgTraningPoint giảm dần
const studentAvgTraningPoint = [...allStudent1].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

// Lấy thông tin sinh viên có điểm cao nhất (Ong vàng)
const ongVang = studentAvgPoint[0];

// In ra danh sách đã sắp xếp và thông tin Ong vàng
console.log('Danh sách sinh viên đã sắp xếp theo điểm trung bình giam dần:', studentAvgPoint);
console.log('Danh sách sinh viên đã sắp xếp theo điểm đào tạo giam dần:', studentAvgTraningPoint);
console.log('Thông tin Ong vàng:', ongVang);


