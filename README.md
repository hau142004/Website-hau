Công nghệ sử dụng 
✔ Frontend: Reactjs + Redux. HTML/CSS-scss/Bootstrap4 (reactrap)
✔ Backend: Node.js (Express) + MySql (Sequelize)

🐱‍🏍Các câu lệnh mình sử dụng trong video này: (lưu ý sử dụng Node.js Vesion 14.7)
👉 npm install --save body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1

👉 npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10 
@babel/node@7.12.10 nodemon@2.0.7

👍 Chạy project === câu lệnh này:  npm start
1. Cài đặt các thư viện: sequlize-cli, sequelize và mysql2
npm install --save-dev sequelize-cli@6.2.0
npm install --save mysql2@2.2.5
npm install --save sequelize@6.6.2

👉: Tạo migrations:
npx sequelize-cli db:migrate

👉. Tạo Seeder: npx sequelize-cli seed:generate --name demo-user

🐱‍🚀 Tài liệu tham khảo sử dụng trong:
https://sequelize.org/master/manual/m...
https://mherman.org/blog/node-postgre...
