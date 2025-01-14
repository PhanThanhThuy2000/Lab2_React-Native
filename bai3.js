// Khởi tạo 3 promise như đề bài
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject('Error: some bug');
        resolve('bar');
    }, 2000);
}).catch(function (err) {
    console.log(err)
});

const getList = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            throw new Error('Fetch failed');
        });
};

// ✅ Yêu cầu 1: Sử dụng Promise.all
Promise.all([firstPromise, secondPromise, getList()])
    .then(results => {
        console.log('Tất cả promise đã hoàn thành:', results);
    })
    .catch(error => {
        console.log('Có lỗi xảy ra:', error);
    });

// ✅ Yêu cầu 2: Sử dụng Promise.allSettled
// Promise.allSettled([firstPromise, secondPromise, getList()])
//     .then(results => {
//         results.forEach((result, index) => {
//             if (result.status === 'fulfilled') {
//                 console.log(`Promise ${index + 1} thành công:`, result.value);
//             } else {
//                 console.log(`Promise ${index + 1} thất bại:`, result.reason);
//             }
//         });
//     })
//     .finally(() => {
//         console.log('Tất cả promise đã kết thúc!');
//     });
